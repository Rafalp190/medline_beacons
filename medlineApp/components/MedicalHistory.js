import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../assets/styles/App.scss'

class MedicalHistory extends React.Component {
  static navigationOptions = {
    title: 'Medical History',
  };

  render() {
    const { navigation } = this.props
    const history = navigation.getParam('history', 'NO-History')
    const name = history.name
    const age = history.age
    const sex = history.sex

    return (
      <View className={styles.container}>
        <Text className={styles.subtitle}> Basic Information </Text>
        <Text> Name:  {name}</Text>
        <View className={styles.horizontalFlex}>
        <Text> Age:  {age}</Text>
        <Text> Sex:  {sex === 0 ? 'Male': 'Female'}</Text>
        </View>
      </View>
    )
  }
}

export default MedicalHistory
