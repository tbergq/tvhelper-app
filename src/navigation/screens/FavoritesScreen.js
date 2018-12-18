// @flow strict

import * as React from 'react';
import { TOKEN_KEY } from '@tbergq/tvhelper-relay';
import { AsyncStorage } from 'react-native';

import LoginScene from '../../scenes/login/LoginScene';
import FavoritesScene from '../../scenes/favorites/FavoritesScene';

type Props = {||};
type State = {|
  isLoggedIn: boolean,
|};

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
    return <FavoritesScene />;
  }
}
