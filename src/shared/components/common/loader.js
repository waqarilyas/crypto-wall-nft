import React from "react";
import { LoaderAnim, LoaderImage } from "../../../assets";
import Loading from "./loading/Loading";
import Animation from "./Animation";
import "./loader.css";
function Loader() {
  return (
    <div className="loader">
      <div style={{ height: "369px", marginTop: "37vh", position: "fixed" }}>
        {/* <Animation Pic={LoaderAnim} /> */}
        <Loading/>
      </div>
    </div>
  );
}

export default Loader;
