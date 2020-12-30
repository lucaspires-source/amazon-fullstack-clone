import React from 'react'
import {Switch,Route,Link} from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import {useSelector} from 'react-redux'
const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
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
          <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomePage}/>
          <Route path="/product/:id" component={ProductPage}/>
          <Route path="/cart/:id" component={CartPage}/>
        </main>
        <footer className=" row center">All rights reserverd</footer>
      </div>
    </Switch>
  );
}

export default App
