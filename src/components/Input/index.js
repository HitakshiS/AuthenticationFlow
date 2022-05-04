import React from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import images from '../../assets/images';
import { colors, globalStyles } from '../../theme';

const Input = (props) => {
  const {
    label,
    labelTxtStyle = null,
    placeholder = '',
    placeholderTextColor = colors.GREY_130,
    value = '',
    inputStyle = null,
    onChangeText = (t) => { },
    maxLength = 50,
    numberOfLines = 1,
    autoCapitalize = 'none',
    errLabel = '',
    secureTextEntry = false,


    showRightIcon = false,
    rightIcon = images.alertSmall,
    rightBtnStyle = null,
    onRightIconPress = () => { },
  } = props;

  return (
    <>
      <View style={styles.inputV}>
        <Text style={[globalStyles.textMedium12, labelTxtStyle ? labelTxtStyle : {}]}>
          {label}
        </Text>

        <View style={globalStyles.flexRowCenter}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={[globalStyles.inputTextPrimary, errLabel ? styles.inputBoxErr : styles.inputBox, inputStyle ? inputStyle : {}]}

            underlineColorAndroid={'transparent'}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}

            maxLength={maxLength}
            multiline={false}
            numberOfLines={numberOfLines}
            autoCapitalize={autoCapitalize}
            autoCompleteType={'off'}
            textContentType={'none'}
            keyboardType={'default'}
            {...props}

          />
          {showRightIcon ? <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}

            onPress={onRightIconPress}

            style={[styles.btnErr, rightBtnStyle ? rightBtnStyle : {}]}>
            <Image source={rightIcon} style={styles.img}
              resizeMode={'contain'}
              resizeMethod={'resize'} />
          </TouchableOpacity>
            : null}
        </View>

        {errLabel ? <Text style={[globalStyles.textPrimary11, styles.errTxtStyle]}>
          {errLabel}
        </Text> : null}
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  errTxtStyle: { color: colors.COLOR_RED, marginTop: 4 },
  inputV: {
    width: '100%',
    marginTop: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  btnErr: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
  },
  img: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
  inputBoxErr: {
    flex: 1,
    paddingVertical: 5,
    paddingRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.COLOR_RED,
  },
  inputBox: {
    flex: 1,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY_224,
  },
});

export default Input;
