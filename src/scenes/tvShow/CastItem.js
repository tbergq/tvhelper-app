// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Colors } from '@tbergq/tvhelper-components';

import type { CastItem as CastType } from './__generated__/CastItem.graphql';

type Props = {|
  +data: CastType,
|};

const CastItem = (props: Props) => {
  const imageUrl =
    props.data.person?.image?.medium ?? props.data.character?.image?.medium;
  const actorName = props.data.person?.name ?? '';
  const characterName = props.data.character?.name ?? '';
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text>{`Actor: ${actorName}`}</Text>
      <Text>{`Character: ${characterName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: 10,
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageWrapper: {
    backgroundColor: Colors.gray,
  },
});

export default createFragmentContainer(
  CastItem,
  graphql`
    fragment CastItem on Cast {
      person {
        name
        image {
          medium
        }
      }
      character {
        name
        image {
          medium
        }
      }
    }
  `,
);
