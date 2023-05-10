import { RoadmapInfoFragment } from '@shared/graphql';
import { MRT_ColumnDef } from 'mantine-react-table';

export const ROADMAPS_TABLE_COLUMNS: MRT_ColumnDef<RoadmapInfoFragment>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Created by',
    accessorFn: ({ createdBy }) => `${createdBy.firstName} ${createdBy.lastName}`,
  },
  {
    header: 'Created at',
    accessorKey: 'createdAt',
  },
  {
    header: 'Updated at',
    accessorKey: 'updatedAt',
  },
];
