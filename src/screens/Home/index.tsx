import React from "react";
import Collections from "./Collections";
import Description from "./Description";
import Discover from "./Discover";
import HomeSlider from "./HomeSlider";
import HotBid from "./HotBid";
import PopularArtist from "./PopularArtists";
import Selection from "./Selection";

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
