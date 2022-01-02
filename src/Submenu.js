import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context.js'

const Submenu = () => {

  const {isSubmenuOpen, page: {page, links}, location} = useGlobalContext();
  console.log(links);
  // console.log(location)
  const col = () => {
    switch (page){
      case "products":
        {
          return "col-3";
        }
      case "developers":
        {
          return "col-4";
        }
      case "company":
        {
          return "col-2";
        }
    }
  }
  const locate = {
    "left" : location.mid,
    "top" : location.bottom
  }
  return <aside className={`submenu ${isSubmenuOpen&&"show"}`} style={locate}>
    <h4>products</h4>
    <div className={`submenu-center ${col()}`}>
      {Array.isArray(links)&&links.map((item) => {
        return <a href={item.url}>{item.icon} {item.label}</a>
      })}
    </div>
  </aside>
}

export default Submenu
 