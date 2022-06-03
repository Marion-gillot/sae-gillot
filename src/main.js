import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const app = createApp(App)
  const firebaseConfig = {
    apiKey: "AIzaSyB4eSJog62GJdnK_u8yhtR6fT61nNiv21o",
    authDomain: "sae203-marion-gillot.firebaseapp.com",
    projectId: "sae203-marion-gillot",
    storageBucket: "sae203-marion-gillot.appspot.com",
    messagingSenderId: "827131448601",
    appId: "1:827131448601:web:d6d56cdd2511887012c988"
  };

  const appFirebase = initializeApp(firebaseConfig);
app.use(router)

app.mount('#app')
