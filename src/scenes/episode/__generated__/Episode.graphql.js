/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ToggleWatched$ref = any;
type TvHelperImage$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Episode$ref: FragmentReference;
export type Episode = {|
  +name: ?string,
  +summary: ?string,
  +image: ?{|
    +$fragmentRefs: TvHelperImage$ref
  |},
  +$fragmentRefs: ToggleWatched$ref,
  +$refType: Episode$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Episode",
  "type": "Episode",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "FragmentSpread",
          "name": "TvHelperImage",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ToggleWatched",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8845b0d673126163d35f8ed81547b92e';
module.exports = node;
