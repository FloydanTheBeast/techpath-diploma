import React from 'react';

import { ActionIcon, Avatar, Group, Paper, Rating, Text, rem } from '@mantine/core';
import { UserReviewInfoFragment } from '@shared/graphql';
import { getUserFullName } from '@shared/utils';
import { IconTrash } from '@tabler/icons-react';

type ReviewProps = {
  review: UserReviewInfoFragment;
  onDeleteReview?: () => void;
};

export const Review: React.FC<ReviewProps> = ({ review, onDeleteReview }) => {
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleReviewDelete = async () => {
    setIsDeleting(true);
    await onDeleteReview?.();
    setIsDeleting(false);
  };

  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      maw={500}
      sx={
        onDeleteReview
          ? theme => ({ borderColor: `${theme.colors.blue['3']} !important` })
          : undefined
      }
    >
      <Group position="apart" align="start">
        <Group>
          <Avatar radius="xl" />
          <div>
            <Rating readOnly value={review.rating ?? 0} fractions={2} />
            <Text fz="sm">{getUserFullName(review.user)}</Text>
            <Text fz="xs" c="dimmed">
              {review.createdAt}
            </Text>
          </div>
        </Group>
        {onDeleteReview && (
          <ActionIcon size="sm" onClick={handleReviewDelete} loading={isDeleting}>
            <IconTrash />
          </ActionIcon>
        )}
      </Group>
      <Text
        sx={theme => ({
          paddingLeft: rem(54),
          paddingTop: theme.spacing.sm,
          fontSize: theme.fontSizes.sm,
        })}
      >
        {review.comment}
      </Text>
    </Paper>
  );
};
