import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCloudUploadAlt, FaPlus } from 'react-icons/fa';
import './Add.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import PreviewProduct from '../PreviewProduct/PreviewProduct';
const Add = () => {
  const [productType, setProductType] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(false);
  const [isEmpty, setIsEmpty] = useState({
    name: true,
    description: true,
    image: true,
    message: false,
  });
  const [data, setData] = useState({
    name: '',
    description: '',
    image: null,
  });
  const validate = () => {
    if (data.name.length > 0) {
      setIsEmpty((prev) => ({ ...prev, name: false }));
    } else {
      setIsEmpty((prev) => ({ ...prev, name: true }));
    }
    if (data.description.length > 0) {
      setIsEmpty((prev) => ({ ...prev, description: false }));
    } else {
      setIsEmpty((prev) => ({ ...prev, description: true }));
    }
    if (data.image) {
      setIsEmpty((prev) => ({ ...prev, image: false }));
    } else {
      setIsEmpty((prev) => ({ ...prev, image: true }));
    }
  };
  useEffect(() => {
    validate();
  }, [data]);

  return (
    <div className="add">
      {preview && (
        <PreviewProduct
          closeHandler={setPreview}
          product={data}
          clearData={() => {
            setPreview(false);
            setData({ name: '', description: '', image: null });
          }}
        />
      )}
      <div className="add-first">
        <h2>Add Product</h2>
        <div className="product-type">
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}>
            <option value="">Select Product Type</option>
            <option value="Male Fashion">Male Fashion</option>
            <option value="Female Fashion">Female Fashion</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>
        <div className="add-main-image">
          <div className="main-image-header">
            <p>Upload Design Image</p>
            <div className="upload-btns">
              <label>
                <FaPlus />
                <span>Upload</span>
                <input
                  onChange={(e) => {
                    const file = e.target.files[0];
                    file && setImage(e.target.files[0]);
                    setData((prev) => ({
                      ...prev,
                      image: URL.createObjectURL(file),
                    }));
                  }}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </label>
              <button
                onClick={() => {
                  setImage(null);
                  setData((prev) => ({
                    ...prev,
                    image: null,
                  }));
                }}>
                Clear Image
              </button>
            </div>
          </div>
          <div className="main-image-preview">
            {data.image && image ? (
              <img
                src={data.image}
                alt="product-image"
              />
            ) : (
              <div>
                <FaCloudUploadAlt className="icon-upload" />
                <p>Click upload to add an image. </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="add-second">
        <h3>Product Info</h3>
        <ProductInfo
          data={data}
          setData={setData}
          type={'name'}
          isEmpty={isEmpty.name}
        />
        <ProductInfo
          data={data}
          setData={setData}
          type={'description'}
          isEmpty={isEmpty.description}
        />

        <div className="add-buttons">
          {isEmpty.message && (
            <div className="is-empty">
              <p>Add product name, description and image.</p>
              <button
                onClick={() =>
                  setIsEmpty((prev) => ({ ...prev, message: false }))
                }>
                OK
              </button>
            </div>
          )}
          <button>
            <FaArrowLeft /> Cancel
          </button>
          <button
            onClick={() => {
              if (isEmpty.name || isEmpty.description || isEmpty.image) {
                setIsEmpty((prev) => ({ ...prev, message: !prev.message }));
                return;
              }
              setPreview(true);
            }}>
            Preview Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
