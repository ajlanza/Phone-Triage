import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BatteryProblems from './BatteryProblems';

test('BatteryProblems renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><BatteryProblems /></BrowserRouter>, div);
});