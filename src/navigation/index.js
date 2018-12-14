// @flow strict

import * as React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import SearchStack from './stacks/SearchStack';
import FavoritesStack from './stacks/FavoritesStack';

const tabs = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons color={tintColor} name="search" size={20} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons color={tintColor} name="favorite" size={20} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#222',
      },
      activeTintColor: '#337ab7',
    },
  },
);

export default createAppContainer(tabs);
