import React from 'react'
import Axios from 'axios'
import { Text, View, AsyncStorage, ScrollView } from 'react-native'
import { Title, Subheading, Divider, List } from 'react-native-paper'
import styles from '../assets/styles/App.scss'
import MyBar from './utils/MyBar'


class MedicalHistory extends React.Component {
  static navigationOptions = {
    title: 'Medical History',
  };
  state = {
    myInfo: {},
    history: {}
  }

  async getBasicInfo() {
    const self = this
    const token = await AsyncStorage.getItem('userToken')
    await Axios.get('http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api/user/me/',
    { headers: { Authorization: `Token ${token}`}}
    ).then(function(response){
      self.setState({
        myInfo: response.data
      })
    }).catch(function(error){
      console.log("woop")
    })
    
  }

  async getMedicalHistory() {
    const self = this
    const token = await AsyncStorage.getItem('userToken')
    await Axios.get('http://ec2-3-87-30-21.compute-1.amazonaws.com:8000/api/history/history/',
    { headers: { Authorization: `Token ${token}`}}
    ).then(function(response){
      self.setState({
        history: response.data
      })
    }).catch(function(error){
      console.log("woop")
    })
    
  }
  componentDidMount(){
    this.getBasicInfo()
    this.getMedicalHistory()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state.params.token) {
      this.props.retrieveCurrentUser(this.props.token);
    }
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
        <ScrollView className={styles.cardContainer}>
          <Title className={styles.subtitle}>Medical History</Title>
          <View style={{ height: 5 }} />
          <Divider />
          <View style={{ height: 5 }} />
          { Array.isArray(this.state.history) ?
            this.state.history.map((hist, index) => (
              <List.Item
                key={index}
                title={'Entrada: '+ (index+1)}
                description={hist.medical_history}
                left={() => <List.Icon color={'#673AB7'} icon="keyboard-arrow-right" />}
              />
              )) : 
              console.log("")
          }
        </ScrollView>
      </View>
    )
  }
}

export default MedicalHistory
