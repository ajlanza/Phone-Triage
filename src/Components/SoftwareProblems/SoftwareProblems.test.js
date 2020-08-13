import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SoftwareProblems from './SoftwareProblems';

test('SoftwareProblems renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SoftwareProblems /></BrowserRouter>, div);
});