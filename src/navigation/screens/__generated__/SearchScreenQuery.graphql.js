/**
 * @flow
 * @relayHash 389835b2cf66c575af118b632a5b0ea1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SearchScreenQueryVariables = {||};
export type SearchScreenQueryResponse = {|
  +test: ?{|
    +test: ?string
  |}
|};
export type SearchScreenQuery = {|
  variables: SearchScreenQueryVariables,
  response: SearchScreenQueryResponse,
|};
*/


/*
query SearchScreenQuery {
  test {
    test
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "test",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchScreenQuery",
  "id": null,
  "text": "query SearchScreenQuery {\n  test {\n    test\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "test",
        "storageKey": null,
        "args": null,
        "concreteType": "TestType",
        "plural": false,
        "selections": [
          v0
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "test",
        "storageKey": null,
        "args": null,
        "concreteType": "TestType",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '308accf686e43da02926be5e3bb333ee';
module.exports = node;
