import { gql } from '@apollo/client';

import { COURSE_INFO_FRAGMENT } from './courses';
import { ROADMAP_INFO_FRAGMENT } from './roadmaps';

export const USER_INFO_FRAGMENT = gql`
  fragment UserInfo on User {
    id
    email
    roles
    firstName
    lastName
  }
`;

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      ...UserInfo
      bookmarkedCourses {
        ...CourseInfo
      }
      bookmarkedRoadmaps {
        ...RoadmapInfo
      }
    }
  }
  ${USER_INFO_FRAGMENT}
  ${COURSE_INFO_FRAGMENT}
  ${ROADMAP_INFO_FRAGMENT}
`;

export const GET_USER_RECOMMENDED_COURSES_QUERY = gql`
  query GetUserRecommendedCourses($count: Int) {
    userRecommendedCourses(count: $count) {
      ...CourseInfo
    }
  }
  ${COURSE_INFO_FRAGMENT}
`;

export const UPDATE_USERS_MUTATION = gql`
  mutation UpdateUsers(
    $where: UserWhere
    $update: UserUpdateInput
    $connect: UserConnectInput
    $disconnect: UserDisconnectInput
    $create: UserRelationInput
    $delete: UserDeleteInput
    $connectOrCreate: UserConnectOrCreateInput
  ) {
    updateUsers(
      where: $where
      update: $update
      connect: $connect
      disconnect: $disconnect
      create: $create
      delete: $delete
      connectOrCreate: $connectOrCreate
    ) {
      users {
        id
      }
    }
  }
  ${USER_INFO_FRAGMENT}
`;
