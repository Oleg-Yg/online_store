import React, { useState } from "react";
import s from "./styles.module.scss";
import { MdImageNotSupported as ErrorIcon } from "react-icons/md";
import Loader from "../Loader";
import { ImgWithLoaderProps } from "./types";

const ImgWithLoader = ({
  src,
  alt,
  className,
  style,
  hidden,
}: ImgWithLoaderProps) => {
  const [loaderImg, setLoaderImg] = useState(true);
  const [errorImg, setErrorImg] = useState(false);

  return (
    <div className={className} style={style} hidden={hidden}>
      <div className={s.wrapperImgWithLoader}>
        {errorImg ? (
          <ErrorIcon size={50} />
        ) : (
          <>
            {loaderImg && <Loader />}
            <img
              src={src}
              alt={alt}
              className={s.imgElement}
              hidden={loaderImg}
              onLoad={() => {
                setLoaderImg(false);
              }}
              onError={() => setErrorImg(true)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ImgWithLoader;
