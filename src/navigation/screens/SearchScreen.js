// @flow strict

import * as React from 'react';
import { Text } from 'react-native';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';

import type { SearchScreenQueryResponse } from './__generated__/SearchScreenQuery.graphql';

type Props = {||};

export default class SearchScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Search',
  });

  renderInner = (props: SearchScreenQueryResponse) => {
    return <Text>{props.test?.test}</Text>;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query SearchScreenQuery {
            test {
              test
            }
          }
        `}
        render={this.renderInner}
      />
    );
  }
}
