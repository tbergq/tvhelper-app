/**
 * @flow
 * @relayHash 1cbcc281ea77d01b4213bbd548160f37
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TvShowList$ref = any;
export type SearchContainerQueryVariables = {|
  query: string
|};
export type SearchContainerQueryResponse = {|
  +searchTvShow: ?{|
    +$fragmentRefs: TvShowList$ref
  |}
|};
export type SearchContainerQuery = {|
  variables: SearchContainerQueryVariables,
  response: SearchContainerQueryResponse,
|};
*/


/*
query SearchContainerQuery(
  $query: String!
) {
  searchTvShow(query: $query) {
    ...TvShowList
  }
}

fragment TvShowList on TvShowConnection {
  edges {
    node {
      id
      ...TvShowItem
    }
  }
}

fragment TvShowItem on TvShow {
  id
  name
  status
  rating
  image {
    medium
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query",
    "type": "String!"
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
    "name": "SearchContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchTvShow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TvShowList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchContainerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchTvShow",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "rating",
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
                      (v2/*: any*/)
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
  "params": {
    "operationKind": "query",
    "name": "SearchContainerQuery",
    "id": null,
    "text": "query SearchContainerQuery(\n  $query: String!\n) {\n  searchTvShow(query: $query) {\n    ...TvShowList\n  }\n}\n\nfragment TvShowList on TvShowConnection {\n  edges {\n    node {\n      id\n      ...TvShowItem\n    }\n  }\n}\n\nfragment TvShowItem on TvShow {\n  id\n  name\n  status\n  rating\n  image {\n    medium\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '37b7036dc76f7158fe70edfc859f7d9d';
module.exports = node;
