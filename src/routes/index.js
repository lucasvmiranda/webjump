import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

import {Home} from '../pages/Home';
import {Item} from '../pages/Item';

function LogoTitle() {
  return (
    <Image
      resizeMode="contain"
      style={{height: 50}}
      source={require('../assets/images/logo.png')}
    />
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerTitle: props => <LogoTitle {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#21386e',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              height: 75,
            },
            headerTitleAlign: 'center',
          })}
        />

        <Stack.Screen
          name="Item"
          component={Item}
          options={({navigation}) => ({
            headerTitle: props => <LogoTitle {...props} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#21386e',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              height: 75,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: 20}}
                onPress={() => navigation.navigate('Home')}>
                <Icon name="arrowleft" size={25} color={'white'} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
