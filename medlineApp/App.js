import React from 'react'
import { Button, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from "./assets/styles/App.scss"

class HomeScreen extends React.Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>Home Screen</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text className={styles.blue}>A blue background text with SCSS</Text>
        <Button
          title="Go to Other Screen"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </View>
    )
  }
}

class OtherScreen extends React.Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>Other Screen</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text className={styles.blue}>This is another blue Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Other')}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}


