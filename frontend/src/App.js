import React from 'react'
import data from './data'
import Product from './components/Product'
const App = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="index.html" className=" brand">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html"> Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}/>
          ))}
        </div>
      </main>
      <footer className=" row center">All rights reserverd</footer>
    </div>
  );
}

export default App
