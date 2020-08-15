import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Service from './Service';

test('Service renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Service /></BrowserRouter>, div);
});