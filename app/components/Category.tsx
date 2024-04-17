"use client";
import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import Link from "next/link";
import { motion } from "framer-motion";

const Category = ({ categoryData }: any) => {
  const [filteredCategories, setFilteredCategories] = useState(categoryData);
  //console.log(categoryData);

  const handleSearchChange = (event: any) => {
    const value = event.target.value;

    // Filter the categories based on the search term
    if (value.trim() !== "") {
      const filtered = categoryData.filter((cat: any) =>
        cat.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      // If no search term, show all categories
      setFilteredCategories(categoryData);
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
              <CategoryBox
                title={item.name}
                description="This is a description for Category 1."
                imageUrl="/category-1.jpg"
              />
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default Category;
