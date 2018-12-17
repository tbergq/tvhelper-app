// @flow strict

import * as React from 'react';
import { Text } from '@tbergq/tvhelper-components';
import { AsyncStorage } from 'react-native';

import LoginScene from '../../scenes/login/LoginScene';

type Props = {||};
type State = {|
  isLoggedIn: boolean,
|};

const TOKEN_KEY = '@tokenKey';

export default class FavoritesScreen extends React.Component<Props, State> {
  static navigationOptions = () => ({
    title: 'Favorites',
  });

  state = {
    isLoggedIn: false,
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token != null) {
      this.setState({ isLoggedIn: true });
    }
  }

  onLogin = async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    this.setState({ isLoggedIn: true });
  };

  render() {
    if (this.state.isLoggedIn === false) {
      return <LoginScene onLogin={this.onLogin} />;
    }
    return <Text>FavoritesScreen</Text>;
  }
}
