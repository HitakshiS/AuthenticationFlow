import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../assets/strings';
import colors from '../../theme/colors';
import globalStyles, { width } from '../../theme/globalStyles';
import { getDeviceHeightPercent, removeInBwSpace, getPassRegex, validateTheEmail, isEmailCheck, showAlertDialog } from '../../utils/Utils';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import images from '../../assets/images';
import { useDispatch } from 'react-redux';
import { saveUserData } from './redux/actions/UserActions';
import { AppLoader } from '../../components/AppLoader';

const passRegex = getPassRegex();

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  /** ComponentDidMount hook */
  useEffect(() => {
    console.log("signin mounted")
  }, []);

  //--------------------------------------//

  //BUTTON ENABLING
  useEffect(() => {
    if (email !== '' && password !== '') {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, password]);


  const resetToHome = () => {
    setEmail('');
    setPassword('');
    setIsAgree(false);
    navigation.navigate('HomeNav');
  };

  const validation = () => {

    const isAnEmail = isEmailCheck(`${email}`.trim());
    const isValidEmail = validateTheEmail(`${email}`.trim());

    if (`${email}`.trim() === '') {
      setEmailErr(strings.ENTER_EMAIL_ID);
      setPassErr('');
      return false;
    }
    else if (!isAnEmail.isEmail) {
      setEmailErr(isAnEmail.emailErr);
      setPassErr('');
      return false;
    }
    else if (!isValidEmail) {
      setEmailErr(strings.ENTER_VALID_EMAIL_ID);
      setPassErr('');
      return false;
    }
    else if (`${password}`.trim() === '') {
      setEmailErr('');
      setPassErr(strings.ENTER_PASS);
      return false;
    }
    else if (`${password}`.trim().length < 8) {
      setEmailErr('');
      setPassErr(strings.ENTER_PASS_MIN_8);
      return false;
    }

    else if (!passRegex.test(`${password}`.trim())) {
      setEmailErr('');
      setPassErr(strings.PASS_REG_MSG);
      return false;
    }
    else if (!isAgree) {
      setEmailErr('');
      setPassErr('');
      showAlertDialog(strings.APP_NAME, strings.AGREE_TO_TC, null, null, null, true, true)
      return false;
    }

    setEmailErr('');
    setPassErr('');
    return true;
  };

  const handleSubmit = () => {
    if (validation()) {
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          dispatch(saveUserData(data));
          setIsLoading(false);
          resetToHome();
        })
        .catch((error) => {
          setIsLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          showAlertDialog(strings.APP_NAME, errorMessage, null, null, null, true, true);

          console.error(error);
        });
    }
  };

  // SCREEN
  return (
    <SafeAreaView edges={['top']} style={globalStyles.flexPrimary}>
      <View style={globalStyles.flexPrimary}>
        <View style={styles.bgTopImage}>
          <View style={styles.heading}>
            <Text style={[globalStyles.text50White, { paddingTop: 10 }]}>{strings.sign_in}</Text>
            <Text style={[globalStyles.textPrimary21, styles.subHeading]}>
              {strings.welcome_back}
            </Text>
          </View>
        </View>
        <KeyboardAwareScrollView
          style={styles.borderTopView}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formView}>
            <Input
              label={strings.email_id}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(val) => setEmail(removeInBwSpace(`${val}`.toLowerCase()))}
              errLabel={emailErr}
              showRightIcon={emailErr ? true : false}
            />
            <Input
              label={strings.pas}
              value={password}
              onChangeText={(val) => setPassword(removeInBwSpace(val))}
              secureTextEntry={true}
              errLabel={passErr}
              showRightIcon={passErr ? true : false}
            />
            <View style={[globalStyles.flexRow, styles.tcView]}>
              <TouchableOpacity
                style={[
                  isAgree ? globalStyles.checkboxFilled : globalStyles.checkbox,
                ]}
                onPress={() => setIsAgree(!isAgree)}>
                {isAgree && <Image source={images.tick} />}
              </TouchableOpacity>
              <Text style={[globalStyles.textRegularGrey12, { marginLeft: 10 }]}>
                {strings.i_agree_to}
              </Text>
            </View>
            <View style={styles.midView}>
              <View style={styles.buttonContainer}>
                <SubmitButton
                  label={strings.sign_in}
                  isDisabled={isSubmitDisabled}
                  onPress={handleSubmit}
                />
              </View>
              <View style={globalStyles.flexRowCenter30}>
                <Text
                  style={[globalStyles.textPrimary16, { color: colors.GREY_130 }]}>
                  {strings.dont_hv_acc}{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={globalStyles.textPurpleUnderLined}>
                    {strings.sign_up}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <AppLoader isLoading={isLoading} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  subHeading: {
    color: colors.WHITE,
    marginTop: (10),
  },
  borderTopView: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: (46),
    alignSelf: 'center',
  },
  formView: {
    paddingTop: 36,
    paddingBottom: 36,
    alignSelf: 'center',
    borderTopLeftRadius: (46),
    width: '100%',
    paddingHorizontal: 24,
    height: '100%',
    zIndex: 5,
    overflow: 'hidden',
  },
  midView: {
    alignSelf: 'center',
    width: '100%',
    marginBottom: 15,
    zIndex: 5,
  },
  buttonContainer: {
    marginTop: (110),
    marginBottom: 25,
  },
  bgTopImage: {
    width: width,
    height: getDeviceHeightPercent(26),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {

  }
});
