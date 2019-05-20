import React from 'react'
import { Text, View, AsyncStorage, Image, KeyboardAvoidingView} from 'react-native'
import Axios from 'axios'
import { Button, TextInput } from 'react-native-paper';
import styles from "../assets/styles/App.scss"


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: 'doctor@gmail.com',
    password: 'doctor',
    message: '',
  }



  render() {
    return (
      <KeyboardAvoidingView className={ styles.loginContainer } behavior="padding" enabled>
        <Image className={ styles.image } source={require('../assets/images/MedlineLogo.png')} />
        <TextInput className={ styles.singleRowInput }
          label='Email'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput className={ styles.singleRowInput }
          secureTextEntry
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Text>{ this.state.message }</Text>
        <Button mode="contained" onPress={this._signInAsync} >
          Sign In
        </Button>
        <View style={{ height: 70 }} />
      </KeyboardAvoidingView>
    );
  }

  _signInAsync = async () => {
    const self = this
    const user = String(this.state.username)
    const pass = String(this.state.password)
    await Axios.post('http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api/user/token/',
    {
      email: user,
      password: pass
    }
    ).then(async function (response){
      await AsyncStorage.setItem('userToken', response.data.token)
      
      if (response.data.is_doctor) {
        self.props.navigation.navigate('Doctor')
      } else {
        self.props.navigation.navigate('App')
      }
      
    }).catch(function(error){
      const err = error
      self.setState({
        username: '',
        password: '',
        message: err.response.data.non_field_errors[0]
      })
      
    })
    
  };
}

export default LoginScreen
