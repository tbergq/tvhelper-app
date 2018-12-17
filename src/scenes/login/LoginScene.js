// @flow strict

import * as React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { TextInput, Text, Button } from '@tbergq/tvhelper-components';

import mutate from './LoginMutation';
import type { LoginMutationResponse } from './__generated__/LoginMutation.graphql';

type Props = {|
  +onLogin: string => void | Promise<void>,
|};

type State = {|
  username: string,
  password: string,
  isLoading: boolean,
|};

export default class LoginScene extends React.Component<Props, State> {
  state = {
    username: '',
    password: '',
    isLoading: false,
  };

  onUsernameChange = (username: string) => {
    this.setState({ username });
  };

  onPasswordChange = (password: string) => {
    this.setState({ password });
  };

  loginMutation = () => {
    this.setState({ isLoading: true });
    mutate({
      onCompleted: this.onCompleted,
      username: this.state.username,
      password: this.state.password,
    });
    Keyboard.dismiss();
  };

  onCompleted = (props: LoginMutationResponse, error: Error) => {
    this.setState({ isLoading: false });
    if (error || !props.tvHelperLogin?.success) {
      Alert.alert('Wrong username or password');
    } else if (props.tvHelperLogin?.success) {
      this.props.onLogin(props.tvHelperLogin?.token ?? '');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          value={this.state.username}
          onChangeText={this.onUsernameChange}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={this.onPasswordChange}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.row}>
          <View style={styles.buttonItem} />
          <Button text="Login" onPress={this.loginMutation} />
        </View>
        {this.state.isLoading && <ActivityIndicator />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  buttonItem: {
    flex: 1,
  },
});
