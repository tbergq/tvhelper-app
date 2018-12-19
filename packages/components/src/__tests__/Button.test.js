// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Button from '../Button';

it('renders', () => {
  expect(render(<Button text="test" onPress={jest.fn()} />))
    .toMatchInlineSnapshot(`
<View
  accessible={true}
  isTVSelectable={true}
  onResponderGrant={[Function]}
  onResponderMove={[Function]}
  onResponderRelease={[Function]}
  onResponderTerminate={[Function]}
  onResponderTerminationRequest={[Function]}
  onStartShouldSetResponder={[Function]}
  style={
    Object {
      "backgroundColor": "#337ab7",
      "borderRadius": 6,
      "opacity": 1,
      "padding": 10,
    }
  }
>
  <Text
    style={
      Array [
        Object {
          "fontSize": 14,
        },
        Array [
          Object {
            "alignSelf": "center",
          },
          Object {
            "color": "#ffffff",
          },
        ],
        false,
      ]
    }
  >
    test
  </Text>
</View>
`);
});
