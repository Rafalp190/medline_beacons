import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, AsyncStorage } from 'react-native'
import { Drawer, Avatar } from 'react-native-paper'
import styles from '../../assets/styles/App.scss'

class MyDrawer extends Component {

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
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Drawer.Item
              label="Medical History"
              icon="accessibility"
              onPress={() => this.props.navigation.navigate('History')}
            />
          </Drawer.Section>
        </View>
        <View className={styles.footerContainer}> 
        <Drawer.Section>
            <Drawer.Item
              label="Settings"
              icon="settings"
              onPress={() => this.props.navigation.navigate('Settings')}
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

export default MyDrawer
