import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Problems from './Problems';

test('Problems renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Problems /></BrowserRouter>, div);
});