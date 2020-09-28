import React from 'react';
import style from "./style.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Content from "./Components/Content/Content";
import Calendar from "./Components/Calendar/Calendar";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route path="/" render={() => <Content/>}/>
      <Route path="/calendar" render={() => <Calendar/>}/>
    </div>
  );
}

export default App;
