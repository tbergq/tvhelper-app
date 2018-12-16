// @flow strict

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from '@tbergq/tvhelper-components';

type Props = {||};

type State = {|
  query: string,
|};
export default class SearchScene extends React.Component<Props, State> {
  state = {
    query: '',
  };

  onChange = (query: string) => this.setState({ query });

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          value={this.state.query}
          onChangeText={this.onChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
