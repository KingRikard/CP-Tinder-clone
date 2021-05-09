import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/chat">
            <Header backButton="/" />
                <h1>Let's CHAT PATH an App Boiiis!</h1>  
            </Route>
            <Route path="/">
            <Header />
              <TinderCards />
              <SwipeButtons />
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