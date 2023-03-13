import React, { useState } from "react";

export const ImageMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 1.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imgSrc = src[0].substr(6);

  return (
    //container

    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      {/* image */}
      <img
        crossOrigin="anonymous"
        src={process.env.REACT_APP_IMAGE_SERVER_URL + imgSrc}
        style={{
          height: height,
          width: width,
        }}
        onMouseEnter={(e) => {
          //update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          //update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          //calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={(e) => {
          setShowMagnifier(false);
        }}
        alt={"img"}
      />
      {/* div for magnifier  */}
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          //prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          //set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${process.env.REACT_APP_IMAGE_SERVER_URL} + ${imgSrc}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
};
