// @flow strict

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';

import type { TvShowSceneQueryResponse } from './__generated__/TvShowSceneQuery.graphql';
import TvDetail from './TvDetail';

type Props = {|
  +id: string,
|};

export default class TvShowScene extends React.Component<Props> {
  renderInner = (props: TvShowSceneQueryResponse) => {
    return <TvDetail data={props.tvShowDetail} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query TvShowSceneQuery($id: ID!) {
            tvShowDetail(id: $id) {
              ...TvDetail
            }
          }
        `}
        variables={{ id: this.props.id }}
        render={this.renderInner}
      />
    );
  }
}
