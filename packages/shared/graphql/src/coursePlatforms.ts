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

export const CREATE_COURSE_PLATFORM_MUTATION = gql`
  mutation CreateCoursePlatform($input: CoursePlatformCreateInput!) {
    createCoursePlatforms(input: [$input]) {
      coursePlatforms {
        id
      }
    }
  }
`;

export const UPDATE_COURSE_PLATFORM_BY_ID_MUTATION = gql`
  mutation UpdateCoursePlatformById($id: ID!, $input: CoursePlatformUpdateInput) {
    updateCoursePlatforms(where: { id: $id }, update: $input) {
      coursePlatforms {
        id
      }
    }
  }
`;

export const DELETE_COURSE_PLATFORM_BY_ID_MUTATION = gql`
  mutation DeleteCoursePlatformById($id: ID!) {
    deleteCoursePlatforms(where: { id: $id }) {
      nodesDeleted
    }
  }
  ${COURSE_PLATFORM_INFO_FRAGMENT}
`;
