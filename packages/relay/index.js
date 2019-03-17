// @flow

export {
  graphql,
  createFragmentContainer,
  createRefetchContainer,
} from '@kiwicom/relay';
import {
  type RelayProp as _RelayProp,
  commitMutation as _commitMutation,
  type GraphQLTaggedNode,
  type RefetchRelayProp as _RefetchRelayProp,
} from '@kiwicom/relay';

import environment from './src/Environment';

export { default as QueryRenderer } from './src/QueryRenderer';
export { TOKEN_KEY } from './src/Environment';

export const commitMutation = (config: Config) => {
  _commitMutation(environment, config);
};

export type Config = {|
  +mutation: GraphQLTaggedNode,
  +variables: Object,
  +onCompleted?: Function,
  +onError?: Function,
  +optimisticUpdater?: Function,
  +optimisticResponse?: Function,
  +updater?: Function,
  +configs?: $ReadOnlyArray<Object>,
|};

export type RelayRefetchProp = _RefetchRelayProp;

export type RelayProp = _RelayProp;
