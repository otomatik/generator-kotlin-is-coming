package <%= appPackage %>;

import android.test.ApplicationTestCase

/**
 * [Testing Fundamentals](http://d.android.com/tools/testing/testing_android.html)
 */
class ApplicationTest : ApplicationTestCase<App>(App::class.java)
