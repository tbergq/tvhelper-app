// @flow

import * as React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import {
  QueryRenderer as OriginalQueryRenderer,
  type GraphQLTaggedNode,
} from 'react-relay';

import environment from './Environment';

type Props = {|
  +query: GraphQLTaggedNode,
  +render: (props: Object) => React.Element<any>,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderInner = ({ error, props }: Object) => {
    if (error) {
      return <Text>Query failed </Text>;
    }

    if (props) {
      return this.props.render(props);
    }

    return <ActivityIndicator />;
  };

  render() {
    return (
      <OriginalQueryRenderer
        environment={environment}
        query={this.props.query}
        variables={this.props.variables}
        render={this.renderInner}
      />
    );
  }
}
