/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/components/public/login';
import Register from './src/components/public/register';

const AppNavigator = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: "Login"
  }
)
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
 render() {
   return <AppContainer />
 }
}
