import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const selectedItem = items.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{selectedItem.name}</h1>
      <p>{selectedItem.description}</p>
    </div>
  );
};

export default ItemDetail;
