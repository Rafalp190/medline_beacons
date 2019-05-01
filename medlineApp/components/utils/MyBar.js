import React from 'react'
import { Appbar } from 'react-native-paper'
import styles from '../../assets/styles/App.scss'
import PropTypes from 'prop-types'

const MyBar = ({ title, subtitle, navigation }) => {
  return (
    <Appbar.Header className={styles.appBar}>
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.openDrawer()}
        accessibilityLabel="menu"
      />
      <Appbar.Content
        title={title}
        subtitle={subtitle}
      />
    </Appbar.Header>
    
  )
}
MyBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default MyBar