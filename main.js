import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUVXAZ4wI4SO4E9sDeHrKFXbyVYPqt0oo",
  authDomain: "vue-todo-f699c.firebaseapp.com",
  databaseURL: "https://vue-todo-f699c.firebaseio.com",
  projectId: "vue-todo-f699c",
  storageBucket: "vue-todo-f699c.appspot.com",
  messagingSenderId: "840447359989",
  appId: "1:840447359989:web:cb8c912d283a9239d6bebc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
