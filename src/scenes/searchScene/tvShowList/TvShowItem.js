// @flow

import * as React from 'react';
import { Text, Colors } from '@tbergq/tvhelper-components';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import type { TvShowItem as TvShow } from './__generated__/TvShowItem.graphql';

type Props = {|
  +data: ?TvShow,
|};

const TvShowItem = (props: Props) => {
  const status = props.data?.status ?? '';
  const name = props.data?.name ?? '';
  const rating = props.data?.rating ?? '';
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.data?.image?.medium }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
      <View style={styles.bottomSheet}>
        <Text style={styles.text}>{`${name} - ${rating}`}</Text>
        <Text style={[styles.text, styles[status.toLowerCase()]]}>
          {status}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 30) / 2,
    height: 150,
    marginEnd: 5,
    marginBottom: 5,
    backgroundColor: Colors.gray,
  },
  bottomSheet: {
    position: 'absolute',
    start: 0,
    end: 0,
    bottom: 0,
    backgroundColor: Colors.black,
    opacity: 0.7,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  // eslint-disable-next-line
  running: {
    color: Colors.success,
  },
  // eslint-disable-next-line
  ended: {
    color: Colors.danger,
  },
});

export default (createFragmentContainer(
  TvShowItem,
  graphql`
    fragment TvShowItem on TvShow {
      name
      status
      rating
      image {
        medium
      }
    }
  `,
): any); // TODO: Fix
