// @flow strict

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Text from '../Text';

it('renders', () => {
  expect(render(<Text>test</Text>)).toMatchInlineSnapshot(`
<Text
  style={
    Array [
      Object {
        "fontSize": 14,
      },
      undefined,
      false,
    ]
  }
>
  test
</Text>
`);
});
