// @flow strict

import React from 'react';
import { StatusBar } from 'react-native';

import MainStack from './src/navigation';

export default class App extends React.Component<{||}> {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <MainStack />
      </>
    );
  }
}
