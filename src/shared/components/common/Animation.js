import React from "react";
import Lottie from "react-lottie";

function Animation({ Pic, Message, gif,gifImage }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Pic,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Lottie
        isClickToPauseDisabled
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
        height={"40%"}
        width={"40%"}
      />
     {gifImage && <img src={gif} alt="" style={{ width: "40%", height: "40%" }} />} 
      {Message && (
        <h3 className="text-secondary text-center mt-4 mb-4" style={{fontSize:"20px"}}>{Message}</h3>
      )}
    </div>
  );
}

export default Animation;
