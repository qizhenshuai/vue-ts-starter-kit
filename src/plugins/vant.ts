
import { App } from 'vue'
import { Button } from 'vant'

import 'vant/lib/index.css'

export default function loadPlugin(app: App) {
  app.use(Button)
}
