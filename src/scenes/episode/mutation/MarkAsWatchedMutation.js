// @flow

import { commitMutation, graphql } from '@tbergq/tvhelper-relay';

import type { MarkAsWatchedMutationResponse } from './__generated__/MarkAsWatchedMutation.graphql';

const mutation = graphql`
  mutation MarkAsWatchedMutation($episodeId: ID!) {
    markAsWatched(episodeId: $episodeId) {
      success
    }
  }
`;

type Args = {|
  +onCompleted: (response: MarkAsWatchedMutationResponse, error: Error) => void,
  +onError?: () => void,
  +episodeId: string,
|};

export default ({ onCompleted, onError, episodeId }: Args) => {
  commitMutation({
    mutation,
    variables: { episodeId },
    onCompleted,
    onError,
    updater: (store: Object) => {
      const payload = store.getRootField('markAsWatched');
      const success = payload.getValue('success');

      if (success) {
        const episode = store.get(episodeId);
        episode.setValue(true, 'watched');
      }
    },
  });
};
