import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 


import styles from './LoginForm.scss';

const LoginForm: React.FC<LoginFormProps> = () => {

    const [loading,setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        },1000)
    }

    const handleSignUp = () => {

    }

    return (
        <View className={styles.login}>

            <Input
                inputContainerStyle={styles.loginInput}
                inputStyle={{color: 'white'}}
                placeholder="Username or Email"
                keyboardType={"email-address"}
                leftIcon={<Feather name="user" size={24} className={styles.icon}/>}
            />

            <Input
                inputContainerStyle={styles.loginInput}
                inputStyle={{color: 'white'}}
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={<Feather name="lock" size={24} className={styles.icon}/>}
            />


            <Button title="Login" buttonStyle={styles.button} loading={loading} onPress={handleLogin}/>
            <Button title="Sign Up" buttonStyle={styles.button} onPress={handleSignUp} type={"outline"}/>
        </View>
    )

}

interface LoginFormProps {

    [key: string]: any
}

export default LoginForm;