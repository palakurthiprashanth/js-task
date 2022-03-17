import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from "../../../constants/navItems";


const blockname = 'car-app-header';

const Header = (): JSX.Element => {
    const getNavItems = () => {
      let items = navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${blockname}__nav-item`}
        >
          {item.label}
        </a>
      ));
      return items;
    }
  
    return (
      <header className={blockname}>
        <Link to="/">
          <img
            className={`${blockname}__brand-logo`}
            src="/images/logo.png"
            alt="Auto1.com Logo"
          />
        </Link>
        <div className={`${blockname}__nav-items`}>
          {getNavItems()}
        </div>
      </header>
    );
  };
  
  export default Header;