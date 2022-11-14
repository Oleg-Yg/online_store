import React, { useState } from "react";
import ImgWithLoader from "../ImgWithLoader";
import {
  HiChevronLeft as ArrowForward,
  HiChevronRight as ArrowBack,
} from "react-icons/hi";
import s from "./styles.module.scss";
import { ImagesCarouselProps } from "./types";

const ImagesCarousel = ({ images, className, style }: ImagesCarouselProps) => {
  const [selectedPicture, setSelectedPicture] = useState(0);

  const forward = () => {
    if (images.length - 1 === selectedPicture) setSelectedPicture(0);
    else setSelectedPicture(selectedPicture + 1);
  };

  const back = () => {
    if (0 === selectedPicture) setSelectedPicture(images.length - 1);
    else setSelectedPicture(selectedPicture - 1);
  };

  const isNotFalseArray = !!images.length;

  return (
    <>
      {isNotFalseArray ? (
        <div className={className} style={style}>
          <div className={s.imagesCarousel}>
            <label className={s.labelButton} style={{ left: 0 }}>
              <button
                style={{ left: 5 }}
                className={s.buttonImagesCarousel}
                onClick={back}
              >
                <ArrowForward size={22} />
              </button>
            </label>
            {images.map((image, index: number) => (
              <ImgWithLoader
                key={index}
                src={image}
                className={s.image}
                hidden={selectedPicture !== index}
              />
            ))}
            <label className={s.labelButton} style={{ right: 0 }}>
              <button
                style={{ right: 5 }}
                className={s.buttonImagesCarousel}
                onClick={forward}
              >
                <ArrowBack size={22} />
              </button>
            </label>
          </div>
          <div className={s.wrapperPoints}>
            {images.map((p, index: number) => (
              <div
                className={
                  index === selectedPicture ? s.selectedPoint : s.point
                }
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={className} style={style}>
          <div className={s.imagesCarousel}>
            <ImgWithLoader src={"errorImg"} className={s.image} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagesCarousel;
