import React from "react";
import styles from "./loading.module.scss";
function Loading() {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.loadingBg}>
            <div className={styles.loader}></div>

            </div>
        </div>


    );

}
export default Loading;