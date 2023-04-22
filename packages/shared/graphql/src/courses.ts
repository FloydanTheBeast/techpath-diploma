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
      currency
      price
    }
  }
`;

export const GET_COURSES_QUERY = gql`
  query GetCourses($where: CourseWhere, $options: CourseOptions) {
    courses(where: $where, options: $options) {
      ...CourseInfo
    }
  }
  ${COURSE_INFO_FRAGMENT}
`;

export const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourse($course: CourseCreateInput!) {
    createCourses(input: [$course]) {
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
