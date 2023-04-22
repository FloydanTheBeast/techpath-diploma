import React from 'react';

import { ActionIcon, Button, Group, Tooltip } from '@mantine/core';
import {
  CourseInfoFragment,
  GetCoursesDocument,
  useDeleteCourseByIdMutation,
  useGetCoursesQuery,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import { IconDatabasePlus, IconEdit, IconExternalLink, IconTrash } from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';

import { ContentPageLayout, CreateCourseModal, DataGrid } from 'src/components';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

const columns: MRT_ColumnDef<Partial<CourseInfoFragment>>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
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

export const CoursesPage: React.FC = () => {
  const { openModal } = useModal(ModalId.CreateCourseModal);
  const { data, loading: loadingCourses } = useGetCoursesQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const handleCourseDelete = async (id: Nullable<string>) => {
    if (!id) {
      return;
    }

    // TODO: Confirmation modal
    if (window.confirm('Are you sure you want to delete the course?')) {
      await deleteCourse({ variables: { id }, refetchQueries: [GetCoursesDocument] });
    }
  };

  console.log(loadingCourses);

  const courses = data?.courses;

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
        data={courses || []}
        state={{ isLoading: loadingCourses }}
        editingMode="modal" //default
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
                onClick={async () => await handleCourseDelete(row.original.id)}
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
              Create new course
            </Button>
          );
        }}
      />

      <CreateCourseModal />
    </ContentPageLayout>
  );
};
