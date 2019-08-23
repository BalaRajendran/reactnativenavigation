import React from "react";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import AppNavigation from "./App";
import { BackHandler, Alert, ToastAndroid } from "react-native";

// here is our redux-aware our smart component
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: ""
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton() {
    Alert.alert(
      "Exit",
      "Do you want to exit ?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return false;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            BackHandler.exitApp();
          }
        }
      ],
      { cancelable: false }
    );
    return true;
  }
  render() {
    return <AppNavigation />;
  }
}

export default Navigation;
