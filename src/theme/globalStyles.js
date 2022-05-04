import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import { normalizeScale } from './scaling';
import typography from './typography';

export const { width, height } = Dimensions.get('window');

const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexPrimary: {
    flex: 1,
    backgroundColor: colors.COLOR_PRIMARY_APP,
  },
  flexCenterGrey: {
    flex: 1,
    backgroundColor: colors.GREY_224,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenterPurple: {
    flex: 1,
    backgroundColor: colors.PURPLE_DOT_VW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenter30: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  /** Text styles */
  text50White: {
    color: colors.WHITE,
    fontSize: typography.FONT_SIZE_50,
    fontWeight: typography.FONT_WEIGHT_REGULAR,
    lineHeight: typography.LINE_HEIGHT_50,
    fontFamily: typography.FONT_REGULAR,
  },
  textPrimary11: {
    color: colors.GREY_79,
    fontSize: typography.FONT_SIZE_11,
    fontWeight: typography.FONT_WEIGHT_REGULAR,
    lineHeight: typography.LINE_HEIGHT_12,
    fontFamily: typography.FONT_REGULAR,
  },
  inputTextPrimary: {
    color: colors.COLOR_GREY_2,
    fontSize: typography.FONT_SIZE_18,
    fontWeight: typography.FONT_WEIGHT_REGULAR,
    fontFamily: typography.FONT_REGULAR,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  btnTextSemiBold: {
    color: colors.GREY_79,
    fontSize: 16,
    fontFamily: typography.FONT_SEMI_BOLD,
  },
  btnTextSemiBold14: {
    color: colors.GREY_79,
    fontSize: 14,
    fontFamily: typography.FONT_SEMI_BOLD,
  },
  textRegularGrey12: {
    color: colors.GREY_79,
    fontSize: 12,
    fontFamily: typography.FONT_REGULAR,
  },
  textPrimary16: {
    color: colors.GREY_79,
    fontSize: typography.FONT_SIZE_16,
    fontWeight: typography.FONT_WEIGHT_REGULAR,
    lineHeight: typography.LINE_HEIGHT_18,
    fontFamily: typography.FONT_REGULAR,
  },
  textPrimary18: {
    color: colors.GREY_79,
    fontSize: typography.FONT_SIZE_18,
    fontWeight: typography.FONT_WEIGHT_REGULAR,
    lineHeight: typography.LINE_HEIGHT_20,
    fontFamily: typography.FONT_REGULAR,
  },
  textMedium12: {
    textAlignVertical: 'center',
    textAlign: 'left',
    color: colors.COLOR_WARM_GREY_DESC,
    fontSize: 12,
    fontFamily: typography.FONT_MEDIUM,
  },
  textPrimary21: {
    color: colors.GREY_79,
    fontSize: typography.FONT_SIZE_21,
    fontWeight: typography.FONT_WEIGHT_MEDIUM,
    lineHeight: typography.LINE_HEIGHT_22,
    fontFamily: typography.FONT_REGULAR,
  },
  textPurpleUnderLined: {
    color: colors.PURPLE,
    fontSize: typography.FONT_SIZE_16,
    fontWeight: typography.FONT_WEIGHT_MEDIUM,
    lineHeight: typography.LINE_HEIGHT_20,
    fontFamily: typography.FONT_MEDIUM,
    textDecorationLine: 'underline',
  },
  /** Checkbox */
  checkbox: {
    width: normalizeScale(21),
    height: normalizeScale(21),
    borderRadius: 3,
    borderColor: colors.GREY_79,
    borderWidth: 1,
  },
  checkboxFilled: {
    backgroundColor: colors.ORANGE,
    borderRadius: 3,
    width: normalizeScale(21),
    height: normalizeScale(21),
    justifyContent: 'center',
    alignItems: 'center',
  },

  /** Loader Styles */
  appLoader: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.COLOR_HALFRANSPARENT_1,
  },

});

export default globalStyles;
