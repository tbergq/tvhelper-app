// @flow strict

import * as React from 'react';
import { Button } from '@tbergq/tvhelper-components';
import { createFragmentContainer, graphql } from '@tbergq/tvhelper-relay';
import { StyleSheet, ActivityIndicator } from 'react-native';

import type { ToggleWatched as ToggleWatchedType } from './__generated__/ToggleWatched.graphql';
import markAsWatchedMutation from './mutation/MarkAsWatchedMutation';

type Props = {|
  +data: ToggleWatchedType,
|};

type State = {|
  isLoading: boolean,
|};

class ToggleWatched extends React.Component<Props, State> {
  state = {
    isLoading: false,
  };

  onPress = () => {
    if (this.props.data.watched === false) {
      this.setState({ isLoading: true });
      markAsWatchedMutation({
        episodeId: this.props.data.id ?? '',
        onCompleted: () => {
          this.setState({ isLoading: false });
        },
      });
    } else {
      console.warn('TODO'); // eslint-disable-line no-console
    }
  };

  render() {
    const text = this.props.data.watched
      ? 'Mark as not watched'
      : 'Mark as watched';
    const type = this.props.data.watched ? 'danger' : 'primary';
    return this.state.isLoading ? (
      <ActivityIndicator />
    ) : (
      <Button
        style={styles.button}
        type={type}
        text={text}
        onPress={this.onPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
  },
});

export default createFragmentContainer(
  ToggleWatched,
  graphql`
    fragment ToggleWatched on Episode {
      id
      watched
    }
  `,
);
