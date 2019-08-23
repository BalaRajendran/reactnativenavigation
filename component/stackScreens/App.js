import React from "react";

import { StackNavigator } from "react-navigation";
import TScreenOne from "./ScreenOne";
import TScreenTwo from "./ScreenTwo";
import TScreenThree from "./ScreenThree";
import HomeTabs from "./../tabBarScreens/App";
import LaunchScreen from "./../LauncScreen";

const App = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    HomeTabs: { screen: HomeTabs },
    TScreenOne: { screen: TScreenOne },
    TScreenTwo: { screen: TScreenTwo },
    TScreenThree: { screen: TScreenThree }
  }
  // {
  //   // Default config for all screens
  //   headerMode: "none",
  //   initialRouteName: "HomeTabs"
  // }
);

export default App;
