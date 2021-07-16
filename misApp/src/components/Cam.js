import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import RNMlKit from 'react-native-firebase-mlkit';

export default function Cam({ navigation }) {
    const [cameraRef, setCameraref] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { width, height } = Dimensions.get('screen');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ height: height, width: width, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
      <Camera ref={ref => setCameraref(ref)} style={{ height: (width-10)*4/3, width: width-10, borderRadius: 15 }} type={Camera.Constants.Type.back}>
        <View style={{ height: (width-10)*4/3, width: width-10, borderRadius: 15, justifyContent: 'flex-end', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={async() => {
              //
              if(cameraRef){
                //     const a = await cameraRef.getAvailablePictureSizesAsync('3:4');
                //   console.log('a: ', a);
                const photo = await cameraRef.takePictureAsync({ quality: 1, skipProcessing: false });
                console.log('photo is: ', photo);
                const deviceTextRecognition = await RNMlKit.deviceTextRecognition(photo.uri); 
                console.log('Text Recognition On-Device', deviceTextRecognition);
                /*    if (doc==='DL Front'){
                        socket.emit('getsdlfurl', (toke))
                    } else if (doc==='DL Back'){
                        socket.emit('getsdlburl', (toke))
                    } else if (doc==='Your Selfie - Face'){
                        socket.emit('getssurl', (toke))
                    } else {
                        //console.log('do nothing')
                    }
                setCapture(photo);*/
            }
            }}>
            <Entypo name='circle' size={width/5} color='#ffffff' style={{ marginBottom: 10 }} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}