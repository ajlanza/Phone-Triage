import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Solutions from './Solutions';

test('Solutions renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Solutions /></BrowserRouter>, div);
});