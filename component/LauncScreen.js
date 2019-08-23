import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import splash from "./splash.png";

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

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
  componentWillMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("ScreenOne");
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={splash}
          style={{
            width: null,
            height: null,
            flex: 1
          }}
        />
      </View>
    );
  }
}
