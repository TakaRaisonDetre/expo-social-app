import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStackScreen from './src/stack/appStackScreen'

import {UserProvider} from './src/context/UserContext'
import {FirebaseProvider} from './src/context/FirebaseContext'

export default App =()=>{
console.log("running")
  return (
    <FirebaseProvider>
    <UserProvider>
    <NavigationContainer>
       <AppStackScreen/>
    </NavigationContainer>
    </UserProvider>
    </FirebaseProvider>
   
  )
}