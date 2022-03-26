import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <>
      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div className="four wide stackable column" key={id}>
            <div className="ui link cards">
              <div className="card">
                <div
                  className="image"
                  style={{
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '1rem',
                  }}>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      height: '120px',
                      maxHeight: '200px',
                      width: 'auto',
                      maxWidth: '200px',
                    }}
                  />
                </div>
                <div
                  className="content"
                  style={{
                    height: '10rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <div className="header" style={{ fontSize: '14px' }}>
                    {title}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0',
                    }}>
                    <div className="meta price" style={{ alignSelf: 'flex-end' }}>
                      $ {price}
                    </div>
                    <div className="meta" style={{ alignSelf: 'flex-end' }}>
                      {category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
