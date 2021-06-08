// == Import npm
import React, {Fragment} from 'react';
// == Import

import Navbar from '../Navbar/Navbar';
import SideMenu from '../SideMenu/SideMenu';
import Store from '../Store/Store';
import './app.scss';


// == Composant
const App = () => (
  <Fragment>
    <Navbar />
    <div className="container">
      <div className="row">
        <SideMenu />
        <Store />
      </div>
    </div>
    Pas de produits
  </Fragment>
  
);

// == Export
export default App;
