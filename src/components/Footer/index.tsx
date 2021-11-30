import React from "react";
import styles from "./Footer.module.scss";

const CrypterItems = [
  {
    title: "Discover",
    url: "/dicover",
  },
  {
    title: "Connect Wallet",
    url: "/dicover",
  },
  {
    title: "Create Item",
    url: "/dicover",
  },
];

const InfoItems = [
  {
    title: "Download",
    url: "/dicover",
  },
  {
    title: "Demos",
    url: "/dicover",
  },
  {
    title: "Support",
    url: "/dicover",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <h2 className={styles.footerTitle}>CryptoWall</h2>
          <p className={styles.titleDesc}>The New Creative Economy.</p>
        </div>
      </div>

      <div className={styles.middleContainer}>
        <h1>Left</h1>
      </div>
      <div className={styles.middleContainer}>
        <h1>Left</h1>
      </div>

      <div className={styles.rightContainer}>
        <h1>Left</h1>
      </div>
    </div>
  );
};

export default Footer;
