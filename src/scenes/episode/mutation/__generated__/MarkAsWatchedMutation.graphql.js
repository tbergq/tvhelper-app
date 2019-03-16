/**
 * @flow
 * @relayHash 54b7178e15e54885f6b0c63af55e5369
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
    id
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
    "kind": "Variable",
    "name": "episodeId",
    "variableName": "episodeId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MarkAsWatchedMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "markAsWatched",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EpisodeWatched",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MarkAsWatchedMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "markAsWatched",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EpisodeWatched",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "MarkAsWatchedMutation",
    "id": "c08b1715513eb5a9fa61dd9cc8ab5cb6",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c08b1715513eb5a9fa61dd9cc8ab5cb6';
module.exports = node;
