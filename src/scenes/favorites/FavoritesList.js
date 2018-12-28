// @flow strict

/* eslint-disable relay/unused-fields */

import * as React from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import {
  createRefetchContainer,
  graphql,
  type RelayRefetchProp,
} from '@tbergq/tvhelper-relay';

import type { FavoritesList as FavoritesListType } from './__generated__/FavoritesList.graphql';
import FavoritesItem from './FavoritesItem';

type Props = {|
  +data: FavoritesListType,
  +relay: RelayRefetchProp,
  +options: {|
    +sortDirection: 'ASC' | 'DESC',
    +sortBy: 'NAME' | 'NEXT_EPISODE' | 'PREVIOUS_EPISODE' | 'STATUS',
  |},
|};

type State = {|
  isRefreshing: boolean,
|};

class FavoritesList extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isRefreshing) {
      this.setState({ isRefreshing: false });
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        options: this.props.options,
      },
      null,
      null,
      { force: true },
    );
  };

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
          refreshControl={
            <RefreshControl
              onRefresh={this.onRefresh}
              refreshing={this.state.isRefreshing}
            />
          }
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

export default createRefetchContainer(
  FavoritesList,
  graphql`
    fragment FavoritesList on TvShowEdge @relay(plural: true) {
      node {
        id
        ...FavoritesItem
      }
    }
  `,
  graphql`
    query FavoritesListRefetchQuery($first: Int, $options: SortOptions) {
      favorites(first: $first, options: $options)
        @connection(key: "FavoritesScene_favorites", filters: []) {
        edges {
          ...FavoritesList
        }
      }
    }
  `,
);
