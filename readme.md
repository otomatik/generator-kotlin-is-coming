# Kotlin is coming : Yeoman generator for Android application in Kotlin
"Kotlin is coming" is a [Yeoman](http://yeoman.io) generator to scaffold an Android application Kotlin ready.

The aim of this generator is to save time when starting a project by automating the configuration of Kotlin.

## Installation
### Install Yeoman

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive.

```bash
npm install -g yo
```

### Install the generator

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in.

To install generator-kotlin-is-coming from npm, run:

```bash
npm install -g generator-kotlin-is-coming
```

## Usage
Create the folder for your project and move into:
```bash
mkdir my-awesome-kotlin-app && cd $_
```
Then initiate the generator:

```bash
yo kotlin-is-coming
```

This will create an Android app skeleton with Kotlin configured.

## History
v1.0: basic Kotlin configuration

## Road map
* Adding support for Anko

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Make sure all tests still pass `mocha test/test-app.js`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

## Spread the word (and love)
If you found this generator useful you can tweet just by clicking [here](https://goo.gl/lsIE8D)!

## Credits
Inspired by the [generator-android-square-stack](https://raw.githubusercontent.com/kuhnza/generator-android-square-stack)
& made with the [yeoman generator-generator](https://github.com/yeoman/generator-generator).

![brace-yourself](brace-yourself.jpeg)

## License
```
The MIT License (MIT)

Copyright (c) 2016 Thomas Dalous

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
