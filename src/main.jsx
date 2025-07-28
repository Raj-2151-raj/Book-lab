// src/main.jsx
// This is the entry point of the React application where the main component is rendered.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';             
import App from './App';
import store from './redux/store';                 
import './index.css';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>                       
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
  
);
