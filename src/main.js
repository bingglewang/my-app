import Vue from 'vue'
import App from './App'
import {post} from './utils/api'
import 'mp-weui/lib/style.css'
import './weui.css'

import mpvueToastRegistry from 'mptoast/registry'
mpvueToastRegistry(Vue)

Vue.prototype.$post = post

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
