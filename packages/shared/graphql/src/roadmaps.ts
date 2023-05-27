import { gql } from '@apollo/client';

import { COURSE_INFO_FRAGMENT } from './courses';
import {
  ROADMAP_USER_REVIEW_AGGREGATION_INFO_FRAGMENT,
  USER_REVIEW_INFO_FRAGMENT,
} from './userReviews';

export const ROADMAP_NODE_INFO_FRAMENT = gql`
  fragment RoadmapNodeInfo on RoadmapNode {
    id
    title
    description
    type
    positionX
    positionY
    suggestedCourses {
      ...CourseInfo
    }
  }
  ${COURSE_INFO_FRAGMENT}
`;

export const ROADMAP_EDGE_INFO_FRAMENT = gql`
  fragment RoadmapEdgeInfo on RoadmapEdge {
    id
    source
    target
    targetHandle
  }
`;

export const ROADMAP_INFO_FRAGMENT = gql`
  fragment RoadmapInfo on Roadmap {
    id
    title
    description
    difficulty
    bookmarked
    tags {
      id
      name
    }
    languages {
      countryCodeISO
    }
    createdBy {
      id
      firstName
      lastName
    }
    createdAt
    updatedAt
    reviews {
      ...UserReviewInfo
    }
    reviewsAggregate {
      ...RoadmapUserReviewAggregationInfo
    }
  }
  ${USER_REVIEW_INFO_FRAGMENT}
  ${ROADMAP_USER_REVIEW_AGGREGATION_INFO_FRAGMENT}
`;

export const GET_ROADMAPS_QUERY = gql`
  query GetRoadmaps($where: RoadmapWhere, $options: RoadmapOptions) {
    roadmaps(where: $where, options: $options) {
      ...RoadmapInfo
    }
    roadmapsAggregate(where: $where) {
      count
    }
  }
  ${ROADMAP_INFO_FRAGMENT}
`;

export const SEARCH_ROAMAPS_QUERY = gql`
  query SearchRoadmaps(
    $searchQuery: String!
    $where: RoadmapFulltextWhere
    $limit: Int
    $offset: Int
  ) {
    roadmapsFulltextRoadmapInfo(
      phrase: $searchQuery
      where: $where
      limit: $limit
      offset: $offset
    ) {
      roadmap {
        ...RoadmapInfo
      }
      score
    }
  }
  ${ROADMAP_INFO_FRAGMENT}
`;

export const GET_ROADMAP_BY_ID_QUERY = gql`
  query GetRoadmapById($id: ID!) {
    roadmaps(where: { id: $id }) {
      id
      title
      description
      difficulty
      tags {
        id
        name
      }
      languages {
        countryCodeISO
      }
      nodes {
        ...RoadmapNodeInfo
      }
      edges {
        ...RoadmapEdgeInfo
      }
      createdBy {
        id
        firstName
        lastName
      }
      createdAt
      updatedAt
      reviews {
        ...UserReviewInfo
      }
      reviewsAggregate {
        ...RoadmapUserReviewAggregationInfo
      }
    }
  }
  ${USER_REVIEW_INFO_FRAGMENT}
  ${ROADMAP_USER_REVIEW_AGGREGATION_INFO_FRAGMENT}
  ${ROADMAP_NODE_INFO_FRAMENT}
  ${ROADMAP_EDGE_INFO_FRAMENT}
`;

export const CREATE_ROADMAP_MUTATION = gql`
  mutation CreateRoadmap($data: CreateRoadmapInput!) {
    createRoadmap(data: $data)
  }
`;
