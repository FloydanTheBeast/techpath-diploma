import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
  coursesFulltextCourseInfo: Array<CourseFulltextResult>;
  courses: Array<Course>;
  coursesAggregate: CourseAggregateSelection;
  coursesConnection: CoursesConnection;
  coursePrices: Array<CoursePrice>;
  coursePricesAggregate: CoursePriceAggregateSelection;
  coursePricesConnection: CoursePricesConnection;
  coursePlatforms: Array<CoursePlatform>;
  coursePlatformsAggregate: CoursePlatformAggregateSelection;
  coursePlatformsConnection: CoursePlatformsConnection;
  courseLanguages: Array<CourseLanguage>;
  courseLanguagesAggregate: CourseLanguageAggregateSelection;
  courseLanguagesConnection: CourseLanguagesConnection;
  roadmaps: Array<Roadmap>;
  roadmapsAggregate: RoadmapAggregateSelection;
  roadmapsConnection: RoadmapsConnection;
  roadmapNodes: Array<RoadmapNode>;
  roadmapNodesAggregate: RoadmapNodeAggregateSelection;
  roadmapNodesConnection: RoadmapNodesConnection;
  roadmapEdges: Array<RoadmapEdge>;
  roadmapEdgesAggregate: RoadmapEdgeAggregateSelection;
  roadmapEdgesConnection: RoadmapEdgesConnection;
  topicTags: Array<TopicTag>;
  topicTagsAggregate: TopicTagAggregateSelection;
  topicTagsConnection: TopicTagsConnection;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryCoursesFulltextCourseInfoArgs = {
  phrase: Scalars["String"];
  where?: InputMaybe<CourseFulltextWhere>;
  sort?: InputMaybe<Array<CourseFulltextSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  fulltext?: InputMaybe<CourseFulltext>;
};

export type QueryCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  fulltext?: InputMaybe<CourseFulltext>;
};

export type QueryCoursesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<CourseWhere>;
  sort?: InputMaybe<Array<InputMaybe<CourseSort>>>;
  fulltext?: InputMaybe<CourseFulltext>;
};

export type QueryCoursePricesArgs = {
  where?: InputMaybe<CoursePriceWhere>;
  options?: InputMaybe<CoursePriceOptions>;
};

export type QueryCoursePricesAggregateArgs = {
  where?: InputMaybe<CoursePriceWhere>;
};

export type QueryCoursePricesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<CoursePriceWhere>;
  sort?: InputMaybe<Array<InputMaybe<CoursePriceSort>>>;
};

export type QueryCoursePlatformsArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
  options?: InputMaybe<CoursePlatformOptions>;
};

export type QueryCoursePlatformsAggregateArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
};

export type QueryCoursePlatformsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<CoursePlatformWhere>;
  sort?: InputMaybe<Array<InputMaybe<CoursePlatformSort>>>;
};

export type QueryCourseLanguagesArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
  options?: InputMaybe<CourseLanguageOptions>;
};

export type QueryCourseLanguagesAggregateArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
};

export type QueryCourseLanguagesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<CourseLanguageWhere>;
  sort?: InputMaybe<Array<InputMaybe<CourseLanguageSort>>>;
};

export type QueryRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
};

export type QueryRoadmapsAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
};

export type QueryRoadmapsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RoadmapWhere>;
  sort?: InputMaybe<Array<InputMaybe<RoadmapSort>>>;
};

export type QueryRoadmapNodesArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  options?: InputMaybe<RoadmapNodeOptions>;
};

export type QueryRoadmapNodesAggregateArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type QueryRoadmapNodesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RoadmapNodeWhere>;
  sort?: InputMaybe<Array<InputMaybe<RoadmapNodeSort>>>;
};

export type QueryRoadmapEdgesArgs = {
  where?: InputMaybe<RoadmapEdgeWhere>;
  options?: InputMaybe<RoadmapEdgeOptions>;
};

export type QueryRoadmapEdgesAggregateArgs = {
  where?: InputMaybe<RoadmapEdgeWhere>;
};

export type QueryRoadmapEdgesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RoadmapEdgeWhere>;
  sort?: InputMaybe<Array<InputMaybe<RoadmapEdgeSort>>>;
};

export type QueryTopicTagsArgs = {
  where?: InputMaybe<TopicTagWhere>;
  options?: InputMaybe<TopicTagOptions>;
};

export type QueryTopicTagsAggregateArgs = {
  where?: InputMaybe<TopicTagWhere>;
};

export type QueryTopicTagsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<TopicTagWhere>;
  sort?: InputMaybe<Array<InputMaybe<TopicTagSort>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createCourses: CreateCoursesMutationResponse;
  deleteCourses: DeleteInfo;
  updateCourses: UpdateCoursesMutationResponse;
  createCoursePrices: CreateCoursePricesMutationResponse;
  deleteCoursePrices: DeleteInfo;
  updateCoursePrices: UpdateCoursePricesMutationResponse;
  createCoursePlatforms: CreateCoursePlatformsMutationResponse;
  deleteCoursePlatforms: DeleteInfo;
  updateCoursePlatforms: UpdateCoursePlatformsMutationResponse;
  createCourseLanguages: CreateCourseLanguagesMutationResponse;
  deleteCourseLanguages: DeleteInfo;
  updateCourseLanguages: UpdateCourseLanguagesMutationResponse;
  createRoadmaps: CreateRoadmapsMutationResponse;
  deleteRoadmaps: DeleteInfo;
  updateRoadmaps: UpdateRoadmapsMutationResponse;
  createRoadmapNodes: CreateRoadmapNodesMutationResponse;
  deleteRoadmapNodes: DeleteInfo;
  updateRoadmapNodes: UpdateRoadmapNodesMutationResponse;
  createRoadmapEdges: CreateRoadmapEdgesMutationResponse;
  deleteRoadmapEdges: DeleteInfo;
  updateRoadmapEdges: UpdateRoadmapEdgesMutationResponse;
  createTopicTags: CreateTopicTagsMutationResponse;
  deleteTopicTags: DeleteInfo;
  updateTopicTags: UpdateTopicTagsMutationResponse;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
};

export type MutationCreateCoursesArgs = {
  input: Array<CourseCreateInput>;
};

export type MutationDeleteCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type MutationUpdateCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  update?: InputMaybe<CourseUpdateInput>;
  connect?: InputMaybe<CourseConnectInput>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
  create?: InputMaybe<CourseRelationInput>;
  delete?: InputMaybe<CourseDeleteInput>;
  connectOrCreate?: InputMaybe<CourseConnectOrCreateInput>;
};

export type MutationCreateCoursePricesArgs = {
  input: Array<CoursePriceCreateInput>;
};

export type MutationDeleteCoursePricesArgs = {
  where?: InputMaybe<CoursePriceWhere>;
  delete?: InputMaybe<CoursePriceDeleteInput>;
};

export type MutationUpdateCoursePricesArgs = {
  where?: InputMaybe<CoursePriceWhere>;
  update?: InputMaybe<CoursePriceUpdateInput>;
  connect?: InputMaybe<CoursePriceConnectInput>;
  disconnect?: InputMaybe<CoursePriceDisconnectInput>;
  create?: InputMaybe<CoursePriceRelationInput>;
  delete?: InputMaybe<CoursePriceDeleteInput>;
  connectOrCreate?: InputMaybe<CoursePriceConnectOrCreateInput>;
};

export type MutationCreateCoursePlatformsArgs = {
  input: Array<CoursePlatformCreateInput>;
};

export type MutationDeleteCoursePlatformsArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
  delete?: InputMaybe<CoursePlatformDeleteInput>;
};

export type MutationUpdateCoursePlatformsArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
  update?: InputMaybe<CoursePlatformUpdateInput>;
  connect?: InputMaybe<CoursePlatformConnectInput>;
  disconnect?: InputMaybe<CoursePlatformDisconnectInput>;
  create?: InputMaybe<CoursePlatformRelationInput>;
  delete?: InputMaybe<CoursePlatformDeleteInput>;
  connectOrCreate?: InputMaybe<CoursePlatformConnectOrCreateInput>;
};

export type MutationCreateCourseLanguagesArgs = {
  input: Array<CourseLanguageCreateInput>;
};

export type MutationDeleteCourseLanguagesArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
  delete?: InputMaybe<CourseLanguageDeleteInput>;
};

export type MutationUpdateCourseLanguagesArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
  update?: InputMaybe<CourseLanguageUpdateInput>;
  connect?: InputMaybe<CourseLanguageConnectInput>;
  disconnect?: InputMaybe<CourseLanguageDisconnectInput>;
  create?: InputMaybe<CourseLanguageRelationInput>;
  delete?: InputMaybe<CourseLanguageDeleteInput>;
  connectOrCreate?: InputMaybe<CourseLanguageConnectOrCreateInput>;
};

export type MutationCreateRoadmapsArgs = {
  input: Array<RoadmapCreateInput>;
};

export type MutationDeleteRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  delete?: InputMaybe<RoadmapDeleteInput>;
};

export type MutationUpdateRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  update?: InputMaybe<RoadmapUpdateInput>;
  connect?: InputMaybe<RoadmapConnectInput>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
  create?: InputMaybe<RoadmapRelationInput>;
  delete?: InputMaybe<RoadmapDeleteInput>;
  connectOrCreate?: InputMaybe<RoadmapConnectOrCreateInput>;
};

export type MutationCreateRoadmapNodesArgs = {
  input: Array<RoadmapNodeCreateInput>;
};

export type MutationDeleteRoadmapNodesArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
};

export type MutationUpdateRoadmapNodesArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  update?: InputMaybe<RoadmapNodeUpdateInput>;
  connect?: InputMaybe<RoadmapNodeConnectInput>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
  create?: InputMaybe<RoadmapNodeRelationInput>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeConnectOrCreateInput>;
};

export type MutationCreateRoadmapEdgesArgs = {
  input: Array<RoadmapEdgeCreateInput>;
};

export type MutationDeleteRoadmapEdgesArgs = {
  where?: InputMaybe<RoadmapEdgeWhere>;
};

export type MutationUpdateRoadmapEdgesArgs = {
  where?: InputMaybe<RoadmapEdgeWhere>;
  update?: InputMaybe<RoadmapEdgeUpdateInput>;
};

export type MutationCreateTopicTagsArgs = {
  input: Array<TopicTagCreateInput>;
};

export type MutationDeleteTopicTagsArgs = {
  where?: InputMaybe<TopicTagWhere>;
  delete?: InputMaybe<TopicTagDeleteInput>;
};

export type MutationUpdateTopicTagsArgs = {
  where?: InputMaybe<TopicTagWhere>;
  update?: InputMaybe<TopicTagUpdateInput>;
  connect?: InputMaybe<TopicTagConnectInput>;
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
  create?: InputMaybe<TopicTagRelationInput>;
  delete?: InputMaybe<TopicTagDeleteInput>;
  connectOrCreate?: InputMaybe<TopicTagConnectOrCreateInput>;
};

export enum CourseDifficulty {
  Beginner = "BEGINNER",
  Intermediate = "INTERMEDIATE",
  Advanced = "ADVANCED",
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type HasChild = {
  id: Scalars["String"];
  targetHandle?: Maybe<Scalars["String"]>;
};

export type IncludesTopic = {
  score?: Maybe<Scalars["Float"]>;
};

export type Course = {
  __typename?: "Course";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  difficulty?: Maybe<CourseDifficulty>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  price?: Maybe<CoursePrice>;
  priceAggregate?: Maybe<CourseCoursePricePriceAggregationSelection>;
  platform?: Maybe<CoursePlatform>;
  platformAggregate?: Maybe<CourseCoursePlatformPlatformAggregationSelection>;
  languages: Array<CourseLanguage>;
  languagesAggregate?: Maybe<CourseCourseLanguageLanguagesAggregationSelection>;
  tags: Array<TopicTag>;
  tagsAggregate?: Maybe<CourseTopicTagTagsAggregationSelection>;
  priceConnection: CoursePriceConnection;
  platformConnection: CoursePlatformConnection;
  languagesConnection: CourseLanguagesConnection;
  tagsConnection: CourseTagsConnection;
};

export type CoursePriceArgs = {
  where?: InputMaybe<CoursePriceWhere>;
  options?: InputMaybe<CoursePriceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePriceAggregateArgs = {
  where?: InputMaybe<CoursePriceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePlatformArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
  options?: InputMaybe<CoursePlatformOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePlatformAggregateArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseLanguagesArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
  options?: InputMaybe<CourseLanguageOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseLanguagesAggregateArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseTagsArgs = {
  where?: InputMaybe<TopicTagWhere>;
  options?: InputMaybe<TopicTagOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseTagsAggregateArgs = {
  where?: InputMaybe<TopicTagWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePriceConnectionArgs = {
  where?: InputMaybe<CoursePriceConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CoursePriceConnectionSort>>;
};

export type CoursePlatformConnectionArgs = {
  where?: InputMaybe<CoursePlatformConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CoursePlatformConnectionSort>>;
};

export type CourseLanguagesConnectionArgs = {
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CourseLanguagesConnectionSort>>;
};

export type CourseTagsConnectionArgs = {
  where?: InputMaybe<CourseTagsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CourseTagsConnectionSort>>;
};

export type CourseAggregateSelection = {
  __typename?: "CourseAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CourseCourseLanguageLanguagesAggregationSelection = {
  __typename?: "CourseCourseLanguageLanguagesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseCourseLanguageLanguagesNodeAggregateSelection>;
};

export type CourseCourseLanguageLanguagesNodeAggregateSelection = {
  __typename?: "CourseCourseLanguageLanguagesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  countryCodeISO: StringAggregateSelectionNonNullable;
};

export type CourseCoursePlatformPlatformAggregationSelection = {
  __typename?: "CourseCoursePlatformPlatformAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseCoursePlatformPlatformNodeAggregateSelection>;
};

export type CourseCoursePlatformPlatformNodeAggregateSelection = {
  __typename?: "CourseCoursePlatformPlatformNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  url: StringAggregateSelectionNonNullable;
  logoUrl: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CourseCoursePricePriceAggregationSelection = {
  __typename?: "CourseCoursePricePriceAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseCoursePricePriceNodeAggregateSelection>;
};

export type CourseCoursePricePriceNodeAggregateSelection = {
  __typename?: "CourseCoursePricePriceNodeAggregateSelection";
  price: IntAggregateSelectionNullable;
  currencyCodeISO: StringAggregateSelectionNullable;
};

export type CourseEdge = {
  __typename?: "CourseEdge";
  cursor: Scalars["String"];
  node: Course;
};

/** The result of a fulltext search on an index of Course */
export type CourseFulltextResult = {
  __typename?: "CourseFulltextResult";
  score: Scalars["Float"];
  course: Course;
};

export type CourseLanguage = {
  __typename?: "CourseLanguage";
  name: Scalars["String"];
  countryCodeISO: Scalars["String"];
  courses: Array<Course>;
  coursesAggregate?: Maybe<CourseLanguageCourseCoursesAggregationSelection>;
  coursesConnection: CourseLanguageCoursesConnection;
};

export type CourseLanguageCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseLanguageCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseLanguageCoursesConnectionArgs = {
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CourseLanguageCoursesConnectionSort>>;
};

export type CourseLanguageAggregateSelection = {
  __typename?: "CourseLanguageAggregateSelection";
  count: Scalars["Int"];
  name: StringAggregateSelectionNonNullable;
  countryCodeISO: StringAggregateSelectionNonNullable;
};

export type CourseLanguageCourseCoursesAggregationSelection = {
  __typename?: "CourseLanguageCourseCoursesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseLanguageCourseCoursesNodeAggregateSelection>;
};

export type CourseLanguageCourseCoursesNodeAggregateSelection = {
  __typename?: "CourseLanguageCourseCoursesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CourseLanguageCoursesConnection = {
  __typename?: "CourseLanguageCoursesConnection";
  edges: Array<CourseLanguageCoursesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CourseLanguageCoursesRelationship = {
  __typename?: "CourseLanguageCoursesRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type CourseLanguageEdge = {
  __typename?: "CourseLanguageEdge";
  cursor: Scalars["String"];
  node: CourseLanguage;
};

export type CourseLanguagesConnection = {
  __typename?: "CourseLanguagesConnection";
  edges: Array<CourseLanguagesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CourseLanguagesRelationship = {
  __typename?: "CourseLanguagesRelationship";
  cursor: Scalars["String"];
  node: CourseLanguage;
};

export type CoursePlatform = {
  __typename?: "CoursePlatform";
  id: Scalars["ID"];
  name: Scalars["String"];
  url: Scalars["String"];
  logoUrl?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  courses: Array<Course>;
  coursesAggregate?: Maybe<CoursePlatformCourseCoursesAggregationSelection>;
  coursesConnection: CoursePlatformCoursesConnection;
};

export type CoursePlatformCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePlatformCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePlatformCoursesConnectionArgs = {
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CoursePlatformCoursesConnectionSort>>;
};

export type CoursePlatformAggregateSelection = {
  __typename?: "CoursePlatformAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  url: StringAggregateSelectionNonNullable;
  logoUrl: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CoursePlatformConnection = {
  __typename?: "CoursePlatformConnection";
  edges: Array<CoursePlatformRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CoursePlatformCourseCoursesAggregationSelection = {
  __typename?: "CoursePlatformCourseCoursesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CoursePlatformCourseCoursesNodeAggregateSelection>;
};

export type CoursePlatformCourseCoursesNodeAggregateSelection = {
  __typename?: "CoursePlatformCourseCoursesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CoursePlatformCoursesConnection = {
  __typename?: "CoursePlatformCoursesConnection";
  edges: Array<CoursePlatformCoursesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CoursePlatformCoursesRelationship = {
  __typename?: "CoursePlatformCoursesRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type CoursePlatformEdge = {
  __typename?: "CoursePlatformEdge";
  cursor: Scalars["String"];
  node: CoursePlatform;
};

export type CoursePlatformRelationship = {
  __typename?: "CoursePlatformRelationship";
  cursor: Scalars["String"];
  node: CoursePlatform;
};

export type CoursePlatformsConnection = {
  __typename?: "CoursePlatformsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<CoursePlatformEdge>;
};

export type CoursePrice = {
  __typename?: "CoursePrice";
  price?: Maybe<Scalars["Int"]>;
  currencyCodeISO?: Maybe<Scalars["String"]>;
  course?: Maybe<Course>;
  courseAggregate?: Maybe<CoursePriceCourseCourseAggregationSelection>;
  courseConnection: CoursePriceCourseConnection;
};

export type CoursePriceCourseArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePriceCourseAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CoursePriceCourseConnectionArgs = {
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CoursePriceCourseConnectionSort>>;
};

export type CoursePriceAggregateSelection = {
  __typename?: "CoursePriceAggregateSelection";
  count: Scalars["Int"];
  price: IntAggregateSelectionNullable;
  currencyCodeISO: StringAggregateSelectionNullable;
};

export type CoursePriceConnection = {
  __typename?: "CoursePriceConnection";
  edges: Array<CoursePriceRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CoursePriceCourseConnection = {
  __typename?: "CoursePriceCourseConnection";
  edges: Array<CoursePriceCourseRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CoursePriceCourseCourseAggregationSelection = {
  __typename?: "CoursePriceCourseCourseAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CoursePriceCourseCourseNodeAggregateSelection>;
};

export type CoursePriceCourseCourseNodeAggregateSelection = {
  __typename?: "CoursePriceCourseCourseNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CoursePriceCourseRelationship = {
  __typename?: "CoursePriceCourseRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type CoursePriceEdge = {
  __typename?: "CoursePriceEdge";
  cursor: Scalars["String"];
  node: CoursePrice;
};

export type CoursePriceRelationship = {
  __typename?: "CoursePriceRelationship";
  cursor: Scalars["String"];
  node: CoursePrice;
};

export type CoursePricesConnection = {
  __typename?: "CoursePricesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<CoursePriceEdge>;
};

export type CoursesConnection = {
  __typename?: "CoursesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<CourseEdge>;
};

export type CourseTagsConnection = {
  __typename?: "CourseTagsConnection";
  edges: Array<CourseTagsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CourseTagsRelationship = IncludesTopic & {
  __typename?: "CourseTagsRelationship";
  cursor: Scalars["String"];
  node: TopicTag;
  score?: Maybe<Scalars["Float"]>;
};

export type CourseTopicTagTagsAggregationSelection = {
  __typename?: "CourseTopicTagTagsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseTopicTagTagsNodeAggregateSelection>;
  edge?: Maybe<CourseTopicTagTagsEdgeAggregateSelection>;
};

export type CourseTopicTagTagsEdgeAggregateSelection = {
  __typename?: "CourseTopicTagTagsEdgeAggregateSelection";
  score: FloatAggregateSelectionNullable;
};

export type CourseTopicTagTagsNodeAggregateSelection = {
  __typename?: "CourseTopicTagTagsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CreateCourseLanguagesMutationResponse = {
  __typename?: "CreateCourseLanguagesMutationResponse";
  info: CreateInfo;
  courseLanguages: Array<CourseLanguage>;
};

export type CreateCoursePlatformsMutationResponse = {
  __typename?: "CreateCoursePlatformsMutationResponse";
  info: CreateInfo;
  coursePlatforms: Array<CoursePlatform>;
};

export type CreateCoursePricesMutationResponse = {
  __typename?: "CreateCoursePricesMutationResponse";
  info: CreateInfo;
  coursePrices: Array<CoursePrice>;
};

export type CreateCoursesMutationResponse = {
  __typename?: "CreateCoursesMutationResponse";
  info: CreateInfo;
  courses: Array<Course>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateRoadmapEdgesMutationResponse = {
  __typename?: "CreateRoadmapEdgesMutationResponse";
  info: CreateInfo;
  roadmapEdges: Array<RoadmapEdge>;
};

export type CreateRoadmapNodesMutationResponse = {
  __typename?: "CreateRoadmapNodesMutationResponse";
  info: CreateInfo;
  roadmapNodes: Array<RoadmapNode>;
};

export type CreateRoadmapsMutationResponse = {
  __typename?: "CreateRoadmapsMutationResponse";
  info: CreateInfo;
  roadmaps: Array<Roadmap>;
};

export type CreateTopicTagsMutationResponse = {
  __typename?: "CreateTopicTagsMutationResponse";
  info: CreateInfo;
  topicTags: Array<TopicTag>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: "DateTimeAggregateSelectionNonNullable";
  min: Scalars["DateTime"];
  max: Scalars["DateTime"];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]>;
  max?: Maybe<Scalars["DateTime"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: "FloatAggregateSelectionNonNullable";
  max: Scalars["Float"];
  min: Scalars["Float"];
  average: Scalars["Float"];
  sum: Scalars["Float"];
};

export type FloatAggregateSelectionNullable = {
  __typename?: "FloatAggregateSelectionNullable";
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  average?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  max?: Maybe<Scalars["Int"]>;
  min?: Maybe<Scalars["Int"]>;
  average?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Int"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Roadmap = {
  __typename?: "Roadmap";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  nodes?: Maybe<Array<RoadmapNode>>;
  edges?: Maybe<Array<RoadmapEdge>>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  node: RoadmapNode;
  nodeAggregate?: Maybe<RoadmapRoadmapNodeNodeAggregationSelection>;
  tags: Array<TopicTag>;
  tagsAggregate?: Maybe<RoadmapTopicTagTagsAggregationSelection>;
  createdBy: User;
  createdByAggregate?: Maybe<RoadmapUserCreatedByAggregationSelection>;
  nodeConnection: RoadmapNodeConnection;
  tagsConnection: RoadmapTagsConnection;
  createdByConnection: RoadmapCreatedByConnection;
};

export type RoadmapNodeArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  options?: InputMaybe<RoadmapNodeOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeAggregateArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapTagsArgs = {
  where?: InputMaybe<TopicTagWhere>;
  options?: InputMaybe<TopicTagOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapTagsAggregateArgs = {
  where?: InputMaybe<TopicTagWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapCreatedByArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapCreatedByAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeConnectionArgs = {
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapNodeConnectionSort>>;
};

export type RoadmapTagsConnectionArgs = {
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapTagsConnectionSort>>;
};

export type RoadmapCreatedByConnectionArgs = {
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapCreatedByConnectionSort>>;
};

export type RoadmapAggregateSelection = {
  __typename?: "RoadmapAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RoadmapCreatedByConnection = {
  __typename?: "RoadmapCreatedByConnection";
  edges: Array<RoadmapCreatedByRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapCreatedByRelationship = {
  __typename?: "RoadmapCreatedByRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type RoadmapEdge = {
  __typename?: "RoadmapEdge";
  id: Scalars["String"];
  source: Scalars["String"];
  target: Scalars["String"];
  targetHandle?: Maybe<Scalars["String"]>;
};

export type RoadmapEdgeAggregateSelection = {
  __typename?: "RoadmapEdgeAggregateSelection";
  count: Scalars["Int"];
  id: StringAggregateSelectionNonNullable;
  source: StringAggregateSelectionNonNullable;
  target: StringAggregateSelectionNonNullable;
  targetHandle: StringAggregateSelectionNullable;
};

export type RoadmapEdgeEdge = {
  __typename?: "RoadmapEdgeEdge";
  cursor: Scalars["String"];
  node: RoadmapEdge;
};

export type RoadmapEdgesConnection = {
  __typename?: "RoadmapEdgesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<RoadmapEdgeEdge>;
};

export type RoadmapNode = {
  __typename?: "RoadmapNode";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  positionX: Scalars["Float"];
  positionY: Scalars["Float"];
  childNodes: Array<RoadmapNode>;
  childNodesAggregate?: Maybe<RoadmapNodeRoadmapNodeChildNodesAggregationSelection>;
  parentNodes: Array<RoadmapNode>;
  parentNodesAggregate?: Maybe<RoadmapNodeRoadmapNodeParentNodesAggregationSelection>;
  roadmap?: Maybe<Roadmap>;
  roadmapAggregate?: Maybe<RoadmapNodeRoadmapRoadmapAggregationSelection>;
  childNodesConnection: RoadmapNodeChildNodesConnection;
  parentNodesConnection: RoadmapNodeParentNodesConnection;
  roadmapConnection: RoadmapNodeRoadmapConnection;
};

export type RoadmapNodeChildNodesArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  options?: InputMaybe<RoadmapNodeOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeChildNodesAggregateArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeParentNodesArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  options?: InputMaybe<RoadmapNodeOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeParentNodesAggregateArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeRoadmapArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeRoadmapAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeChildNodesConnectionArgs = {
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapNodeChildNodesConnectionSort>>;
};

export type RoadmapNodeParentNodesConnectionArgs = {
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapNodeParentNodesConnectionSort>>;
};

export type RoadmapNodeRoadmapConnectionArgs = {
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapNodeRoadmapConnectionSort>>;
};

export type RoadmapNodeAggregateSelection = {
  __typename?: "RoadmapNodeAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
};

export type RoadmapNodeChildNodesConnection = {
  __typename?: "RoadmapNodeChildNodesConnection";
  edges: Array<RoadmapNodeChildNodesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapNodeChildNodesRelationship = HasChild & {
  __typename?: "RoadmapNodeChildNodesRelationship";
  cursor: Scalars["String"];
  node: RoadmapNode;
  id: Scalars["String"];
  targetHandle?: Maybe<Scalars["String"]>;
};

export type RoadmapNodeConnection = {
  __typename?: "RoadmapNodeConnection";
  edges: Array<RoadmapNodeRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapNodeEdge = {
  __typename?: "RoadmapNodeEdge";
  cursor: Scalars["String"];
  node: RoadmapNode;
};

export type RoadmapNodeParentNodesConnection = {
  __typename?: "RoadmapNodeParentNodesConnection";
  edges: Array<RoadmapNodeParentNodesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapNodeParentNodesRelationship = HasChild & {
  __typename?: "RoadmapNodeParentNodesRelationship";
  cursor: Scalars["String"];
  node: RoadmapNode;
  id: Scalars["String"];
  targetHandle?: Maybe<Scalars["String"]>;
};

export type RoadmapNodeRelationship = {
  __typename?: "RoadmapNodeRelationship";
  cursor: Scalars["String"];
  node: RoadmapNode;
};

export type RoadmapNodeRoadmapConnection = {
  __typename?: "RoadmapNodeRoadmapConnection";
  edges: Array<RoadmapNodeRoadmapRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapNodeRoadmapNodeChildNodesAggregationSelection = {
  __typename?: "RoadmapNodeRoadmapNodeChildNodesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapNodeRoadmapNodeChildNodesNodeAggregateSelection>;
  edge?: Maybe<RoadmapNodeRoadmapNodeChildNodesEdgeAggregateSelection>;
};

export type RoadmapNodeRoadmapNodeChildNodesEdgeAggregateSelection = {
  __typename?: "RoadmapNodeRoadmapNodeChildNodesEdgeAggregateSelection";
  id: StringAggregateSelectionNonNullable;
  targetHandle: StringAggregateSelectionNullable;
};

export type RoadmapNodeRoadmapNodeChildNodesNodeAggregateSelection = {
  __typename?: "RoadmapNodeRoadmapNodeChildNodesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
};

export type RoadmapNodeRoadmapNodeParentNodesAggregationSelection = {
  __typename?: "RoadmapNodeRoadmapNodeParentNodesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapNodeRoadmapNodeParentNodesNodeAggregateSelection>;
  edge?: Maybe<RoadmapNodeRoadmapNodeParentNodesEdgeAggregateSelection>;
};

export type RoadmapNodeRoadmapNodeParentNodesEdgeAggregateSelection = {
  __typename?: "RoadmapNodeRoadmapNodeParentNodesEdgeAggregateSelection";
  id: StringAggregateSelectionNonNullable;
  targetHandle: StringAggregateSelectionNullable;
};

export type RoadmapNodeRoadmapNodeParentNodesNodeAggregateSelection = {
  __typename?: "RoadmapNodeRoadmapNodeParentNodesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
};

export type RoadmapNodeRoadmapRelationship = {
  __typename?: "RoadmapNodeRoadmapRelationship";
  cursor: Scalars["String"];
  node: Roadmap;
};

export type RoadmapNodeRoadmapRoadmapAggregationSelection = {
  __typename?: "RoadmapNodeRoadmapRoadmapAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapNodeRoadmapRoadmapNodeAggregateSelection>;
};

export type RoadmapNodeRoadmapRoadmapNodeAggregateSelection = {
  __typename?: "RoadmapNodeRoadmapRoadmapNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RoadmapNodesConnection = {
  __typename?: "RoadmapNodesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<RoadmapNodeEdge>;
};

export type RoadmapRoadmapNodeNodeAggregationSelection = {
  __typename?: "RoadmapRoadmapNodeNodeAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapRoadmapNodeNodeNodeAggregateSelection>;
};

export type RoadmapRoadmapNodeNodeNodeAggregateSelection = {
  __typename?: "RoadmapRoadmapNodeNodeNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  type: StringAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
};

export type RoadmapsConnection = {
  __typename?: "RoadmapsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<RoadmapEdge>;
};

export type RoadmapTagsConnection = {
  __typename?: "RoadmapTagsConnection";
  edges: Array<RoadmapTagsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapTagsRelationship = IncludesTopic & {
  __typename?: "RoadmapTagsRelationship";
  cursor: Scalars["String"];
  node: TopicTag;
  score?: Maybe<Scalars["Float"]>;
};

export type RoadmapTopicTagTagsAggregationSelection = {
  __typename?: "RoadmapTopicTagTagsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapTopicTagTagsNodeAggregateSelection>;
  edge?: Maybe<RoadmapTopicTagTagsEdgeAggregateSelection>;
};

export type RoadmapTopicTagTagsEdgeAggregateSelection = {
  __typename?: "RoadmapTopicTagTagsEdgeAggregateSelection";
  score: FloatAggregateSelectionNullable;
};

export type RoadmapTopicTagTagsNodeAggregateSelection = {
  __typename?: "RoadmapTopicTagTagsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RoadmapUserCreatedByAggregationSelection = {
  __typename?: "RoadmapUserCreatedByAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapUserCreatedByNodeAggregateSelection>;
};

export type RoadmapUserCreatedByNodeAggregateSelection = {
  __typename?: "RoadmapUserCreatedByNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type TopicTag = {
  __typename?: "TopicTag";
  id: Scalars["ID"];
  name: Scalars["String"];
  courses: Array<Course>;
  coursesAggregate?: Maybe<TopicTagCourseCoursesAggregationSelection>;
  roadmaps: Array<Roadmap>;
  roadmapsAggregate?: Maybe<TopicTagRoadmapRoadmapsAggregationSelection>;
  coursesConnection: TopicTagCoursesConnection;
  roadmapsConnection: TopicTagRoadmapsConnection;
};

export type TopicTagCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type TopicTagCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type TopicTagRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type TopicTagRoadmapsAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type TopicTagCoursesConnectionArgs = {
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<TopicTagCoursesConnectionSort>>;
};

export type TopicTagRoadmapsConnectionArgs = {
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<TopicTagRoadmapsConnectionSort>>;
};

export type TopicTagAggregateSelection = {
  __typename?: "TopicTagAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type TopicTagCourseCoursesAggregationSelection = {
  __typename?: "TopicTagCourseCoursesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<TopicTagCourseCoursesNodeAggregateSelection>;
  edge?: Maybe<TopicTagCourseCoursesEdgeAggregateSelection>;
};

export type TopicTagCourseCoursesEdgeAggregateSelection = {
  __typename?: "TopicTagCourseCoursesEdgeAggregateSelection";
  score: FloatAggregateSelectionNullable;
};

export type TopicTagCourseCoursesNodeAggregateSelection = {
  __typename?: "TopicTagCourseCoursesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TopicTagCoursesConnection = {
  __typename?: "TopicTagCoursesConnection";
  edges: Array<TopicTagCoursesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type TopicTagCoursesRelationship = IncludesTopic & {
  __typename?: "TopicTagCoursesRelationship";
  cursor: Scalars["String"];
  node: Course;
  score?: Maybe<Scalars["Float"]>;
};

export type TopicTagEdge = {
  __typename?: "TopicTagEdge";
  cursor: Scalars["String"];
  node: TopicTag;
};

export type TopicTagRoadmapRoadmapsAggregationSelection = {
  __typename?: "TopicTagRoadmapRoadmapsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<TopicTagRoadmapRoadmapsNodeAggregateSelection>;
  edge?: Maybe<TopicTagRoadmapRoadmapsEdgeAggregateSelection>;
};

export type TopicTagRoadmapRoadmapsEdgeAggregateSelection = {
  __typename?: "TopicTagRoadmapRoadmapsEdgeAggregateSelection";
  score: FloatAggregateSelectionNullable;
};

export type TopicTagRoadmapRoadmapsNodeAggregateSelection = {
  __typename?: "TopicTagRoadmapRoadmapsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TopicTagRoadmapsConnection = {
  __typename?: "TopicTagRoadmapsConnection";
  edges: Array<TopicTagRoadmapsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type TopicTagRoadmapsRelationship = IncludesTopic & {
  __typename?: "TopicTagRoadmapsRelationship";
  cursor: Scalars["String"];
  node: Roadmap;
  score?: Maybe<Scalars["Float"]>;
};

export type TopicTagsConnection = {
  __typename?: "TopicTagsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<TopicTagEdge>;
};

export type UpdateCourseLanguagesMutationResponse = {
  __typename?: "UpdateCourseLanguagesMutationResponse";
  info: UpdateInfo;
  courseLanguages: Array<CourseLanguage>;
};

export type UpdateCoursePlatformsMutationResponse = {
  __typename?: "UpdateCoursePlatformsMutationResponse";
  info: UpdateInfo;
  coursePlatforms: Array<CoursePlatform>;
};

export type UpdateCoursePricesMutationResponse = {
  __typename?: "UpdateCoursePricesMutationResponse";
  info: UpdateInfo;
  coursePrices: Array<CoursePrice>;
};

export type UpdateCoursesMutationResponse = {
  __typename?: "UpdateCoursesMutationResponse";
  info: UpdateInfo;
  courses: Array<Course>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateRoadmapEdgesMutationResponse = {
  __typename?: "UpdateRoadmapEdgesMutationResponse";
  info: UpdateInfo;
  roadmapEdges: Array<RoadmapEdge>;
};

export type UpdateRoadmapNodesMutationResponse = {
  __typename?: "UpdateRoadmapNodesMutationResponse";
  info: UpdateInfo;
  roadmapNodes: Array<RoadmapNode>;
};

export type UpdateRoadmapsMutationResponse = {
  __typename?: "UpdateRoadmapsMutationResponse";
  info: UpdateInfo;
  roadmaps: Array<Roadmap>;
};

export type UpdateTopicTagsMutationResponse = {
  __typename?: "UpdateTopicTagsMutationResponse";
  info: UpdateInfo;
  topicTags: Array<TopicTag>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  password: Scalars["String"];
  roles: Array<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdRoadmaps: Array<Roadmap>;
  createdRoadmapsAggregate?: Maybe<UserRoadmapCreatedRoadmapsAggregationSelection>;
  createdRoadmapsConnection: UserCreatedRoadmapsConnection;
};

export type UserCreatedRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserCreatedRoadmapsAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserCreatedRoadmapsConnectionArgs = {
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserCreatedRoadmapsConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserCreatedRoadmapsConnection = {
  __typename?: "UserCreatedRoadmapsConnection";
  edges: Array<UserCreatedRoadmapsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserCreatedRoadmapsRelationship = {
  __typename?: "UserCreatedRoadmapsRelationship";
  cursor: Scalars["String"];
  node: Roadmap;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type UserRoadmapCreatedRoadmapsAggregationSelection = {
  __typename?: "UserRoadmapCreatedRoadmapsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserRoadmapCreatedRoadmapsNodeAggregateSelection>;
};

export type UserRoadmapCreatedRoadmapsNodeAggregateSelection = {
  __typename?: "UserRoadmapCreatedRoadmapsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type CourseConnectInput = {
  price?: InputMaybe<CoursePriceConnectFieldInput>;
  platform?: InputMaybe<CoursePlatformConnectFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
};

export type CourseConnectOrCreateInput = {
  platform?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
};

export type CourseConnectOrCreateWhere = {
  node: CourseUniqueWhere;
};

export type CourseConnectWhere = {
  node: CourseWhere;
};

export type CourseCourseInfoFulltext = {
  phrase: Scalars["String"];
};

export type CourseCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  url: Scalars["String"];
  difficulty?: InputMaybe<CourseDifficulty>;
  price?: InputMaybe<CoursePriceFieldInput>;
  platform?: InputMaybe<CoursePlatformFieldInput>;
  languages?: InputMaybe<CourseLanguagesFieldInput>;
  tags?: InputMaybe<CourseTagsFieldInput>;
};

export type CourseDeleteInput = {
  price?: InputMaybe<CoursePriceDeleteFieldInput>;
  platform?: InputMaybe<CoursePlatformDeleteFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesDeleteFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsDeleteFieldInput>>;
};

export type CourseDisconnectInput = {
  price?: InputMaybe<CoursePriceDisconnectFieldInput>;
  platform?: InputMaybe<CoursePlatformDisconnectFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesDisconnectFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsDisconnectFieldInput>>;
};

export type CourseFulltext = {
  CourseInfo?: InputMaybe<CourseCourseInfoFulltext>;
};

/** The input for sorting a fulltext query on an index of Course */
export type CourseFulltextSort = {
  score?: InputMaybe<SortDirection>;
  course?: InputMaybe<CourseSort>;
};

/** The input for filtering a fulltext query on an index of Course */
export type CourseFulltextWhere = {
  score?: InputMaybe<FloatWhere>;
  course?: InputMaybe<CourseWhere>;
};

export type CourseLanguageConnectInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesConnectFieldInput>>;
};

export type CourseLanguageConnectOrCreateInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesConnectOrCreateFieldInput>>;
};

export type CourseLanguageConnectOrCreateWhere = {
  node: CourseLanguageUniqueWhere;
};

export type CourseLanguageConnectWhere = {
  node: CourseLanguageWhere;
};

export type CourseLanguageCoursesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CourseLanguageCoursesAggregateInput>>;
  OR?: InputMaybe<Array<CourseLanguageCoursesAggregateInput>>;
  NOT?: InputMaybe<CourseLanguageCoursesAggregateInput>;
  node?: InputMaybe<CourseLanguageCoursesNodeAggregationWhereInput>;
};

export type CourseLanguageCoursesConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CourseLanguageCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type CourseLanguageCoursesConnectionWhere = {
  AND?: InputMaybe<Array<CourseLanguageCoursesConnectionWhere>>;
  OR?: InputMaybe<Array<CourseLanguageCoursesConnectionWhere>>;
  NOT?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type CourseLanguageCoursesConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: CourseLanguageCoursesConnectOrCreateFieldInputOnCreate;
};

export type CourseLanguageCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type CourseLanguageCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type CourseLanguageCoursesDeleteFieldInput = {
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type CourseLanguageCoursesDisconnectFieldInput = {
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type CourseLanguageCoursesFieldInput = {
  create?: InputMaybe<Array<CourseLanguageCoursesCreateFieldInput>>;
  connect?: InputMaybe<Array<CourseLanguageCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<CourseLanguageCoursesConnectOrCreateFieldInput>
  >;
};

export type CourseLanguageCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseLanguageCoursesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CourseLanguageCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseLanguageCoursesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type CourseLanguageCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type CourseLanguageCoursesUpdateFieldInput = {
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  update?: InputMaybe<CourseLanguageCoursesUpdateConnectionInput>;
  connect?: InputMaybe<Array<CourseLanguageCoursesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CourseLanguageCoursesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CourseLanguageCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseLanguageCoursesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<CourseLanguageCoursesConnectOrCreateFieldInput>
  >;
};

export type CourseLanguageCreateInput = {
  name: Scalars["String"];
  countryCodeISO: Scalars["String"];
  courses?: InputMaybe<CourseLanguageCoursesFieldInput>;
};

export type CourseLanguageDeleteInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesDeleteFieldInput>>;
};

export type CourseLanguageDisconnectInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesDisconnectFieldInput>>;
};

export type CourseLanguageOnCreateInput = {
  name: Scalars["String"];
  countryCodeISO: Scalars["String"];
};

export type CourseLanguageOptions = {
  /** Specify one or more CourseLanguageSort objects to sort CourseLanguages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CourseLanguageSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type CourseLanguageRelationInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesCreateFieldInput>>;
};

export type CourseLanguagesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CourseLanguagesAggregateInput>>;
  OR?: InputMaybe<Array<CourseLanguagesAggregateInput>>;
  NOT?: InputMaybe<CourseLanguagesAggregateInput>;
  node?: InputMaybe<CourseLanguagesNodeAggregationWhereInput>;
};

export type CourseLanguagesConnectFieldInput = {
  where?: InputMaybe<CourseLanguageConnectWhere>;
  connect?: InputMaybe<Array<CourseLanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CourseLanguagesConnectionSort = {
  node?: InputMaybe<CourseLanguageSort>;
};

export type CourseLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  OR?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  NOT?: InputMaybe<CourseLanguagesConnectionWhere>;
  node?: InputMaybe<CourseLanguageWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseLanguageWhere>;
};

export type CourseLanguagesConnectOrCreateFieldInput = {
  where: CourseLanguageConnectOrCreateWhere;
  onCreate: CourseLanguagesConnectOrCreateFieldInputOnCreate;
};

export type CourseLanguagesConnectOrCreateFieldInputOnCreate = {
  node: CourseLanguageOnCreateInput;
};

export type CourseLanguagesCreateFieldInput = {
  node: CourseLanguageCreateInput;
};

export type CourseLanguagesDeleteFieldInput = {
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
  delete?: InputMaybe<CourseLanguageDeleteInput>;
};

export type CourseLanguagesDisconnectFieldInput = {
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
  disconnect?: InputMaybe<CourseLanguageDisconnectInput>;
};

export type CourseLanguagesFieldInput = {
  create?: InputMaybe<Array<CourseLanguagesCreateFieldInput>>;
  connect?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
};

export type CourseLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseLanguagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CourseLanguagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseLanguagesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryCodeISO_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  countryCodeISO_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryCodeISO_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  countryCodeISO_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryCodeISO_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  countryCodeISO_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryCodeISO_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  countryCodeISO_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  countryCodeISO_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  countryCodeISO_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  countryCodeISO_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  countryCodeISO_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort CourseLanguages by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseLanguageSort object. */
export type CourseLanguageSort = {
  name?: InputMaybe<SortDirection>;
  countryCodeISO?: InputMaybe<SortDirection>;
};

export type CourseLanguagesUpdateConnectionInput = {
  node?: InputMaybe<CourseLanguageUpdateInput>;
};

export type CourseLanguagesUpdateFieldInput = {
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
  update?: InputMaybe<CourseLanguagesUpdateConnectionInput>;
  connect?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CourseLanguagesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CourseLanguagesCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseLanguagesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
};

export type CourseLanguageUniqueWhere = {
  name?: InputMaybe<Scalars["String"]>;
  countryCodeISO?: InputMaybe<Scalars["String"]>;
};

export type CourseLanguageUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  countryCodeISO?: InputMaybe<Scalars["String"]>;
  courses?: InputMaybe<Array<CourseLanguageCoursesUpdateFieldInput>>;
};

export type CourseLanguageWhere = {
  OR?: InputMaybe<Array<CourseLanguageWhere>>;
  AND?: InputMaybe<Array<CourseLanguageWhere>>;
  NOT?: InputMaybe<CourseLanguageWhere>;
  name?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  countryCodeISO?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryCodeISO_NOT?: InputMaybe<Scalars["String"]>;
  countryCodeISO_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryCodeISO_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  countryCodeISO_CONTAINS?: InputMaybe<Scalars["String"]>;
  countryCodeISO_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  countryCodeISO_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryCodeISO_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryCodeISO_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  countryCodeISO_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Use `courses_SOME` instead. */
  courses?: InputMaybe<CourseWhere>;
  /** @deprecated Use `courses_NONE` instead. */
  courses_NOT?: InputMaybe<CourseWhere>;
  coursesAggregate?: InputMaybe<CourseLanguageCoursesAggregateInput>;
  /** Return CourseLanguages where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return CourseLanguages where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return CourseLanguages where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return CourseLanguages where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  /** @deprecated Use `coursesConnection_SOME` instead. */
  coursesConnection?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** @deprecated Use `coursesConnection_NONE` instead. */
  coursesConnection_NOT?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where all of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where none of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where one of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where some of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
};

export type CourseOnCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  url: Scalars["String"];
  difficulty?: InputMaybe<CourseDifficulty>;
};

export type CourseOptions = {
  /** Specify one or more CourseSort objects to sort Courses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CourseSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type CoursePlatformAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CoursePlatformAggregateInput>>;
  OR?: InputMaybe<Array<CoursePlatformAggregateInput>>;
  NOT?: InputMaybe<CoursePlatformAggregateInput>;
  node?: InputMaybe<CoursePlatformNodeAggregationWhereInput>;
};

export type CoursePlatformConnectFieldInput = {
  where?: InputMaybe<CoursePlatformConnectWhere>;
  connect?: InputMaybe<CoursePlatformConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CoursePlatformConnectInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesConnectFieldInput>>;
};

export type CoursePlatformConnectionSort = {
  node?: InputMaybe<CoursePlatformSort>;
};

export type CoursePlatformConnectionWhere = {
  AND?: InputMaybe<Array<CoursePlatformConnectionWhere>>;
  OR?: InputMaybe<Array<CoursePlatformConnectionWhere>>;
  NOT?: InputMaybe<CoursePlatformConnectionWhere>;
  node?: InputMaybe<CoursePlatformWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CoursePlatformWhere>;
};

export type CoursePlatformConnectOrCreateFieldInput = {
  where: CoursePlatformConnectOrCreateWhere;
  onCreate: CoursePlatformConnectOrCreateFieldInputOnCreate;
};

export type CoursePlatformConnectOrCreateFieldInputOnCreate = {
  node: CoursePlatformOnCreateInput;
};

export type CoursePlatformConnectOrCreateInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesConnectOrCreateFieldInput>>;
};

export type CoursePlatformConnectOrCreateWhere = {
  node: CoursePlatformUniqueWhere;
};

export type CoursePlatformConnectWhere = {
  node: CoursePlatformWhere;
};

export type CoursePlatformCoursesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CoursePlatformCoursesAggregateInput>>;
  OR?: InputMaybe<Array<CoursePlatformCoursesAggregateInput>>;
  NOT?: InputMaybe<CoursePlatformCoursesAggregateInput>;
  node?: InputMaybe<CoursePlatformCoursesNodeAggregationWhereInput>;
};

export type CoursePlatformCoursesConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CoursePlatformCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type CoursePlatformCoursesConnectionWhere = {
  AND?: InputMaybe<Array<CoursePlatformCoursesConnectionWhere>>;
  OR?: InputMaybe<Array<CoursePlatformCoursesConnectionWhere>>;
  NOT?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type CoursePlatformCoursesConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: CoursePlatformCoursesConnectOrCreateFieldInputOnCreate;
};

export type CoursePlatformCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type CoursePlatformCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type CoursePlatformCoursesDeleteFieldInput = {
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type CoursePlatformCoursesDisconnectFieldInput = {
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type CoursePlatformCoursesFieldInput = {
  create?: InputMaybe<Array<CoursePlatformCoursesCreateFieldInput>>;
  connect?: InputMaybe<Array<CoursePlatformCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<CoursePlatformCoursesConnectOrCreateFieldInput>
  >;
};

export type CoursePlatformCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePlatformCoursesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CoursePlatformCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePlatformCoursesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type CoursePlatformCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type CoursePlatformCoursesUpdateFieldInput = {
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  update?: InputMaybe<CoursePlatformCoursesUpdateConnectionInput>;
  connect?: InputMaybe<Array<CoursePlatformCoursesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CoursePlatformCoursesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CoursePlatformCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<CoursePlatformCoursesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<CoursePlatformCoursesConnectOrCreateFieldInput>
  >;
};

export type CoursePlatformCreateFieldInput = {
  node: CoursePlatformCreateInput;
};

export type CoursePlatformCreateInput = {
  name: Scalars["String"];
  url: Scalars["String"];
  logoUrl?: InputMaybe<Scalars["String"]>;
  courses?: InputMaybe<CoursePlatformCoursesFieldInput>;
};

export type CoursePlatformDeleteFieldInput = {
  where?: InputMaybe<CoursePlatformConnectionWhere>;
  delete?: InputMaybe<CoursePlatformDeleteInput>;
};

export type CoursePlatformDeleteInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesDeleteFieldInput>>;
};

export type CoursePlatformDisconnectFieldInput = {
  where?: InputMaybe<CoursePlatformConnectionWhere>;
  disconnect?: InputMaybe<CoursePlatformDisconnectInput>;
};

export type CoursePlatformDisconnectInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesDisconnectFieldInput>>;
};

export type CoursePlatformFieldInput = {
  create?: InputMaybe<CoursePlatformCreateFieldInput>;
  connect?: InputMaybe<CoursePlatformConnectFieldInput>;
  connectOrCreate?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
};

export type CoursePlatformNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePlatformNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CoursePlatformNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePlatformNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  logoUrl_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  logoUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  logoUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  logoUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  logoUrl_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  logoUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  logoUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  logoUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  logoUrl_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  logoUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  logoUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  logoUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  logoUrl_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  logoUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  logoUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  logoUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  logoUrl_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  logoUrl_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  logoUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  logoUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  logoUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type CoursePlatformOnCreateInput = {
  name: Scalars["String"];
  url: Scalars["String"];
  logoUrl?: InputMaybe<Scalars["String"]>;
};

export type CoursePlatformOptions = {
  /** Specify one or more CoursePlatformSort objects to sort CoursePlatforms by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CoursePlatformSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type CoursePlatformRelationInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesCreateFieldInput>>;
};

/** Fields to sort CoursePlatforms by. The order in which sorts are applied is not guaranteed when specifying many fields in one CoursePlatformSort object. */
export type CoursePlatformSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  logoUrl?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type CoursePlatformUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type CoursePlatformUpdateConnectionInput = {
  node?: InputMaybe<CoursePlatformUpdateInput>;
};

export type CoursePlatformUpdateFieldInput = {
  where?: InputMaybe<CoursePlatformConnectionWhere>;
  update?: InputMaybe<CoursePlatformUpdateConnectionInput>;
  connect?: InputMaybe<CoursePlatformConnectFieldInput>;
  disconnect?: InputMaybe<CoursePlatformDisconnectFieldInput>;
  create?: InputMaybe<CoursePlatformCreateFieldInput>;
  delete?: InputMaybe<CoursePlatformDeleteFieldInput>;
  connectOrCreate?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
};

export type CoursePlatformUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  logoUrl?: InputMaybe<Scalars["String"]>;
  courses?: InputMaybe<Array<CoursePlatformCoursesUpdateFieldInput>>;
};

export type CoursePlatformWhere = {
  OR?: InputMaybe<Array<CoursePlatformWhere>>;
  AND?: InputMaybe<Array<CoursePlatformWhere>>;
  NOT?: InputMaybe<CoursePlatformWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT?: InputMaybe<Scalars["String"]>;
  url_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  url_CONTAINS?: InputMaybe<Scalars["String"]>;
  url_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  url_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  logoUrl?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  logoUrl_NOT?: InputMaybe<Scalars["String"]>;
  logoUrl_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  logoUrl_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  logoUrl_CONTAINS?: InputMaybe<Scalars["String"]>;
  logoUrl_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  logoUrl_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  logoUrl_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  logoUrl_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  logoUrl_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Use `courses_SOME` instead. */
  courses?: InputMaybe<CourseWhere>;
  /** @deprecated Use `courses_NONE` instead. */
  courses_NOT?: InputMaybe<CourseWhere>;
  coursesAggregate?: InputMaybe<CoursePlatformCoursesAggregateInput>;
  /** Return CoursePlatforms where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return CoursePlatforms where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return CoursePlatforms where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return CoursePlatforms where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  /** @deprecated Use `coursesConnection_SOME` instead. */
  coursesConnection?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** @deprecated Use `coursesConnection_NONE` instead. */
  coursesConnection_NOT?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where all of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where none of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where one of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where some of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
};

export type CoursePriceAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CoursePriceAggregateInput>>;
  OR?: InputMaybe<Array<CoursePriceAggregateInput>>;
  NOT?: InputMaybe<CoursePriceAggregateInput>;
  node?: InputMaybe<CoursePriceNodeAggregationWhereInput>;
};

export type CoursePriceConnectFieldInput = {
  where?: InputMaybe<CoursePriceConnectWhere>;
  connect?: InputMaybe<CoursePriceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CoursePriceConnectInput = {
  course?: InputMaybe<CoursePriceCourseConnectFieldInput>;
};

export type CoursePriceConnectionSort = {
  node?: InputMaybe<CoursePriceSort>;
};

export type CoursePriceConnectionWhere = {
  AND?: InputMaybe<Array<CoursePriceConnectionWhere>>;
  OR?: InputMaybe<Array<CoursePriceConnectionWhere>>;
  NOT?: InputMaybe<CoursePriceConnectionWhere>;
  node?: InputMaybe<CoursePriceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CoursePriceWhere>;
};

export type CoursePriceConnectOrCreateInput = {
  course?: InputMaybe<CoursePriceCourseConnectOrCreateFieldInput>;
};

export type CoursePriceConnectWhere = {
  node: CoursePriceWhere;
};

export type CoursePriceCourseAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CoursePriceCourseAggregateInput>>;
  OR?: InputMaybe<Array<CoursePriceCourseAggregateInput>>;
  NOT?: InputMaybe<CoursePriceCourseAggregateInput>;
  node?: InputMaybe<CoursePriceCourseNodeAggregationWhereInput>;
};

export type CoursePriceCourseConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<CourseConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CoursePriceCourseConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type CoursePriceCourseConnectionWhere = {
  AND?: InputMaybe<Array<CoursePriceCourseConnectionWhere>>;
  OR?: InputMaybe<Array<CoursePriceCourseConnectionWhere>>;
  NOT?: InputMaybe<CoursePriceCourseConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type CoursePriceCourseConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: CoursePriceCourseConnectOrCreateFieldInputOnCreate;
};

export type CoursePriceCourseConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type CoursePriceCourseCreateFieldInput = {
  node: CourseCreateInput;
};

export type CoursePriceCourseDeleteFieldInput = {
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type CoursePriceCourseDisconnectFieldInput = {
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type CoursePriceCourseFieldInput = {
  create?: InputMaybe<CoursePriceCourseCreateFieldInput>;
  connect?: InputMaybe<CoursePriceCourseConnectFieldInput>;
  connectOrCreate?: InputMaybe<CoursePriceCourseConnectOrCreateFieldInput>;
};

export type CoursePriceCourseNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePriceCourseNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CoursePriceCourseNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePriceCourseNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type CoursePriceCourseUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type CoursePriceCourseUpdateFieldInput = {
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
  update?: InputMaybe<CoursePriceCourseUpdateConnectionInput>;
  connect?: InputMaybe<CoursePriceCourseConnectFieldInput>;
  disconnect?: InputMaybe<CoursePriceCourseDisconnectFieldInput>;
  create?: InputMaybe<CoursePriceCourseCreateFieldInput>;
  delete?: InputMaybe<CoursePriceCourseDeleteFieldInput>;
  connectOrCreate?: InputMaybe<CoursePriceCourseConnectOrCreateFieldInput>;
};

export type CoursePriceCreateFieldInput = {
  node: CoursePriceCreateInput;
};

export type CoursePriceCreateInput = {
  price?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO?: InputMaybe<Scalars["String"]>;
  course?: InputMaybe<CoursePriceCourseFieldInput>;
};

export type CoursePriceDeleteFieldInput = {
  where?: InputMaybe<CoursePriceConnectionWhere>;
  delete?: InputMaybe<CoursePriceDeleteInput>;
};

export type CoursePriceDeleteInput = {
  course?: InputMaybe<CoursePriceCourseDeleteFieldInput>;
};

export type CoursePriceDisconnectFieldInput = {
  where?: InputMaybe<CoursePriceConnectionWhere>;
  disconnect?: InputMaybe<CoursePriceDisconnectInput>;
};

export type CoursePriceDisconnectInput = {
  course?: InputMaybe<CoursePriceCourseDisconnectFieldInput>;
};

export type CoursePriceFieldInput = {
  create?: InputMaybe<CoursePriceCreateFieldInput>;
  connect?: InputMaybe<CoursePriceConnectFieldInput>;
};

export type CoursePriceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePriceNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CoursePriceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePriceNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  currencyCodeISO_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  currencyCodeISO_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  currencyCodeISO_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  currencyCodeISO_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  currencyCodeISO_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  currencyCodeISO_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  currencyCodeISO_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  currencyCodeISO_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  currencyCodeISO_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  currencyCodeISO_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  currencyCodeISO_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_EQUAL?: InputMaybe<Scalars["Int"]>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  price_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  price_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_GT?: InputMaybe<Scalars["Int"]>;
  price_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  price_MIN_GT?: InputMaybe<Scalars["Int"]>;
  price_MAX_GT?: InputMaybe<Scalars["Int"]>;
  price_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_GTE?: InputMaybe<Scalars["Int"]>;
  price_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  price_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  price_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_LT?: InputMaybe<Scalars["Int"]>;
  price_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  price_MIN_LT?: InputMaybe<Scalars["Int"]>;
  price_MAX_LT?: InputMaybe<Scalars["Int"]>;
  price_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_LTE?: InputMaybe<Scalars["Int"]>;
  price_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  price_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  price_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type CoursePriceOptions = {
  /** Specify one or more CoursePriceSort objects to sort CoursePrices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CoursePriceSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type CoursePriceRelationInput = {
  course?: InputMaybe<CoursePriceCourseCreateFieldInput>;
};

/** Fields to sort CoursePrices by. The order in which sorts are applied is not guaranteed when specifying many fields in one CoursePriceSort object. */
export type CoursePriceSort = {
  price?: InputMaybe<SortDirection>;
  currencyCodeISO?: InputMaybe<SortDirection>;
};

export type CoursePriceUpdateConnectionInput = {
  node?: InputMaybe<CoursePriceUpdateInput>;
};

export type CoursePriceUpdateFieldInput = {
  where?: InputMaybe<CoursePriceConnectionWhere>;
  update?: InputMaybe<CoursePriceUpdateConnectionInput>;
  connect?: InputMaybe<CoursePriceConnectFieldInput>;
  disconnect?: InputMaybe<CoursePriceDisconnectFieldInput>;
  create?: InputMaybe<CoursePriceCreateFieldInput>;
  delete?: InputMaybe<CoursePriceDeleteFieldInput>;
};

export type CoursePriceUpdateInput = {
  price?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO?: InputMaybe<Scalars["String"]>;
  price_INCREMENT?: InputMaybe<Scalars["Int"]>;
  price_DECREMENT?: InputMaybe<Scalars["Int"]>;
  course?: InputMaybe<CoursePriceCourseUpdateFieldInput>;
};

export type CoursePriceWhere = {
  OR?: InputMaybe<Array<CoursePriceWhere>>;
  AND?: InputMaybe<Array<CoursePriceWhere>>;
  NOT?: InputMaybe<CoursePriceWhere>;
  price?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  price_NOT?: InputMaybe<Scalars["Int"]>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  price_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  price_LT?: InputMaybe<Scalars["Int"]>;
  price_LTE?: InputMaybe<Scalars["Int"]>;
  price_GT?: InputMaybe<Scalars["Int"]>;
  price_GTE?: InputMaybe<Scalars["Int"]>;
  currencyCodeISO?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  currencyCodeISO_NOT?: InputMaybe<Scalars["String"]>;
  currencyCodeISO_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  currencyCodeISO_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  currencyCodeISO_CONTAINS?: InputMaybe<Scalars["String"]>;
  currencyCodeISO_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  currencyCodeISO_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  currencyCodeISO_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  currencyCodeISO_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  currencyCodeISO_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  course?: InputMaybe<CourseWhere>;
  course_NOT?: InputMaybe<CourseWhere>;
  courseAggregate?: InputMaybe<CoursePriceCourseAggregateInput>;
  courseConnection?: InputMaybe<CoursePriceCourseConnectionWhere>;
  courseConnection_NOT?: InputMaybe<CoursePriceCourseConnectionWhere>;
};

export type CourseRelationInput = {
  price?: InputMaybe<CoursePriceCreateFieldInput>;
  platform?: InputMaybe<CoursePlatformCreateFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesCreateFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsCreateFieldInput>>;
};

/** Fields to sort Courses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseSort object. */
export type CourseSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  difficulty?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type CourseTagsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CourseTagsAggregateInput>>;
  OR?: InputMaybe<Array<CourseTagsAggregateInput>>;
  NOT?: InputMaybe<CourseTagsAggregateInput>;
  node?: InputMaybe<CourseTagsNodeAggregationWhereInput>;
  edge?: InputMaybe<CourseTagsEdgeAggregationWhereInput>;
};

export type CourseTagsConnectFieldInput = {
  where?: InputMaybe<TopicTagConnectWhere>;
  connect?: InputMaybe<Array<TopicTagConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CourseTagsConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<TopicTagSort>;
};

export type CourseTagsConnectionWhere = {
  AND?: InputMaybe<Array<CourseTagsConnectionWhere>>;
  OR?: InputMaybe<Array<CourseTagsConnectionWhere>>;
  NOT?: InputMaybe<CourseTagsConnectionWhere>;
  edge?: InputMaybe<IncludesTopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<TopicTagWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicTagWhere>;
};

export type CourseTagsConnectOrCreateFieldInput = {
  where: TopicTagConnectOrCreateWhere;
  onCreate: CourseTagsConnectOrCreateFieldInputOnCreate;
};

export type CourseTagsConnectOrCreateFieldInputOnCreate = {
  node: TopicTagOnCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type CourseTagsCreateFieldInput = {
  node: TopicTagCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type CourseTagsDeleteFieldInput = {
  where?: InputMaybe<CourseTagsConnectionWhere>;
  delete?: InputMaybe<TopicTagDeleteInput>;
};

export type CourseTagsDisconnectFieldInput = {
  where?: InputMaybe<CourseTagsConnectionWhere>;
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
};

export type CourseTagsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseTagsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CourseTagsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseTagsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type CourseTagsFieldInput = {
  create?: InputMaybe<Array<CourseTagsCreateFieldInput>>;
  connect?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
};

export type CourseTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseTagsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CourseTagsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseTagsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

export type CourseTagsUpdateConnectionInput = {
  node?: InputMaybe<TopicTagUpdateInput>;
  edge?: InputMaybe<IncludesTopicUpdateInput>;
};

export type CourseTagsUpdateFieldInput = {
  where?: InputMaybe<CourseTagsConnectionWhere>;
  update?: InputMaybe<CourseTagsUpdateConnectionInput>;
  connect?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CourseTagsDisconnectFieldInput>>;
  create?: InputMaybe<Array<CourseTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseTagsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
};

export type CourseUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type CourseUpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<CourseDifficulty>;
  price?: InputMaybe<CoursePriceUpdateFieldInput>;
  platform?: InputMaybe<CoursePlatformUpdateFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesUpdateFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsUpdateFieldInput>>;
};

export type CourseWhere = {
  OR?: InputMaybe<Array<CourseWhere>>;
  AND?: InputMaybe<Array<CourseWhere>>;
  NOT?: InputMaybe<CourseWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT?: InputMaybe<Scalars["String"]>;
  url_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  url_CONTAINS?: InputMaybe<Scalars["String"]>;
  url_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  url_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  difficulty?: InputMaybe<CourseDifficulty>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT?: InputMaybe<CourseDifficulty>;
  difficulty_IN?: InputMaybe<Array<InputMaybe<CourseDifficulty>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT_IN?: InputMaybe<Array<InputMaybe<CourseDifficulty>>>;
  price?: InputMaybe<CoursePriceWhere>;
  price_NOT?: InputMaybe<CoursePriceWhere>;
  priceAggregate?: InputMaybe<CoursePriceAggregateInput>;
  platform?: InputMaybe<CoursePlatformWhere>;
  platform_NOT?: InputMaybe<CoursePlatformWhere>;
  platformAggregate?: InputMaybe<CoursePlatformAggregateInput>;
  /** @deprecated Use `languages_SOME` instead. */
  languages?: InputMaybe<CourseLanguageWhere>;
  /** @deprecated Use `languages_NONE` instead. */
  languages_NOT?: InputMaybe<CourseLanguageWhere>;
  languagesAggregate?: InputMaybe<CourseLanguagesAggregateInput>;
  /** Return Courses where all of the related CourseLanguages match this filter */
  languages_ALL?: InputMaybe<CourseLanguageWhere>;
  /** Return Courses where none of the related CourseLanguages match this filter */
  languages_NONE?: InputMaybe<CourseLanguageWhere>;
  /** Return Courses where one of the related CourseLanguages match this filter */
  languages_SINGLE?: InputMaybe<CourseLanguageWhere>;
  /** Return Courses where some of the related CourseLanguages match this filter */
  languages_SOME?: InputMaybe<CourseLanguageWhere>;
  /** @deprecated Use `tags_SOME` instead. */
  tags?: InputMaybe<TopicTagWhere>;
  /** @deprecated Use `tags_NONE` instead. */
  tags_NOT?: InputMaybe<TopicTagWhere>;
  tagsAggregate?: InputMaybe<CourseTagsAggregateInput>;
  /** Return Courses where all of the related TopicTags match this filter */
  tags_ALL?: InputMaybe<TopicTagWhere>;
  /** Return Courses where none of the related TopicTags match this filter */
  tags_NONE?: InputMaybe<TopicTagWhere>;
  /** Return Courses where one of the related TopicTags match this filter */
  tags_SINGLE?: InputMaybe<TopicTagWhere>;
  /** Return Courses where some of the related TopicTags match this filter */
  tags_SOME?: InputMaybe<TopicTagWhere>;
  priceConnection?: InputMaybe<CoursePriceConnectionWhere>;
  priceConnection_NOT?: InputMaybe<CoursePriceConnectionWhere>;
  platformConnection?: InputMaybe<CoursePlatformConnectionWhere>;
  platformConnection_NOT?: InputMaybe<CoursePlatformConnectionWhere>;
  /** @deprecated Use `languagesConnection_SOME` instead. */
  languagesConnection?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** @deprecated Use `languagesConnection_NONE` instead. */
  languagesConnection_NOT?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where all of the related CourseLanguagesConnections match this filter */
  languagesConnection_ALL?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where none of the related CourseLanguagesConnections match this filter */
  languagesConnection_NONE?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where one of the related CourseLanguagesConnections match this filter */
  languagesConnection_SINGLE?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where some of the related CourseLanguagesConnections match this filter */
  languagesConnection_SOME?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** @deprecated Use `tagsConnection_SOME` instead. */
  tagsConnection?: InputMaybe<CourseTagsConnectionWhere>;
  /** @deprecated Use `tagsConnection_NONE` instead. */
  tagsConnection_NOT?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where all of the related CourseTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where none of the related CourseTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where one of the related CourseTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where some of the related CourseTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<CourseTagsConnectionWhere>;
};

/** The input for filtering a float */
export type FloatWhere = {
  min?: InputMaybe<Scalars["Float"]>;
  max?: InputMaybe<Scalars["Float"]>;
};

export type HasChildCreateInput = {
  id: Scalars["String"];
  targetHandle?: InputMaybe<Scalars["String"]>;
};

export type HasChildSort = {
  id?: InputMaybe<SortDirection>;
  targetHandle?: InputMaybe<SortDirection>;
};

export type HasChildUpdateInput = {
  id?: InputMaybe<Scalars["String"]>;
  targetHandle?: InputMaybe<Scalars["String"]>;
};

export type HasChildWhere = {
  OR?: InputMaybe<Array<HasChildWhere>>;
  AND?: InputMaybe<Array<HasChildWhere>>;
  NOT?: InputMaybe<HasChildWhere>;
  id?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  targetHandle?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT?: InputMaybe<Scalars["String"]>;
  targetHandle_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetHandle_CONTAINS?: InputMaybe<Scalars["String"]>;
  targetHandle_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  targetHandle_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
};

export type IncludesTopicCreateInput = {
  score?: InputMaybe<Scalars["Float"]>;
};

export type IncludesTopicSort = {
  score?: InputMaybe<SortDirection>;
};

export type IncludesTopicUpdateInput = {
  score?: InputMaybe<Scalars["Float"]>;
  score_ADD?: InputMaybe<Scalars["Float"]>;
  score_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  score_DIVIDE?: InputMaybe<Scalars["Float"]>;
  score_MULTIPLY?: InputMaybe<Scalars["Float"]>;
};

export type IncludesTopicWhere = {
  OR?: InputMaybe<Array<IncludesTopicWhere>>;
  AND?: InputMaybe<Array<IncludesTopicWhere>>;
  NOT?: InputMaybe<IncludesTopicWhere>;
  score?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT?: InputMaybe<Scalars["Float"]>;
  score_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  score_LT?: InputMaybe<Scalars["Float"]>;
  score_LTE?: InputMaybe<Scalars["Float"]>;
  score_GT?: InputMaybe<Scalars["Float"]>;
  score_GTE?: InputMaybe<Scalars["Float"]>;
};

export type RoadmapConnectInput = {
  node?: InputMaybe<RoadmapNodeConnectFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
};

export type RoadmapConnectOrCreateInput = {
  node?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
};

export type RoadmapConnectOrCreateWhere = {
  node: RoadmapUniqueWhere;
};

export type RoadmapConnectWhere = {
  node: RoadmapWhere;
};

export type RoadmapCreatedByAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapCreatedByAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapCreatedByAggregateInput>>;
  NOT?: InputMaybe<RoadmapCreatedByAggregateInput>;
  node?: InputMaybe<RoadmapCreatedByNodeAggregationWhereInput>;
};

export type RoadmapCreatedByConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapCreatedByConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type RoadmapCreatedByConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapCreatedByConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapCreatedByConnectionWhere>>;
  NOT?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type RoadmapCreatedByConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: RoadmapCreatedByConnectOrCreateFieldInputOnCreate;
};

export type RoadmapCreatedByConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type RoadmapCreatedByCreateFieldInput = {
  node: UserCreateInput;
};

export type RoadmapCreatedByDeleteFieldInput = {
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type RoadmapCreatedByDisconnectFieldInput = {
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type RoadmapCreatedByFieldInput = {
  create?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
  connect?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
};

export type RoadmapCreatedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapCreatedByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapCreatedByNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapCreatedByNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  firstName_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  firstName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastName_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  lastName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type RoadmapCreatedByUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type RoadmapCreatedByUpdateFieldInput = {
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  update?: InputMaybe<RoadmapCreatedByUpdateConnectionInput>;
  connect?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
  disconnect?: InputMaybe<RoadmapCreatedByDisconnectFieldInput>;
  create?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
  delete?: InputMaybe<RoadmapCreatedByDeleteFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
};

export type RoadmapCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  node?: InputMaybe<RoadmapNodeFieldInput>;
  tags?: InputMaybe<RoadmapTagsFieldInput>;
  createdBy?: InputMaybe<RoadmapCreatedByFieldInput>;
};

export type RoadmapDeleteInput = {
  node?: InputMaybe<RoadmapNodeDeleteFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsDeleteFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByDeleteFieldInput>;
};

export type RoadmapDisconnectInput = {
  node?: InputMaybe<RoadmapNodeDisconnectFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsDisconnectFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByDisconnectFieldInput>;
};

export type RoadmapEdgeCreateInput = {
  id: Scalars["String"];
  source: Scalars["String"];
  target: Scalars["String"];
  targetHandle?: InputMaybe<Scalars["String"]>;
};

export type RoadmapEdgeOptions = {
  /** Specify one or more RoadmapEdgeSort objects to sort RoadmapEdges by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoadmapEdgeSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort RoadmapEdges by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoadmapEdgeSort object. */
export type RoadmapEdgeSort = {
  id?: InputMaybe<SortDirection>;
  source?: InputMaybe<SortDirection>;
  target?: InputMaybe<SortDirection>;
  targetHandle?: InputMaybe<SortDirection>;
};

export type RoadmapEdgeUpdateInput = {
  id?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<Scalars["String"]>;
  target?: InputMaybe<Scalars["String"]>;
  targetHandle?: InputMaybe<Scalars["String"]>;
};

export type RoadmapEdgeWhere = {
  OR?: InputMaybe<Array<RoadmapEdgeWhere>>;
  AND?: InputMaybe<Array<RoadmapEdgeWhere>>;
  NOT?: InputMaybe<RoadmapEdgeWhere>;
  id?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  source_NOT?: InputMaybe<Scalars["String"]>;
  source_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  source_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  source_CONTAINS?: InputMaybe<Scalars["String"]>;
  source_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  source_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  source_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  source_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  source_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  target?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  target_NOT?: InputMaybe<Scalars["String"]>;
  target_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  target_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  target_CONTAINS?: InputMaybe<Scalars["String"]>;
  target_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  target_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  target_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  target_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  target_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  targetHandle?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT?: InputMaybe<Scalars["String"]>;
  targetHandle_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetHandle_CONTAINS?: InputMaybe<Scalars["String"]>;
  targetHandle_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  targetHandle_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  targetHandle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
};

export type RoadmapNodeAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapNodeAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapNodeAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeAggregateInput>;
  node?: InputMaybe<RoadmapNodeNodeAggregationWhereInput>;
};

export type RoadmapNodeChildNodesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapNodeChildNodesAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesAggregateInput>;
  node?: InputMaybe<RoadmapNodeChildNodesNodeAggregationWhereInput>;
  edge?: InputMaybe<RoadmapNodeChildNodesEdgeAggregationWhereInput>;
};

export type RoadmapNodeChildNodesConnectFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectWhere>;
  connect?: InputMaybe<Array<RoadmapNodeConnectInput>>;
  edge: HasChildCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapNodeChildNodesConnectionSort = {
  edge?: InputMaybe<HasChildSort>;
  node?: InputMaybe<RoadmapNodeSort>;
};

export type RoadmapNodeChildNodesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  edge?: InputMaybe<HasChildWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<HasChildWhere>;
  node?: InputMaybe<RoadmapNodeWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeChildNodesConnectOrCreateFieldInput = {
  where: RoadmapNodeConnectOrCreateWhere;
  onCreate: RoadmapNodeChildNodesConnectOrCreateFieldInputOnCreate;
};

export type RoadmapNodeChildNodesConnectOrCreateFieldInputOnCreate = {
  node: RoadmapNodeOnCreateInput;
  edge: HasChildCreateInput;
};

export type RoadmapNodeChildNodesCreateFieldInput = {
  node: RoadmapNodeCreateInput;
  edge: HasChildCreateInput;
};

export type RoadmapNodeChildNodesDeleteFieldInput = {
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
};

export type RoadmapNodeChildNodesDisconnectFieldInput = {
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
};

export type RoadmapNodeChildNodesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RoadmapNodeChildNodesFieldInput = {
  create?: InputMaybe<Array<RoadmapNodeChildNodesCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapNodeChildNodesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapNodeChildNodesConnectOrCreateFieldInput>
  >;
};

export type RoadmapNodeChildNodesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_GT?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_LT?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_GT?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_GT?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_GT?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_LT?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_LT?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_LT?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type RoadmapNodeChildNodesUpdateConnectionInput = {
  node?: InputMaybe<RoadmapNodeUpdateInput>;
  edge?: InputMaybe<HasChildUpdateInput>;
};

export type RoadmapNodeChildNodesUpdateFieldInput = {
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  update?: InputMaybe<RoadmapNodeChildNodesUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapNodeChildNodesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapNodeChildNodesDisconnectFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeChildNodesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapNodeChildNodesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapNodeChildNodesConnectOrCreateFieldInput>
  >;
};

export type RoadmapNodeConnectFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectWhere>;
  connect?: InputMaybe<RoadmapNodeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapNodeConnectInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesConnectFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesConnectFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapConnectFieldInput>;
};

export type RoadmapNodeConnectionSort = {
  node?: InputMaybe<RoadmapNodeSort>;
};

export type RoadmapNodeConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapNodeConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeConnectionWhere>;
  node?: InputMaybe<RoadmapNodeWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeConnectOrCreateFieldInput = {
  where: RoadmapNodeConnectOrCreateWhere;
  onCreate: RoadmapNodeConnectOrCreateFieldInputOnCreate;
};

export type RoadmapNodeConnectOrCreateFieldInputOnCreate = {
  node: RoadmapNodeOnCreateInput;
};

export type RoadmapNodeConnectOrCreateInput = {
  childNodes?: InputMaybe<
    Array<RoadmapNodeChildNodesConnectOrCreateFieldInput>
  >;
  parentNodes?: InputMaybe<
    Array<RoadmapNodeParentNodesConnectOrCreateFieldInput>
  >;
  roadmap?: InputMaybe<RoadmapNodeRoadmapConnectOrCreateFieldInput>;
};

export type RoadmapNodeConnectOrCreateWhere = {
  node: RoadmapNodeUniqueWhere;
};

export type RoadmapNodeConnectWhere = {
  node: RoadmapNodeWhere;
};

export type RoadmapNodeCreateFieldInput = {
  node: RoadmapNodeCreateInput;
};

export type RoadmapNodeCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
  positionX: Scalars["Float"];
  positionY: Scalars["Float"];
  childNodes?: InputMaybe<RoadmapNodeChildNodesFieldInput>;
  parentNodes?: InputMaybe<RoadmapNodeParentNodesFieldInput>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapFieldInput>;
};

export type RoadmapNodeDeleteFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
};

export type RoadmapNodeDeleteInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesDeleteFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesDeleteFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapDeleteFieldInput>;
};

export type RoadmapNodeDisconnectFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
};

export type RoadmapNodeDisconnectInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesDisconnectFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesDisconnectFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapDisconnectFieldInput>;
};

export type RoadmapNodeFieldInput = {
  create?: InputMaybe<RoadmapNodeCreateFieldInput>;
  connect?: InputMaybe<RoadmapNodeConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
};

export type RoadmapNodeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_GT?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_LT?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_GT?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_GT?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_GT?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_LT?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_LT?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_LT?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type RoadmapNodeOnCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
  positionX: Scalars["Float"];
  positionY: Scalars["Float"];
};

export type RoadmapNodeOptions = {
  /** Specify one or more RoadmapNodeSort objects to sort RoadmapNodes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoadmapNodeSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type RoadmapNodeParentNodesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapNodeParentNodesAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesAggregateInput>;
  node?: InputMaybe<RoadmapNodeParentNodesNodeAggregationWhereInput>;
  edge?: InputMaybe<RoadmapNodeParentNodesEdgeAggregationWhereInput>;
};

export type RoadmapNodeParentNodesConnectFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectWhere>;
  connect?: InputMaybe<Array<RoadmapNodeConnectInput>>;
  edge: HasChildCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapNodeParentNodesConnectionSort = {
  edge?: InputMaybe<HasChildSort>;
  node?: InputMaybe<RoadmapNodeSort>;
};

export type RoadmapNodeParentNodesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  edge?: InputMaybe<HasChildWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<HasChildWhere>;
  node?: InputMaybe<RoadmapNodeWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeParentNodesConnectOrCreateFieldInput = {
  where: RoadmapNodeConnectOrCreateWhere;
  onCreate: RoadmapNodeParentNodesConnectOrCreateFieldInputOnCreate;
};

export type RoadmapNodeParentNodesConnectOrCreateFieldInputOnCreate = {
  node: RoadmapNodeOnCreateInput;
  edge: HasChildCreateInput;
};

export type RoadmapNodeParentNodesCreateFieldInput = {
  node: RoadmapNodeCreateInput;
  edge: HasChildCreateInput;
};

export type RoadmapNodeParentNodesDeleteFieldInput = {
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
};

export type RoadmapNodeParentNodesDisconnectFieldInput = {
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
};

export type RoadmapNodeParentNodesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  targetHandle_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  targetHandle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  targetHandle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  targetHandle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RoadmapNodeParentNodesFieldInput = {
  create?: InputMaybe<Array<RoadmapNodeParentNodesCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapNodeParentNodesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapNodeParentNodesConnectOrCreateFieldInput>
  >;
};

export type RoadmapNodeParentNodesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_GT?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_LT?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_GT?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_GT?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_GT?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_LT?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_LT?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_LT?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  positionY_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type RoadmapNodeParentNodesUpdateConnectionInput = {
  node?: InputMaybe<RoadmapNodeUpdateInput>;
  edge?: InputMaybe<HasChildUpdateInput>;
};

export type RoadmapNodeParentNodesUpdateFieldInput = {
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  update?: InputMaybe<RoadmapNodeParentNodesUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapNodeParentNodesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapNodeParentNodesDisconnectFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeParentNodesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapNodeParentNodesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapNodeParentNodesConnectOrCreateFieldInput>
  >;
};

export type RoadmapNodeRelationInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesCreateFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesCreateFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapCreateFieldInput>;
};

export type RoadmapNodeRoadmapAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapNodeRoadmapAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapNodeRoadmapAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeRoadmapAggregateInput>;
  node?: InputMaybe<RoadmapNodeRoadmapNodeAggregationWhereInput>;
};

export type RoadmapNodeRoadmapConnectFieldInput = {
  where?: InputMaybe<RoadmapConnectWhere>;
  connect?: InputMaybe<RoadmapConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapNodeRoadmapConnectionSort = {
  node?: InputMaybe<RoadmapSort>;
};

export type RoadmapNodeRoadmapConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeRoadmapConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapNodeRoadmapConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  node?: InputMaybe<RoadmapWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapWhere>;
};

export type RoadmapNodeRoadmapConnectOrCreateFieldInput = {
  where: RoadmapConnectOrCreateWhere;
  onCreate: RoadmapNodeRoadmapConnectOrCreateFieldInputOnCreate;
};

export type RoadmapNodeRoadmapConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
};

export type RoadmapNodeRoadmapCreateFieldInput = {
  node: RoadmapCreateInput;
};

export type RoadmapNodeRoadmapDeleteFieldInput = {
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  delete?: InputMaybe<RoadmapDeleteInput>;
};

export type RoadmapNodeRoadmapDisconnectFieldInput = {
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
};

export type RoadmapNodeRoadmapFieldInput = {
  create?: InputMaybe<RoadmapNodeRoadmapCreateFieldInput>;
  connect?: InputMaybe<RoadmapNodeRoadmapConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeRoadmapConnectOrCreateFieldInput>;
};

export type RoadmapNodeRoadmapNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeRoadmapNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeRoadmapNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeRoadmapNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type RoadmapNodeRoadmapUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type RoadmapNodeRoadmapUpdateFieldInput = {
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  update?: InputMaybe<RoadmapNodeRoadmapUpdateConnectionInput>;
  connect?: InputMaybe<RoadmapNodeRoadmapConnectFieldInput>;
  disconnect?: InputMaybe<RoadmapNodeRoadmapDisconnectFieldInput>;
  create?: InputMaybe<RoadmapNodeRoadmapCreateFieldInput>;
  delete?: InputMaybe<RoadmapNodeRoadmapDeleteFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeRoadmapConnectOrCreateFieldInput>;
};

/** Fields to sort RoadmapNodes by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoadmapNodeSort object. */
export type RoadmapNodeSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  positionX?: InputMaybe<SortDirection>;
  positionY?: InputMaybe<SortDirection>;
};

export type RoadmapNodeUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type RoadmapNodeUpdateConnectionInput = {
  node?: InputMaybe<RoadmapNodeUpdateInput>;
};

export type RoadmapNodeUpdateFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
  update?: InputMaybe<RoadmapNodeUpdateConnectionInput>;
  connect?: InputMaybe<RoadmapNodeConnectFieldInput>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectFieldInput>;
  create?: InputMaybe<RoadmapNodeCreateFieldInput>;
  delete?: InputMaybe<RoadmapNodeDeleteFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
};

export type RoadmapNodeUpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  positionX?: InputMaybe<Scalars["Float"]>;
  positionY?: InputMaybe<Scalars["Float"]>;
  positionX_ADD?: InputMaybe<Scalars["Float"]>;
  positionX_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  positionX_DIVIDE?: InputMaybe<Scalars["Float"]>;
  positionX_MULTIPLY?: InputMaybe<Scalars["Float"]>;
  positionY_ADD?: InputMaybe<Scalars["Float"]>;
  positionY_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  positionY_DIVIDE?: InputMaybe<Scalars["Float"]>;
  positionY_MULTIPLY?: InputMaybe<Scalars["Float"]>;
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesUpdateFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesUpdateFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapUpdateFieldInput>;
};

export type RoadmapNodeWhere = {
  OR?: InputMaybe<Array<RoadmapNodeWhere>>;
  AND?: InputMaybe<Array<RoadmapNodeWhere>>;
  NOT?: InputMaybe<RoadmapNodeWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<Scalars["String"]>;
  type_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  type_CONTAINS?: InputMaybe<Scalars["String"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  positionX?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  positionX_NOT?: InputMaybe<Scalars["Float"]>;
  positionX_IN?: InputMaybe<Array<Scalars["Float"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  positionX_NOT_IN?: InputMaybe<Array<Scalars["Float"]>>;
  positionX_LT?: InputMaybe<Scalars["Float"]>;
  positionX_LTE?: InputMaybe<Scalars["Float"]>;
  positionX_GT?: InputMaybe<Scalars["Float"]>;
  positionX_GTE?: InputMaybe<Scalars["Float"]>;
  positionY?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  positionY_NOT?: InputMaybe<Scalars["Float"]>;
  positionY_IN?: InputMaybe<Array<Scalars["Float"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  positionY_NOT_IN?: InputMaybe<Array<Scalars["Float"]>>;
  positionY_LT?: InputMaybe<Scalars["Float"]>;
  positionY_LTE?: InputMaybe<Scalars["Float"]>;
  positionY_GT?: InputMaybe<Scalars["Float"]>;
  positionY_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Use `childNodes_SOME` instead. */
  childNodes?: InputMaybe<RoadmapNodeWhere>;
  /** @deprecated Use `childNodes_NONE` instead. */
  childNodes_NOT?: InputMaybe<RoadmapNodeWhere>;
  childNodesAggregate?: InputMaybe<RoadmapNodeChildNodesAggregateInput>;
  /** Return RoadmapNodes where all of the related RoadmapNodes match this filter */
  childNodes_ALL?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodes match this filter */
  childNodes_NONE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodes match this filter */
  childNodes_SINGLE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodes match this filter */
  childNodes_SOME?: InputMaybe<RoadmapNodeWhere>;
  /** @deprecated Use `parentNodes_SOME` instead. */
  parentNodes?: InputMaybe<RoadmapNodeWhere>;
  /** @deprecated Use `parentNodes_NONE` instead. */
  parentNodes_NOT?: InputMaybe<RoadmapNodeWhere>;
  parentNodesAggregate?: InputMaybe<RoadmapNodeParentNodesAggregateInput>;
  /** Return RoadmapNodes where all of the related RoadmapNodes match this filter */
  parentNodes_ALL?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodes match this filter */
  parentNodes_NONE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodes match this filter */
  parentNodes_SINGLE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodes match this filter */
  parentNodes_SOME?: InputMaybe<RoadmapNodeWhere>;
  roadmap?: InputMaybe<RoadmapWhere>;
  roadmap_NOT?: InputMaybe<RoadmapWhere>;
  roadmapAggregate?: InputMaybe<RoadmapNodeRoadmapAggregateInput>;
  /** @deprecated Use `childNodesConnection_SOME` instead. */
  childNodesConnection?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** @deprecated Use `childNodesConnection_NONE` instead. */
  childNodesConnection_NOT?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where all of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_ALL?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_NONE?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_SINGLE?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_SOME?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** @deprecated Use `parentNodesConnection_SOME` instead. */
  parentNodesConnection?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** @deprecated Use `parentNodesConnection_NONE` instead. */
  parentNodesConnection_NOT?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where all of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_ALL?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_NONE?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_SINGLE?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_SOME?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  roadmapConnection?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  roadmapConnection_NOT?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
};

export type RoadmapOnCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
};

export type RoadmapOptions = {
  /** Specify one or more RoadmapSort objects to sort Roadmaps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoadmapSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type RoadmapRelationInput = {
  node?: InputMaybe<RoadmapNodeCreateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsCreateFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
};

/** Fields to sort Roadmaps by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoadmapSort object. */
export type RoadmapSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type RoadmapTagsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapTagsAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapTagsAggregateInput>>;
  NOT?: InputMaybe<RoadmapTagsAggregateInput>;
  node?: InputMaybe<RoadmapTagsNodeAggregationWhereInput>;
  edge?: InputMaybe<RoadmapTagsEdgeAggregationWhereInput>;
};

export type RoadmapTagsConnectFieldInput = {
  where?: InputMaybe<TopicTagConnectWhere>;
  connect?: InputMaybe<Array<TopicTagConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapTagsConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<TopicTagSort>;
};

export type RoadmapTagsConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapTagsConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapTagsConnectionWhere>>;
  NOT?: InputMaybe<RoadmapTagsConnectionWhere>;
  edge?: InputMaybe<IncludesTopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<TopicTagWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicTagWhere>;
};

export type RoadmapTagsConnectOrCreateFieldInput = {
  where: TopicTagConnectOrCreateWhere;
  onCreate: RoadmapTagsConnectOrCreateFieldInputOnCreate;
};

export type RoadmapTagsConnectOrCreateFieldInputOnCreate = {
  node: TopicTagOnCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type RoadmapTagsCreateFieldInput = {
  node: TopicTagCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type RoadmapTagsDeleteFieldInput = {
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
  delete?: InputMaybe<TopicTagDeleteInput>;
};

export type RoadmapTagsDisconnectFieldInput = {
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
};

export type RoadmapTagsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapTagsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapTagsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapTagsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type RoadmapTagsFieldInput = {
  create?: InputMaybe<Array<RoadmapTagsCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
};

export type RoadmapTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapTagsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapTagsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapTagsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

export type RoadmapTagsUpdateConnectionInput = {
  node?: InputMaybe<TopicTagUpdateInput>;
  edge?: InputMaybe<IncludesTopicUpdateInput>;
};

export type RoadmapTagsUpdateFieldInput = {
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
  update?: InputMaybe<RoadmapTagsUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapTagsDisconnectFieldInput>>;
  create?: InputMaybe<Array<RoadmapTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapTagsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
};

export type RoadmapUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type RoadmapUpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  node?: InputMaybe<RoadmapNodeUpdateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsUpdateFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByUpdateFieldInput>;
};

export type RoadmapWhere = {
  OR?: InputMaybe<Array<RoadmapWhere>>;
  AND?: InputMaybe<Array<RoadmapWhere>>;
  NOT?: InputMaybe<RoadmapWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  node?: InputMaybe<RoadmapNodeWhere>;
  node_NOT?: InputMaybe<RoadmapNodeWhere>;
  nodeAggregate?: InputMaybe<RoadmapNodeAggregateInput>;
  /** @deprecated Use `tags_SOME` instead. */
  tags?: InputMaybe<TopicTagWhere>;
  /** @deprecated Use `tags_NONE` instead. */
  tags_NOT?: InputMaybe<TopicTagWhere>;
  tagsAggregate?: InputMaybe<RoadmapTagsAggregateInput>;
  /** Return Roadmaps where all of the related TopicTags match this filter */
  tags_ALL?: InputMaybe<TopicTagWhere>;
  /** Return Roadmaps where none of the related TopicTags match this filter */
  tags_NONE?: InputMaybe<TopicTagWhere>;
  /** Return Roadmaps where one of the related TopicTags match this filter */
  tags_SINGLE?: InputMaybe<TopicTagWhere>;
  /** Return Roadmaps where some of the related TopicTags match this filter */
  tags_SOME?: InputMaybe<TopicTagWhere>;
  createdBy?: InputMaybe<UserWhere>;
  createdBy_NOT?: InputMaybe<UserWhere>;
  createdByAggregate?: InputMaybe<RoadmapCreatedByAggregateInput>;
  nodeConnection?: InputMaybe<RoadmapNodeConnectionWhere>;
  nodeConnection_NOT?: InputMaybe<RoadmapNodeConnectionWhere>;
  /** @deprecated Use `tagsConnection_SOME` instead. */
  tagsConnection?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** @deprecated Use `tagsConnection_NONE` instead. */
  tagsConnection_NOT?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where all of the related RoadmapTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where none of the related RoadmapTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where one of the related RoadmapTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where some of the related RoadmapTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<RoadmapTagsConnectionWhere>;
  createdByConnection?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  createdByConnection_NOT?: InputMaybe<RoadmapCreatedByConnectionWhere>;
};

export type TopicTagConnectInput = {
  courses?: InputMaybe<Array<TopicTagCoursesConnectFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsConnectFieldInput>>;
};

export type TopicTagConnectOrCreateInput = {
  courses?: InputMaybe<Array<TopicTagCoursesConnectOrCreateFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsConnectOrCreateFieldInput>>;
};

export type TopicTagConnectOrCreateWhere = {
  node: TopicTagUniqueWhere;
};

export type TopicTagConnectWhere = {
  node: TopicTagWhere;
};

export type TopicTagCoursesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<TopicTagCoursesAggregateInput>>;
  OR?: InputMaybe<Array<TopicTagCoursesAggregateInput>>;
  NOT?: InputMaybe<TopicTagCoursesAggregateInput>;
  node?: InputMaybe<TopicTagCoursesNodeAggregationWhereInput>;
  edge?: InputMaybe<TopicTagCoursesEdgeAggregationWhereInput>;
};

export type TopicTagCoursesConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<Array<CourseConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type TopicTagCoursesConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<CourseSort>;
};

export type TopicTagCoursesConnectionWhere = {
  AND?: InputMaybe<Array<TopicTagCoursesConnectionWhere>>;
  OR?: InputMaybe<Array<TopicTagCoursesConnectionWhere>>;
  NOT?: InputMaybe<TopicTagCoursesConnectionWhere>;
  edge?: InputMaybe<IncludesTopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type TopicTagCoursesConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: TopicTagCoursesConnectOrCreateFieldInputOnCreate;
};

export type TopicTagCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type TopicTagCoursesCreateFieldInput = {
  node: CourseCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type TopicTagCoursesDeleteFieldInput = {
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type TopicTagCoursesDisconnectFieldInput = {
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type TopicTagCoursesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagCoursesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TopicTagCoursesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagCoursesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type TopicTagCoursesFieldInput = {
  create?: InputMaybe<Array<TopicTagCoursesCreateFieldInput>>;
  connect?: InputMaybe<Array<TopicTagCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TopicTagCoursesConnectOrCreateFieldInput>>;
};

export type TopicTagCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagCoursesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TopicTagCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagCoursesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type TopicTagCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
  edge?: InputMaybe<IncludesTopicUpdateInput>;
};

export type TopicTagCoursesUpdateFieldInput = {
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
  update?: InputMaybe<TopicTagCoursesUpdateConnectionInput>;
  connect?: InputMaybe<Array<TopicTagCoursesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<TopicTagCoursesDisconnectFieldInput>>;
  create?: InputMaybe<Array<TopicTagCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<TopicTagCoursesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TopicTagCoursesConnectOrCreateFieldInput>>;
};

export type TopicTagCreateInput = {
  name: Scalars["String"];
  courses?: InputMaybe<TopicTagCoursesFieldInput>;
  roadmaps?: InputMaybe<TopicTagRoadmapsFieldInput>;
};

export type TopicTagDeleteInput = {
  courses?: InputMaybe<Array<TopicTagCoursesDeleteFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsDeleteFieldInput>>;
};

export type TopicTagDisconnectInput = {
  courses?: InputMaybe<Array<TopicTagCoursesDisconnectFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsDisconnectFieldInput>>;
};

export type TopicTagOnCreateInput = {
  name: Scalars["String"];
};

export type TopicTagOptions = {
  /** Specify one or more TopicTagSort objects to sort TopicTags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TopicTagSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type TopicTagRelationInput = {
  courses?: InputMaybe<Array<TopicTagCoursesCreateFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsCreateFieldInput>>;
};

export type TopicTagRoadmapsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<TopicTagRoadmapsAggregateInput>>;
  OR?: InputMaybe<Array<TopicTagRoadmapsAggregateInput>>;
  NOT?: InputMaybe<TopicTagRoadmapsAggregateInput>;
  node?: InputMaybe<TopicTagRoadmapsNodeAggregationWhereInput>;
  edge?: InputMaybe<TopicTagRoadmapsEdgeAggregationWhereInput>;
};

export type TopicTagRoadmapsConnectFieldInput = {
  where?: InputMaybe<RoadmapConnectWhere>;
  connect?: InputMaybe<Array<RoadmapConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type TopicTagRoadmapsConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<RoadmapSort>;
};

export type TopicTagRoadmapsConnectionWhere = {
  AND?: InputMaybe<Array<TopicTagRoadmapsConnectionWhere>>;
  OR?: InputMaybe<Array<TopicTagRoadmapsConnectionWhere>>;
  NOT?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  edge?: InputMaybe<IncludesTopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<RoadmapWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapWhere>;
};

export type TopicTagRoadmapsConnectOrCreateFieldInput = {
  where: RoadmapConnectOrCreateWhere;
  onCreate: TopicTagRoadmapsConnectOrCreateFieldInputOnCreate;
};

export type TopicTagRoadmapsConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type TopicTagRoadmapsCreateFieldInput = {
  node: RoadmapCreateInput;
  edge?: InputMaybe<IncludesTopicCreateInput>;
};

export type TopicTagRoadmapsDeleteFieldInput = {
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  delete?: InputMaybe<RoadmapDeleteInput>;
};

export type TopicTagRoadmapsDisconnectFieldInput = {
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
};

export type TopicTagRoadmapsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagRoadmapsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TopicTagRoadmapsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagRoadmapsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]>;
};

export type TopicTagRoadmapsFieldInput = {
  create?: InputMaybe<Array<TopicTagRoadmapsCreateFieldInput>>;
  connect?: InputMaybe<Array<TopicTagRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<TopicTagRoadmapsConnectOrCreateFieldInput>
  >;
};

export type TopicTagRoadmapsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagRoadmapsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TopicTagRoadmapsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagRoadmapsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type TopicTagRoadmapsUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
  edge?: InputMaybe<IncludesTopicUpdateInput>;
};

export type TopicTagRoadmapsUpdateFieldInput = {
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  update?: InputMaybe<TopicTagRoadmapsUpdateConnectionInput>;
  connect?: InputMaybe<Array<TopicTagRoadmapsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<TopicTagRoadmapsDisconnectFieldInput>>;
  create?: InputMaybe<Array<TopicTagRoadmapsCreateFieldInput>>;
  delete?: InputMaybe<Array<TopicTagRoadmapsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<TopicTagRoadmapsConnectOrCreateFieldInput>
  >;
};

/** Fields to sort TopicTags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TopicTagSort object. */
export type TopicTagSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type TopicTagUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type TopicTagUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  courses?: InputMaybe<Array<TopicTagCoursesUpdateFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsUpdateFieldInput>>;
};

export type TopicTagWhere = {
  OR?: InputMaybe<Array<TopicTagWhere>>;
  AND?: InputMaybe<Array<TopicTagWhere>>;
  NOT?: InputMaybe<TopicTagWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Use `courses_SOME` instead. */
  courses?: InputMaybe<CourseWhere>;
  /** @deprecated Use `courses_NONE` instead. */
  courses_NOT?: InputMaybe<CourseWhere>;
  coursesAggregate?: InputMaybe<TopicTagCoursesAggregateInput>;
  /** Return TopicTags where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return TopicTags where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return TopicTags where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return TopicTags where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  /** @deprecated Use `roadmaps_SOME` instead. */
  roadmaps?: InputMaybe<RoadmapWhere>;
  /** @deprecated Use `roadmaps_NONE` instead. */
  roadmaps_NOT?: InputMaybe<RoadmapWhere>;
  roadmapsAggregate?: InputMaybe<TopicTagRoadmapsAggregateInput>;
  /** Return TopicTags where all of the related Roadmaps match this filter */
  roadmaps_ALL?: InputMaybe<RoadmapWhere>;
  /** Return TopicTags where none of the related Roadmaps match this filter */
  roadmaps_NONE?: InputMaybe<RoadmapWhere>;
  /** Return TopicTags where one of the related Roadmaps match this filter */
  roadmaps_SINGLE?: InputMaybe<RoadmapWhere>;
  /** Return TopicTags where some of the related Roadmaps match this filter */
  roadmaps_SOME?: InputMaybe<RoadmapWhere>;
  /** @deprecated Use `coursesConnection_SOME` instead. */
  coursesConnection?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** @deprecated Use `coursesConnection_NONE` instead. */
  coursesConnection_NOT?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where all of the related TopicTagCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where none of the related TopicTagCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where one of the related TopicTagCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where some of the related TopicTagCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** @deprecated Use `roadmapsConnection_SOME` instead. */
  roadmapsConnection?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** @deprecated Use `roadmapsConnection_NONE` instead. */
  roadmapsConnection_NOT?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where all of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_ALL?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where none of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_NONE?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where one of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_SINGLE?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where some of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_SOME?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
};

export type UserConnectInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  createdRoadmaps?: InputMaybe<
    Array<UserCreatedRoadmapsConnectOrCreateFieldInput>
  >;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreatedRoadmapsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserCreatedRoadmapsAggregateInput>>;
  OR?: InputMaybe<Array<UserCreatedRoadmapsAggregateInput>>;
  NOT?: InputMaybe<UserCreatedRoadmapsAggregateInput>;
  node?: InputMaybe<UserCreatedRoadmapsNodeAggregationWhereInput>;
};

export type UserCreatedRoadmapsConnectFieldInput = {
  where?: InputMaybe<RoadmapConnectWhere>;
  connect?: InputMaybe<Array<RoadmapConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserCreatedRoadmapsConnectionSort = {
  node?: InputMaybe<RoadmapSort>;
};

export type UserCreatedRoadmapsConnectionWhere = {
  AND?: InputMaybe<Array<UserCreatedRoadmapsConnectionWhere>>;
  OR?: InputMaybe<Array<UserCreatedRoadmapsConnectionWhere>>;
  NOT?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  node?: InputMaybe<RoadmapWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapWhere>;
};

export type UserCreatedRoadmapsConnectOrCreateFieldInput = {
  where: RoadmapConnectOrCreateWhere;
  onCreate: UserCreatedRoadmapsConnectOrCreateFieldInputOnCreate;
};

export type UserCreatedRoadmapsConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
};

export type UserCreatedRoadmapsCreateFieldInput = {
  node: RoadmapCreateInput;
};

export type UserCreatedRoadmapsDeleteFieldInput = {
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  delete?: InputMaybe<RoadmapDeleteInput>;
};

export type UserCreatedRoadmapsDisconnectFieldInput = {
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
};

export type UserCreatedRoadmapsFieldInput = {
  create?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreatedRoadmapsConnectOrCreateFieldInput>
  >;
};

export type UserCreatedRoadmapsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCreatedRoadmapsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserCreatedRoadmapsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCreatedRoadmapsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreatedRoadmapsUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type UserCreatedRoadmapsUpdateFieldInput = {
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  update?: InputMaybe<UserCreatedRoadmapsUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserCreatedRoadmapsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserCreatedRoadmapsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreatedRoadmapsConnectOrCreateFieldInput>
  >;
};

export type UserCreateInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  roles: Array<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  createdRoadmaps?: InputMaybe<UserCreatedRoadmapsFieldInput>;
};

export type UserDeleteInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsDisconnectFieldInput>>;
};

export type UserOnCreateInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  roles: Array<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type UserRelationInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  password?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<Scalars["String"]>>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  roles_POP?: InputMaybe<Scalars["Int"]>;
  roles_PUSH?: InputMaybe<Array<Scalars["String"]>>;
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsUpdateFieldInput>>;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT?: InputMaybe<Scalars["String"]>;
  password_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  password_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  password_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT?: InputMaybe<Array<Scalars["String"]>>;
  roles_INCLUDES?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT_INCLUDES?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT?: InputMaybe<Scalars["String"]>;
  firstName_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  firstName_CONTAINS?: InputMaybe<Scalars["String"]>;
  firstName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  firstName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  firstName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT?: InputMaybe<Scalars["String"]>;
  lastName_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  lastName_CONTAINS?: InputMaybe<Scalars["String"]>;
  lastName_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  lastName_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  /** @deprecated Use `createdRoadmaps_SOME` instead. */
  createdRoadmaps?: InputMaybe<RoadmapWhere>;
  /** @deprecated Use `createdRoadmaps_NONE` instead. */
  createdRoadmaps_NOT?: InputMaybe<RoadmapWhere>;
  createdRoadmapsAggregate?: InputMaybe<UserCreatedRoadmapsAggregateInput>;
  /** Return Users where all of the related Roadmaps match this filter */
  createdRoadmaps_ALL?: InputMaybe<RoadmapWhere>;
  /** Return Users where none of the related Roadmaps match this filter */
  createdRoadmaps_NONE?: InputMaybe<RoadmapWhere>;
  /** Return Users where one of the related Roadmaps match this filter */
  createdRoadmaps_SINGLE?: InputMaybe<RoadmapWhere>;
  /** Return Users where some of the related Roadmaps match this filter */
  createdRoadmaps_SOME?: InputMaybe<RoadmapWhere>;
  /** @deprecated Use `createdRoadmapsConnection_SOME` instead. */
  createdRoadmapsConnection?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** @deprecated Use `createdRoadmapsConnection_NONE` instead. */
  createdRoadmapsConnection_NOT?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where all of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_ALL?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where none of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_NONE?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where one of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_SINGLE?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where some of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_SOME?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  email?: StringAggregateInputNonNullable;
  password?: StringAggregateInputNonNullable;
  firstName?: StringAggregateInputNonNullable;
  lastName?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface CourseAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
  description?: StringAggregateInputNullable;
  url?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class CourseModel {
  public find(args?: {
    where?: CourseWhere;
    fulltext?: CourseFulltext;
    options?: CourseOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Course[]>;
  public create(args: {
    input: CourseCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCoursesMutationResponse>;
  public update(args: {
    where?: CourseWhere;
    update?: CourseUpdateInput;
    connect?: CourseConnectInput;
    disconnect?: CourseDisconnectInput;
    create?: CourseCreateInput;
    connectOrCreate?: CourseConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCoursesMutationResponse>;
  public delete(args: {
    where?: CourseWhere;
    delete?: CourseDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CourseWhere;
    fulltext?: CourseFulltext;
    aggregate: CourseAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CourseAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface CoursePriceAggregateSelectionInput {
  count?: boolean;
  price?: IntAggregateInputNullable;
  currencyCodeISO?: StringAggregateInputNullable;
}

export declare class CoursePriceModel {
  public find(args?: {
    where?: CoursePriceWhere;

    options?: CoursePriceOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CoursePrice[]>;
  public create(args: {
    input: CoursePriceCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCoursePricesMutationResponse>;
  public update(args: {
    where?: CoursePriceWhere;
    update?: CoursePriceUpdateInput;
    connect?: CoursePriceConnectInput;
    disconnect?: CoursePriceDisconnectInput;
    create?: CoursePriceCreateInput;
    connectOrCreate?: CoursePriceConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCoursePricesMutationResponse>;
  public delete(args: {
    where?: CoursePriceWhere;
    delete?: CoursePriceDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CoursePriceWhere;

    aggregate: CoursePriceAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CoursePriceAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface CoursePlatformAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  url?: StringAggregateInputNonNullable;
  logoUrl?: StringAggregateInputNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class CoursePlatformModel {
  public find(args?: {
    where?: CoursePlatformWhere;

    options?: CoursePlatformOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CoursePlatform[]>;
  public create(args: {
    input: CoursePlatformCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCoursePlatformsMutationResponse>;
  public update(args: {
    where?: CoursePlatformWhere;
    update?: CoursePlatformUpdateInput;
    connect?: CoursePlatformConnectInput;
    disconnect?: CoursePlatformDisconnectInput;
    create?: CoursePlatformCreateInput;
    connectOrCreate?: CoursePlatformConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCoursePlatformsMutationResponse>;
  public delete(args: {
    where?: CoursePlatformWhere;
    delete?: CoursePlatformDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CoursePlatformWhere;

    aggregate: CoursePlatformAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CoursePlatformAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface CourseLanguageAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  countryCodeISO?: StringAggregateInputNonNullable;
}

export declare class CourseLanguageModel {
  public find(args?: {
    where?: CourseLanguageWhere;

    options?: CourseLanguageOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CourseLanguage[]>;
  public create(args: {
    input: CourseLanguageCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCourseLanguagesMutationResponse>;
  public update(args: {
    where?: CourseLanguageWhere;
    update?: CourseLanguageUpdateInput;
    connect?: CourseLanguageConnectInput;
    disconnect?: CourseLanguageDisconnectInput;
    create?: CourseLanguageCreateInput;
    connectOrCreate?: CourseLanguageConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCourseLanguagesMutationResponse>;
  public delete(args: {
    where?: CourseLanguageWhere;
    delete?: CourseLanguageDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CourseLanguageWhere;

    aggregate: CourseLanguageAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CourseLanguageAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface RoadmapAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
  description?: StringAggregateInputNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class RoadmapModel {
  public find(args?: {
    where?: RoadmapWhere;

    options?: RoadmapOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Roadmap[]>;
  public create(args: {
    input: RoadmapCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateRoadmapsMutationResponse>;
  public update(args: {
    where?: RoadmapWhere;
    update?: RoadmapUpdateInput;
    connect?: RoadmapConnectInput;
    disconnect?: RoadmapDisconnectInput;
    create?: RoadmapCreateInput;
    connectOrCreate?: RoadmapConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateRoadmapsMutationResponse>;
  public delete(args: {
    where?: RoadmapWhere;
    delete?: RoadmapDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: RoadmapWhere;

    aggregate: RoadmapAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<RoadmapAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface RoadmapNodeAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
  description?: StringAggregateInputNullable;
  type?: StringAggregateInputNonNullable;
  positionX?: FloatAggregateInputNonNullable;
  positionY?: FloatAggregateInputNonNullable;
}

export declare class RoadmapNodeModel {
  public find(args?: {
    where?: RoadmapNodeWhere;

    options?: RoadmapNodeOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<RoadmapNode[]>;
  public create(args: {
    input: RoadmapNodeCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateRoadmapNodesMutationResponse>;
  public update(args: {
    where?: RoadmapNodeWhere;
    update?: RoadmapNodeUpdateInput;
    connect?: RoadmapNodeConnectInput;
    disconnect?: RoadmapNodeDisconnectInput;
    create?: RoadmapNodeCreateInput;
    connectOrCreate?: RoadmapNodeConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateRoadmapNodesMutationResponse>;
  public delete(args: {
    where?: RoadmapNodeWhere;
    delete?: RoadmapNodeDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: RoadmapNodeWhere;

    aggregate: RoadmapNodeAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<RoadmapNodeAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface RoadmapEdgeAggregateSelectionInput {
  count?: boolean;
  id?: StringAggregateInputNonNullable;
  source?: StringAggregateInputNonNullable;
  target?: StringAggregateInputNonNullable;
  targetHandle?: StringAggregateInputNullable;
}

export declare class RoadmapEdgeModel {
  public find(args?: {
    where?: RoadmapEdgeWhere;

    options?: RoadmapEdgeOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<RoadmapEdge[]>;
  public create(args: {
    input: RoadmapEdgeCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateRoadmapEdgesMutationResponse>;
  public update(args: {
    where?: RoadmapEdgeWhere;
    update?: RoadmapEdgeUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateRoadmapEdgesMutationResponse>;
  public delete(args: {
    where?: RoadmapEdgeWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: RoadmapEdgeWhere;

    aggregate: RoadmapEdgeAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<RoadmapEdgeAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface TopicTagAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
}

export declare class TopicTagModel {
  public find(args?: {
    where?: TopicTagWhere;

    options?: TopicTagOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<TopicTag[]>;
  public create(args: {
    input: TopicTagCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateTopicTagsMutationResponse>;
  public update(args: {
    where?: TopicTagWhere;
    update?: TopicTagUpdateInput;
    connect?: TopicTagConnectInput;
    disconnect?: TopicTagDisconnectInput;
    create?: TopicTagCreateInput;
    connectOrCreate?: TopicTagConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateTopicTagsMutationResponse>;
  public delete(args: {
    where?: TopicTagWhere;
    delete?: TopicTagDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: TopicTagWhere;

    aggregate: TopicTagAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<TopicTagAggregateSelection>;
}

export interface ModelMap {
  User: UserModel;
  Course: CourseModel;
  CoursePrice: CoursePriceModel;
  CoursePlatform: CoursePlatformModel;
  CourseLanguage: CourseLanguageModel;
  Roadmap: RoadmapModel;
  RoadmapNode: RoadmapNodeModel;
  RoadmapEdge: RoadmapEdgeModel;
  TopicTag: TopicTagModel;
}
