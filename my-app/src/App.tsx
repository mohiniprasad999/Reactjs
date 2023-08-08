import React from 'react';
import './App.css';
import MyComponent from './Interceptor';
import Login from './components/Login';


function App() {

  return (
    <>
      <div className="heading">
        <h1>React Login Form</h1>
      </div>
      <div>
        <Login />
        <MyComponent />
      </div>
    </>
  );
}

export default App;
