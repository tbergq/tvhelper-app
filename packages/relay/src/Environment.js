// @flow strict

import { Environment, RecordSource, Store } from 'relay-runtime';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-modern';

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: 'https://tbergq-graphql.now.sh/graphql/',
  }),
]);

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({ network, store });

export default environment;
