// @flow

import fetch from '@kiwicom/fetch';
import { AsyncStorage } from 'react-native';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
export const TOKEN_KEY = '@tokenKey';

const fetchFunction = async (operation, variables) => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  const res = await fetch('https://tbergq-graphql.now.sh/graphql/', {
    method: 'POST',
    headers: {
      Authorization: token,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      queryId: operation.id,
      variables,
    }),
  });
  return res.json();
};
const network = Network.create(fetchFunction);

const environment = new Environment({
  network,
  store,
});

export default environment;
