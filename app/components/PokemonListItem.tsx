"use client";
import React, { useState } from "react";

const PokemonListItem = ({ listItem }: any) => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClick = (getItem: any) => {
    console.log(getItem);
  };

  return (
    <>
      <div className="category-box" onClick={() => handleClick(listItem)}>
        <img src={listItem.sprites.front_default} alt={listItem.name} />
        <div className="content">
          <h3>{listItem.name}</h3>
          <p>description</p>
        </div>
      </div>
      {modalOpen && (
        <>
          <div className="backdrop"></div>
          <div className="PDmodal">
            <div className="modalContent">chekcing</div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonListItem;
