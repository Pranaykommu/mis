import React, { useEffect, useContext } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Context as AuthContext } from '../context/AuthContext';
import { Image } from 'react-native-elements/dist/image/Image';


export default function ResolveAuthScreen({ navigation }){
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(()=>{
        tryLocalSignin();
    },[])


    return null;
}