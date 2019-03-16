/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CastItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Cast$ref: FragmentReference;
export type Cast = {|
  +cast: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: CastItem$ref,
  |}>,
  +$refType: Cast$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Cast",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "cast",
      "storageKey": null,
      "args": null,
      "concreteType": "Cast",
      "plural": true,
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
          "name": "CastItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5b2b23b5e03f43fa68fcb3c35ee6e456';
module.exports = node;
