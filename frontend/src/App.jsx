import { useEffect, useState, useRef } from "react";
import { getAll, create } from "./services.js";
import "./App.css";

import InventoryForm from "./components/InventoryForm.jsx";
import Togglable from "./components/Togglable.jsx";

const App = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    getAll()
      .then((items) => {
        console.log(items);
        setInventoryItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const inventoryFormRef = useRef();

  const addItem = (inventoryObject) => {
    inventoryFormRef.current.toggleVisibility();
    create(inventoryObject)
      .then((returnedInventoryItem) =>
        setInventoryItems(inventoryItems.concat(returnedInventoryItem))
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="top-section">
        <h1 className="title">Inventory Items</h1>

        <Togglable buttonLabel="Add an Item" ref={inventoryFormRef}>
          <InventoryForm createAnItem={addItem} />
        </Togglable>
      </div>
      {inventoryItems.map((item) => (
        <div className="item" key={item.item_id}>
          <div className="item-right">
            <div className="item-title">{item.name}</div>
            <div className="item-quantity">Quantity: {item.quantity}</div>
          </div>
          <div className="item-left">
            <button className="button">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
