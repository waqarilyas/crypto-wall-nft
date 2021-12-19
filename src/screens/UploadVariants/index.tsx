import React from "react";
import styles from "./UploadVariants.module.scss";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import cn from "classnames";

const UploadVariants = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.navBar}>
          <div className={styles.leftShift}>
             <Link className={cn("button-stroke")} to='/home'>
               <Icon name='arrow-prev' size='14' /> Back to home
              </Link>
            </div>
              <div className={styles.rightSift}>
              <a href="../Home/index.tsx">Home</a>
              <Icon className={styles.simpleArrowsstyle} name='arrow-right-simple' size='14' />
               <p>Upload Item</p>
              </div>
   
      </div>
      <div className={styles.body}>
     
                   <h2>Upload Item</h2>
            <p className={styles.paramain}>Choose <span>“Single”</span> if you want your collectible to be one of a kind or <span>“Multiple”</span> if you want to sell one collectible multiple times</p>
            
      </div>
      
      <div className={styles.cardContainer}>
           <div className={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47zwy38pfnG_PmKX4CnOCZuIaTaJZ6nxRWc3NMv7_vyX1Ouz8rONjvrtQbKmzOW_9ZQM&usqp=CAU" alt="" />
              <div className={styles.btnss}>    
              <Link className={cn("button-stroke button-small", styles.button)} to='/upload-variants'>
              Create Single
            </Link>
             </div>
          </div>
          <div className={styles.card2}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47zwy38pfnG_PmKX4CnOCZuIaTaJZ6nxRWc3NMv7_vyX1Ouz8rONjvrtQbKmzOW_9ZQM&usqp=CAU" alt="" />
              <div className={styles.btnss}>
              <Link className={cn("button button-small", styles.button)} to='/upload-variants'>
              Create Multiple
            </Link>
             </div>
          </div>
        </div>
         <div className={styles.lastparamain}>
          <p className={styles.paramain}>We do not own your private keys and cannot access your funds without your confirmation.</p>
          </div>
    </div>        
    </>
  );
};

export default UploadVariants;
