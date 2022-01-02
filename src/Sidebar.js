import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context.js'
const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return <div className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
    <aside className="sidebar">
      <button onClick = {closeSidebar} className="close-btn">
        < FaTimes />
      </button>
      <div className="sidebar-links">
        {sublinks.map((item, indd)=> {
          return <article key = {indd}>
            <h4>{item.page}</h4>
            <div className="sidebar-sublinks">
              {item.links.map((ind,index) => {
                return <a key={index} href={ind.url}>{ind.icon}{ind.label}</a>
              })}
            </div>
          </article>
        })}
      </div>
    </aside>
  </div>
}

export default Sidebar
 