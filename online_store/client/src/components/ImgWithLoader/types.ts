import React from "react";

export interface ImgWithLoaderProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
}
