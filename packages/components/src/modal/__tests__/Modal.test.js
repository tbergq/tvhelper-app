// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';
import { View } from 'react-native';

import Modal from '../Modal';

it('renders', () => {
  expect(
    shallow(
      <Modal isVisible={true} onClose={jest.fn()} onSave={jest.fn()}>
        <View />
      </Modal>,
    ),
  ).toMatchInlineSnapshot(`
Object {
  "output": <Component
    hardwareAccelerated={false}
    onRequestClose={[MockFunction]}
    style={
      Object {
        "marginTop": 22,
      }
    }
    transparent={true}
    visible={true}
  >
    <Component
      style={
        Array [
          Object {
            "backgroundColor": "rgba(0,0,0,0.5)",
            "justifyContent": "flex-end",
          },
          Object {
            "flex": 1,
          },
        ]
      }
    >
      <TouchableWithoutFeedback
        onPress={[MockFunction]}
      >
        <Component
          style={
            Object {
              "flex": 1,
            }
          }
        />
      </TouchableWithoutFeedback>
      <Component
        style={
          Object {
            "backgroundColor": "#ffffff",
            "borderBottomColor": "#cccccc",
            "borderBottomWidth": 1,
            "borderTopEndRadius": 6,
            "borderTopStartRadius": 6,
            "flexDirection": "row",
            "justifyContent": "space-between",
            "padding": 10,
          }
        }
      >
        <Touchable
          accessibilityComponentType="button"
          accessibilityTraits="button"
          onPress={[MockFunction]}
        >
          <Text
            style={
              Object {
                "color": "#337ab7",
              }
            }
          >
            Close
          </Text>
        </Touchable>
        <Touchable
          accessibilityComponentType="button"
          accessibilityTraits="button"
          onPress={[MockFunction]}
        >
          <Text
            style={
              Object {
                "color": "#337ab7",
              }
            }
          >
            Save
          </Text>
        </Touchable>
      </Component>
      <Component
        style={
          Object {
            "backgroundColor": "#ffffff",
            "padding": 10,
            "paddingBottom": 36,
          }
        }
      >
        <Component />
      </Component>
    </Component>
  </Component>,
}
`);
});
