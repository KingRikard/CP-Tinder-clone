import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route path="/chat">
                <h1>Let's CHAT PATH an App Boiiis!</h1>  
            </Route>
            <Route path="/">
              <TinderCards />
            </Route>
          </Switch>

        </Router>



    </div>
  );
}

export default App;


          {/*   Header */}
          {/*   Tinder Cards */}


          {/*   Buttons below tinder Cards */}


          {/*   Chat Screen  */}
          {/*   Indvidual Chat Screen */}