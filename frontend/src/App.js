import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SigninPage from "./pages/SigninPage";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "./actions/userAction";


const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

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
            <Link to="/cart/:id">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/cart/:id" component={CartPage} />
        </main>
        <footer className=" row center">All rights reserverd</footer>
      </div>
    </Switch>
  );
};

export default App;
