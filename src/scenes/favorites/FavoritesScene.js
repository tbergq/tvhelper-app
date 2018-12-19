// @flow strict

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';

import type { FavoritesSceneQueryResponse } from './__generated__/FavoritesSceneQuery.graphql';
import FavoritesList from './FavoritesList';

type Props = {|
  +options: {|
    +sortDirection: 'ASC' | 'DESC',
    +sortBy: 'NAME' | 'NEXT_EPISODE' | 'PREVIOUS_EPISODE' | 'STATUS',
  |},
|};

export default class FavoritesScene extends React.Component<Props> {
  renderInner = (props: FavoritesSceneQueryResponse) => {
    return <FavoritesList data={props.favorites?.edges} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query FavoritesSceneQuery($first: Int, $options: SortOptions) {
            favorites(first: $first, options: $options)
              @connection(key: "FavoritesScene_favorites") {
              edges {
                ...FavoritesList
              }
            }
          }
        `}
        render={this.renderInner}
        variables={{
          options: this.props.options,
        }}
      />
    );
  }
}
