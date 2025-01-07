import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed'
import {Text} from 'react-native'
import {ListProductScreen} from '../screens/ListProductScreen'
import {DetailProductScreen} from '../screens/DetailProductScreen'
import {WelcomeScreen} from '../screens/WelcomeScreen'
import {SplashScreen} from '../screens/SplashScreen'
import {LoginScreen} from '../screens/LoginScreen'
import {SignUpScreen} from '../screens/SignUpScreen'

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='HomeScreen'
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white',
                    }
                }}
            >
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='ListProductScreen' component={ListProductScreen}/>
                <Stack.Screen name='DetailProductScreen' component={DetailProductScreen}/>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
                <Stack.Screen name='SplashScreen' component={SplashScreen}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigation;