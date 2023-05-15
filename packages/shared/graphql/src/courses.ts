import { gql } from '@apollo/client';

export const COURSE_INFO_FRAGMENT = gql`
  fragment CourseInfo on Course {
    id
    title
    description
    url
    createdAt
    updatedAt
    difficulty
    externalRating
    externalRatingsCount
    languages {
      countryCodeISO
    }
    price {
      currencyCodeISO
      price
    }
    platform {
      id
      name
      logoUrl
      url
    }
    tags {
      id
      name
    }
  }
`;

export const GET_COURSES_QUERY = gql`
  query GetCourses($where: CourseWhere, $options: CourseOptions) {
    courses(where: $where, options: $options) {
      ...CourseInfo
    }
    coursesAggregate(where: $where) {
      count
    }
  }
  ${COURSE_INFO_FRAGMENT}
`;

export const SEARCH_COURSES_QUERY = gql`
  query SearchCourses(
    $searchQuery: String!
    $where: CourseFulltextWhere
    $limit: Int
    $offset: Int
  ) {
    coursesFulltextCourseInfo(phrase: $searchQuery, where: $where, limit: $limit, offset: $offset) {
      course {
        ...CourseInfo
      }
      score
    }
  }
  ${COURSE_INFO_FRAGMENT}
`;

export const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourse($input: CourseCreateInput!) {
    createCourses(input: [$input]) {
      courses {
        id
      }
    }
  }
`;

export const UPDATE_COURSE_BY_ID_MUTATION = gql`
  mutation UpdateCourseById(
    $id: ID!
    $input: CourseUpdateInput
    $connect: CourseConnectInput
    $disconnect: CourseDisconnectInput
  ) {
    updateCourses(where: { id: $id }, update: $input, connect: $connect, disconnect: $disconnect) {
      courses {
        id
      }
    }
  }
`;

export const DELETE_COURSE_BY_ID_MUTATION = gql`
  mutation DeleteCourseById($id: ID!) {
    deleteCourses(where: { id: $id }, delete: { price: { where: {} } }) {
      nodesDeleted
    }
  }
`;
