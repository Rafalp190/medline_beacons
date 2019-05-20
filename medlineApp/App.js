// REACT
import React from 'react'
// REDUX
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducers/Reducer'
// AXIOS REDUX MIDDLEWARE
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware'
// REACT NAVIGATION
import { createSwitchNavigator,
        createStackNavigator,
        createDrawerNavigator,
        createAppContainer } from "react-navigation"
// REACT PAPER
import { Provider as PaperProvider } from 'react-native-paper'
// COMPONENTS
import HomeScreen from './components/HomeScreen'
import DoctorHomeScreen from './components/DoctorHomeScreen'
import MedicalHistory from './components/MedicalHistory'
import LoginScreen from './components/LoginScreen'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import MyDrawer from './components/utils/MyDrawer'
import DoctorDrawer from './components/utils/DoctorDrawer'
import Settings from './components/utils/Settings'


const client = axios.create({
  baseURL: 'http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api',
  responseType: 'json'
})

const store = createStore(
  Reducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
  )

const AuthStack = createStackNavigator({
  SignIn: LoginScreen
})

const AppNavigator = createDrawerNavigator({
  Home: HomeScreen,
  History: MedicalHistory,
  Settings: Settings
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

const DoctorNavigator = createDrawerNavigator({
  Home: DoctorHomeScreen,
  Patients : DoctorHomeScreen,
  Settings: Settings
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
    contentComponent: DoctorDrawer,
  },
)

const AppContainer = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppNavigator,
  Doctor: DoctorNavigator,
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
      history: {
        name: "Pedro Páramo Flores", 
        age: 27,
        sex: 0,
        recent_diagnosis: {},
        chronic_conditions: {},
        medical_history: {},
      },
    }
  }

  componentDidMount(){
    //TODO db interaction
    console.log("Did mount app")
  }
  render() {

    return (
      <Provider store={ store }>
        <PaperProvider>
          <AppContainer screenProps={{
            history: this.state.history
            }}/>
        </PaperProvider>
      </Provider>
    )
  }
}


