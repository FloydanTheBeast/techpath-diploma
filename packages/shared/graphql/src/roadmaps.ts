import { gql } from '@apollo/client';

import { USER_INFO_FRAGMENT } from './auth';

export const ROADMAP_NODE_INFO_FRAMENT = gql`
  fragment RoadmapNodeInfo on RoadmapNode {
    id
    title
    description
    type
    positionX
    positionY
  }
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
    createdBy {
      id
      firstName
      lastName
    }
    createdAt
    updatedAt
  }
  ${USER_INFO_FRAGMENT}
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

export const GET_ROADMAP_BY_ID_QUERY = gql`
  query GetRoadmapById($id: ID!) {
    roadmaps(where: { id: $id }) {
      id
      title
      description
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
    }
  }
  ${ROADMAP_NODE_INFO_FRAMENT}
  ${ROADMAP_EDGE_INFO_FRAMENT}
`;

export const CREATE_ROADMAP_MUTATION = gql`
  mutation CreateRoadmap($data: CreateRoadmapInput!) {
    createRoadmap(data: $data)
  }
`;
