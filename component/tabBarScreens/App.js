import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import ScreenThree from "./ScreenThree";
export default (TabScreenNavigator = TabNavigator(
  {
    ScreenOne: { screen: ScreenOne },
    ScreenTwo: { screen: ScreenTwo },
    ScreenThree: { screen: ScreenThree }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "ScreenOne"
  },
  {
    tabBarOptions: {
      activeTintColor: "#7567B1",
      labelStyle: {
        fontSize: 16,
        fontWeight: "600"
      }
    }
  }
));
