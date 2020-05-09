import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header' className='contaner-fluid'>
      <div id='header-inner' className='row'>
        <div id='header-title'>
          <Link to='/'>Yelper - A Yelp Search Engine</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
