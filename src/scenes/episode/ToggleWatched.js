// @flow strict

import * as React from 'react';
import { Button } from '@tbergq/tvhelper-components';
import { createFragmentContainer, graphql } from '@tbergq/tvhelper-relay';
import { StyleSheet, ActivityIndicator } from 'react-native';

import type { ToggleWatched as ToggleWatchedType } from './__generated__/ToggleWatched.graphql';
import markAsWatchedMutation from './mutation/MarkAsWatchedMutation';
import deleteAsWatchedMutation from './mutation/DeleteAsWatched';

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
    this.setState({ isLoading: true });
    const episodeId = this.props.data.id;

    if (episodeId == null) {
      return;
    }

    if (this.props.data.watched === false) {
      markAsWatchedMutation({
        episodeId,
        onCompleted: this.onCompleted,
      });
    } else {
      deleteAsWatchedMutation({
        onCompleted: this.onCompleted,
        episodeId,
      });
    }
  };

  onCompleted = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const text =
      this.props.data.watched === true
        ? 'Mark as not watched'
        : 'Mark as watched';
    const type = this.props.data.watched === true ? 'danger' : 'primary';
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
