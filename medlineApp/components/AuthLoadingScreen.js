import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import styles from "../assets/styles/App.scss"

class AuthLoadingScreen extends React.Component{
 constructor(props){
   super(props)
   this._bootstrapAsync();
 }


 _bootstrapAsync = async () => {
   const userToken = await AsyncStorage.getItem('userToken')
   this.props.navigation.navigate(userToken ? 'App' : 'Auth')
 }

 render() {
   return(
     <View>
       <ActivityIndicator />
       <StatusBar barStyle="default" />
     </View>
   )
 }
}

export default AuthLoadingScreen