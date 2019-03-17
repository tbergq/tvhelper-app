// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, Button } from '@tbergq/tvhelper-components';
import {
  QueryRenderer as OriginalQueryRenderer,
  type GraphQLTaggedNode,
} from '@kiwicom/relay';

import environment from './Environment';

type Props = {|
  +query: GraphQLTaggedNode,
  +render: (props: Object) => React.Element<any>,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  onLoading() {
    return <ActivityIndicator />;
  }

  onSystemError({ error, retry }: Object) {
    console.warn(error); // eslint-disable-line no-console
    return (
      <>
        <Text>Query failed </Text>
        <Button text="Retry" onPress={retry} />
      </>
    );
  }

  render() {
    return (
      <OriginalQueryRenderer
        environment={environment}
        query={this.props.query}
        variables={this.props.variables}
        onResponse={this.props.render}
        onLoading={this.onLoading}
        onSystemError={this.onSystemError}
      />
    );
  }
}
