/**
 * @flow
 * @relayHash 7b034f422c898a677009ae3451dcbc82
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MarkAsWatchedMutationVariables = {|
  episodeId: string
|};
export type MarkAsWatchedMutationResponse = {|
  +markAsWatched: ?{|
    +success: ?boolean
  |}
|};
export type MarkAsWatchedMutation = {|
  variables: MarkAsWatchedMutationVariables,
  response: MarkAsWatchedMutationResponse,
|};
*/


/*
mutation MarkAsWatchedMutation(
  $episodeId: ID!
) {
  markAsWatched(episodeId: $episodeId) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "episodeId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAsWatched",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "episodeId",
        "variableName": "episodeId",
        "type": "ID!"
      }
    ],
    "concreteType": "MarkAsWatched",
    "plural": false,
    "selections": [
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
  "operationKind": "mutation",
  "name": "MarkAsWatchedMutation",
  "id": null,
  "text": "mutation MarkAsWatchedMutation(\n  $episodeId: ID!\n) {\n  markAsWatched(episodeId: $episodeId) {\n    success\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MarkAsWatchedMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "MarkAsWatchedMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c08b1715513eb5a9fa61dd9cc8ab5cb6';
module.exports = node;
