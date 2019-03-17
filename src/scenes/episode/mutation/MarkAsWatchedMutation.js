// @flow

import { commitMutation, graphql } from '@tbergq/tvhelper-relay';

import type { MarkAsWatchedMutationResponse } from './__generated__/MarkAsWatchedMutation.graphql';

const mutation = graphql`
  mutation MarkAsWatchedMutation($episodeId: ID!) {
    markAsWatched(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

type Args = {|
  +onCompleted?: (
    response: MarkAsWatchedMutationResponse,
    error: Error,
  ) => void,
  +onError?: () => void,
  +episodeId: string,
|};

const markAsWatched = ({ onCompleted, onError, episodeId }: Args) => {
  commitMutation({
    mutation,
    variables: { episodeId },
    onCompleted,
    onError,
    optimisticResponse: {
      markAsWatched: {
        success: true,
        episode: {
          id: episodeId,
          watched: true,
        },
      },
    },
  });
};

export default markAsWatched;
