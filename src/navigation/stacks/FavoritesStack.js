// @flow strict

import { createStackNavigator } from 'react-navigation';

import FavoritesScreen from '../screens/FavoritesScreen';
import defaultOptions from './NavigationOptions';
import TvShowScreen from '../screens/TvShowScreen';

export default createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    TvFavorite: TvShowScreen,
  },
  {
    initialRouteName: 'Favorites',
    ...defaultOptions,
  },
);
