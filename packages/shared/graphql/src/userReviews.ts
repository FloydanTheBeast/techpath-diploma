import { gql } from '@apollo/client';

export const USER_REVIEW_INFO_FRAGMENT = gql`
  fragment UserReviewInfo on UserReview {
    id
    rating
    comment
    createdAt
    user {
      id
      firstName
      lastName
    }
  }
`;

export const COURSE_USER_REVIEW_AGGREGATION_INFO_FRAGMENT = gql`
  fragment CourseUserReviewAggregationInfo on CourseUserReviewReviewsAggregationSelection {
    count
    node {
      rating {
        average
      }
    }
  }
`;

export const ROADMAP_USER_REVIEW_AGGREGATION_INFO_FRAGMENT = gql`
  fragment RoadmapUserReviewAggregationInfo on RoadmapUserReviewReviewsAggregationSelection {
    count
    node {
      rating {
        average
      }
    }
  }
`;

export const CREATE_USER_REVIEWS_MUTATION = gql`
  mutation CreateUserReviews($input: [UserReviewCreateInput!]!) {
    createUserReviews(input: $input) {
      userReviews {
        id
      }
    }
  }
`;

export const DELETE_USER_REVIEWS_MUTATION = gql`
  mutation DelelteUserReviews($where: UserReviewWhere) {
    deleteUserReviews(where: $where) {
      nodesDeleted
    }
  }
`;
