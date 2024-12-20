import React from "react";
import "./productdetail.css";

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <div className="product-info-section">
        <h1 className="heading">Product Details</h1>

        <div className="sub-categories">
          <span className="sub-category">Home</span> &gt; 
          <span className="sub-category">All Products</span> &gt; 
          <span className="sub-category">Product Detail</span>
        </div>

        <div className="product-fields">
          <div className="field">
            <label>Product Name</label>
            <input type="text" className="input" placeholder="Enter product name" />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea className="input" placeholder="Enter product description"></textarea>
          </div>
          <div className="field">
            <label>Category</label>
            <input type="text" className="input" placeholder="Enter category" />
          </div>
          <div className="field">
            <label>Brand Name</label>
            <input type="text" className="input" placeholder="Enter brand name" />
          </div>
          <div className="field-row">
            <div className="field half-width">
              <label>SKU</label>
              <input type="number" className="input" placeholder="Enter SKU" />
            </div>
            <div className="field half-width">
              <label>Stock Quantity</label>
              <input type="text" className="input" placeholder="Enter stock quantity" />
            </div>
          </div>
          <div className="field-row">
            <div className="field half-width">
              <label>Regular Price</label>
              <input type="number" className="input" placeholder="Enter regular price" />
            </div>
            <div className="field half-width">
              <label>Sale Price</label>
              <input type="text" className="input" placeholder="Enter sale price" />
            </div>
          </div>
          <div className="field">
            <label>Tag</label>
            <textarea className="input" placeholder="Enter tag"></textarea>
          </div>
        </div>
      </div>

      <div className="product-gallery-section">
        <h2>Product Gallery</h2>
         <div className="gallery-preview">
          <p>Image Preview</p>
        </div>
         <div className="gallery-box">
          <p>Drag your image here, or</p>
          <button className="browse-button">Browse</button>
          <input type="file" accept=".jpg,.jpeg,.png" className="file-input" />
        </div>
        <div className="thumbnail-download">
          <button className="download-button">PRODUCT THUMBNAIL</button>
        </div>
        <div className="action-buttons">
          <button className="update-button">Update</button>
          <button className="delete-button">Delete</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
