/**
 * @flow
 * @relayHash 6ac4d7ede2d06b8b358bf97b9a76dcda
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginMutationVariables = {|
  username: string,
  password: string,
|};
export type LoginMutationResponse = {|
  +tvHelperLogin: ?{|
    +token: ?string,
    +success: ?boolean,
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $username: String!
  $password: String!
) {
  tvHelperLogin(username: $username, password: $password) {
    token
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tvHelperLogin",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username",
        "type": "String!"
      }
    ],
    "concreteType": "LoginType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $username: String!\n  $password: String!\n) {\n  tvHelperLogin(username: $username, password: $password) {\n    token\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce0cf18a23b47b29cd110b99ceef4113';
module.exports = node;
