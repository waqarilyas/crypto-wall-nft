
import { clearAllBodyScrollLocks } from "body-scroll-lock"
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "../Header"
import styles from "./Page.module.scss"


const Page = ({ children }: any) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.inner}>{children}</div>

    </div>
  );
};

export default Page;
