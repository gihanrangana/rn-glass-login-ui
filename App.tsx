import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

import AppWrapper from './src/AppWrapper';

import styles from "./App.scss";

const fetchFonts = async () => {

  try {
    await SplashScreen.preventAutoHideAsync();

    return await Font.loadAsync({
      'MontserratRegular': require("./src/assets/fonts/Montserrat-Regular.otf"),
      'MontserratLight': require("./src/assets/fonts/Montserrat-Light.otf"),
      'MontserratSemiBold': require("./src/assets/fonts/Montserrat-SemiBold.otf"),
      'MontserratBold': require("./src/assets/fonts/Montserrat-Bold.otf"),
      'PoppinsRegular':require('./src/assets/fonts/Poppins-Regular.ttf'),
      'PoppinsLight' : require("./src/assets/fonts/Poppins-Light.ttf"),
      'PoppinsSemiBold': require("./src/assets/fonts/Poppins-Medium.ttf"),
      'PoppinsBold': require("./src/assets/fonts/Poppins-Bold.ttf")
    });

  } catch (e) {
    console.warn(e);
    await SplashScreen.hideAsync();
  }
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  const [defaultBackground, setDefaultBackGround] = useState(true);

  if (!fontLoaded) {

    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
      onError={console.warn}
    />

  }

  const classes: any = [styles.container];

  if (!defaultBackground) {
    classes.push(styles['containerAlt']);
  }

  return (

    <AppWrapper/>

  );
}