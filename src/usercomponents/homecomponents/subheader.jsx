import React from "react";
import "./subheader.css";

 function SubHeader({isVisible}) {
  console.log({isVisible});
  return (
    <>
    
      <div className={`SubHeader ${isVisible? "visible":"hidden"}`}>
        <span className="subitems">Home</span>
        <span className="subitems">Products</span>
        <span className="subitems">About Us</span>
        <span className="subitems">Contact Us</span>
      </div>
    </>
  );
}
export default SubHeader;