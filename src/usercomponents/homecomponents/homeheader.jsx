import React, { useState } from "react";
import "./homeheader.css";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import SubHeader from '../../usercomponents/homecomponents/subheader';
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

function HomeHeader() {

const[isSubHeaderVisible,setIsSubHeaderVisible]=useState(false);

const toggleSubHeader= ()=> {setIsSubHeaderVisible(!isSubHeaderVisible);
  
};

  return (
    <>
      <div className="HomeHeader items">
        <span id="Ham">
          <button type="button" onClick={toggleSubHeader} aria-label="Toggle Sidebar" className="HamButton items symbols">
            <RxHamburgerMenu className="Icon"  />
          </button>
        </span>
        
        <img src="/assets/rajalakshmilogo.png" className="LogoRajalaksmi items symbols"></img>

        <div className="SearchParent items">
          <input
            type="text"
            placeholder="Search for Products"
            className="SearchInput"
          ></input>
          <span>
            <CiSearch className="Icon" />
          </span>
        </div>

        <span className="IconText items symbols">
          <FaRegHeart className="Icon" />
          Wishlist
        </span>

        <span className="IconText items symbols">
          <BsCart3 className="Icon" />
          Cart
        </span>

        <span className="IconText items symbols">
          <MdOutlineAccountCircle className="Icon" />
          Login<IoIosArrowDown />
        </span>

      </div>

     <SubHeader isVisible={isSubHeaderVisible} />
    </>
  );
}

export default HomeHeader;
