import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './state/store/store';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8822oy3p6oPR3PQT2sRvBrlEb6StD68",
  authDomain: "appquynh123.firebaseapp.com",
  projectId: "appquynh123",
  storageBucket: "appquynh123.appspot.com",
  messagingSenderId: "369825913502",
  appId: "1:369825913502:web:f8dbc6c1e35d803b85b98f",
  measurementId: "G-M0TVPWY2TL"
};
// git remote add origin https://github.com/donhuvy/firebasetest.git
// git branch -M main
// git push -u origin main
// git remote add origin https://github.com/donhuvy/firebasetest.git
// git branch -M main
// git push -u origin main

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  <React.StrictMode>
    <Store><App /></Store>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();