export enum RouteAccessType {
  inherit = 'inherit',
  unauthorized = 'unauthorized',
  anyAuthorized = 'anyAuthorized',
  hasAdminRole = 'hasAdminRole',
  hasUserRole = 'hasUserRole',
}

export enum RouteEntityType {
  roadmap = 'roadmapId',
  course = 'courseId',
}

export const SEARCH_QUERY_STRING_NAME = 'query';
export const SEARCH_ENTITY_QUERY_STRING_NAME = 'entity';
