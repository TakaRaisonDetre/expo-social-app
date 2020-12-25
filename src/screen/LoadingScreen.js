import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'

import Text from '../components/text'

import LottieView from 'lottie-react-native'

import {UserContext} from '../context/UserContext'
import {FirebaseContext} from '../context/FirebaseContext'



export default LoadingScreen = () => {
const [_, setUser] = useContext(UserContext)
const firebase = useContext(FirebaseContext)

    useEffect(()=>{
    setTimeout(async()=>{
       const user = firebase.getCurrentUser()

       if(user) {
           const userInfo = await firebase.getUserInfo(user.uid) 
         
           setUser({
               isLoggedIn: true,
               email:userInfo.email,
               uid:user.uid,
               username: userInfo.username,
               profilePhotoUrl : userInfo.profilePhotoUrl
           })
          
        } else {
            setUser(state=>({...state, isLoggedIn:false}))
        }
   
    },1500)
 },[])
 
 
    return (
       <Container>
           <Text title color="#FFFFFF">
               SocialApp
           </Text>
           <LottieView 
            source ={require("../../assets/42348-download-2.json")}
            autoPlay
            loop
            style={{width:"80%"}}
           />
          
       </Container>
    );
}


const Container = styled.View`
flex:1;
align-items:center;
justify-content:center;
background-color:#222222;
`;