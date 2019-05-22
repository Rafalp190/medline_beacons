import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { acceptDoctor, revokeDoctor } from '../actions/Actions';
import { Text, View, AsyncStorage, ScrollView } from 'react-native'
import { Card, Avatar, Button, Divider, Title } from 'react-native-paper';

import MyBar from './utils/MyBar'
import styles from '../assets/styles/App.scss'

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  
  componentDidMount() {
    //TODO db interaction
  }


  render() {
    return (
      <View className={styles.container}>
        <MyBar title="Medline Beacons" subtitle="Home" navigation={this.props.navigation} />
        <View style={{ height: 10 }} />
        <ScrollView className={styles.cardContainer}>
          <View className={styles.cardContainer}>
            <View style={{ height: 3 }} />
            <Title className={styles.subtitle} >My Doctors</Title>
            <View style={{ height: 3 }} />
            <Divider className={ styles.card } />
            <View style={{ height: 3 }} />
          {
            this.props.doctors.myDoctors.map((doctor, index) => (
            <View  key={index}>
              <Card className={ styles.card }>
                <Card.Title title={ 'Dr. '+doctor.name } left={(props) => <Avatar.Icon {...props} icon="person" />} />
                <Card.Actions>
                  <Button onPress={() => this.props.revokeDoctor(index)}>Revoke Permissions</Button>
                </Card.Actions>
              </Card>
              <Divider className={ styles.card } />
            </View>
              
            ))
          }
          </View>
          <View  className={styles.cardContainer}>
            <View style={{ height: 3 }} />
            <Title className={styles.subtitle} >Nearby Doctors</Title>
            <View style={{ height: 3 }} />
            <Divider className={ styles.card } />
            <View style={{ height: 3 }} />
          
          {
            this.props.doctors.nearbyDoctors.map((doctor, index) => (
              <View  key={index}>
                <Card className={ styles.card }>
                  <Card.Title title={ 'Dr. '+doctor.name } left={(props) => <Avatar.Icon {...props} icon="local-hospital" />} />
                  <Card.Actions>
                    <Button onPress={() => this.props.acceptDoctor(index)}>Share Medical History</Button>
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
  const { doctors } = state
  return { doctors }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    acceptDoctor, revokeDoctor
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
