import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TriageContextProvider } from './Components/TriageContext';
import './index.css';
import App from './Components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <TriageContextProvider>
      <App />
    </TriageContextProvider>
  </BrowserRouter>, 
document.getElementById('root'));