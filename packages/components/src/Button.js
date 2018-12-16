// @flow strict

/* eslint-disable react-native/no-unused-styles */
import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import type { StylePropType } from '../types/StylePropType';
import Text from './Text';

type Props = {|
  +onPress: () => void,
  +text: string,
  +type?: 'primary' | 'danger',
  +styles?: StylePropType,
  +accessibilityTraits?: 'button',
  +accessibilityComponentType?: 'button',
|};

export default function Button(props: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[styles.button, styles[props.type], props.styles]}
    >
      <Text style={[buttonTextStyles.text, buttonTextStyles[props.type]]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  type: 'primary',
  accessibilityTraits: 'button',
  accessibilityComponentType: 'button',
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    padding: 10,
  },
  primary: {
    backgroundColor: '#337ab7',
  },
});

const buttonTextStyles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
  primary: {
    color: '#ffffff',
  },
});
