import React from 'react'
import {Switch,Route,Link} from "react-router-dom";
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
const App = () => {
  return (
    <Switch>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className=" brand">
              amazonia
            </Link>
          </div>
          <div>
            <a href="cart.html"> Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomePage}/>
          <Route path="/product/:id" component={ProductPage}/>
        </main>
        <footer className=" row center">All rights reserverd</footer>
      </div>
    </Switch>
  );
}

export default App
