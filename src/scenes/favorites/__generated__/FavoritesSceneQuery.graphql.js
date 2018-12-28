/**
 * @flow
 * @relayHash 3f442a265fef0c53d4f71b7ca26fa3d5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FavoritesList$ref = any;
export type SortBy = "NAME" | "NEXT_EPISODE" | "PREVIOUS_EPISODE" | "STATUS" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type SortOptions = {
  sortDirection?: ?SortDirection,
  sortBy?: ?SortBy,
};
export type FavoritesSceneQueryVariables = {|
  first?: ?number,
  options?: ?SortOptions,
|};
export type FavoritesSceneQueryResponse = {|
  +favorites: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +$fragmentRefs: FavoritesList$ref
    |}>
  |}
|};
export type FavoritesSceneQuery = {|
  variables: FavoritesSceneQueryVariables,
  response: FavoritesSceneQueryResponse,
|};
*/


/*
query FavoritesSceneQuery(
  $first: Int
  $options: SortOptions
) {
  favorites(first: $first, options: $options) {
    edges {
      ...FavoritesList
      cursor
      node {
        __typename
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment FavoritesList on TvShowEdge {
  node {
    id
    ...FavoritesItem
  }
}

fragment FavoritesItem on TvShow {
  id
  name
  image {
    medium
    id
  }
  previousEpisode
  nextEpisode
  status
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "options",
    "type": "SortOptions",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first",
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "options",
    "variableName": "options",
    "type": "SortOptions"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FavoritesSceneQuery",
  "id": null,
  "text": "query FavoritesSceneQuery(\n  $first: Int\n  $options: SortOptions\n) {\n  favorites(first: $first, options: $options) {\n    edges {\n      ...FavoritesList\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment FavoritesList on TvShowEdge {\n  node {\n    id\n    ...FavoritesItem\n  }\n}\n\nfragment FavoritesItem on TvShow {\n  id\n  name\n  image {\n    medium\n    id\n  }\n  previousEpisode\n  nextEpisode\n  status\n}\n",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": null,
        "direction": "forward",
        "path": [
          "favorites"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "FavoritesSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "favorites",
        "name": "__FavoritesScene_favorites_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowEdge",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "FavoritesList",
                "args": null
              },
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TvShow",
                "plural": false,
                "selections": [
                  v2
                ]
              }
            ]
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoritesSceneQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favorites",
        "storageKey": null,
        "args": v4,
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowEdge",
            "plural": true,
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
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
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
                      v5
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "previousEpisode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "nextEpisode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  v2
                ]
              },
              v1
            ]
          },
          v3
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "favorites",
        "args": v4,
        "handle": "connection",
        "key": "FavoritesScene_favorites",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe3d05d5542b99f7a1e148b696cfcebf';
module.exports = node;
