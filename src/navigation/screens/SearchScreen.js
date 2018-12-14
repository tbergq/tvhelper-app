// @flow strict

import * as React from 'react';
import { Text } from 'react-native';

type Props = {||};

export default class SearchScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Search',
  });

  render() {
    return <Text>search screen</Text>;
  }
}
