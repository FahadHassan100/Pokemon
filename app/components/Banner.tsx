import Link from "next/link";
import React from "react";

const Banner = ({ imageUrl, bannerTitle, setClass }: any) => {
  return (
    <>
      <div className="topNav">
        <Link href={"/"}>
          <img className="mainLogo" src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="parallax-container">
        <div
          className={setClass}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="bannerHeading">
            <h2>{bannerTitle}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
