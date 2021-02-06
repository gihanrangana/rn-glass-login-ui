import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Text, View } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import LoginForm from '../components/LoginForm';
import { BlurView } from 'expo-blur';

import styles from './LoginScreen.scss';

const LoginScreen: React.FC<LoginScreenProps> = () => {

    return (

        <KeyboardAvoidingView className={styles.loginScreen}>

            <ImageBackground
                source={require('../assets/images/bg.jpg')}
                className={styles.bg}
                blurRadius={10}
            >

                <Text className={styles.heading}>Welcome</Text>

                <ImageBackground
                    source={require('../assets/images/bg.jpg')}
                    className={styles.form}
                    style={{
                        resizeMode: 'cover'
                    }}
                    imageStyle={{opacity: 0.5}}
                    blurRadius={100}
                >
                    <LoginForm />
                </ImageBackground>

            </ImageBackground>

        </KeyboardAvoidingView>
    )

}

interface LoginScreenProps {

    [key: string]: any;
}

export default LoginScreen