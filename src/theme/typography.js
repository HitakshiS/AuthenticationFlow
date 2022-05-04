import { isPlatformiOS } from '../utils/Utils';

const typography = {
  /** Font Sizes */
  FONT_SIZE_11: (11),
  FONT_SIZE_12: (12),
  FONT_SIZE_13: (13),
  FONT_SIZE_14: (14),
  FONT_SIZE_16: (16),
  FONT_SIZE_18: (18),
  FONT_SIZE_19: (19),
  FONT_SIZE_21: (21),
  FONT_SIZE_24: (24),
  FONT_SIZE_30: (30),
  FONT_SIZE_50: (50),
  FONT_SIZE_56: (56),

  /** Font Families */
  FONT_REGULAR: 'Montserrat-Regular',
  FONT_MEDIUM: 'Montserrat-Medium',
  FONT_BOLD: 'Montserrat-Bold',
  FONT_SEMI_BOLD: 'Montserrat-SemiBold',
  FONT_ITALIC: 'Montserrat-Italic',
  FONT_MEDIUM_ITALIC: 'Montserrat-MediumItalic',
  FONT_LIGHT_ITALIC: 'Montserrat-LightItalic',

  /** Font Weight */
  FONT_WEIGHT_REGULAR: '400',
  FONT_WEIGHT_MEDIUM: '500',
  FONT_WEIGHT_600: isPlatformiOS ? '600' : '700',
  FONT_WEIGHT_BOLD: '700',
  FONT_WEIGHT_EXTRA_BOLD: '900',

  /** Line Height */
  LINE_HEIGHT_12: (12),
  LINE_HEIGHT_16: (16),
  LINE_HEIGHT_18: (18),
  LINE_HEIGHT_20: (20),
  LINE_HEIGHT_22: (22),
  LINE_HEIGHT_24: (24),
  LINE_HEIGHT_28: (28),
  LINE_HEIGHT_30: (30),
  LINE_HEIGHT_50: (50),
  LINE_HEIGHT_56: (56),

  /** Letter Spacing */
  /** Icon Size */
  ICON_20: (20),
  ICON_24: (24),
  ICON_30: (30),
};

export default typography;
