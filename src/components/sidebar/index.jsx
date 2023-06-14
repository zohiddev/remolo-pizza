import React from "react";
import { sidebar__imgs } from "../../helpers/images";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="sidebar__col">
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