import React from "react";
import "./homeheader.css";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import SubHeader from "./subheader.jsx";

function HomeHeader() {
  return (
    <>
      <div className="HomeHeader items">
        <span id="Ham">
          <button type="button" className="HamButton">
            <RxHamburgerMenu className="Icon"  />
          </button>
        </span>
        
        <img src="/assets/rajalakshmilogo.png" className="LogoRajalaksmi items"></img>

        <div className="SearchParent items ">
          <input
            type="text"
            placeholder="Search for Products"
            className="SearchInput"
          ></input>
          <span>
            <CiSearch className="Icon" />
          </span>
        </div>

        <span className="IconText items">
          <FaRegHeart className="Icon" />
          Wishlist
        </span>

        <span className="IconText items">
          <BsCart3 className="Icon" />
          Cart
        </span>

        <span className="IconText items">
          <MdOutlineAccountCircle className="Icon" />
          Login<IoIosArrowDown />
        </span>

      </div>
     
    </>
  );
}

export default HomeHeader;
