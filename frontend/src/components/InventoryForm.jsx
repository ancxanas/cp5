import { useState } from "react";
import PropTypes from "prop-types";
import "./InventoryForm.css";

const InventoryForm = ({ createAnItem }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createAnItem({ name, brand, model, price, quantity });

    setName("");
    setBrand("");
    setModel("");
    setPrice("");
    setQuantity("");
  };

  InventoryForm.propTypes = {
    createAnItem: PropTypes.func.isRequired,
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Name :
          <input
            type="text"
            value={name}
            placeholder="eg: Smartphone"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Brand :
          <input
            type="text"
            value={brand}
            placeholder="eg: Samsung"
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Model :
          <input
            type="text"
            value={model}
            placeholder="eg: XA3"
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price :
          <input
            type="number"
            step="0.01"
            value={price}
            placeholder="eg: 499.99"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Quantity :
          <input
            type="number"
            value={quantity}
            placeholder="eg: 50"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit" className="button submit-button">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default InventoryForm;
