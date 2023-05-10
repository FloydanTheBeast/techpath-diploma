import React from 'react';

import { Group, Text } from '@mantine/core';
import { IconDatabaseOff } from '@tabler/icons-react';
import _ from 'lodash';
import {
  MantineReactTable,
  MRT_TableState,
  MRT_Updater,
  MRT_PaginationState,
} from 'mantine-react-table';

import { usePagination } from 'src/hooks';
import { PaginationActionType } from 'src/providers';

export const DataGrid = <TData extends Record<string, unknown>>({
  enableToolbarInternalActions = false,
  state,
  ...props
}: React.ComponentProps<typeof MantineReactTable<TData>>) => {
  const { paginationState, dispatchPaginationState } = usePagination();

  const dataGridState: MRT_TableState<TData> = React.useMemo(
    () => _.defaultsDeep(_.cloneDeep(state), { pagination: paginationState }),
    [state, paginationState],
  );

  const onPaginationChange = React.useCallback(
    (updater: MRT_Updater<MRT_PaginationState>) => {
      dispatchPaginationState({
        type: PaginationActionType.changePagination,
        payload: typeof updater === 'function' ? updater(_.cloneDeep(paginationState)) : updater,
      });
    },
    [dispatchPaginationState, paginationState],
  );

  return (
    <MantineReactTable<(typeof props)['data'][0]>
      mantineProgressProps={{ sx: { display: 'none' } }}
      mantineTopToolbarProps={
        !props.renderTopToolbarCustomActions ? { sx: { display: 'none' } } : {}
      }
      renderEmptyRowsFallback={() => (
        <Group c="dimmed" position="center" spacing={2} my={16}>
          <Text>No data</Text>
          <IconDatabaseOff stroke={1.5} size="1.25rem" />
        </Group>
      )}
      enableToolbarInternalActions={enableToolbarInternalActions}
      onPaginationChange={onPaginationChange}
      state={dataGridState}
      manualPagination
      {...props}
    />
  );
};
