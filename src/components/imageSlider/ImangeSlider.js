import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./imageSlide.css";

export const ImangeSlider = ({ images }) => {
  const [currentImages, setCurrentImages] = useState(0);
  const [modifiedLink, setModifiedLink] = useState(images);
  const [hideImg, setHideImg] = useState(false);
  useEffect(() => {
    buttonHide();
    modifyImages();
  }, [images]);

  const modifyImages = () => {
    const newArg = images.map((item, i) => {
      return item.substr(6);
    });
    setModifiedLink(newArg);
  };

  const handleNextImage = () => {
    if (currentImages < images.length - 1) {
      setCurrentImages(currentImages + 1);
    } else {
      setCurrentImages(0);
    }
  };

  const handlePrevImage = () => {
    if (currentImages > 0) {
      setCurrentImages(currentImages - 1);
    } else {
      setCurrentImages(images.length - 1);
    }
  };

  const buttonHide = () => {
    if (images.length === 1) return setHideImg(true);
  };

  return (
    <div className="image-slide text-center">
      <Button className="prev" onClick={handlePrevImage} hidden={hideImg}>
        <i className="fa-solid fa-arrow-left"></i>
      </Button>
      <img
        crossOrigin="anonymous"
        src={
          process.env.REACT_APP_IMAGE_SERVER_URL + modifiedLink[currentImages]
        }
      ></img>
      <Button className="next" onClick={handleNextImage} hidden={hideImg}>
        <i className="fa-solid fa-arrow-right"></i>
      </Button>
    </div>
  );
};
