// @flow

import { commitMutation as originalCommitMutation } from 'react-relay';

import environment from './src/Environment';

export { graphql, createFragmentContainer } from 'react-relay';

export { default as QueryRenderer } from './src/QueryRenderer';
export { TOKEN_KEY } from './src/Environment';

type Config = {|
  +mutation: string,
  +variables: Object,
  +onCompleted?: Function,
  +onError?: Function,
  +optimisticUpdater?: Function,
  +optimisticResponse?: Function,
  +updater?: Function,
|};
export const commitMutation = (config: Config) => {
  return originalCommitMutation(environment, config);
};
