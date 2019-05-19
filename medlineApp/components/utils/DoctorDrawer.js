import React, { Component } from 'react'
import {NavigationActions} from 'react-navigation'
import { Text, View, StyleSheet, ImageBackground, AsyncStorage } from 'react-native'
import { Drawer, Avatar } from 'react-native-paper'
import styles from '../../assets/styles/App.scss'

class DoctorDrawer extends Component {

  navigateToScreen = ( route ) =>(
    () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  })
  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }

  render () {
    return (
      <View className={styles.container}>
        <View className={styles.headerContainer}>
                <ImageBackground source={require('../../assets/images/drawer-cover.png')} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Avatar.Icon icon="person" style={{marginLeft: '5%' }}/>
                </ImageBackground>
        </View>
        <View className={styles.screenContainer}>
          <Drawer.Section>
            <Drawer.Item
              label="Home"
              icon="home"
              onPress={this.navigateToScreen('Home')}
            />
            <Drawer.Item
              label="Patients"
              icon="people"
              onPress={() => this.props.navigation.navigate('Patients')}
            />
          </Drawer.Section>
        </View>
        <View className={styles.footerContainer}> 
        <Drawer.Section>
            <Drawer.Item
              label="Settings"
              icon="settings"
              onPress={() => this.props.navigation.navigate('Settings', {
                bluetooth: this.props.screenProps.bluetooth, bluetoothState: this.props.screenProps.enableBluetooth})}
            />
            <Drawer.Item
              label="Log Out"
              icon="vpn-key"
              onPress={this._signOutAsync}
            />
          </Drawer.Section>
        </View>
      </View>
    )
  }
} 

export default DoctorDrawer