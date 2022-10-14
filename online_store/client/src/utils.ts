import { BACKEND_URL } from "./constants/global";

export function getContrastColor(color: string) {
  return luma(color) >= 165 ? "#000" : "#fff";
}

function luma(color: string) {
  // color can be a hx string or an array of RGB values 0-255
  const rgb = hexToRGBArray(color);
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]; // SMPTE C, Rec. 709 weightings
}

function hexToRGBArray(_color: string) {
  let color = _color.length === 7 ? _color.substring(1) : _color;
  if (color.length === 3)
    color =
      color.charAt(0) +
      color.charAt(0) +
      color.charAt(1) +
      color.charAt(1) +
      color.charAt(2) +
      color.charAt(2);
  else if (color.length !== 6) throw "Invalid hex color: " + color;
  const rgb = [];
  for (let i = 0; i <= 2; i++) rgb[i] = parseInt(color.substr(i * 2, 2), 16);
  return rgb;
}

export const getArrayImgsFetch = (img: string[]) => {
  if (Array.isArray(img)) {
    return img.map((el) => `${BACKEND_URL}/${el}`);
  } else {
    return [];
  }
};
