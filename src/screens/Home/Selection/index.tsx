import cn from "classnames";
import faker from "faker";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import styles from "./Selection.module.scss";

const items = [...Array(4)].map((item) => {
  return {
    title: faker.lorem.words(),
    content: "lorem",
    counter: `${faker.datatype.number()} in stock`,
    price: `2.1 ETH`,
    url: "/item",
    avatar: faker.image.image(),
    image: faker.image.image(),
    image2x: faker.image.image(),
  };
});

const users = [...Array(3)].map((item) => {
  return {
    name: faker.name.findName(),
    price: `<span>${faker.datatype.number()}</span> ETH`,
    counter: 3,
    avatar: faker.image.image(),
  };
});

const Selection = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            {items.map((x, index) => {
              return (
                index === 0 && (
                  <Link className={styles.card} to={x.url} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.head}>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={x.avatar} alt="Avatar" />
                        </div>
                        <div className={styles.description}>
                          <div className={styles.title}>{x.title}</div>
                          <div className={styles.counter}>{x.counter}</div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.content}>{x.content}</div>
                        <div className={styles.price}>{x.price}</div>
                      </div>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
          <div className={styles.col}>
            {items.map((x, index) => {
              return (
                index > 0 && (
                  <Link className={styles.item} to={x.url} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.description}>
                      <div className={styles.title}>{x.title}</div>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={x.avatar} alt="Avatar" />
                        </div>
                        <div className={styles.price}>{x.price}</div>
                        <div className={styles.content}>{x.content}</div>
                      </div>
                      <button
                        className={cn(
                          "button-stroke button-small",
                          styles.button
                        )}
                      >
                        Place a bid
                      </button>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.info}>
            Latest upload from creators{" "}
            <span className={styles.smile} role="img" aria-label="fire">
              🔥
            </span>
          </div>
          <div className={styles.list}>
            {users.map((x, index) => (
              <div className={styles.user} key={index}>
                <div className={styles.avatar}>
                  <img src={x.avatar} alt="Avatar" />
                  <div className={styles.number}>{x.counter}</div>
                </div>
                <div className={styles.description}>
                  <div className={styles.name}>{x.name}</div>
                  <div
                    className={styles.money}
                    dangerouslySetInnerHTML={{ __html: x.price }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link
            className={cn("button-stroke button-small", styles.button)}
            to="/discover"
          >
            <span>Discover more</span>
            <Icon name="arrow-next" size="10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Selection;
