import React from 'react';

import Dashboard from './Dashboard/Dashboard';
import Store from '../Store';
import styles from './app.css';


function App() {
  return (
    <div className={styles.container}>
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
