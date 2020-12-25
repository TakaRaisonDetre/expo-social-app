import React, {useContext} from 'react'
import {createStackNavigator } from '@react-navigation/stack'

import {UserContext} from '../context/UserContext'


import AuthStackScreens from './authStackScreen'

import  MainStackScreen from './mainStackScreen'

import LoadingScreen from '../screen/LoadingScreen'

export default  AppStackScreen=()=> {
    
    const AppStack = createStackNavigator()
    const [user] = useContext(UserContext)

    return (
         <AppStack.Navigator headerMode="none">
           {user.isLoggedIn === null ? (
             <AppStack.Screen name="Loading" component={LoadingScreen}/>
           ): user.isLoggedIn ? (
            <AppStack.Screen name="Main" component={MainStackScreen}/>
           ):(
            <AppStack.Screen name="Auth" component={AuthStackScreens}/>
           )}
         </AppStack.Navigator>
        )
    
}

