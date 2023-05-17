import { UserReviewCreateInput } from '@shared/graphql';

export type CreateReviewFormValues = Pick<UserReviewCreateInput, 'rating' | 'comment'>;
