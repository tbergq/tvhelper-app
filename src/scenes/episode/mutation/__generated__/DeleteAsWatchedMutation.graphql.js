/**
 * @flow
 * @relayHash 9f6d05256325b3ab9906719e3aad9f16
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAsWatchedMutationVariables = {|
  episodeId: string
|};
export type DeleteAsWatchedMutationResponse = {|
  +deleteWatchedEpisode: ?{|
    +success: ?boolean
  |}
|};
export type DeleteAsWatchedMutation = {|
  variables: DeleteAsWatchedMutationVariables,
  response: DeleteAsWatchedMutationResponse,
|};
*/


/*
mutation DeleteAsWatchedMutation(
  $episodeId: ID!
) {
  deleteWatchedEpisode(episodeId: $episodeId) {
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
  "operationKind": "mutation",
  "name": "DeleteAsWatchedMutation",
  "id": null,
  "text": "mutation DeleteAsWatchedMutation(\n  $episodeId: ID!\n) {\n  deleteWatchedEpisode(episodeId: $episodeId) {\n    success\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteAsWatchedMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteWatchedEpisode",
        "storageKey": null,
        "args": v1,
        "concreteType": "EpisodeWatched",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAsWatchedMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteWatchedEpisode",
        "storageKey": null,
        "args": v1,
        "concreteType": "EpisodeWatched",
        "plural": false,
        "selections": [
          v2,
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
(node/*: any*/).hash = 'dcaec6cfb2b12dbc60edc30e29556d9a';
module.exports = node;
