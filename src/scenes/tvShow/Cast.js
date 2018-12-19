// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { ScrollView } from 'react-native';

import type { Cast as CastType } from './__generated__/Cast.graphql';
import CastItem from './CastItem';

type Props = {|
  +data: CastType,
|};

const Cast = (props: Props) => {
  const data = props.data.cast ?? [];
  return (
    <ScrollView horizontal={true}>
      {data.map(cast => (
        <CastItem key={cast?.id} data={cast} />
      ))}
    </ScrollView>
  );
};
export default createFragmentContainer(
  Cast,
  graphql`
    fragment Cast on TvShow {
      cast {
        id
        ...CastItem
      }
    }
  `,
);
