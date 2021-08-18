import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import CardioScreen from './Screens/Cardio';
import DentistScreen from './Screens/Dentist';
import DermaScreen from './Screens/Derma'
import EYEScreen from './Screens/EYE'
import GynaeScreen from './Screens/Gynae'
import LungScreen from './Screens/Lungs'
import OncoScreen from './Screens/Onco'
import PediaScreen from './Screens/Pedia'
import FatScreen from './Screens/WeightMan'

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  EYEScreen:EYEScreen,
  CardioScreen:CardioScreen,
  DentistScreen:DentistScreen,
  DermaScreen:DermaScreen,
  LungScreen:LungScreen,
  FatScreen:FatScreen,
  OncoScreen:OncoScreen,
  PediaScreen:PediaScreen,
  GynaeScreen:GynaeScreen
});

const AppContainer = createAppContainer(AppNavigator);