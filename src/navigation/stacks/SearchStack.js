// @flow strict

import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import defaultOptions from './NavigationOptions';

export default createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    ...defaultOptions,
  },
);
