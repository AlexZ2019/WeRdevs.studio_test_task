import React from 'react';
import style from "./style.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Content from "./Components/Content/Content";
import CalendarMain from "./Components/Calendar/CalendarMain";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path="/" render={() => <Content/>}/>
      <Route path="/calendar" render={() => <CalendarMain/>}/>
    </div>
  );
}

export default App;
