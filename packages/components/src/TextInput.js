// @flow strict

import * as React from 'react';
import { TextInput as OriginalTextInput, StyleSheet } from 'react-native';

import type { StylePropType } from '../types/StylePropType';

type Props = {|
  +onChangeText: (text: string) => void,
  +value: string,
  +placeholder?: string,
  +autoFocus?: boolean,
  +secureTextEntry?: boolean,
  +style?: StylePropType,
|};

export default function TextInput({ style, ...rest }: Props) {
  return <OriginalTextInput {...rest} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
  },
});
