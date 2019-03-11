// @flow strict

import { commitMutation, graphql } from '@tbergq/tvhelper-relay';

import type { LoginMutationResponse } from './__generated__/LoginMutation.graphql';

const mutation = graphql`
  mutation LoginMutation($username: String!, $password: String!) {
    tvHelperLogin(username: $username, password: $password) {
      token
      success
    }
  }
`;

type Args = {|
  +onCompleted: (response: LoginMutationResponse, error: Error) => void,
  +onError?: () => void,
  +username: string,
  +password: string,
|};

const loginMutation = ({ onCompleted, onError, username, password }: Args) => {
  commitMutation({
    mutation,
    variables: { username, password },
    onCompleted,
    onError,
  });
};

export default loginMutation;
