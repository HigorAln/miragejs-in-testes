import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(data => setProducts(data.data.products))
      .catch(err => console.log(err));
      
  }, [])
  return (
    <div data-testid="container">
        <h1>Hello world</h1>
    </div>
  )
}

export default Home
