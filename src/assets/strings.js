// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  en: {
    APP_NAME: 'Assignment',
    email_id: 'Email Id',
    pas: 'Password',
    confirm_pas: 'Confirm password',
    sign_up: 'Sign Up',
    dont_hv_acc: 'Don’t have an account?',
    already_hv_acc: 'Already have an account?',
    sign_in: 'Sign In',
    welcome_back: 'Welcome back !',
    i_agree_to: 'By logging in, I accept the terms & conditions of the platform',
    DASHBOARD: "Dashboard",
    SPLASH: "Splash Screen",
    SIGN_OUT: "Sign Out",

    ENTER_EMAIL_ID: 'Please enter Email Id.',
    ENTER_VALID_EMAIL_ID: 'Please enter a valid Email Id.',
    ONLY_ALPHANUM_EMAIL_ALLOWED: 'Please enter a valid Email Id.\nAlso, Only combination of letters(a-z), numbers(0-9), underscore(_) and period(.) is allowed.',
    ENTER_PASS: 'Please enter Password.',
    ENTER_PASS_MIN_8: 'Please enter atleast 8 characters Password.',
    PASS_REG_MSG:
      'Password must be at least 8 characters and it must contain at least one uppercase letter and a number character.',
    ENTER_CONFIRM_PASS: 'Please enter Confirm Password.',
    ENTER_CONFIRM_PASS_MIN_8: 'Please enter atleast 8 characters Confirm Password.',
    CONFIRM_PASS_REG_MSG:
      'Confirm Password must be between 8 to 12 characters and it must contain a uppercase letter, a lower case letter, a number and a special character.',
    PASS_NOT_MATCH_CONFIRM_PASS:
      'Password and Confirm Password does not match!',

    AGREE_TO_TC: 'Please agree to Terms & Conditions.',
    ERROR_EMAIL: "This email address is already in use! Please signIn",

    APP_VERSION: "Version 1.0.0"
  },
});

export default strings;
