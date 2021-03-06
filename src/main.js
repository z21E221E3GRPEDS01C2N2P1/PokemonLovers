import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import firebase from "firebase/app";
import 'firebase/firestore';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faPen, faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import './components/style.css';
import router from './router'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

library.add(faChevronUp)
library.add(faChevronDown)
library.add(faCog)
library.add(faEnvelope)
library.add(faHashtag)
library.add(faUser)
library.add(faBolt)
library.add(faAngleRight)
library.add(faPen)
library.add(faPenFancy)
library.add(faSearch)
library.add(faStar)
library.add(faCoins)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const firebaseConfig = {
  apiKey: "AIzaSyDigjYrc1x-aYIa0cYTKPZwosEZyIV75N0",
  authDomain: "pokemon-lovers-cc3d7.firebaseapp.com",
  projectId: "pokemon-lovers-cc3d7",
  storageBucket: "pokemon-lovers-cc3d7.appspot.com",
  messagingSenderId: "130647182285",
  appId: "1:130647182285:web:b591f67d75efcfad169284"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
