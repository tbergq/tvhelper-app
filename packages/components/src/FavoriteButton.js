// @flow strict

import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Touchable from './Touchable';
import Colors from './Colors';

type Props = {|
  +onPress: () => void,
  +isFavorite: boolean,
|};

export default function FavoriteButton(props: Props) {
  return (
    <Touchable onPress={props.onPress}>
      <MaterialIcons
        name="favorite"
        size={20}
        color={props.isFavorite ? Colors.danger : Colors.white}
      />
    </Touchable>
  );
}
