import { gql } from '@apollo/client';

export const COURSE_PLATFORM_INFO_FRAGMENT = gql`
  fragment CoursePlatformInfo on CoursePlatform {
    id
    name
    url
    logoUrl
    createdAt
    updatedAt
  }
`;

export const GET_COURSE_PLATFORMS_QUERY = gql`
  query GetCoursePlatforms {
    coursePlatforms {
      ...CoursePlatformInfo
    }
  }
  ${COURSE_PLATFORM_INFO_FRAGMENT}
`;

export const DELETE_COURSE_PLATFORM_BY_ID_MUTATION = gql`
  mutation DeleteCoursePlatformById($id: ID!) {
    deleteCoursePlatforms(where: { id: $id }) {
      nodesDeleted
    }
  }
  ${COURSE_PLATFORM_INFO_FRAGMENT}
`;
