/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CastItem$ref: FragmentReference;
export type CastItem = {|
  +person: ?{|
    +name: ?string,
    +image: ?{|
      +medium: ?string
    |},
  |},
  +character: ?{|
    +name: ?string,
    +image: ?{|
      +medium: ?string
    |},
  |},
  +$refType: CastItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "CastItem",
  "type": "Cast",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "person",
      "storageKey": null,
      "args": null,
      "concreteType": "Person",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "character",
      "storageKey": null,
      "args": null,
      "concreteType": "Person",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1f377610d84ed7616cebc6a7d29679f8';
module.exports = node;
