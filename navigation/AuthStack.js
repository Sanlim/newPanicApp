import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import GeneralUserScreen from '../screens/GeneralUserScreen';
import PreviewScreen from '../screens/PreviewScreen';
import PanicSymtompScreen from '../screens/PanicSymtompScreen';
import PanicSymtomp1Screen from '../screens/PanicSymtomp1Screen';
import PanicSymtomp2Screen from '../screens/PanicSymtomp2Screen';
import PanicTestScreen from '../screens/PanicTestScreen';
import ResultScreen from '../screens/ResultScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PreviewScreen}>
                <Stack.Screen
                    name="Preview"
                    component={PreviewScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="GeneralUser"
                    component={GeneralUserScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="PanicSymtomp"
                    component={PanicSymtompScreen}
                    options={({ navigation }) => ({
                        title: 'โรคแพนิคอะไร',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.navigate('GeneralUser')}
                                />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="PanicSymtomp1"
                    component={PanicSymtomp1Screen}
                    options={({ navigation }) => ({
                        title: 'อาการของโรคแพนิค',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.navigate('PanicSymtomp')}
                                />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="PanicSymtomp2"
                    component={PanicSymtomp2Screen}
                    options={({ navigation }) => ({
                        title: 'การป้องกันโรคแพนิค',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.navigate('PanicSymtomp')}
                                />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="PanicTest"
                    component={PanicTestScreen}
                    options={({ navigation }) => ({
                        title: 'แบบประเมินอาการแพนิค',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.navigate('GeneralUser')}
                                />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Result"
                    component={ResultScreen}
                    options={({ navigation }) => ({
                        title: 'ผลการประเมิน',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 22,
                            fontWeight: 'bold'
                        },
                        headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome.Button
                                    name="long-arrow-left"
                                    size={25}
                                    backgroundColor="#f9fafd"
                                    color="#333"
                                    onPress={() => navigation.goBack()}
                                />
                            </View>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;