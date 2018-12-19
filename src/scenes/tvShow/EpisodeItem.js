// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { Text, Colors } from '@tbergq/tvhelper-components';
import { View, StyleSheet } from 'react-native';

import type { EpisodeItem as EpisodeItemType } from './__generated__/EpisodeItem.graphql';

type Props = {|
  +data: EpisodeItemType,
|};

const EpisodeItem = (props: Props) => {
  const airdate = props.data.airdate ?? 'Unknown';
  return (
    <View style={styles.row}>
      <Text>{props.data.seasonAndNumber}</Text>
      <Text>{props.data.name}</Text>
      <Text>{airdate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 10,
    marginBottom: -1,
  },
});

export default createFragmentContainer(
  EpisodeItem,
  graphql`
    fragment EpisodeItem on Episode {
      seasonAndNumber
      name
      airdate
    }
  `,
);
