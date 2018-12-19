/**
 * @flow
 * @relayHash 0ce91d2a8251024aa40cb44fd7bffdf8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TvDetail$ref = any;
export type TvShowSceneQueryVariables = {|
  id: string
|};
export type TvShowSceneQueryResponse = {|
  +tvShowDetail: ?{|
    +$fragmentRefs: TvDetail$ref
  |}
|};
export type TvShowSceneQuery = {|
  variables: TvShowSceneQueryVariables,
  response: TvShowSceneQueryResponse,
|};
*/


/*
query TvShowSceneQuery(
  $id: ID!
) {
  tvShowDetail(id: $id) {
    ...TvDetail
    id
  }
}

fragment TvDetail on TvShow {
  isFavorite
  image {
    original
    id
  }
  ...Summary
  ...EpisodeList
  ...Cast
}

fragment Summary on TvShow {
  summary
}

fragment EpisodeList on TvShow {
  episodes {
    id
    ...EpisodeItem
  }
}

fragment Cast on TvShow {
  cast {
    id
    ...CastItem
  }
}

fragment CastItem on Cast {
  person {
    name
    image {
      medium
      id
    }
    id
  }
  character {
    name
    image {
      medium
      id
    }
    id
  }
}

fragment EpisodeItem on Episode {
  seasonAndNumber
  name
  airdate
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  v3,
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
      v2
    ]
  },
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TvShowSceneQuery",
  "id": null,
  "text": "query TvShowSceneQuery(\n  $id: ID!\n) {\n  tvShowDetail(id: $id) {\n    ...TvDetail\n    id\n  }\n}\n\nfragment TvDetail on TvShow {\n  isFavorite\n  image {\n    original\n    id\n  }\n  ...Summary\n  ...EpisodeList\n  ...Cast\n}\n\nfragment Summary on TvShow {\n  summary\n}\n\nfragment EpisodeList on TvShow {\n  episodes {\n    id\n    ...EpisodeItem\n  }\n}\n\nfragment Cast on TvShow {\n  cast {\n    id\n    ...CastItem\n  }\n}\n\nfragment CastItem on Cast {\n  person {\n    name\n    image {\n      medium\n      id\n    }\n    id\n  }\n  character {\n    name\n    image {\n      medium\n      id\n    }\n    id\n  }\n}\n\nfragment EpisodeItem on Episode {\n  seasonAndNumber\n  name\n  airdate\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TvShowSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": v1,
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TvDetail",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TvShowSceneQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": v1,
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isFavorite",
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
                "name": "original",
                "args": null,
                "storageKey": null
              },
              v2
            ]
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
            "name": "episodes",
            "storageKey": null,
            "args": null,
            "concreteType": "Episode",
            "plural": true,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "seasonAndNumber",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "airdate",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cast",
            "storageKey": null,
            "args": null,
            "concreteType": "Cast",
            "plural": true,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "person",
                "storageKey": null,
                "args": null,
                "concreteType": "Person",
                "plural": false,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "character",
                "storageKey": null,
                "args": null,
                "concreteType": "Person",
                "plural": false,
                "selections": v4
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ddca74e3d17d01ac8e69c8a2f59329e';
module.exports = node;
