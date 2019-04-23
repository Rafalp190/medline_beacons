import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider, IconButton } from 'react-native-paper';
import HomeScreen from './components/HomeScreen'
import MedicalHistory from './components/MedicalHistory'
import styles from "./assets/styles/App.scss"

class OtherScreen extends React.Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>Other Screen</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text className={styles.blue}>This is another blue Screen</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen,
  History: MedicalHistory
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6b52ae',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <IconButton
          onPress={() => this.props.navigation.openDrawer()}
          icon="menu"
          size={28}
          color="white"
        />
      ),
    },
  },
  
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    )
  }
}


