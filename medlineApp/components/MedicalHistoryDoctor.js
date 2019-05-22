import React from 'react'
import Axios from 'axios'
import { Text, View, AsyncStorage, ScrollView } from 'react-native'
import { Title, Subheading, Divider, List, TextInput, IconButton } from 'react-native-paper'
import styles from '../assets/styles/App.scss'
import MyBar from './utils/MyBar'


class MedicalHistoryDoctor extends React.Component {
  state = {
    myInfo: {},
    history: [],
    text: '',
  }

  async getBasicInfo() {
    const self = this
    const { navigation } = this.props;
    const token = navigation.getParam('token', 'NO-ID');
    await Axios.get('http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api/user/me/',
    { headers: { Authorization: `Token ${token}`}}
    ).then(function(response){
      self.setState({
        myInfo: response.data
      })
    }).catch(function(error){
    })
    
  }

  async getMedicalHistory() {
    const self = this
    const { navigation } = this.props;
    const token = navigation.getParam('token', 'NO-ID');
    await Axios.get('http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api/history/history/',
    { headers: { Authorization: `Token ${token}`}}
    ).then(function(response){
      self.setState({
        history: response.data
      })
    }).catch(function(error){
      console.log(error.response.data)
    })
    
  }

  async setNewHistory(){
    const self = this
    const { navigation } = this.props;
    const token = navigation.getParam('token', 'NO-ID');
    const hist = self.state.history
    console.log('inside send')
    await Axios.post('http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api/history/history/',
    {medical_history: this.state.text},
    { 
      headers: { 
        Authorization: `Token ${token}`
      },
    }).then(function(response){
      console.log('sent post')
      hist.push(response.data)
      self.setState({
        history: hist,
        text: ''
      })
    }).catch(function(error){
      console.log(error.response.data)
    })


  }
  
  componentDidMount(){
    this.getBasicInfo()
      this.getMedicalHistory()
  }


  render() {
    return (
      <View className={styles.container}>
          <MyBar title="Medline Beacons" subtitle="Medical History" navigation={this.props.navigation}/>
          <View style={{ height: 10 }} />
          <Title className={styles.subtitle}> Basic Information </Title>
          <View style={{ height: 5 }} />
          <Divider />
          <View style={{ height: 5 }} />
          <View className={styles.contained}>
            <Subheading className={styles.subtext}>Name:</Subheading>
            <Text className={styles.history}>{this.state.myInfo.name}</Text>
          </View>
          <View className={styles.horizontalFlex}>
            <Subheading className={styles.subtext} >Age:</Subheading>  
            <Text  className={styles.history}>{this.state.myInfo.age}</Text>
            <Subheading className={styles.subtext}>Sex:</Subheading> 
            <Text  className={styles.history}>{this.state.myInfo.sex ? 'Male': 'Female'}</Text>
          </View>
          <View style={{ height: 10 }} />
          <Title className={styles.subtitle}>Medical History</Title>
          <View style={{ height: 5 }} />
          <Divider />
          <View style={{ height: 5 }} />
          <View className={styles.horizontalFlex}>
            <TextInput
              label='Add New Diagnosis'
              mode='outlined'
              style={{width: '80%'}}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
            <IconButton
              icon="add"
              color={'#673AB7'}
              style={{marginTop: '4%'}}
              size={24}
              onPress={() => this.setNewHistory()}
            />
          </View>
        <ScrollView className={styles.cardContainer}>
          { Array.isArray(this.state.history) ?
            this.state.history.map((hist, index) => (
              <List.Item
                key={index}
                title={'Entrada: '+ (index+1)}
                description={hist.medical_history}
                left={props => <List.Icon color={'#673AB7'} icon="keyboard-arrow-right" />}
              />
              )) : 
              console.log("")
          }
        </ScrollView>
      </View>
    )
  }
}

export default MedicalHistoryDoctor
