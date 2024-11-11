import './App.css'


import React from 'react'
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="container text-center mt-5 ">
      <h1 className="text-center">Counter App</h1>
      <div style={{minHeight:'70vh'}} className="d-flex justify-content-center align-items-center mt-4">
        <Counter />
      </div>
    </div>
  )
}

export default App



//  npm install react-redux
// npm install @reduxjs/toolkit
