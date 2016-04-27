package <%= appPackage %>;

import android.app.Application
import kotlin.properties.Delegates

class App: Application() {

    override fun onCreate() {
        super.onCreate()
        instance = this
    }

    companion object {
        var instance by Delegates.notNull<App>()
    }

}
