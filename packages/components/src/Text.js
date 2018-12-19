// @flow strict

import * as React from 'react';
import { Text as OriginalText, StyleSheet } from 'react-native'; // eslint-disable-line no-restricted-imports

import type { StylePropType } from '../types/StylePropType';

type Props = {|
  +children: ?string,
  +style?: StylePropType,
  +bold?: boolean,
|};

export default function Text(props: Props) {
  return (
    <OriginalText
      style={[styles.text, props.style, props.bold === true && styles.bold]}
    >
      {props.children}
    </OriginalText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
});
