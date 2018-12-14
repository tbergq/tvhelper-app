// @flow strict

import { createStackNavigator } from 'react-navigation';

import FavoritesScreen from '../screens/FavoritesScreen';
import defaultOptions from './NavigationOptions';

export default createStackNavigator(
  {
    Favorites: FavoritesScreen,
  },
  {
    initialRouteName: 'Favorites',
    ...defaultOptions,
  },
);
