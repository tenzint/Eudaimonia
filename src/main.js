// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDyACblP6lzZlI9dwCpgtm2p1aEvlD5Sss",
  authDomain: "eudaimonia-society.firebaseapp.com",
  databaseURL: "https://eudaimonia-society.firebaseio.com",
  projectId: "eudaimonia-society",
  storageBucket: "eudaimonia-society.appspot.com",
  messagingSenderId: "1092420348430"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
	if (!app) {
		new Vue({
		  el: '#app',
		  router,
		  template: '<App/>',
		  components: { App }
		})
	}
});
