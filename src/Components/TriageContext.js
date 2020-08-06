import React from 'react';

const TriageContext = React.createContext({
  problemType: [],
  problems: [],
  solutions: [],
  users: [],
  addUser: () => {},
})

export default TriageContext