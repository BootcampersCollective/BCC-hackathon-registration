import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import firebaseApp from './firebase.init';
import router from './router';
import store from './store';

firebaseApp.firestore();

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
