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
    this.props.navigation.navigate('TvFavorite', {
      id: this.props.data.id,
      name: this.props.data.name,
    });
  };

  render() {
    return (
      <Touchable onPress={this.onPress} delayPressIn={70}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: this.props.data.image?.medium }}
              style={styles.image}
            />
          </View>
          <Text>{this.props.data.name}</Text>
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
    }
  `,
);
