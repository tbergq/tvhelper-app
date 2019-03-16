/**
 * @flow
 * @relayHash cdc3f8957d3039de3f4590c58ce38ad3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Episode$ref = any;
export type EpisodeSceneQueryVariables = {|
  id: string
|};
export type EpisodeSceneQueryResponse = {|
  +episode: ?{|
    +$fragmentRefs: Episode$ref
  |}
|};
export type EpisodeSceneQuery = {|
  variables: EpisodeSceneQueryVariables,
  response: EpisodeSceneQueryResponse,
|};
*/


/*
query EpisodeSceneQuery(
  $id: ID!
) {
  episode(id: $id) {
    ...Episode
    id
  }
}

fragment Episode on Episode {
  name
  summary
  image {
    ...TvHelperImage
    id
  }
  ...ToggleWatched
}

fragment TvHelperImage on TvHelperImage {
  medium
  original
}

fragment ToggleWatched on Episode {
  id
  watched
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EpisodeSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Episode",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EpisodeSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "summary",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "TvHelperImage",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "medium",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "original",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          },
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "watched",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EpisodeSceneQuery",
    "id": "1c75ece6dd9573393d55847834bc2d48",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1c75ece6dd9573393d55847834bc2d48';
module.exports = node;
