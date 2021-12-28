import React from 'react'
import './App.css';

const styles = {
	h1: {
		color: 'red',
		fontSize: '40px'
	}
}

function App() {
  return (
    <div style={styles.h1} className="App">
      <h1>App component</h1>
    </ div>
  );
}

export default App;
