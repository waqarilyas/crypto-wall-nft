import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./HotBid.module.scss";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import { bids } from "../../../shared/SampleData/bids";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
  <button {...props}>{children}</button>
);

const HotBid = ({ classSection }: any) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name='arrow-next' size='14' />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name='arrow-prev' size='14' />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Hot bid</h3>
          <div className={styles.inner}>
            <Slider className='bid-slider' {...settings}>
              {bids.map((x: any, index: number) => (
                <Card key={index} className={styles.card} item={x} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotBid;
