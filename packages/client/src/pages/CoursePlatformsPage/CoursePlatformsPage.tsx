import React from 'react';

import { ActionIcon, Button, Group, Image, ThemeIcon, Tooltip } from '@mantine/core';
import {
  CoursePlatformInfoFragment,
  GetCoursesDocument,
  useDeleteCourseByIdMutation,
  useGetCoursePlatformsQuery,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import {
  IconDatabasePlus,
  IconEdit,
  IconExternalLink,
  IconSchool,
  IconTrash,
} from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';

import { ContentPageLayout, CreateCourseModal, DataGrid } from 'src/components';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

const columns: MRT_ColumnDef<Partial<CoursePlatformInfoFragment>>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Logo',
    size: 30,
    accessorFn: ({ logoUrl }) =>
      logoUrl ? (
        <Image fit="contain" height={32} width={32} src={logoUrl} />
      ) : (
        <ThemeIcon color="dark">
          <IconSchool size="2rem" stroke={1.5} />
        </ThemeIcon>
      ),
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Url',
    accessorFn: ({ url }) => (
      <Button
        component="a"
        href={url}
        target="_blank"
        compact
        variant="subtle"
        leftIcon={<IconExternalLink size="0.9rem" />}
      >
        {url}
      </Button>
    ),
  },
];

export const CoursePlatformsPage: React.FC = () => {
  const { openModal } = useModal(ModalId.CreateCourseModal);
  const { data, loading: loadingCourses } = useGetCoursePlatformsQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const handleCoursePlatformDelete = async (id: Nullable<string>) => {
    if (!id) {
      return;
    }

    // TODO: Confirmation modal
    if (window.confirm('Are you sure you want to delete the course platform?')) {
      await deleteCourse({ variables: { id }, refetchQueries: [GetCoursesDocument] });
    }
  };

  const coursePlatforms = data?.coursePlatforms;

  return (
    <ContentPageLayout title="Courses">
      <DataGrid
        displayColumnDefOptions={{
          'mrt-row-actions': {
            mantineTableHeadCellProps: {
              align: 'center',
            },
            size: 30,
          },
        }}
        columns={columns}
        data={coursePlatforms ?? []}
        state={{ isLoading: loadingCourses }}
        enableColumnOrdering
        enableEditing
        renderRowActions={({ row }) => (
          <Group position="center">
            <Tooltip withArrow position="left" label="Edit">
              <ActionIcon onClick={console.log}>
                <IconEdit stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Tooltip withArrow position="right" label="Delete">
              <ActionIcon
                color="red"
                onClick={async () => await handleCoursePlatformDelete(row.original.id)}
              >
                <IconTrash stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
        renderTopToolbarCustomActions={() => {
          return (
            <Button
              onClick={() => openModal()}
              leftIcon={<IconDatabasePlus size="1rem" />}
              // compact
              variant="outline"
              // color="green"
            >
              Create new course platform
            </Button>
          );
        }}
      />

      <CreateCourseModal />
    </ContentPageLayout>
  );
};
