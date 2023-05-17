import React from 'react';

import { InternalRefetchQueriesInclude } from '@apollo/client';
import { Box, Button, Rating, Stack, Textarea } from '@mantine/core';
import { UserReviewInfoFragment, useDelelteUserReviewsMutation } from '@shared/graphql';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCurrentUser } from 'src/hooks';

import { FormField } from '../common';

import { Review } from './components';
import { CreateReviewFormValues } from './types';

type ReviewsSectionProps = {
  reviews: UserReviewInfoFragment[];
  onSubmitReview: SubmitHandler<CreateReviewFormValues>;
  refetchOnDelete?: InternalRefetchQueriesInclude;
};

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onSubmitReview,
  refetchOnDelete,
}) => {
  const { currentUser } = useCurrentUser();
  const {
    register,
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateReviewFormValues>();

  const [deleteUsersReviews] = useDelelteUserReviewsMutation();

  const { currentUserReview, restReviews } = React.useMemo(() => {
    const currentUserReview = reviews.find(review => review.user.id === currentUser?.id);

    return {
      currentUserReview,
      restReviews: reviews.filter(review => review.id !== currentUserReview?.id),
    };
  }, [reviews, currentUser?.id]);

  return (
    <React.Fragment>
      {!currentUserReview && (
        <form
          onSubmit={async event => {
            await handleSubmit(onSubmitReview)(event);
            reset({});
          }}
        >
          <Stack mb="xl">
            <FormField
              component={Rating}
              fieldProps={{
                name: 'rating',
                control,
                fractions: 2,
                onChange: value => setValue('rating', value),
              }}
            />
            <FormField
              component={Textarea}
              fieldProps={{
                ...register('comment'),
                control,
                placeholder: 'Write you comment here',
                maw: 500,
                minRows: 3,
              }}
            />
            <Box>
              <Button type="submit" variant="light" loading={isSubmitting}>
                Submit review
              </Button>
            </Box>
          </Stack>
        </form>
      )}
      <Stack>
        {currentUserReview && (
          <Review
            review={currentUserReview}
            onDeleteReview={async () => {
              await deleteUsersReviews({
                variables: {
                  where: { id: currentUserReview.id },
                },
                refetchQueries: refetchOnDelete,
                awaitRefetchQueries: true,
              });
            }}
          />
        )}
        {restReviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </Stack>
    </React.Fragment>
  );
};
