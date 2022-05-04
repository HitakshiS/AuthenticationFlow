import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors, globalStyles } from '../../theme';
import { exactShadow } from '../../theme/scaling';
import { getDeviceWidthPercent } from '../../utils/Utils';

const SubmitButton = ({
  label = '',
  isDisabled = false,
  onPress = () => { },
  backColor = colors.ORANGE,
  textColor = colors.WHITE,
  borderColor = colors.COLOR_FULLTRANSPARENT,
  borderWidth = 1,
  showShadow = true,

  isSplitView = false,
  secondaryTextColor = colors.WHITE,
  secondaryBackColor = colors.BLACK,
  secondaryLabel = '',
  containerWidth = 0,
}) => {
  if (isSplitView === true) {

    return (
      <TouchableOpacity
        style={[
          styles.container,
          containerWidth ? { width: containerWidth } : {},
          showShadow ? { ...exactShadow(4) } : {},
        ]}
        disabled={isDisabled}
        onPress={onPress}>

        <View style={[styles.splitCont,
        {
          borderColor: isDisabled ? colors.GREY_130 : borderColor,
          borderWidth: borderWidth,
        },
        ]}>

          <View style={[styles.splitContLeft, { backgroundColor: secondaryBackColor }]}>
            <Text
              numberOfLines={2}
              ellipsizeMode={'tail'}
              style={[globalStyles.btnTextSemiBold14, styles.textContLeft, { color: secondaryTextColor }]}>
              {secondaryLabel}
            </Text>
          </View>

          <View style={[styles.splitContRight, { backgroundColor: isDisabled ? colors.GREY_130 : backColor }]}>
            <Text
              numberOfLines={2}
              ellipsizeMode={'tail'}
              style={[globalStyles.btnTextSemiBold14, styles.textContRightt, { color: textColor }]}>
              {label}
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          { backgroundColor: isDisabled ? colors.GREY_130 : backColor },
          {
            borderColor: isDisabled ? colors.GREY_130 : borderColor,
            borderWidth: borderWidth,
          },
          containerWidth ? { width: containerWidth } : {},
          showShadow ? { ...exactShadow(4) } : {},
        ]}
        disabled={isDisabled}
        onPress={onPress}>
        <Text style={[globalStyles.btnTextSemiBold, { color: textColor }]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: getDeviceWidthPercent(90),
    alignSelf: 'center',
    height: (54),
    justifyContent: 'center',
    alignItems: 'center',

  },
  splitCont: {
    flex: 1,
    width: getDeviceWidthPercent(90),
    height: '100%',
    alignSelf: 'center',
    borderRadius: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  splitContLeft: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textContLeft: {
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  splitContRight: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textContRightt: {
    textAlign: 'center',
    textAlignVertical: 'center',


  },
});
