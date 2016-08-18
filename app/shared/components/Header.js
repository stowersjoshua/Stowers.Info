import React, {PropTypes} from 'react';
import Navbar from './Navbar';

export default Header;

function Header() {
  return (
    <div className="header clearfix">
      <Navbar />
      <h3>Joshua Stowers</h3>
    </div>
  );
}
