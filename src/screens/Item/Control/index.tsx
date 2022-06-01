import cn from "classnames";
import React, { useState } from "react";
import Bid from "../../../components/Bid";
import Connect from "../../../components/Connect";
import Modal from "../../../components/Modal";
import Accept from "./Accept";
import Checkout from "./Checkout";
import styles from "./Control.module.scss";
import PutSale from "./PutSale";
import SuccessfullyPurchased from "./SuccessfullyPurchased";

const Control = ({ className }) => {
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalAccept, setVisibleModalAccept] = useState(false);
  const [visibleModalSale, setVisibleModalSale] = useState(false);

  return (
    <>
      <div className={cn(styles.control, className)}>
        <div className={styles.head}>
          <div className={styles.avatar}>
            <img src="/images/content/avatar-4.jpg" alt="Avatar" />
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              Highest bid by <span>Kohaku Tora</span>
            </div>
            <div className={styles.cost}>
              <div className={styles.price}>1.46 ETH</div>
              <div className={styles.price}>$2,764.89</div>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalPurchase(true)}
          >
            Purchase now
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => setVisibleModalBid(true)}
          >
            Place a bid
          </button>
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            View all
          </button>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalAccept(true)}
          >
            Accept
          </button>
        </div>
        <div className={styles.text}>
          Service fee <span className={styles.percent}>1.5%</span>{" "}
          <span>2.563 ETH</span> <span>$4,540.62</span>
        </div>
        <div className={styles.foot}>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalSale(true)}
          >
            Put on sale
          </button>
        </div>
        <div className={styles.note}>
          You can sell this token on Crypter Marketplace
        </div>
      </div>
      <Modal
        visible={visibleModalPurchase}
        onClose={() => setVisibleModalPurchase(false)}
      >
        <Checkout className={undefined} />
        <SuccessfullyPurchased className={undefined} />
      </Modal>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <Connect />
        <Bid className={undefined} />
      </Modal>
      <Modal
        visible={visibleModalAccept}
        onClose={() => setVisibleModalAccept(false)}
      >
        <Accept className={undefined} />
      </Modal>
      <Modal
        visible={visibleModalSale}
        onClose={() => setVisibleModalSale(false)}
      >
        <PutSale className={undefined} />
      </Modal>
    </>
  );
};

export default Control;
