// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/tvhelper-relay';
import { ScrollView, View, StyleSheet, Image } from 'react-native';

import type { TvDetail as TvDetailType } from './__generated__/TvDetail.graphql';
import Summary from './Summary';

type Props = {|
  +data: TvDetailType,
|};

const TvDetail = (props: Props) => {
  return (
    <ScrollView>
      <Image
        source={{ uri: props.data.image?.original }}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <Summary data={props.data} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
});

export default createFragmentContainer(
  TvDetail,
  graphql`
    fragment TvDetail on TvShow {
      image {
        original
      }
      ...Summary
    }
  `,
);