import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { acceptPatient, revokePatient } from '../actions/Actions'
import { Text, View, AsyncStorage, ScrollView } from 'react-native'
import { Card, Avatar, Button, Divider, Title } from 'react-native-paper';

import MyBar from './utils/MyBar'
import styles from '../assets/styles/App.scss'

class DoctorHomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View className={styles.container}>
        <MyBar title="Medline Beacons" subtitle="Home" navigation={this.props.navigation} />
        <View style={{ height: 10 }} />
        <ScrollView className={styles.cardContainer}>
          <View className={styles.cardContainer}>
            <View style={{ height: 3 }} />
            <Title className={styles.subtitle} > Approved Patients </Title>
            <View style={{ height: 3 }} />
            <Divider className={ styles.card } />
            <View style={{ height: 3 }} />
          {
            this.props.patients.myPatients.map((doctor, index) => (
            <View  key={index}>
              <Card className={ styles.card }>
                <Card.Title title={ doctor.name } left={(props) => <Avatar.Icon {...props} icon="person" />} />
                <Card.Actions>
                  <Button onPress={() => this.props.revokePatient(index)}>Remove Patient</Button>
                  <Button onPress={() => this.props.navigation.navigate('PatientHistory', {token: doctor.token})}>View History</Button>
                </Card.Actions>
              </Card>
              <Divider className={ styles.card } />
            </View>
              
            ))
          }
          </View>
          <View  className={styles.cardContainer}>
            <View style={{ height: 3 }} />
            <Title className={styles.subtitle} > Patient Requests </Title>
            <View style={{ height: 3 }} />
            <Divider className={ styles.card } />
            <View style={{ height: 3 }} />
          
          {
            this.props.patients.nearbyPatients.map((doctor, index) => (
              <View  key={index}>
                <Card className={ styles.card }>
                  <Card.Title title={ doctor.name } left={(props) => <Avatar.Icon {...props} icon="person-add" />} />
                  <Card.Actions>
                    <Button onPress={() => this.props.acceptPatient(index)}>Approve Request</Button>
                  </Card.Actions>
                </Card>
                <Divider className={ styles.card } />
              </View>
            ))
          }
          </View>

        </ScrollView>
      </View>
    )
  
  }
}

const mapStateToProps = (state) => {
  const { patients } = state
  return { patients }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    acceptPatient, revokePatient
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(DoctorHomeScreen)
