import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Create from './components/AddProduct.vue'
import Edit from './components/EditDowntime.vue'
import Index from './components/DowntimeList.vue'
import IndexChopp from './components/DowntimeListChopp.vue'
import IndexPasta from './components/DowntimeListPasta.vue'
import IndexAlmond from './components/DowntimeListAlmond.vue'
import IndexRMP from './components/DowntimeListRMP.vue'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  // {
  //   name: 'Create',
  //   path: '/create',
  //   component: Create
  // },
  {
    name: 'Edit',
    path: '/downtimes/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {name: 'Chopp', path: '/chopp', component: IndexChopp},
  {name: 'Pasta', path: '/pasta', component: IndexPasta},
  {name: 'Almond', path: '/almond', component: IndexAlmond},
  {name: 'RMP', path: '/raw-material', component: IndexRMP},
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')