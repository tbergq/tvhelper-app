// @flow

import { commitMutation as originalCommitMutation } from 'react-relay';

import environment from './src/Environment';

export {
  graphql,
  createFragmentContainer,
  createRefetchContainer,
} from 'react-relay';

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
  +configs?: ?$ReadOnlyArray<Object>,
|};

export const commitMutation = (config: Config) => {
  return originalCommitMutation(environment, config);
};

type RefetchOptions = {|
  +force: true, // we always have to force the refetch since we use offline cache (TODO: wrap it)
|};

type Disposable = {|
  +dispose: () => void,
|};

export type RelayRefetchProp = {|
  +refetch: (
    refetchVariables: Object | null | ((fragmentVariables: Object) => Object),
    renderVariables: ?Object,
    callback: ?(error: ?Error) => void,
    options: RefetchOptions,
  ) => Disposable,
|};
