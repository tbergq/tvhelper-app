/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FavoritesItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoritesList$ref: FragmentReference;
export type FavoritesList = $ReadOnlyArray<{|
  +node: ?{|
    +id: ?string,
    +$fragmentRefs: FavoritesItem$ref,
  |},
  +$refType: FavoritesList$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoritesList",
  "type": "TvShowEdge",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "FavoritesItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '385b1676cc2847744c216cfe658e3822';
module.exports = node;
