import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Header from './components/Header';
import SectionBanner from './components/SectionBanner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
  <HomePage/>
  </React.StrictMode>
);
