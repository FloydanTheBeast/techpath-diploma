import type { MRT_PaginationState } from 'mantine-react-table';

export type PaginationState = MRT_PaginationState & {
  count: number;
};

export enum PaginationActionType {
  changeCount = 'changeCount',
  changePagination = 'changePagination',
}

export type PaginationAction =
  | {
      type: PaginationActionType.changeCount;
      payload: { count: number };
    }
  | {
      type: PaginationActionType.changePagination;
      payload: Partial<MRT_PaginationState>;
    };
