import React, { useState, useContext } from 'react';
import { View, Text, Dimensions, StatusBar, Modal, Pressable, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../../context/AuthContext';

export default function SignInScreen({ navigation }){
   // const user = navigation.getParam('User');
    const {width,height} = Dimensions.get('screen');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [ppressed, setPpressed] = useState(false);
    const [otppressed, setOtppressed] = useState(false);
    const { state: { token, errorMessage }, signin, verify, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={{ flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: 22, marginBottom: 70, color: '#000000' }}>Your Registered Phone Number</Text>
        <Input
            inputStyle={{ marginLeft: 5, marginRight: 5, color: '#000000' }}
            containerStyle={{ width: width/1.1 }}
            leftIcon={<Text style={{ color: 'black', fontSize: 13.7, }}>+91</Text>}
            value={phone}
            onChangeText={setPhone}
            keyboardType='number-pad'
            maxLength={10}
            autoCapitalize='none'
            autoFocus={true}
            autoCorrect={false} />
        {errorMessage!='' ? (<Text style={{ fontSize: 10, color: '#ff2b00', marginRight: 10, marginLeft: 10, marginTop: 5, marginBottom: 5 }}>{errorMessage}</Text>) : null}
        {phone.length>9 
        ? ppressed===false ? (
            <Button title='Continue' TouchableComponent={ TouchableOpacity } containerStyle={{ marginTop: height*0.022 }} buttonStyle={{ height: height*0.06, width: width/1.5, borderRadius: 25, backgroundColor: '#000000'  }}
            titleStyle={{ fontSize: width/25, color: '#ffffff' }} onPress={()=> {
                if(phone!=null && phone.length===10){
                  setPpressed(true);
                  signin({ phone: phone });
                }
              }} />
        ) : null
        : null}
        <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent={true} />
                <Modal animationType='slide' transparent={true} visible={token===null ? false : true} statusBarTranslucent={true}
                hardwareAccelerated={true} onRequestClose={()=> {
                  setPpressed(false);
                  setOtppressed(false);
                  clearErrorMessage();
                }}>
                  <View style={{ height: height, width: width, backgroundColor: '#00000070',  }}>
                    <Pressable onPress={async()=> {
                  setPpressed(false);
                  setOtppressed(false);
                  clearErrorMessage();
                }}>
                    <View style={{ height: height*0.1, width: width, justifyContent: 'flex-start', alignItems: 'center' }}>
                    </View>
                    </Pressable>
                    <View style={{ height: height*0.9, width: width, backgroundColor: '#ffffff', borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: width/20, marginTop: 90, textAlign: 'center', color: '#000000', }}>Enter Otp sent to</Text>
                        <Text style={{ fontSize: width/22, marginBottom: 15, textAlign: 'center', color: '#00000099', }}>+91 {phone}</Text>
                        <Input 
                        inputStyle={{ textAlign: 'center', }}
                        containerStyle={{ width: width/1.6 }}
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType='number-pad'
                        maxLength={6}
                        autoCapitalize='none'
                        autoFocus={true}
                        autoCorrect={false} />
                        {errorMessage!='' ? (<Text style={{ fontSize: 10, color: '#ff2b00', marginRight: 10, marginLeft: 10, marginTop: 5, marginBottom: 5 }}>{errorMessage}</Text>) : null}
                        {otp.length>5 
                        ? otppressed===false ? (
                            <Button title='Verify' TouchableComponent={ TouchableOpacity } containerStyle={{ marginTop: height*0.022 }} buttonStyle={{ height: height*0.06, width: width/1.5, borderRadius: 25, backgroundColor: '#000000'  }}
                            titleStyle={{ fontSize: width/25, color: '#ffffff' }} onPress={()=> {
                                if(phone!=null && otp!=null){
                                  setOtppressed(true);
                                  verify({ phone: phone, otp: otp });
                                }
                              }} />
                        ) : null
                        : null}
                    </View>
                  </View>
                </Modal>
    </View>
    )
}

