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

export const SESSION_INFO_FRAGMENT = gql`
  fragment SessionInfo on AuthSessionResponse {
    accessToken
    accessTokenExpiresIn
    refreshToken
    refreshTokenExpiresIn
  }
`;

export const SESSION_WITH_USER_INFO_FRAGMENT = gql`
  fragment SessionWithUserInfo on AuthSessionWithUserResponse {
    accessToken
    accessTokenExpiresIn
    refreshToken
    refreshTokenExpiresIn
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
      ...SessionWithUserInfo
      user {
        ...UserInfo
      }
    }
  }
  ${SESSION_WITH_USER_INFO_FRAGMENT}
  ${USER_INFO_FRAGMENT}
`;
