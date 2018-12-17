// @flow strict

import * as React from 'react';
import type { Navigation } from '@tbergq/tvhelper-navigation';

import TvShowScene from '../../scenes/tvShow/TvShowScene';

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
    const id: string | null = this.props.navigation.getParam('id') ?? null;
    if (id === null) {
      return null; // TODO: Add error screen
    }
    return <TvShowScene id={id} />;
  }
}
