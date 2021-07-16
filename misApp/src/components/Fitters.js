import React from 'react';
import { View, Text, StatusBar, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import { Ionicons, Feather, FontAwesome5, AntDesign, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import { Image, Button } from 'react-native-elements';

export default function Fitters({ navigation }){
    const {width, height} = Dimensions.get('screen');
    return (
        <View style={{ height: height, width: width, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <View style={{ height: height*0.12, width: width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#000000' }}>
                <MaterialIcons onPress={()=> navigation.navigate('Home')} size={width/15} name='arrow-back' color='#ffffff' style={{ marginLeft: 15, marginBottom: 10 }} />
                <Button title='+  Create New Fitter' TouchableComponent={ TouchableOpacity } containerStyle={{ marginBottom: height*0.007, marginRight: 10 }} buttonStyle={{ height: height*0.05, width: width/2, borderRadius: 25, backgroundColor: '#32a852'  }}
                    titleStyle={{ fontSize: width/25, color: '#ffffff' }} onPress={()=> {
                        //
                        alert('jiiik');
                        }
                    } />
            </View>
            <View style={{ height: height*0.829, width: width,  }}>
                <View style={{ height: height*0.724, width: width-10, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff20', borderRadius: 15, marginTop: 7 }}>
                </View>
            </View>
            <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true} />
        </View>
    )
}
