import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";

import styles from "./styles";

class ScreenOne extends Component {
  static navigationOptions = {
    // title: "Welcomwe",
    // tabBarLabel: "ScreenOne",
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require("../images/notification-icon.png")}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("TScreenOne")}
          style={[styles.button, { backgroundColor: "#7567B1" }]}
        >
          <View>
            <Text style={styles.buttonText}> Go To Screen Two </Text>
            <Text style={styles.buttonText}> Go To Scresdden Two </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ScreenOne;
