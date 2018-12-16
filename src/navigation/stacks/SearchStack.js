// @flow strict

import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import defaultOptions from './NavigationOptions';
import TvShowScreen from '../screens/TvShowScreen';

export default createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    TvShow: {
      screen: TvShowScreen,
    },
  },
  {
    initialRouteName: 'Search',
    ...defaultOptions,
  },
);
