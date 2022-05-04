import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../screens/Splash';
import AuthNav from './AuthNav';
import Dashboard from '../screens/Dashboard';
import CustomDrawerContent from '../components/CustomDrawer';
import SignIn from '../screens/signIn';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeNav"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="HomeNav" component={Dashboard} />
            <Drawer.Screen name="main" component={MainStackNav} />
            <Drawer.Screen name="SingIn" component={SignIn} />
            <Drawer.Screen name="AuthNav" component={AuthNav} />
        </Drawer.Navigator>
    )
}
const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Splash"
                    drawerContent={(props) => <CustomDrawerContent {...props} />
                    }
                >
                    <Drawer.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Drawer.Screen name="HomeNav" component={Dashboard} />
                    {/* <Drawer.Screen name="main" component={MainStackNav} /> */}
                    <Drawer.Screen name="AuthNav" component={AuthNav} options={{ headerShown: false }} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
const MainStackNav = () => {
    return (
        <AppStack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <AppStack.Screen name="Splash" component={Splash} />
            <AppStack.Screen name="AuthNav" component={AuthNav} options={{ headerShown: false }} />
            <AppStack.Screen name="HomeNav" component={Dashboard} />
        </AppStack.Navigator>
    );
};



export default AppNavigator;
