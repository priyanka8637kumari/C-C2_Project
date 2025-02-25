import React from "react";
import styles from "./LandingNavbar.module.css";
import logo from "../images/image 21.png";
import phoneIcon from "../images/phone.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarBrand}>
      <img src={logo} alt="Care Sync Logo" className={styles.logo} />
      <span className={styles.brandName}>Care Sync</span>
    </div>
    <ul className={styles.navbarMenu}>
      <li className={styles.navbarItem}><a href="/">Home</a></li>
      <li className={styles.navbarItem}><a href="/about">About Us</a></li>
      <li className={styles.navbarItem}><a href="/services">Our Services</a></li>
    </ul>
    <button className={styles.supportButton}>
      <img src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} />
      Emergency Call
    </button>
  </nav>
  );
};
export default Navbar;
