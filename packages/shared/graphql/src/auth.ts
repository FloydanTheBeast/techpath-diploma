import { gql } from '@apollo/client';

export const USER_INFO_FRAGMENT = gql`
  fragment UserInfo on UserResponse {
    id
    email
    firstName
    lastName
    roles
  }
`;

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      ...UserInfo
    }
  }
  ${USER_INFO_FRAGMENT}
`;

export const SIGN_IN_USER_MUTATION = gql`
  mutation SignIn($data: UserSignInInput!) {
    signIn(data: $data) {
      accessToken
      accessTokenExpiresIn
      refreshToken
      refreshTokenExpiresIn
      user {
        ...UserInfo
      }
    }
  }
  ${USER_INFO_FRAGMENT}
`;
