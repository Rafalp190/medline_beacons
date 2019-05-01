import React from 'react'
import { Button, Text, View, AsyncStorage } from 'react-native'
import MyBar from './utils/MyBar'
import styles from '../assets/styles/App.scss'

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  
  componentDidMount() {
    //TODO db interaction
  }


  render() {
    return (
      <View className={styles.container}>
        <MyBar title="Medline Beacons" subtitle="Home" navigation={this.props.navigation} />
        <View style={{ height: 10 }} />
      </View>
    )
  
  }
}

export default HomeScreen
