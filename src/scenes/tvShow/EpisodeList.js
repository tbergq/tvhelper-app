// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { Text, Touchable, Colors } from '@tbergq/tvhelper-components';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import type { EpisodeList as EpisodeListType } from './__generated__/EpisodeList.graphql';
import EpisodeItem from './EpisodeItem';

type Props = {|
  +data: EpisodeListType,
|};

type State = {|
  showEpisodes: boolean,
|};

class EpisodeList extends React.Component<Props, State> {
  state = {
    showEpisodes: false,
  };

  toggleEpisodes = () => {
    setTimeout(() => {
      this.setState(state => ({
        showEpisodes: !state.showEpisodes,
      }));
    });
  };

  render() {
    const data = this.props.data.episodes ?? [];

    return (
      <>
        <Touchable
          onPress={this.toggleEpisodes}
          style={[
            styles.expandButton,
            this.state.showEpisodes && styles.expanded,
          ]}
        >
          <Text bold={true}>Episodes</Text>
          <MaterialIcons
            name={this.state.showEpisodes ? 'expand-less' : 'expand-more'}
            size={20}
            color={Colors.primary}
          />
        </Touchable>
        {this.state.showEpisodes &&
          data.map(episode => {
            return <EpisodeItem key={episode?.id} data={episode} />;
          })}
      </>
    );
  }
}

const styles = StyleSheet.create({
  expandButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  expanded: {
    marginBottom: -1,
  },
});

export default createFragmentContainer(
  EpisodeList,
  graphql`
    fragment EpisodeList on TvShow {
      episodes {
        id
        ...EpisodeItem
      }
    }
  `,
);
