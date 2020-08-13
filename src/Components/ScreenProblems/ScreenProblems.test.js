import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScreenProblems from './ScreenProblems';

test('ScreenProblems renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ScreenProblems /></BrowserRouter>, div);
});