// @flow

import { commitMutation, graphql } from '@tbergq/tvhelper-relay';

import type {
  DeleteAsWatchedMutationVariables,
  DeleteAsWatchedMutationResponse,
} from './__generated__/DeleteAsWatchedMutation.graphql';

const mutation = graphql`
  mutation DeleteAsWatchedMutation($episodeId: ID!) {
    deleteWatchedEpisode(episodeId: $episodeId) {
      success
    }
  }
`;

type Args = {|
  ...DeleteAsWatchedMutationVariables,
  +onCompleted: (
    response: DeleteAsWatchedMutationResponse,
    error: Error,
  ) => void,
  +onError?: () => void,
|};

const deleteAsWatched = ({ onCompleted, onError, episodeId }: Args) => {
  commitMutation({
    mutation,
    variables: { episodeId },
    onCompleted,
    onError,
    updater: (store: Object) => {
      const payload = store.getRootField('deleteWatchedEpisode');
      const success = payload.getValue('success');

      if (success) {
        const episode = store.get(episodeId);
        episode.setValue(false, 'watched');
      }
    },
  });
};

export default deleteAsWatched;
