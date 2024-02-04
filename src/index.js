import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Footer from './Footer/Footer';
import Appi from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './navbar/Navbar';
// import TimelineSection from './Swiper/Swiper';
import LoaderComponent from './Intro/Intro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Appi /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
