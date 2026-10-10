
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import "./../styles/App.css";

const items = [
  { id: "1", name: "Item 1", description: "Description for Item 1" },
  { id: "2", name: "Item 2", description: "Description for Item 2" },
  { id: "3", name: "Item 3", description: "Description for Item 3" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList items={items} />} />
        <Route path="/items/:id" element={<ItemDetail items={items} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
