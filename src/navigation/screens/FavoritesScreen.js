// @flow strict

import * as React from 'react';
import { Text } from '@tbergq/tvhelper-components';

type Props = {||};

export default class FavoritesScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Favorites',
  });

  render() {
    return <Text>FavoritesScreen</Text>;
  }
}
