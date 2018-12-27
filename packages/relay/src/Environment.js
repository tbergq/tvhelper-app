// @flow strict

import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
  retryMiddleware,
  loggerMiddleware,
  cacheMiddleware,
} from 'react-relay-network-modern';
import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = '@tokenKey';

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: 'https://tbergq-graphql.now.sh/graphql/',
  }),
  authMiddleware({
    token: async () => {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      return token;
    },
    allowEmptyToken: true,
    prefix: '',
  }),
  retryMiddleware({}),
  loggerMiddleware(),
  cacheMiddleware({
    size: 500,
    ttl: 15 * 60 * 1000, // 15 minutes
    clearOnMutation: true,
  }),
]);

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({ network, store });

export default environment;
