import { gql } from '@apollo/client';

import { COURSE_INFO_FRAGMENT } from './courses';

export const GET_USER_RECOMMENDED_COURSES_QUERY = gql`
  query GetUserRecommendedCourses($count: Int) {
    userRecommendedCourses(count: $count) {
      ...CourseInfo
    }
  }
  ${COURSE_INFO_FRAGMENT}
`;
