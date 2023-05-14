import * as yup from 'yup';

import { CreateRoadmapFormFields } from './types';

const positionSchema = yup.object({
  x: yup.number().required(),
  y: yup.number().required(),
});

export const createRoadmapValidationSchema = yup.object({
  [CreateRoadmapFormFields.roadmap]: yup.object({
    edges: yup
      .array()
      .required()
      .of(
        yup.object({
          id: yup.string().required(),
          source: yup.string().required(),
          target: yup.string().required(),
        }),
      ),
    nodes: yup
      .array()
      .required()
      .min(1)
      .of(
        yup.object({
          id: yup.string().required(),
          position: positionSchema,
          type: yup.string().required(),
          data: yup.object({
            title: yup.string().required(),
            description: yup.string(),
            suggestedCourses: yup
              .array()
              .nullable()
              .of(
                yup.object({
                  id: yup.string().required(),
                }),
              ),
          }),
        }),
      ),
  }),

  [CreateRoadmapFormFields.title]: yup.string().required(),
  [CreateRoadmapFormFields.description]: yup.string(),
});
