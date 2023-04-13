import { gql } from '@apollo/client';

export const SIGN_IN_USER = gql`
  mutation signIn($data: UserSignInInput!) {
    signIn(data: $data) {
      accessToken
    }
  }
`;
