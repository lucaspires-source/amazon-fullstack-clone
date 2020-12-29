import React,{useEffect} from "react";
import Product from '../components/Product'
import Loading from '../components/Loading'
import Message from '../components/Message'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(()=>{
    dispatch(listProducts());
  }, [dispatch]);
    
  return (
    <div>
      {loading ? (
        <Loading/>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    )};
  </div>
  )};

export default HomePage;
