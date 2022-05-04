import { Dimensions, Platform, StatusBar, Keyboard, Alert } from 'react-native';

//-------DEVICE HELPERS---------//

//PLATFORMS
export const isPlatformiOS = Platform.OS === 'ios';
export const isPlatformAndroid = Platform.OS === 'android';


//DEVICE DIMENTIONS WIDTH, HEIGHT
export const standardWidth = isPlatformiOS ? 375.0 : 360.0;
export const standardHeight = isPlatformiOS ? 667.0 : 640.0;

export const myWidth = Dimensions.get('window').width;
export const myHeight = Dimensions.get('window').height;

export const isBigAndroid = isPlatformAndroid && myHeight > 800;
export const isiPhoneX = isPlatformiOS && myHeight > 800;
export const isBigiPhoneXMore = isPlatformiOS && myHeight > 812;
export const getSafeAreaBottomInset = () => isiPhoneX ? 34 : 0;

export const horizontalScale = size => (myWidth / standardWidth) * size;
export const verticalScale = size => (myHeight / standardHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;


export const widthScale = dimension => (dimension / standardWidth) * myWidth;
export const heightScale = dimension => (dimension / standardHeight) * myHeight;

export const getDeviceAspectRatio = () => {

  return myWidth / myHeight;
};

export const getDeviceHeightPercent = (perc) => {

  return myHeight * (perc / 100);
};

export const getDeviceWidthPercent = (perc) => {

  return myWidth * (perc / 100);
};

export const getImgHeightScale = (dimension, imgH) => {
  return (dimension / myHeight) * imgH;
};

export const getImgWidthScale = (dimension, imgW) => {
  return (dimension / myWidth) * imgW;
};

export const getImgHeightPercent = (imgH, perc) => {

  return imgH * (perc / 100);
};

export const getImgWidthPercent = (imgW, perc) => {

  return imgW * (perc / 100);
};

export const getNormalHWPercent = (hw, perc) => {

  return hw * (perc / 100);
};

export const navBarHeight = Platform.OS === 'ios' ? 54 : 58;

export const statusBarHeight = (() => {
  if (Platform.OS === 'android') {
    if (isBigAndroid) { return StatusBar.currentHeight; }
    else { return 20; }

  } else {
    if (isiPhoneX) { return 40; }
    else if (isBigiPhoneXMore) { return 40; }
    else { return 20; }
  }

})();

export function StatusBarHeightFun() {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight || 20;
  }
  if (isiPhoneX) {
    return -40;
  }
  return 20;
}

//----------HELPER METHODS:---------//

export const isEmptyOBJ = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { return false; }
  }
  return true;
};

export const convertToNumber = (txt = '') => {
  if (txt) { return isNaN(`${txt}`) ? 0 : Number(`${txt}`); }
  else { return 0; }
};
export const convertToFixedTwoDecimal = num => Number.isNaN((Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100))
  ? 0
  : (Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100);

export const roundOf = num => Math.round(num);

export const remove_linebreaks = (str) => {
  if (str) {
    let newStr = str.replace(/[\r\n]+/gm, ' ');
    newStr = `${newStr}`.trim();
    return newStr;
  }
  return '';
};

export const removeInBwSpace = (str) => {
  if (str) {
    let newStr = `${str}`.replace(/\s/g, '');
    newStr = `${newStr}`.trim();
    return newStr;
  }
  return '';
};

export const dismissKeyboard = () => Keyboard.dismiss();

export const showAlertDialog = (title = '', msg = '',
  positiveCb = () => { }, negativeCb = () => { }, dismissCb = () => { },
  isCancelable = false, isPositiveOnly = false, btnPositiveStr = null, btnNegativeStr = null) => {
  let btnPositive = btnPositiveStr ? btnPositiveStr : 'OK';
  let btnNegative = btnNegativeStr ? btnNegativeStr : 'Cancel';

  let btnArr = [
    {
      text: btnPositive,
      onPress: positiveCb,
    },
    {
      text: btnNegative,
      onPress: negativeCb,
    },
  ];
  if (isPositiveOnly) {
    btnArr = [
      {
        text: btnPositive,
        onPress: positiveCb,
      },
    ];
  }

  Alert.alert(title, msg, btnArr, { cancelable: isCancelable, onDismiss: dismissCb });
};

export const getNameRegex = () => {
  const NAME_REGEX = /^[a-zA-Z ]*$/;
  return new RegExp(NAME_REGEX);
};

export const getEmailRegex = () => {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return new RegExp(EMAIL_REGEX);
};

export const getPassRegex = () => {
  const PASS_REGEX = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return new RegExp(PASS_REGEX);
};

export const getEmailModifiedRegex = () => {
  const EMAIL_REGEX_MODIFIED = "^[a-z0-9][a-z0-9_\\.]+@([a-z]|[a-z]?[a-z]+[a-z])\\.[a-z]{2,10}(?:\\.[a-z]{2,10})?$"
  return new RegExp(EMAIL_REGEX_MODIFIED);
};

export const getEmailNumModifiedRegex = () => {
  const EMAIL_NUM_REGEX_MODIFIED = "(\\.{2}|-{2}|_{2})"
  return new RegExp(EMAIL_NUM_REGEX_MODIFIED);
};

//-----------------//

export const isEmailCheck = (emailId) => {
  emailId = (emailId || '').trim();
  if (emailId.length === 0) {
    return { isEmail: false, emailErr: 'Email not provided.' };
  }
  const split = emailId.split('@');
  if (split.length < 2) {
    return { isEmail: false, emailErr: 'Email does not contain "@"' };
  } else {
    const localPart = split[0];
    const domainPart = split[1];

    const [domain] = split.slice(-1);
    if (domain.indexOf('.') === -1) {
      return { isEmail: false, emailErr: 'Email must contain a period(.) after the "@domain"' };
    }
    else if (`${localPart}`.length < 2) {
      return { isEmail: false, emailErr: 'Email username/local-part is too short.' };
    }
    else if (`${domainPart}`.indexOf('.') === 0) {
      return { isEmail: false, emailErr: 'Email domain is missing or invalid.' };
    }
    else if (`${domainPart}`.length < 2) {
      return { isEmail: false, emailErr: 'Email domain is too short.' };
    }
  }

  return { isEmail: true, emailErr: '' };
};

export const validateTheEmail = (email) => {
  const twoNumRx = getEmailNumModifiedRegex();
  const emailRx = getEmailModifiedRegex();
  const isValid = !twoNumRx.test(email) && emailRx.test(email);
  return isValid;
};


