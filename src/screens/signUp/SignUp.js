import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../assets/strings';
import colors from '../../theme/colors';
import globalStyles, { width } from '../../theme/globalStyles';
import { getDeviceHeightPercent, removeInBwSpace, getPassRegex, validateTheEmail, isEmailCheck, showAlertDialog } from '../../utils/Utils';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import { AppLoader } from '../../components/AppLoader';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../signIn/redux/actions/UserActions';

const passRegex = getPassRegex();

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
    const dispatch = useDispatch();
    /** ComponentDidMount hook */
    useEffect(() => {
        console.log("signup mounted")
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
        setConfirmPassword('');
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
        else if (`${confirmPassword}`.trim() === '') {
            setEmailErr('');
            setPassErr('');
            setConfirmPasswordErr(strings.ENTER_CONFIRM_PASS);
            return false;
        }
        else if (`${confirmPassword}`.trim().length < 8) {
            setEmailErr('');
            setPassErr('');
            setConfirmPasswordErr(strings.ENTER_CONFIRM_PASS_MIN_8);
            return false;
        }
        else if (!passRegex.test(`${confirmPassword}`.trim())) {
            setEmailErr('');
            setPassErr('');
            setConfirmPasswordErr(strings.CONFIRM_PASS_REG_MSG);
            return false;
        }
        else if (`${password}`.trim() !== (`${confirmPassword}`.trim())) {
            setEmailErr('');
            setPassErr('');
            setConfirmPasswordErr(strings.PASS_NOT_MATCH_CONFIRM_PASS);
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
                .createUserWithEmailAndPassword(email, password)
                .then((data) => {
                    dispatch(saveUserData(data));
                    setIsLoading(false);
                    resetToHome();
                })
                .catch(error => {
                    setIsLoading(false);
                    if (error.code === 'auth/email-already-in-use') {
                        showAlertDialog(strings.APP_NAME, strings.ERROR_EMAIL, null, null, null, true, true);
                    }

                    if (error.code === 'auth/invalid-email') {
                        showAlertDialog(strings.APP_NAME, strings.ENTER_VALID_EMAIL_ID, null, null, null, true, true);
                    }
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
                        <Text style={[globalStyles.text50White, { paddingTop: 10 }]}>{strings.sign_up}</Text>
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
                        <Input
                            label={strings.confirm_pas}
                            value={confirmPassword}
                            onChangeText={(val) => setConfirmPassword(removeInBwSpace(val))}
                            secureTextEntry={true}
                            errLabel={confirmPasswordErr}
                            showRightIcon={confirmPasswordErr ? true : false}
                        />
                        <View style={styles.midView}>
                            <View style={styles.buttonContainer}>
                                <SubmitButton
                                    label={strings.sign_in}
                                    isDisabled={isSubmitDisabled}
                                    onPress={handleSubmit}
                                />
                            </View>
                            <View style={[globalStyles.flexRowCenter, styles.addMarginStyle]}>
                                <Text
                                    style={[globalStyles.textPrimary16, { color: colors.GREY_130 }]}>
                                    {strings.already_hv_acc}{' '}
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                    <Text style={globalStyles.textPurpleUnderLined}>
                                        {strings.sign_in}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                <AppLoader isLoading={isLoading} />
            </View >
        </SafeAreaView >
    );
};

export default SignUp;

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
