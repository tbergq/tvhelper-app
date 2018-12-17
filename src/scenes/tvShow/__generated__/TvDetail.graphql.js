/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Summary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvDetail$ref: FragmentReference;
export type TvDetail = {|
  +image: ?{|
    +original: ?string
  |},
  +$fragmentRefs: Summary$ref,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5de62a4d74ae13d5cee3b56024d9bca2';
module.exports = node;
