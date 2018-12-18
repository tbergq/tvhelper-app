// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import type { StylePropType } from '../types/StylePropType';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
  +onPress: () => void,
  +style?: StylePropType,
  +accessibilityTraits?: 'button',
  +accessibilityComponentType?: 'button',
  +delayPressIn?: number,
|};

const Touchable = (props: Props) => (
  <TouchableOpacity {...props} activeOpacity={0.5} />
);

Touchable.defaultProps = {
  accessibilityTraits: 'button',
  accessibilityComponentType: 'button',
};

export default Touchable;
