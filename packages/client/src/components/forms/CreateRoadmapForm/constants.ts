import { Difficulty } from '@shared/graphql';
import * as yup from 'yup';

const positionSchema = yup.object({
  x: yup.number().required(),
  y: yup.number().required(),
});

export const createRoadmapValidationSchema = yup.object({
  roadmap: yup.object({
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
  title: yup.string().required(),
  description: yup.string(),
  difficulty: yup.mixed<Difficulty>().oneOf(Object.values(Difficulty)).required(),
  countryCodeISO: yup
    .string()
    .oneOf(['ru', 'en', 'es', 'de', 'fr'] as const)
    .required(), // FIXME: Use constant
  topicTagsIds: yup.array().of(yup.string().required()),
});
