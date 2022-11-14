import React from "react";

export interface ImagesCarouselProps {
  images: string[];
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
}
// React.HTMLAttributes<HTMLDivElement>
