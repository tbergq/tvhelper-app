// @flow strict

import * as React from 'react';
import { type Navigation } from '@tbergq/tvhelper-navigation';
import { Text } from '@tbergq/tvhelper-components';

type Props = {|
  +navigation: Navigation<{|
    +id: string,
    +seasonAndNumber: string,
  |}>,
|};

export default class EpisodeScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => ({
    title: navigation.state.params.seasonAndNumber,
  });

  render() {
    return <Text>{this.props.navigation.state.params.id}</Text>;
  }
}
