/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Cast$ref = any;
type EpisodeList$ref = any;
type Summary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvDetail$ref: FragmentReference;
export type TvDetail = {|
  +isFavorite: ?boolean,
  +image: ?{|
    +original: ?string
  |},
  +$fragmentRefs: Summary$ref & EpisodeList$ref & Cast$ref,
  +$refType: TvDetail$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TvDetail",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
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
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "Summary",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EpisodeList",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Cast",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3cf286c38c10ab69a072cedfaaaeb91a';
module.exports = node;
