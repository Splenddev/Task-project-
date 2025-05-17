import React from 'react';
import './PreviewProduct.css';
import { FaPen, FaPlus } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';

const PreviewProduct = ({
  product = { name: '', description: '', image: '' },
  closeHandler,
  clearData,
}) => {
  return (
    <div className="preview-product">
      <div
        className="overlay"
        onClick={() => closeHandler(false)}></div>
      <div className="preview-product-data-wrap">
        <div className="preview-product-data">
          <div className="data-header">
            <h3>Preview Product</h3>
          </div>
          <div className="data-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="text">
            <span>Name</span>
            {product.name}
          </div>
          <div className="text">
            <span>description</span>
            {product.description}
          </div>
          <hr />
          <div className="action">
            <p>Are you sure of this product.</p>
            <div className="action-btns">
              <button onClick={() => closeHandler(false)}>
                <FaPen />
                Edit
              </button>
              <button onClick={clearData}>
                <FaTrashCan />
                Delete
              </button>
              <button
                onClick={() => {
                  alert('Product added');
                  clearData();
                }}>
                <FaPlus />
                Yes, Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewProduct;
