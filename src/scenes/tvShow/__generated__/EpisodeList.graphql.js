/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type EpisodeItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EpisodeList$ref: FragmentReference;
export type EpisodeList = {|
  +episodes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: EpisodeItem$ref,
  |}>,
  +$refType: EpisodeList$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "EpisodeList",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "episodes",
      "storageKey": null,
      "args": null,
      "concreteType": "Episode",
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
          "name": "EpisodeItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0b522ee62d4f47fbea5795d69b5b7b50';
module.exports = node;
