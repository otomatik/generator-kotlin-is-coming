'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

/**
 * Functionally the same as directory however applies templating if file name begins with an underscore (_).
 *
 * @param source
 * @param destination
 */
function templateDirectory(source, destination) {
  var root = this.isPathAbsolute(source) ? source : path.join(this.sourceRoot(), source);
  var files = this.expandFiles('**', { dot: true, cwd: root });

  for (var i = 0; i < files.length; i++) {
    var f = files[i];
    var src = path.join(root, f);
    if (path.basename(f).indexOf('_') == 0) {
      var dest = path.join(destination, path.dirname(f), path.basename(f).replace(/^_/, ''));
      this.template(src, dest);
    }
    else {
      var dest = path.join(destination, f);
      this.copy(src, dest);
    }
  }
}

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.templateDirectory = templateDirectory.bind(this);
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome! Brace yourself, kotlin is comming!'
    ));

    var prompts = [{
      name: 'name',
      message: 'What are you calling your app?',
      store: true,
      default : this.appname // Default to current folder name
    },
    {
      name: 'package',
      message: 'What package will you be publishing the app under?',
      store: true
    },
    {
      name: 'targetSdk',
      message: 'What Android SDK will you be targeting?',
      store: true,
      default: 21  // Android 5.0 (Lollipop)
    },
    {
      name: 'minSdk',
      message: 'What is the minimum Android SDK you wish to support?',
      store: true,
      default: 14  // Android 4.0 (Ice Cream Sandwich)
    },
    {
      name: 'generateStubs',
      message: 'Do you want to make kapt generates stubs (needed for dagger for instance)?',
      store: true,
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.name;
      this.appPackage = props.package;
      this.androidTargetSdkVersion = props.targetSdk;
      this.androidMinSdkVersion = props.minSdk;
      this.kaptGenerateStubs = props.generateStubs;

      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      this.copy('gitignore', '.gitignore');
      this.copy('build.gradle', 'build.gradle');
      this.copy('gradle.properties', 'gradle.properties');
      this.copy('settings.gradle', 'settings.gradle');
      this.directory('gradle', 'gradle');
    },

    app: function () {
      var packageDir = this.appPackage.replace(/\./g, '/');

      this.mkdir('app');
      this.copy('app/gitignore', 'app/.gitignore');
      this.copy('app/proguard-rules.pro', 'app/proguard-rules.pro');
      this.template('app/build.gradle', 'app/build.gradle');

      this.mkdir('app/src/androidTest/kotlin/' + packageDir);
      this.templateDirectory('app/src/androidTest/kotlin', 'app/src/androidTest/kotlin/' + packageDir);

      this.mkdir('app/src/test/kotlin/' + packageDir);
      this.templateDirectory('app/src/test/kotlin', 'app/src/test/kotlin/' + packageDir);

      this.mkdir('app/src/main/assets');
      this.mkdir('app/src/main/kotlin/' + packageDir);
      this.directory('app/src/main/assets', 'app/src/main/assets');
      this.template('app/src/main/AndroidManifest.xml', 'app/src/main/AndroidManifest.xml');
      this.templateDirectory('app/src/main/kotlin', 'app/src/main/kotlin/' + packageDir);
      this.templateDirectory('app/src/main/res', 'app/src/main/res');
    }
  },
  end: function() {
    this.log(yosay(
      'Thanks for using this generator! If you found it useful follow this link ' + chalk.green('https://goo.gl/U8eA0o') + ' to tweet and spread the word.'
    ));
  }
});
