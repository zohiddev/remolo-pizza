import React from "react";
import { sidebar__imgs } from "../../helpers/images";

const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="sidebar__col">
      {
        sidebar__imgs.map(el => {
          return (
            <div className="sidebar__icons" key={el.id}>
              <img src={el.image} alt="icons"/>
            </div>
          )
        })
      }
    </div>
  </div>
  )
  };
export default Sidebar;