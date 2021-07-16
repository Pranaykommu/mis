import React from 'react';
import { View, Text, StatusBar, Dimensions, ScrollView, Pressable } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import { Ionicons, Feather, FontAwesome5, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { Image } from 'react-native-elements';

export default function HomeScreen({ navigation }){
    const {width, height} = Dimensions.get('screen');
    return (
        <View style={{ height: height, width: width, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#000000' }}>
            <View style={{ height: height*0.12, width: width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#000000' }}>
                <Image style={{ marginLeft: 25, marginBottom: 10, height: width/20, width: width/10 }} source={require('../../Assets/logoNew1.png')} />
            </View>
            <View style={{ height: height*0.829, width: width,  }}>
                <View style={{ height: height*0.724, width: width-10, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff20', borderRadius: 15, marginTop: 7 }}>
                </View>
                <View style={{ height: height*0.1, width: width, backgroundColor: '#000000', flexDirection: 'row', }}>
                    <View style={{ flex: 1, }}>
                        <Pressable onPress={()=> {
                            //
                            navigation.navigate('Home');
                        }}>
                            <View style={{ height: height*0.1, width: (width/2), justifyContent: 'center', alignItems: 'center' }}>
                                <SimpleLineIcons name='home' size={width/20} color='#ffffff' />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable onPress={()=> {
                            //
                            navigation.navigate('Profile');
                        }}>
                            <View style={{ height: height*0.1, width: (width/2),justifyContent: 'center', alignItems: 'center' }}>
                                <SimpleLineIcons name='settings' size={width/20} color='#ffffff99' />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
            <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true} />
        </View>
    )
}



/*

                    <View style={{ height: height*0.8, width: width-10, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff20', borderRadius: 15, marginTop: 5 }}>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#000000', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, flexDirection: 'row', borderRadius: 15, }}>
                                <View style={{ flex: 1 }}></View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700' }}></Text>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700'  }}>C3</Text>
                                    <Text style={{ fontSize: width/24, color: '#ffffff99', fontWeight: '700'  }}></Text>
                                </View>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: height*0.07, width: height*0.07, borderRadius: 15 }} source={require('../../Assets/6.jpeg')} />
                                </View>
                                <View style={{ flex: 2, backgroundColor: '#ffffff20', flexDirection: 'row', borderRadius: 15, marginRight: 10 }}>
                                    <View style={{ flex: 1,  }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Available</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>30</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Today</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>7</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#000000', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, flexDirection: 'row', borderRadius: 15, }}>
                                <View style={{ flex: 1 }}></View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700' }}></Text>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700'  }}>C4</Text>
                                    <Text style={{ fontSize: width/24, color: '#ffffff99', fontWeight: '700'  }}></Text>
                                </View>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: height*0.07, width: height*0.07, borderRadius: 15 }} source={require('../../Assets/7.jpeg')} />
                                </View>
                                <View style={{ flex: 2, backgroundColor: '#ffffff20', flexDirection: 'row', borderRadius: 15, marginRight: 10 }}>
                                    <View style={{ flex: 1,  }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Available</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>30</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Today</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>7</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#000000', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, flexDirection: 'row', borderRadius: 15, }}>
                                <View style={{ flex: 1 }}></View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700' }}>50mm</Text>
                                </View>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: height*0.07, width: height*0.07, borderRadius: 15 }} source={require('../../Assets/4.jpg')} />
                                </View>
                                <View style={{ flex: 2, backgroundColor: '#ffffff20', flexDirection: 'row', borderRadius: 15, marginRight: 10 }}>
                                    <View style={{ flex: 1,  }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Available</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>30</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Today</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>7</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#000000', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, flexDirection: 'row', borderRadius: 15, }}>
                                <View style={{ flex: 1 }}></View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700' }}>50mm</Text>
                                </View>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: height*0.07, width: height*0.07, borderRadius: 15 }} source={require('../../Assets/5.jpg')} />
                                </View>
                                <View style={{ flex: 2, backgroundColor: '#ffffff20', flexDirection: 'row', borderRadius: 15, marginRight: 10 }}>
                                    <View style={{ flex: 1,  }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Available</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>30</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Today</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>7</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#000000', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, flexDirection: 'row', borderRadius: 15, }}>
                                <View style={{ flex: 1 }}></View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontSize: width/24, color: '#ffffff', fontWeight: '700' }}>50mm</Text>
                                </View>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: height*0.07, width: height*0.07, borderRadius: 15 }} source={require('../../Assets/3.jpg')} />
                                </View>
                                <View style={{ flex: 2, backgroundColor: '#ffffff20', flexDirection: 'row', borderRadius: 15, marginRight: 10 }}>
                                    <View style={{ flex: 1,  }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Available</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>30</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>Today</Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: width/24, color: '#ffffff', }}>7</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

*/

/*

                    <View style={{ height: height*0.52, width: width-10, marginLeft: 5, marginRight: 5, borderRadius: 15, marginTop: 5 }}>
                        <View style={{ flex: 1,  flexDirection: 'row' }}>
                            <View style={{ flex: 1, }}>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'   }}>
                                <Text style={{ textAlign: 'center', fontSize: width/26, color: '#000000' }}>Sold</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: width/26, color: '#000000' }}>Available</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: width/26, color: '#000000' }}>Sales Today</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: width/26, color: '#000000' }}>Sales this Month</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1,  flexDirection: 'row' }}>
                            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15 }}>
                                <Image style={{ height: width*0.12, width: width*0.12, borderRadius: 15 }} source={require('../../Assets/6.jpeg')} />
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>20</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#32a85225', margin: 8, borderRadius: 15 }}>
                                <Text>30</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>5</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>14</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1,  flexDirection: 'row' }}>
                            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15 }}>
                                <Image style={{ height: width*0.12, width: width*0.12, borderRadius: 15 }} source={require('../../Assets/7.jpeg')} />
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>20</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#32a85225', margin: 8, borderRadius: 15 }}>
                                <Text>30</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>5</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>14</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1,  flexDirection: 'row' }}>
                            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15 }}>
                                <Image style={{ height: width*0.12, width: width*0.12, borderRadius: 15 }} source={require('../../Assets/4.jpg')} />
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>20</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#32a85225', margin: 8, borderRadius: 15 }}>
                                <Text>30</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>5</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>14</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1,  flexDirection: 'row' }}>
                            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15 }}>
                                <Image style={{ height: width*0.12, width: width*0.12, borderRadius: 15 }} source={require('../../Assets/5.jpg')} />
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>20</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#32a85225', margin: 8, borderRadius: 15 }}>
                                <Text>30</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>5</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>14</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1,  flexDirection: 'row' }}>
                            <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15 }}>
                                <Image style={{ height: width*0.12, width: width*0.12, borderRadius: 15 }} source={require('../../Assets/3.jpg')} />
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>20</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#32a85225', margin: 8, borderRadius: 15 }}>
                                <Text>30</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>5</Text>
                            </View>
                            <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', margin: 8, borderRadius: 15  }}>
                                <Text>14</Text>
                            </View>
                        </View>
                    </View>




                    /////



                    <View style={{ height: height*0.52, width: width-10, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff', borderRadius: 15, marginTop: 5 }}>
                        <Text>Sold Products</Text>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#78a5e3', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>20MM Tapes</Text>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <FontAwesome5 name='tape' size={width/20} color='red' />
                                    <FontAwesome5 name='tape' size={width/20} color='white' />
                                    <FontAwesome5 name='tape' size={width/20} color='yellow' />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#78a5e3', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>50MM Tapes</Text>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <FontAwesome5 name='tape' size={width/20} color='red' />
                                    <FontAwesome5 name='tape' size={width/20} color='white' />
                                    <FontAwesome5 name='tape' size={width/20} color='yellow' />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#78a5e3', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>80MM Tapes</Text>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <FontAwesome5 name='tape' size={width/20} color='red' />
                                    <FontAwesome5 name='tape' size={width/20} color='white' />
                                    <FontAwesome5 name='tape' size={width/20} color='yellow' />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height*0.52, width: width-10, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff', borderRadius: 15, marginTop: 5 }}>
                        <Text>Available Products</Text>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#a1e378', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>20MM Tapes</Text>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <FontAwesome5 name='tape' size={width/20} color='red' />
                                    <FontAwesome5 name='tape' size={width/20} color='white' />
                                    <FontAwesome5 name='tape' size={width/20} color='yellow' />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#a1e378', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>50MM Tapes</Text>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <FontAwesome5 name='tape' size={width/20} color='red' />
                                    <FontAwesome5 name='tape' size={width/20} color='white' />
                                    <FontAwesome5 name='tape' size={width/20} color='yellow' />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: height*0.15, width: width-20, marginLeft: 5, marginRight: 5, backgroundColor: '#a1e378', borderRadius: 15,  }}>
                            <View style={{ height: height*0.06, width: width-20, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>80MM Tapes</Text>
                            </View>
                            <View style={{ height: height*0.08, width: width-20, borderRadius: 15 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                    <Text>20</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <FontAwesome5 name='tape' size={width/20} color='red' />
                                    <FontAwesome5 name='tape' size={width/20} color='white' />
                                    <FontAwesome5 name='tape' size={width/20} color='yellow' />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height*0.2, width: width-10, flexDirection: 'row', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff', borderRadius: 15, marginTop: 5 }}>
                        <View style={{ flex: 1, marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5, backgroundColor: '#fcf1a4', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Feather name='users' size={width/20} color='#000000' />
                            <Text>Total Dealers</Text>
                            <Text>50</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5, backgroundColor: '#fcf1a4', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Feather name='users' size={width/20} color='#000000' />
                            <Text>Total Distributors</Text>
                            <Text>50</Text>
                        </View>
                    </View>                    




*/