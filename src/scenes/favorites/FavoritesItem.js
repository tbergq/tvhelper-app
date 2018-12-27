// @flow strict

import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Touchable, Colors } from '@tbergq/tvhelper-components';
import { createFragmentContainer, graphql } from '@tbergq/tvhelper-relay';
import { withNavigation, type Navigation } from '@tbergq/tvhelper-navigation';

import type { FavoritesItem as FavoritesType } from './__generated__/FavoritesItem.graphql';

type Props = {|
  +data: FavoritesType,
  +navigation: Navigation<{}>,
|};

class FavoritesItem extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate('TvShow', {
      id: this.props.data.id,
      name: this.props.data.name,
    });
  };

  render() {
    const nextEpisode = this.props.data.nextEpisode ?? 'N/A';
    const previousEpisode = this.props.data.previousEpisode ?? 'N/A';
    const name = this.props.data.name ?? '';
    const status = this.props.data.status ?? '';
    return (
      <Touchable onPress={this.onPress} delayPressIn={70}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: this.props.data.image?.medium }}
              style={styles.image}
            />
          </View>
          <View style={styles.content}>
            <Text>{`${name} - ${status}`}</Text>
            <Text>{`Next episode: ${nextEpisode}`}</Text>
            <Text>{`Previous episode: ${previousEpisode}`}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  imageWrapper: {
    backgroundColor: Colors.gray,
  },
  image: {
    height: 80,
    width: 80,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginBottom: 8,
    marginStart: 85,
  },
  content: {
    marginStart: 10,
    alignSelf: 'center',
  },
});

export default createFragmentContainer(
  withNavigation(FavoritesItem),
  graphql`
    fragment FavoritesItem on TvShow {
      id
      name
      image {
        medium
      }
      previousEpisode
      nextEpisode
      status
    }
  `,
);
