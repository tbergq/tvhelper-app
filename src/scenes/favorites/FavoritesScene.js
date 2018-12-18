// @flow strict

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';

import type { FavoritesSceneQueryResponse } from './__generated__/FavoritesSceneQuery.graphql';
import FavoritesList from './FavoritesList';

type Props = {||};

export default class FavoritesScene extends React.Component<Props> {
  renderInner = (props: FavoritesSceneQueryResponse) => {
    return <FavoritesList data={props.favorites?.edges} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query FavoritesSceneQuery($first: Int) {
            favorites(first: $first)
              @connection(key: "FavoritesScene_favorites") {
              edges {
                ...FavoritesList
              }
            }
          }
        `}
        render={this.renderInner}
        variables={{}}
      />
    );
  }
}
