import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> JOBHIVE
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="dashboard">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="pprofile">
            <BsFillArchiveFill className='icon' /> Profile
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="aanalytics">
            <BsFillGrid3X3GapFill className='icon' /> Analytics
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="reports">
            <BsMenuButtonWideFill className='icon' /> Reports
          </Link>
        </li>
       
      </ul>
    </aside>
  );
}

export default Sidebar;
