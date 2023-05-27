import { gql } from '@apollo/client';

import { COURSE_INFO_FRAGMENT } from './courses';
import { ROADMAP_INFO_FRAGMENT } from './roadmaps';

export const GLOBAL_SEARCH_QUERY = gql`
  query GlobalSearch($searchQuery: String!, $limit: Int, $offset: Int, $minScore: Float) {
    coursesFulltextCourseInfo(
      phrase: $searchQuery
      where: { score: { min: $minScore } }
      limit: $limit
      offset: $offset
    ) {
      course {
        ...CourseInfo
      }
      score
    }
    roadmapsFulltextRoadmapInfo(
      phrase: $searchQuery
      where: { score: { min: $minScore } }
      limit: $limit
      offset: $offset
    ) {
      roadmap {
        ...RoadmapInfo
      }
      score
    }
  }
  ${COURSE_INFO_FRAGMENT}
  ${ROADMAP_INFO_FRAGMENT}
`;
