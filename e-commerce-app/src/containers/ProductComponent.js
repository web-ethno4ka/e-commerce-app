import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <>
      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div
            className="four wide stackable column"
            // style={{ display: 'flex', alignItems: 'stretch' }}
            key={id}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
