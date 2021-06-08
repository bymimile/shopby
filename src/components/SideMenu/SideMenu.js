import React from 'react';

import './side-menu.scss';

const SideMenu = () => {
  const categories = ["Gateaux", "Biscuits", "Confiseries", "Chocolats", "Boissons"]
  return (
    <div className="col-sm-2 sideBar">
      <ul className="">
        {categories.map(category => {
          return <li>{category}</li>
        })}
      </ul>
    </div>
  )
};

export default SideMenu;
