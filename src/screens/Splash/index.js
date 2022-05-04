/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../theme';
import { useSelector } from 'react-redux';
import strings from '../../assets/strings';

const Splash = ({ navigation }) => {

    let userData = useSelector((state) => state.userReducer.userData);
    console.log("userData", userData)

    useEffect(() => {

        const TIMER_SECS = 1000;

        const goToFun = async () => {
            if (userData)
                navigation.replace('HomeNav');
            else
                navigation.replace('AuthNav');
        };
        const timer = setTimeout(goToFun, TIMER_SECS);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };

    }, []);

    return (
        <View style={[globalStyles.flexCenterGrey]}>
            <Text style={[globalStyles.textPrimary18]}>
                {strings.SPLASH}
            </Text>
        </View>
    );
};
export default Splash;

