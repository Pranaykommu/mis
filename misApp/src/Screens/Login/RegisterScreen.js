import React from 'react';
import { View, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';

export default function RegisterScreen({ navigation }){

    const {width, height} = Dimensions.get('screen');

    return (
        <View style={{ height: height, width: width, backgroundColor: '#ffffff00', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../Assets/logoNewCircle.png')} style={{ height: width/2, width: width/2, marginBottom: height*0.1 }} />
            <Button title='Dealer' TouchableComponent={ TouchableOpacity } containerStyle={{ marginBottom: height*0.022 }} buttonStyle={{ height: height*0.07, width: width/1.3, borderRadius: 25, backgroundColor: '#ffffff'  }}
                    titleStyle={{ fontSize: width/25, color: '#000000' }} onPress={()=>{
                        navigation.navigate('SignIn')
                    }} />
            <Button title='Distributor' TouchableComponent={ TouchableOpacity } containerStyle={{ marginBottom: height*0.022 }} buttonStyle={{ height: height*0.07, width: width/1.3, borderRadius: 25, backgroundColor: '#ffffff'  }}
                    titleStyle={{ fontSize: width/25, color: '#000000' }} onPress={()=>{
                        navigation.navigate('SignIn')
                    }} />
            <Button title='Admin' TouchableComponent={ TouchableOpacity } containerStyle={{ marginBottom: height*0.022 }} buttonStyle={{ height: height*0.07, width: width/1.3, borderRadius: 25, backgroundColor: '#ffffff'  }}
                    titleStyle={{ fontSize: width/25, color: '#000000' }} onPress={()=>{
                        navigation.navigate('SignIn')
                    }} />
            <Button title='Fitter' TouchableComponent={ TouchableOpacity } containerStyle={{ marginBottom: height*0.022 }} buttonStyle={{ height: height*0.07, width: width/1.3, borderRadius: 25, backgroundColor: '#ffffff'  }}
                    titleStyle={{ fontSize: width/25, color: '#000000' }} onPress={()=>{
                        navigation.navigate('SignIn')
                    }} />
            <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent={true} />
        </View>
    )
}

/*

            <Image source={require('../../Assets/logoNew1.png')} style={{ height: width*0.53/1.5, width: width/1.5 }} />
            */