import React, { useState } from "react";
import "./Navbar.css";
import Icon from "../IMG/search_icon.png";

const Navbar = ({ onClick, onChange, search }) => {
  return (
    
      <div className="Navbarmarvel">
      
      <div className="textnav"> Marvel´s Character List</div>
      <div className="search-container">
        
        <div class="containersearch">
        <input name="search"
          value={search}
          onChange={onChange}
          type="text" placeholder="Search..." />
        <div class="search"></div>
      </div>
        <div class="box">
    <i class="fas fa-search"></i>

</div>
       
      </div>
    </div>
  );
};

export default Navbar;
