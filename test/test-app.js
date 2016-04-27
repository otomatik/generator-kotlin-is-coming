'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('kotlin-is-coming:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withPrompts({
        name: 'test',
        package: 'org.example.testapp',
        targetSdk: '21',
        minSdk: '14'
      })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      '.gitignore',
      'build.gradle',
      'gradle.properties',
      'settings.gradle'
    ]);
  });

  it('creates core app files', function () {
    assert.file([
      'app/.gitignore',
      'app/build.gradle',
      'app/proguard-rules.pro',
      'app/src/main/AndroidManifest.xml'
    ]);
  });

  it('copies androidTest and test files', function () {
    assert.file([
      'app/src/androidTest/kotlin/org/example/testapp/ApplicationTest.kt',
      'app/src/test/kotlin/org/example/testapp/ExampleUnitTest.kt'
    ]);
  });
});
