import { Dimensions } from 'react-native';
import { isPlatformiOS } from '../utils/Utils';

const { width, height } = Dimensions.get('window');
const [windowWidth, windowHeight] =
  width < height ? [width, height] : [height, width];

//Guideline sizes
// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;
const guidelineBaseWidth = isPlatformiOS ? 375.0 : 360.0;
const guidelineBaseHeight = isPlatformiOS ? 667.0 : 640.0;

const scale = (size) => (windowWidth / guidelineBaseWidth) * size;
const verticalScale = (size) => (windowHeight / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const normalizeScale = (size) => {
  return size;
};


//PUT SHADOW OVER VIEW
export const exactShadow = (depth, color = '#000') => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: depth / 2,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: Math.abs(depth),
});

export const exactShadowTop = (depth, color = '#000000') => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: -(depth / 2),
  },
  shadowOpacity: isPlatformiOS ? (0.1) : (0.4),
  shadowRadius: 4.5,
  elevation: Math.abs(depth),
});

export { scale, verticalScale, moderateScale, normalizeScale };
