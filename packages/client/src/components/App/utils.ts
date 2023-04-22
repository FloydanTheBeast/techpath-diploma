import { MutationResult } from '@apollo/client';
import { RefreshSessionMutation } from '@shared/graphql';

import { REFRESH_TOKEN_STORAGE_KEY } from 'src/constants';

export const refreshToken = async () => {
  return await (
    (
      await fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
        mutation RefreshSession($refreshToken: String!) {
          refreshSession(refreshToken: $refreshToken) {
            accessToken
            refreshToken
          }
        }
      `,
          variables: {
            refreshToken: localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY),
          },
        }),
      })
    ).json() as Promise<MutationResult<RefreshSessionMutation>>
  ).then(res => res.data?.refreshSession);
};
