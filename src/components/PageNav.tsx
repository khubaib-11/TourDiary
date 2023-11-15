import { NavLink } from 'react-router-dom';
// NavLink adds active class to the link that is clicked, so we use css to styles it
// Simple LInk don't do this

import styles from './PageNav.module.css';
import Logo from './Logo';

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li></li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.ctaLink}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
