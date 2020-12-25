import React from "react"
import {createStackNavigator } from '@react-navigation/stack'


import SigninScreen from '../screen/SigninScreen'
import SignupScreen from '../screen/SignupScreen'

export default AuthStackScreens = ()=>{
   const AuthStack = createStackNavigator()
   
    return (
      <AuthStack.Navigator headerMode="none">
     <AuthStack.Screen name="SignIn" component ={SigninScreen}/>
     <AuthStack.Screen name="SignUp" component ={SignupScreen}/>
     
      </AuthStack.Navigator>
    )
}
