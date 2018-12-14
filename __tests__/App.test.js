// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import App from '../App';

it('renders', () => {
  expect(shallow(<App />)).toMatchInlineSnapshot(`
Object {
  "output": <Component
    style={
      Object {
        "alignItems": "center",
        "backgroundColor": "#fff",
        "flex": 1,
        "justifyContent": "center",
      }
    }
  >
    <Component>
      Open up App.js to start working on your app!
    </Component>
  </Component>,
}
`);
});
