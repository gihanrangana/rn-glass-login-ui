import React from 'react';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';

const AppWrapper: React.FC<AppWrapperProps> = () => {

    return (
        <>
            <StatusBar style="light" />

            <LoginScreen />
        </>
    )
}

interface AppWrapperProps {

    [key: string]: any;
}

export default AppWrapper;