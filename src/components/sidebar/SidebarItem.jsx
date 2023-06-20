import React from 'react'
import { sidebar__imgs } from "../../helpers/images";
import { Link } from "react-router-dom";

function SidebarItem() {
  return (
    <div className="sidebar__icons-col">
      {
        sidebar__imgs.map(el => {
          return (
            <Link to="/" className="sidebar__icons" key={el.id}>
              <img src={el.image} className="sidebar__icons-img active" alt="icons"/>
              <span className="sidebar__icons-text">{el.text}</span>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SidebarItem