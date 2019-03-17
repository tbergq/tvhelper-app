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
      episode {
        id
        watched
      }
    }
  }
`;

type Args = {|
  ...DeleteAsWatchedMutationVariables,
  +onCompleted?: (
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
    optimisticResponse: {
      deleteWatchedEpisode: {
        success: true,
        episode: {
          id: episodeId,
          watched: false,
        },
      },
    },
  });
};

export default deleteAsWatched;
