/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CastItemPerson_person$ref: FragmentReference;
export type CastItemPerson_person = {
  +name: ?string,
  +image: ?{
    +medium: ?string
  },
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CastItemPerson_person",
  "type": "Person",
  "metadata": {
    "mask": false
  },
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
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9b560acbe5cef0ba5494fd44077d90c7';
module.exports = node;
