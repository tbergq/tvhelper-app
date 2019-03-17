// @flow strict

import * as React from 'react';
import { Button } from '@tbergq/tvhelper-components';
import { createFragmentContainer, graphql } from '@tbergq/tvhelper-relay';
import { StyleSheet, ActivityIndicator } from 'react-native';

import type { ToggleWatched_data as ToggleWatchedType } from './__generated__/ToggleWatched_data.graphql';
import markAsWatchedMutation from './mutation/MarkAsWatchedMutation';
import deleteAsWatchedMutation from './mutation/DeleteAsWatched';

type Props = {|
  +data: ?ToggleWatchedType,
|};

class ToggleWatched extends React.Component<Props> {
  onPress = () => {
    const episodeId = this.props.data?.id;

    if (episodeId == null) {
      return;
    }

    if (this.props.data?.watched === false) {
      markAsWatchedMutation({
        episodeId,
      });
    } else {
      deleteAsWatchedMutation({
        episodeId,
      });
    }
  };

  render() {
    const text =
      this.props.data?.watched === true
        ? 'Mark as not watched'
        : 'Mark as watched';
    const type = this.props.data?.watched === true ? 'danger' : 'primary';
    return (
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

export default createFragmentContainer(ToggleWatched, {
  data: graphql`
    fragment ToggleWatched_data on Episode {
      id
      watched
    }
  `,
});
