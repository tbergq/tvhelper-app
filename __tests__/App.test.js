// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import App from '../App';

it('renders', () => {
  expect(shallow(<App />)).toMatchInlineSnapshot(`
Object {
  "output": <React.Fragment>
    <StatusBar
      animated={false}
      barStyle="light-content"
      showHideTransition="fade"
    />
    <NavigationContainer />
  </React.Fragment>,
}
`);
});
