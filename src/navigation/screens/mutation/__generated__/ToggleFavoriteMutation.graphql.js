/**
 * @flow
 * @relayHash 62ef3c945933d54e159b5410be6a4d0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToggleFavoriteMutationVariables = {|
  serieId: string,
  add: boolean,
|};
export type ToggleFavoriteMutationResponse = {|
  +toggleFavorite: ?{|
    +success: ?boolean,
    +serieId: ?string,
    +tvShow: ?{|
      +node: ?{|
        +id: ?string,
        +name: ?string,
        +image: ?{|
          +original: ?string,
          +medium: ?string,
        |},
      |}
    |},
  |}
|};
export type ToggleFavoriteMutation = {|
  variables: ToggleFavoriteMutationVariables,
  response: ToggleFavoriteMutationResponse,
|};
*/


/*
mutation ToggleFavoriteMutation(
  $serieId: ID!
  $add: Boolean!
) {
  toggleFavorite(serieId: $serieId, add: $add) {
    success
    serieId
    tvShow {
      node {
        id
        name
        image {
          original
          medium
          id
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "serieId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "add",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "add",
    "variableName": "add",
    "type": "Boolean!"
  },
  {
    "kind": "Variable",
    "name": "serieId",
    "variableName": "serieId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "serieId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "original",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "medium",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ToggleFavoriteMutation",
  "id": null,
  "text": "mutation ToggleFavoriteMutation(\n  $serieId: ID!\n  $add: Boolean!\n) {\n  toggleFavorite(serieId: $serieId, add: $add) {\n    success\n    serieId\n    tvShow {\n      node {\n        id\n        name\n        image {\n          original\n          medium\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleFavorite",
        "storageKey": null,
        "args": v1,
        "concreteType": "ToggleFavorite",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tvShow",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowNode",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TvShow",
                "plural": false,
                "selections": [
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TvHelperImage",
                    "plural": false,
                    "selections": [
                      v6,
                      v7
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleFavoriteMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleFavorite",
        "storageKey": null,
        "args": v1,
        "concreteType": "ToggleFavorite",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tvShow",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowNode",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TvShow",
                "plural": false,
                "selections": [
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TvHelperImage",
                    "plural": false,
                    "selections": [
                      v6,
                      v7,
                      v4
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b36452289b6adf27d4e8912e5c357cc7';
module.exports = node;
