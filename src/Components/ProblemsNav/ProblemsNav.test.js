import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProblemsNav from './ProblemsNav';

test('Problems renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ProblemsNav /></BrowserRouter>, div);
});