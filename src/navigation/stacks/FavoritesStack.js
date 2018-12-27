// @flow strict

import { createStackNavigator } from 'react-navigation';

import FavoritesScreen from '../screens/FavoritesScreen';
import defaultOptions from './NavigationOptions';
import SharedScreens from './SharedScreens';

export default createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    ...SharedScreens,
  },
  {
    initialRouteName: 'Favorites',
    ...defaultOptions,
  },
);
