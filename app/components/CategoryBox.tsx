import Link from "next/link";
import React from "react";

const CategoryBox = ({ title, description, imageUrl, ind }: any) => {
  return (
    <div className="category-box">
      <Link href={`/${title}`}>
        {/* <img src={imageUrl} alt={title} /> */}
        <div className="content">
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default CategoryBox;
