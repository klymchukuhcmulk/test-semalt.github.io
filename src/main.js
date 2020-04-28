import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faInfoCircle, faChevronUp, faCalendarAlt, faExternalLinkAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import 'normalize.css'
library.add(faTrash, faInfoCircle, faChevronUp, faCalendarAlt, faExternalLinkAlt, faCheckSquare)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
