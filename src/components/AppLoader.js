import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../theme';
export const AppLoader = ({
    size = 'small',
    color = colors.COLOR_ACCENT_APP,
    isLoading = false,
    style = {} }) => {

    if (isLoading) {
        return (
            <ActivityIndicator size={size}
                color={color}
                style={[styles.appLoader, style ? style : {}]} />
        );
    } else {
        return null;
    }
};


const styles = StyleSheet.create({
    appLoader: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.COLOR_HALFRANSPARENT_1,
        zIndex: 99,
    },
});
