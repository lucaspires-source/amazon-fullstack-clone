import React,{useState,useEffect} from "react";
import Product from '../components/Product'
import axios from 'axios'
import Loading from '../components/Loading'
import Message from '../components/Message'
const HomePage = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect (() =>{
    const fecthData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }}
    fecthData()
  },[])
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
