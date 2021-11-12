import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 375;

export const scaleWidth = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleHeight = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: string,
) {
  let styles = {
    [`${property}Top`]: top,
    [`${property}Right`]: right,
    [`${property}Bottom`]: bottom,
    [`${property}Left`]: left,
  };

  return styles;
}

export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: string,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
