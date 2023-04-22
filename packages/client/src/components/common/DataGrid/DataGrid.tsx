import React from 'react';

import { Group, Text } from '@mantine/core';
import { IconDatabaseOff } from '@tabler/icons-react';
import { MantineReactTable } from 'mantine-react-table';

export const DataGrid = <TData extends Record<string, unknown>>({
  enableToolbarInternalActions = false,
  ...props
}: React.ComponentProps<typeof MantineReactTable<TData>>) => {
  return (
    <MantineReactTable<(typeof props)['data'][0]>
      mantineProgressProps={{ sx: { display: 'none' } }}
      renderEmptyRowsFallback={() => (
        <Group c="dimmed" position="center" spacing={2} my={16}>
          <Text>No data</Text>
          <IconDatabaseOff stroke={1.5} size="1.25rem" />
        </Group>
      )}
      enableToolbarInternalActions={enableToolbarInternalActions}
      {...props}
    />
  );
};
