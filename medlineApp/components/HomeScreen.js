import React from 'react'
import { Button, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../assets/styles/App.scss'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props)
    this.state = {
      username: "pepe27",
      isDoctor: false,
      history: {
        name: "Pedro Páramo", 
        age: 27,
        sex: 0,
        recent_diagnosis: {},
        chronic_conditions: {},
        medical_history: {},
      }
    }
  }
  
  componentDidMount() {
    //TODO db interaction
    console.log("componentMounted PrintShit")
    console.log("This is where I load all of the medical history crap")
  }

  render() {
    return (
      <View className={styles.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text className={styles.blue}>A blue background text with SCSS</Text>
        <Button
          title="Go to Other Screen"
          onPress={() => this.props.navigation.navigate('Other')}
        />
        <Button
          title="Medical History"
          onPress={() => this.props.navigation.navigate('History', {
            history: this.state.history
          })}
        />
      </View>
    )
  }
}

export default HomeScreen
