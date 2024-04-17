"use client";
import Link from "next/link";
import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import Modal from "./Modal";
import { motion } from "framer-motion";

const PokemonList = ({ pokemonData }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any[]>();
  const [filteredCategories, setFilteredCategories] = useState(pokemonData);

  const handleClick = (item: any) => {
    window.scrollTo(0, 0);
    setSelectedItem(item);
    setModalOpen(true);

    <style jsx global>{`
      body {
        overflow: hidden;
      }
    `}</style>;
  };

  const handleModalStatus = (staa: any) => {
    setModalOpen(staa);
  };

  const handleSearchChange = (event: any) => {
    const value = event.target.value;

    // Filter the categories based on the search term
    if (value.trim() !== "") {
      const filtered = pokemonData.filter((cat: any) =>
        cat.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      // If no search term, show all categories
      setFilteredCategories(pokemonData);
    }
  };

  return (
    <>
      <div className="searchInput">
        <p>Search: </p>
        <input
          type="text"
          name="search"
          className="seaInp"
          onChange={handleSearchChange}
        />
      </div>
      <div className="catboxes">
        {filteredCategories &&
          filteredCategories.map((item: any, index: number) => (
            <motion.div
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="category-box" onClick={() => handleClick(item)}>
                <img src={item.sprites.front_default} alt={item.name} />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{"Base Experience: " + item.base_experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
      {modalOpen && (
        <Modal data={selectedItem} modalStatus={handleModalStatus} />
      )}
    </>
  );
};

export default PokemonList;
