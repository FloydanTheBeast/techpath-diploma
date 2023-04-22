import { SESSION_INFO_FRAGMENT, SessionInfoFragment } from '@shared/graphql';

import { REFRESH_TOKEN_STORAGE_KEY } from 'src/constants';

export const refreshToken = async () => {
  return (
    await fetch('http://localhost:3333/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `query RefreshSession($refreshToken: string) {
        refreshSession(refreshToken: $refreshToken) {
          ...SessionInfo
        }
      }
      ${SESSION_INFO_FRAGMENT}
      `,
        variables: {
          refreshToken: localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY),
        },
      }),
    })
  ).json() as Promise<SessionInfoFragment>;
};
