// @flow strict

import * as React from 'react';
import type { Navigation } from '@tbergq/tvhelper-navigation';
import { FavoriteButton } from '@tbergq/tvhelper-components';

import TvShowScene from '../../scenes/tvShow/TvShowScene';
import toggleFavorite from './mutation/ToggleFavorite';

type Props = {|
  +navigation: Navigation<{|
    +id: string,
    +name: string,
    +isFavorite: ?boolean,
    +onToggle: ?() => void,
  |}>,
|};

const noop = () => {};

export default class TvShowScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    const title: string = navigation.getParam('name') ?? '';
    const isFavorite = navigation.getParam('isFavorite');
    const onToggle = navigation.getParam('onToggle') ?? noop;
    return {
      title,
      headerRight:
        isFavorite != null ? (
          <FavoriteButton onPress={onToggle} isFavorite={isFavorite} />
        ) : null,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ onToggle: this.toggleFavoriteMutation });
  }

  setIsFavorite = (isFavorite: ?boolean) => {
    this.props.navigation.setParams({ isFavorite });
  };

  toggleFavoriteMutation = () => {
    const add = !this.props.navigation.getParam('isFavorite');
    const serieId = this.props.navigation.getParam('id');

    toggleFavorite({ serieId, add }, () => {
      this.setIsFavorite(add);
    });
  };

  render() {
    const id: string | null = this.props.navigation.getParam('id') ?? null;
    if (id === null) {
      return null; // TODO: Add error screen
    }
    return <TvShowScene id={id} setIsFavorite={this.setIsFavorite} />;
  }
}
