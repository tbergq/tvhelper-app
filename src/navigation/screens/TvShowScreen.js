// @flow strict

import * as React from 'react';
import type { Navigation } from '@tbergq/tvhelper-navigation';
import { Text } from '@tbergq/tvhelper-components';

type Props = {|
  +navigation: Navigation<{|
    +id: string,
    +name: string,
  |}>,
|};

export default class TvShowScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    const title: string = navigation.getParam('name') ?? '';
    return {
      title,
    };
  };

  render() {
    return <Text>{JSON.stringify(this.props)}</Text>;
  }
}
