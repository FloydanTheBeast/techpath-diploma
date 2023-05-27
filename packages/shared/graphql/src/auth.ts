import { gql } from '@apollo/client';

export const USER_AUTH_INFO_FRAGMENT = gql`
  fragment UserAuthInfo on UserResponse {
    id
    email
    firstName
    lastName
    roles
  }
`;

export const SESSION_INFO_FRAGMENT = gql`
  fragment SessionInfo on AuthSessionWithUserResponse {
    accessToken
    accessTokenExpiresIn
    refreshToken
    refreshTokenExpiresIn
  }
`;

export const SIGN_IN_USER_MUTATION = gql`
  mutation SignIn($data: UserSignInInput!) {
    signIn(data: $data) {
      ...SessionInfo
      user {
        ...UserAuthInfo
      }
    }
  }
  ${SESSION_INFO_FRAGMENT}
  ${USER_AUTH_INFO_FRAGMENT}
`;

export const SIGN_UP_USER_MUTATION = gql`
  mutation SignUp($data: UserSignUpInput!) {
    signUp(data: $data) {
      ...SessionInfo
      user {
        ...UserAuthInfo
      }
    }
  }
  ${SESSION_INFO_FRAGMENT}
  ${USER_AUTH_INFO_FRAGMENT}
`;

export const REFRESH_SESSION_MUTATION = gql`
  mutation RefreshSession($refreshToken: String!) {
    refreshSession(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;
