// @flow strict

import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { createFragmentContainer, graphql } from '@tbergq/tvhelper-relay';

import type { FavoritesList as FavoritesListType } from './__generated__/FavoritesList.graphql';
import FavoritesItem from './FavoritesItem';

type Props = {|
  +data: FavoritesListType,
|};

class FavoritesList extends React.Component<Props> {
  keyExtractor = item => item.node?.id;

  renderItem = ({ item }) => {
    return <FavoritesItem data={item.node} />;
  };

  render() {
    const data = this.props.data ?? [];
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  list: {
    paddingVertical: 10,
  },
});

export default createFragmentContainer(
  FavoritesList,
  graphql`
    fragment FavoritesList on TvShowEdge @relay(plural: true) {
      node {
        id
        ...FavoritesItem
      }
    }
  `,
);
