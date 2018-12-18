// @flow

import { graphql, commitMutation } from '@tbergq/tvhelper-relay';
import { Alert } from 'react-native';

import type { ToggleFavoriteMutationVariables } from './__generated__/ToggleFavoriteMutation.graphql';

const mutation = graphql`
  mutation ToggleFavoriteMutation($serieId: ID!, $add: Boolean!) {
    toggleFavorite(serieId: $serieId, add: $add) {
      success
      serieId
      tvShow {
        node {
          id
          name
          image {
            original
            medium
          }
          previousEpisode
          nextEpisode
        }
      }
    }
  }
`;

const parentID = 'client:root';
const connectionKey = 'FavoritesScene_favorites';
const addConfig = [
  {
    type: 'RANGE_ADD',
    parentID,
    connectionInfo: [
      {
        key: connectionKey,
        rangeBehavior: 'append',
      },
    ],
    edgeName: 'tvShow',
  },
];

const deleteConfig = [
  {
    type: 'RANGE_DELETE',
    parentID,
    connectionKeys: [
      {
        key: connectionKey,
      },
    ],
    pathToConnection: ['client:root', 'tvShow'],
    deletedIDFieldName: 'serieId',
  },
];

export default (
  { serieId, add }: ToggleFavoriteMutationVariables,
  onCompleted: () => void,
) => {
  commitMutation({
    mutation,
    variables: { serieId, add },
    onCompleted,
    onError: () => Alert.alert('Toggle favorite failed'),
    configs: add ? addConfig : deleteConfig,
  });
};
