import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/cheems.jpg')}
          style={{ width: 325, height: 600, resizeMode: 'cover' }}>
          <Text
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              alignSelf: 'center',
            }}>
            EMERGENCY APP
          </Text>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: 30,
              marginLeft: 10,
              width: 90,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EYEScreen');
              }}>
              <Image
                source={require('../assets/ENT.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>ENT Doctor</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: -95,
              marginLeft: 230,
              width: 90,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('CardioScreen');
              }}>
              <Image
                source={require('../assets/cardio.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Cardiologist</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: -100,
              marginLeft: 115,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LungScreen');
              }}>
              <Image
                source={require('../assets/pulmo.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Pulmonologist</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: 20,
              marginLeft: 230,
              width: 90,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('OncoScreen');
              }}>
              <Image
                source={require('../assets/cancer.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Oncologist</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: -95,
              marginLeft: 10,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PediaScreen');
              }}>
              <Image
                source={require('../assets/pedia.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Pediatrician</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: -95,
              marginLeft: 115,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('GynaeScreen');
              }}>
              <Image
                source={require('../assets/gynae.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Gynaecologist</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: 10,
              marginLeft: 10,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DentistScreen');
              }}
              style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/dentist.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Dentist</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: -95,
              marginLeft: 120,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DermaScreen');
              }}>
              <Image
                source={require('../assets/derma.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Dermatologist</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              color: 'green',
              backgroundColor: 'purple',
              padding: 5,
              marginTop: -95,
              marginLeft: 230,
              width: 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('FatScreen');
              }}
              style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/mota.jpeg')}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}></Image>
              <Text>Batriatician (Weight Man)</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
