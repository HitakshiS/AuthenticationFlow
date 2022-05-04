/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../theme';
import strings from '../assets/strings';

const Dashboard = () => {

    useEffect(() => {
        console.log("Dashboard mounted")
    }, []);

    return (
        <View style={[globalStyles.flexCenterGrey]}>
            <Text style={[globalStyles.textPrimary18]}>
                {strings.DASHBOARD}
            </Text>
        </View>
    );
};
export default Dashboard;

