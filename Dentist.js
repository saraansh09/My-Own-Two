import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  Image,
  Linking,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import RNLocation from 'react-native-location';
import PropTypes from 'prop-types';

const googleUrl = 'https://www.google.com/search?rlz=1C1CHBF_enIN708IN708&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00dlWjvq_ugmoyPYmi87VIJ4jenXQ:1628932841586&q=dental+clinics+in+'

const MyView = (props) => {
  const { children, hide, style } = props;
  if (hide) {
    return null;
  }
  return (
    <View {...this.props} style={style}>
      {children}
    </View>
  );
};

MyView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ])
    ),
  ]).isRequired,
  hide: PropTypes.bool,
};

export default class DentistScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      area: '',
      isHidden: false,
      locationLink: '',
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/okay.jpg')}
          style={{ width: 325, height: 520, resizeMode: 'cover' }}>
          <Text
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              alignSelf: 'center',
            }}>
            Dentistry Screen
          </Text>

          <MyView hide={this.state.isHidden}>
            <View
              style={{
                backgroundColor: 'grey',
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginTop: 100,
                borderColor: 'red',
              }}>
              <TextInput
                style={{
                  alignItems: 'center',
                  textDecorationColor: 'green',
                }}
                placeholder={'enter city name'}
                onChangeText={(text) => {
                  this.setState({ area: text });
                }}
                value={this.state.area}
              />
            </View>
          </MyView>
          <TouchableOpacity
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              alignSelf: 'center',
              marginTop: 50,
            }}
            onPress={() => {
              this.setState({
                isHidden: true,
              });
              Linking.openURL(
                `${googleUrl}${this.state.area}`
              );
            }}>
            <Text> GET MAP </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              alignSelf: 'center',
              marginTop: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text> Prev Screen </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
