import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Course from './Components/Course';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';



function App() {

  

  return (
    <div className="App">
      <Header></Header>
     
      <Course></Course>
     
    </div>
  );
}

export default App;
