import React from "react";
import HomeSlider from "./HomeSlider";
import styles from "./Home.module.scss";
import Selection from "./Selection";
import PopularArtist from "./PopularArtists";
import HotBid from "./HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Selection />
      <PopularArtist />
      <HotBid classSection='section' />
      <Collections />
      <Discover />
      <Description />
    </>
  );
};

export default Home;
