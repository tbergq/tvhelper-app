// @flow strict

import * as React from 'react';

import SearchScene from '../../scenes/searchScene/SearchScene';

type Props = {||};

export default class SearchScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Search',
  });

  render() {
    return <SearchScene />;
  }
}
