import React from 'react';
import './ProductInfo.css';
const ProductInfo = ({
  type,
  setData,
  data = { name: '', description: '' },
  isEmpty,
}) => {
  return (
    <div className="product">
      <label>{type === 'name' ? 'product name' : type}</label>
      {type === 'name' ? (
        <input
          className={`${isEmpty && 'empty'}`}
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
        />
      ) : (
        <textarea
          className={`${isEmpty && 'empty'}`}
          rows={5}
          value={data.description}
          onChange={(e) =>
            setData((prev) => ({ ...prev, description: e.target.value }))
          }></textarea>
      )}
      <p>Give your product a short and clear {type}</p>
      <p>{isEmpty.toString()}</p>
    </div>
  );
};

export default ProductInfo;
