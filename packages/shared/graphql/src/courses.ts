import { gql } from '@apollo/client';

export const COURSE_INFO_FRAGMENT = gql`
  fragment CourseInfo on Course {
    id
    title
    description
    url
    createdAt
    updatedAt
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
  mutation UpdateCourseById($id: ID!, $input: CourseUpdateInput) {
    updateCourses(where: { id: $id }, update: $input) {
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
