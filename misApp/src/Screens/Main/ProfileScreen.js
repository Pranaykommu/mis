import React, { useContext } from 'react';
import { View, Text, Dimensions, StatusBar, ScrollView, Pressable } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import { Button, Image } from 'react-native-elements';
import { Feather, MaterialIcons, AntDesign, Entypo, SimpleLineIcons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }){
    const { state: { profile, token }, signout } = useContext(AuthContext);
    const {width, height} = Dimensions.get('screen');
    return (
        <View style={{ height: height, width: width, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#000000' }}>
            <View style={{ height: height*0.12, width: width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#000000' }}>
                <Image style={{ marginLeft: 25, marginBottom: 10, height: width/20, width: width/10 }} source={require('../../Assets/logoNew1.png')} />
            </View>
            <View style={{ height: height*0.829, width: width,  }}>
                <View style={{ height: height*0.724, width: width-10, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 5, marginRight: 5, backgroundColor: '#ffffff20', borderRadius: 15, marginTop: 7 }}>
                    <ScrollView style={{ flex: 1, backgroundColor: '#000000' }} showsVerticalScrollIndicator={false}>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Pranay Kommu</Text>
                                    <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>+91 9618625767</Text>
                                    <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>pranaykommu@gmail.com</Text>
                                    <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                //
                                navigation.navigate('Fitters');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Manage Fitters</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Product Selling Management</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Product Management</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>States Management</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>RTO Code Management</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Vehicle Management</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>User</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Reports</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Company Details</Text>
                                    <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Change Password</Text>
                                    <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                signout();
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Log Out</Text>
                                    <AntDesign name='logout' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ height: height*0.09, width: width }}>
                            <Pressable onPress={()=>{
                                alert('hi');
                            }}>
                                <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}></Text>
                                </View>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ height: height*0.1, width: width, backgroundColor: '#000000', flexDirection: 'row', }}>
                    <View style={{ flex: 1, }}>
                        <Pressable onPress={()=> {
                            //
                            navigation.navigate('Home');
                        }}>
                            <View style={{ height: height*0.1, width: (width/2), justifyContent: 'center', alignItems: 'center' }}>
                                <SimpleLineIcons name='home' size={width/20} color='#ffffff99' />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable onPress={()=> {
                            //
                            navigation.navigate('Profile');
                        }}>
                            <View style={{ height: height*0.1, width: (width/2),justifyContent: 'center', alignItems: 'center' }}>
                                <SimpleLineIcons name='settings' size={width/20} color='#ffffff' />
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

        <View style={{ height: height, width: width, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#000000' }} showsVerticalScrollIndicator={false}>
            <View style={{ height: height*0.11, width: width, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', backgroundColor: '#000000' }}>
                <MaterialIcons onPress={()=> navigation.navigate('Home')} size={width/15} name='arrow-back' color='#ffffff' style={{ marginLeft: 15, marginBottom: 10 }} />
                <Text style={{ color: '#ffffff', fontSize: width/22, marginBottom: 10, marginLeft: 20 }}>Settings</Text>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Pranay Kommu</Text>
                        <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>+91 9618625767</Text>
                        <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>pranaykommu@gmail.com</Text>
                        <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Manage Fitters</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Product Selling Management</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Product Management</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>States Management</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>RTO Code Management</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Vehicle Management</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>User</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Reports</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Company Details</Text>
                        <Entypo name='chevron-thin-right' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Change Password</Text>
                        <Feather name='edit-2' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    signout();
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}>Log Out</Text>
                        <AntDesign name='logout' size={width/22} color='#ffffff' style={{ marginRight: 20 }} />
                    </View>
                </Pressable>
            </View>
            <View style={{ height: height*0.09, width: width }}>
                <Pressable onPress={()=>{
                    alert('hi');
                }}>
                    <View style={{ height: height*0.09, width: width-10, marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#000000', borderTopWidth: 0.182, borderTopColor: '#ffffff50', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 15, fontSize: width/24, color: '#ffffff' }}></Text>
                    </View>
                </Pressable>
            </View>
            </ScrollView>
        <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent={true} />
        </View>

*/