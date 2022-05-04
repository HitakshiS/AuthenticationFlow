/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../../theme';
import strings from '../../assets/strings';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { logoutResetUserAct } from '../../screens/signIn/redux/actions/UserActions';

const CustomDrawer = ({ props, navigation }) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer.userData);

    const signOut = () => {
        dispatch(logoutResetUserAct());
        navigation.navigate('AuthNav', { screen: 'SignIn' });
    }

    return (
        <View style={globalStyles.flex1}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.PURPLE_DOT_VW }}>
                    <Text style={[globalStyles.textPrimary16, { alignSelf: "center", marginVertical: 20 }]}>{userData ? `${userData.user.email} welcome!` : `Welcome!`}</Text>
                </View>
                <View style={globalStyles.flex1}>
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="home-outline"
                                color="black"
                                size={30}
                            />
                        )}
                        label={strings.DASHBOARD}
                        onPress={() => { navigation.navigate('HomeNav') }}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="log-out"
                                color="black"
                                size={30}
                            />
                        )}
                        label={strings.SIGN_OUT}
                        onPress={() => { signOut() }}
                    />
                </View>
            </DrawerContentScrollView>

            <View style={{ backgroundColor: colors.PURPLE_DOT_VW }}>
                <Text style={[globalStyles.textPrimary16, { alignSelf: "center", marginVertical: 20 }]}>{strings.APP_VERSION}</Text>
            </View>
        </View>
    );
}

export default CustomDrawer;

