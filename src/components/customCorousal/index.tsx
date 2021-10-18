import React, { useState } from "react";
// import { Carousel, Image } from "react-bootstrap";
import { Carousel } from "antd";

import faker from "faker";

const CustomCorousal = () => {
  function onChange(a: any, b: any, c: any) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    background: "#364d79",
  };

  return (
    <Carousel effect='fade'>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

// const CorousalItem = () => {
//   return (
//     <Carousel.Item>
//       <Image
//         className='d-block w-25 '
//         src={faker.image.avatar()}
//         alt='Third slide'
//       />

//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   );
// };

export default CustomCorousal;
