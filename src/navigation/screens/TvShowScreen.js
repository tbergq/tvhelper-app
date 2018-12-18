// @flow strict

import * as React from 'react';
import type { Navigation } from '@tbergq/tvhelper-navigation';
import { FavoriteButton } from '@tbergq/tvhelper-components';

import TvShowScene from '../../scenes/tvShow/TvShowScene';
import isLoggedIn from './isLoggedIn';

type Props = {|
  +navigation: Navigation<{|
    +id: string,
    +name: string,
    +isFavorite: ?boolean,
  |}>,
|};

const noop = () => {};

export default class TvShowScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    const title: string = navigation.getParam('name') ?? '';
    const isFavorite = navigation.getParam('isFavorite');
    return {
      title,
      headerRight:
        isFavorite != null ? (
          <FavoriteButton onPress={noop} isFavorite={isFavorite} />
        ) : null,
    };
  };

  setIsFavorite = (isFavorite: ?boolean) => {
    this.props.navigation.setParams({ isFavorite });
  };

  render() {
    const id: string | null = this.props.navigation.getParam('id') ?? null;
    if (id === null) {
      return null; // TODO: Add error screen
    }
    return <TvShowScene id={id} setIsFavorite={this.setIsFavorite} />;
  }
}
