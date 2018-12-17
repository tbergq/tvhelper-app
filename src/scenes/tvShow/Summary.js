// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { ReadMore } from '@tbergq/tvhelper-components';

import type { Summary as SummaryType } from './__generated__/Summary.graphql';

type Props = {|
  +data: SummaryType,
|};

class Summary extends React.Component<Props> {
  render() {
    return (
      <ReadMore numberOfLines={5} truncatedText="Show more" revealedText="Hide">
        {this.props.data.summary}
      </ReadMore>
    );
  }
}

export default createFragmentContainer(
  Summary,
  graphql`
    fragment Summary on TvShow {
      summary
    }
  `,
);
