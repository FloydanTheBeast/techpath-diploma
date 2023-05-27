import { gql } from '@apollo/client';

export const GET_TOPIC_TAGS_QUERY = gql`
  query GetTopicTags($where: TopicTagWhere, $options: TopicTagOptions) {
    topicTags(where: $where, options: $options) {
      id
      name
    }
  }
`;
