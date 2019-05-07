import firebase from 'firebase';
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import firebaseConfig from './config/firebase';
import router from './router';
import store from './store';
export const db = firebase.initializeApp(firebaseConfig).firestore();

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
