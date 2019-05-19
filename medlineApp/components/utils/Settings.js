import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleBluetooth } from '../../actions/Actions';
import { Text, View } from 'react-native'
import styles from '../../assets/styles/App.scss'
import MyBar from './MyBar'
import { Switch } from 'react-native-paper';


class Settings extends React.Component {
  render() {

  return (
    <View className={styles.container}>
      <MyBar title="Medline Beacons" subtitle="Settings" navigation={this.props.navigation}/>
      <View style={{ height: 10 }} />
      <Text className={styles.subtitle}> Bluetooth Settings </Text>
      <View className={styles.horizontalFlex}>
        <Text className={styles.optionText}> Enable Bluetooth Functionality:  </Text>
        <Switch
          value={this.props.bluetooth.toggle}
          onValueChange={()=> this.props.toggleBluetooth(this.props.bluetooth.toggle)}
        />
      </View>
      <Text className={styles.subtitle}> Other Settings </Text>
      <View className={styles.horizontalFlex}>
        <Text className={styles.optionText}> Come back later for more settings  </Text>
        <Switch
          value={false}
          disabled
        />
      </View>
    </View>

  )
  }
}
const mapStateToProps = (state) => {
  const { bluetooth } = state
  return { bluetooth }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleBluetooth
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
