// @flow strict

import { createStackNavigator } from 'react-navigation';

import FavoritesScreen from '../screens/FavoritesScreen';
import defaultOptions from './NavigationOptions';
import TvShowScreen from '../screens/TvShowScreen';
import EpisodeScreen from '../screens/EpisodeScreen';

export default createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    TvFavorite: TvShowScreen,
    Episode: EpisodeScreen,
  },
  {
    initialRouteName: 'Favorites',
    ...defaultOptions,
  },
);
