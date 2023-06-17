import React from "react";
import { sidebar__imgs } from "../../helpers/images";
import { Link } from "react-router-dom";
import burger__menu from "../../assets/images/icons/burger_menu.svg"
const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="sidebar__col">
      <button className="sidebar__col-burger">
        <img src={burger__menu} alt="" />
        </button>
      {
        sidebar__imgs.map(el => {
          return (
            <Link to="/" className="sidebar__icons" key={el.id}>
              <img src={el.image} alt="icons"/>
            </Link>
          )
        })
      }
    </div>
  </div>
  )
  };
export default Sidebar;