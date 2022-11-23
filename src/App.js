import React from 'react';
import Main from './Main'
import Landing from './Landing';
import './App.css';
import { Route, Switch } from "react-router-dom";
function App() {

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Landing} />
        <div className='css'>
          <Route exact path="/Main" component={Main} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
