import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./assets/styles/App.scss";

export default class App extends React.Component {
  render() {
    return (
      <View className={styles.container}>
          <Text className={styles.blue}>A blue background text</Text>
          <Text>Hello Test uupdate! ok this works</Text>
      </View>
    );
  }
}
