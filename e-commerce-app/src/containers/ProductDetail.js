import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../actions/productActions';
import axios from 'axios';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { description, title, category, price, image } = product;
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log('Error', err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetails();
    } else {
      return null;
    }
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href="#">
                    $ {price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated orange button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
