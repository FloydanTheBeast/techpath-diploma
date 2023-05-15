import { Avatar, Group, Text } from '@mantine/core';
import { RoadmapInfoFragment } from '@shared/graphql';
import { IconUserCircle } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { MRT_ColumnDef } from 'mantine-react-table';

export const ROADMAPS_TABLE_COLUMNS: MRT_ColumnDef<RoadmapInfoFragment>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Created by',
    accessorFn: ({ createdBy }) => (
      <Group>
        <Avatar size="md" radius="xl" color="blue" />
        <Text>
          {createdBy.firstName} {createdBy.lastName}
        </Text>
      </Group>
    ),
  },
  {
    header: 'Created at',
    accessorFn: ({ createdAt }) => dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss'),
  },
  {
    header: 'Updated at',
    accessorFn: ({ updatedAt }) =>
      updatedAt ? dayjs(updatedAt).format('DD/MM/YYYY HH:mm:ss') : 'None',
  },
];
