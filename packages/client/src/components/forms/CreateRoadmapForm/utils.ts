import { CreateRoadmapInput } from '@shared/graphql';
import * as yup from 'yup';

import { createRoadmapValidationSchema } from './constants';

export const prepareFormData = (
  data: yup.InferType<typeof createRoadmapValidationSchema>,
): CreateRoadmapInput => {
  data = createRoadmapValidationSchema.cast(data, { stripUnknown: true });

  return {
    title: data.title,
    description: data.description,
    edges: data.roadmap.edges,
    nodes: data.roadmap.nodes.map(({ data, ...node }) => ({ ...node, ...data })),
  };
};
