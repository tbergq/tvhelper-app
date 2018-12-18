// @flow strict

import * as React from 'react';
import { TOKEN_KEY } from '@tbergq/tvhelper-relay';
import { AsyncStorage, StyleSheet } from 'react-native';
import { type Navigation } from '@tbergq/tvhelper-navigation';
import { Touchable, Text, Colors } from '@tbergq/tvhelper-components';

import LoginScene from '../../scenes/login/LoginScene';
import FavoritesScene from '../../scenes/favorites/FavoritesScene';

type Props = {|
  +navigation: Navigation<{|
    isLoggedIn: boolean,
    logout: () => Promise<void>,
  |}>,
|};
type State = {|
  isLoggedIn: boolean,
|};

const noop = () => {};

export default class FavoritesScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: Props) => {
    const isLoggedIn = navigation.getParam('isLoggedIn') ?? false;
    const logout = navigation.getParam('logout') ?? noop;

    return {
      title: 'Favorites',
      headerRight: isLoggedIn ? (
        <Touchable onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Touchable>
      ) : null,
    };
  };

  state = {
    isLoggedIn: false,
  };

  async componentDidMount() {
    this.props.navigation.setParams({ isLoggedIn: false, logout: this.logout });
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token != null) {
      this.setState({ isLoggedIn: true });
      this.props.navigation.setParams({ isLoggedIn: true });
    }
  }

  onLogin = async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    this.setState({ isLoggedIn: true });
    this.props.navigation.setParams({ isLoggedIn: true });
  };

  logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
    this.props.navigation.setParams({ isLoggedIn: false });
  };

  render() {
    if (this.state.isLoggedIn === false) {
      return <LoginScene onLogin={this.onLogin} />;
    }
    return <FavoritesScene />;
  }
}

const styles = StyleSheet.create({
  logoutText: {
    color: Colors.white,
    padding: 10,
    fontWeight: '500',
  },
});
