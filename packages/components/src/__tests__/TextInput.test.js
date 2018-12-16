// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import TextInput from '../TextInput';

it('renders', () => {
  expect(
    render(
      <TextInput value="test" placeholder="holder" onChangeText={jest.fn()} />,
    ),
  ).toMatchInlineSnapshot(`
<TextInput
  allowFontScaling={true}
  onChangeText={[MockFunction]}
  placeholder="holder"
  style={
    Array [
      Object {
        "borderColor": "#CCCCCC",
        "borderRadius": 6,
        "borderWidth": 1,
        "padding": 8,
      },
      undefined,
    ]
  }
  underlineColorAndroid="transparent"
  value="test"
/>
`);
});
