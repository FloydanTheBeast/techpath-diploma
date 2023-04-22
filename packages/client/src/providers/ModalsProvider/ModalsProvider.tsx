import React from 'react';

import type { SimpleObject } from '@shared/types';

import { ModalsContext } from './ModalsContext';
import type { ModalsState, ModalsContextType } from './ModalsContext';

export const ModalsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = React.useState<ModalsState<SimpleObject>>({});

  const openModal: ModalsContextType['openModal'] = React.useCallback((id, args) => {
    setState(prevState => {
      return {
        ...prevState,
        [id]: {
          isOpen: true,
          args: args || null,
        },
      };
    });
  }, []);

  const closeModal: ModalsContextType['closeModal'] = React.useCallback(id => {
    setState(prevState => {
      return {
        ...prevState,
        [id]: {
          args: { ...prevState[id]?.args },
          isOpen: false,
        },
      };
    });
  }, []);

  const contextValue: ModalsContextType = React.useMemo(() => {
    return { state, openModal, closeModal };
  }, [closeModal, openModal, state]);

  return <ModalsContext.Provider value={contextValue}>{children}</ModalsContext.Provider>;
};
