import React from "react";
import HomeSlider from "./HomeSlider";
import styles from "./Home.module.scss";
import Selection from "./Selection";
import PopularArtist from "./PopularArtists";
import HotBid from "./HotBid";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Selection />
      <PopularArtist />
      <HotBid classSection='section' />
    </>
  );
};

export default Home;
