// @flow strict

import * as React from 'react';
import type { Navigation } from '@tbergq/tvhelper-navigation';

import SearchScene from '../../scenes/searchScene/SearchScene';

type Props = {|
  +navigation: Navigation<{}>,
|};

export default class SearchScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Search',
  });

  render() {
    return <SearchScene />;
  }
}
