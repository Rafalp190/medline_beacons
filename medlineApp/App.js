import React from 'react'
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation"
import { Provider as PaperProvider, IconButton } from 'react-native-paper'
import HomeScreen from './components/HomeScreen'
import MedicalHistory from './components/MedicalHistory'
import LoginScreen from './components/LoginScreen'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import MyDrawer from './components/utils/MyDrawer'




const AuthStack = createStackNavigator({
  SignIn: LoginScreen
})

const AppNavigator = createDrawerNavigator({
  Home: HomeScreen,
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
    },
    contentComponent: MyDrawer,
  },
)

const AppContainer = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppNavigator,
  Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading'
}
));

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "pepe27",
      isDoctor: false,
      history: {
        name: "Pedro Páramo Flores", 
        age: 27,
        sex: 0,
        recent_diagnosis: {},
        chronic_conditions: {},
        medical_history: {},
      }
    }
  }

  componentDidMount(){
    //TODO db interaction
    console.log("Did mount app")
  }
  render() {
    return (
      <PaperProvider>
        <AppContainer screenProps={{history: this.state.history}}/>
      </PaperProvider>
    )
  }
}


