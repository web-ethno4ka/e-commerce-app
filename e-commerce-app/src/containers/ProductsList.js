import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../actions/productActions';
import ProductComponent from './ProductComponent';

export default function ProductsList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log('Error', err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}
