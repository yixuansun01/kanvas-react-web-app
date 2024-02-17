import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Labs from './Labs';
import Labs2 from './Labs/labs';
import Kanbas from './Kanbas';
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
        {/* <h1>Hello World!</h1>
        <Kanbas/>
        <HelloWorld/>
        <Labs/> */}

        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
