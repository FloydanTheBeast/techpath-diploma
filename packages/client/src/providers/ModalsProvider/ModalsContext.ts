import React from 'react';

import type { SimpleObject } from '@shared/types';

export type ModalArgs<TArgs extends SimpleObject> = TArgs | null;

export type ModalState<TArgs extends SimpleObject> = {
  isOpen: boolean;
  args: ModalArgs<Partial<TArgs>>;
};

export type ModalId = string | number;

export type ModalsState<TArgs extends SimpleObject> = Record<ModalId, ModalState<TArgs>>;

export type ModalsContextType = {
  state: ModalsState<SimpleObject>;
  openModal: <TArgs extends SimpleObject>(id: ModalId, args?: ModalArgs<TArgs>) => void;
  closeModal: (id: ModalId) => void;
};

export const ModalsContext = React.createContext<ModalsContextType>({
  state: {},
  openModal: () => undefined,
  closeModal: () => undefined,
});
