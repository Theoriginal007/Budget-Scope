import React from 'react';
import { FaHome, FaChartPie, FaTable } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><FaHome /> Home</li>
        <li><FaChartPie /> Charts</li>
        <li><FaTable /> Tables</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
