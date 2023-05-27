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
  languages: Array<Language>;
  languagesAggregate: LanguageAggregateSelection;
  languagesConnection: LanguagesConnection;
  roadmapsFulltextRoadmapInfo: Array<RoadmapFulltextResult>;
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
  userReviews: Array<UserReview>;
  userReviewsAggregate: UserReviewAggregateSelection;
  userReviewsConnection: UserReviewsConnection;
  currentUser?: Maybe<User>;
  userRecommendedCourses?: Maybe<Array<Course>>;
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

export type QueryLanguagesArgs = {
  where?: InputMaybe<LanguageWhere>;
  options?: InputMaybe<LanguageOptions>;
};

export type QueryLanguagesAggregateArgs = {
  where?: InputMaybe<LanguageWhere>;
};

export type QueryLanguagesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<LanguageWhere>;
  sort?: InputMaybe<Array<InputMaybe<LanguageSort>>>;
};

export type QueryRoadmapsFulltextRoadmapInfoArgs = {
  phrase: Scalars["String"];
  where?: InputMaybe<RoadmapFulltextWhere>;
  sort?: InputMaybe<Array<RoadmapFulltextSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
  fulltext?: InputMaybe<RoadmapFulltext>;
};

export type QueryRoadmapsAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
  fulltext?: InputMaybe<RoadmapFulltext>;
};

export type QueryRoadmapsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RoadmapWhere>;
  sort?: InputMaybe<Array<InputMaybe<RoadmapSort>>>;
  fulltext?: InputMaybe<RoadmapFulltext>;
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

export type QueryUserReviewsArgs = {
  where?: InputMaybe<UserReviewWhere>;
  options?: InputMaybe<UserReviewOptions>;
};

export type QueryUserReviewsAggregateArgs = {
  where?: InputMaybe<UserReviewWhere>;
};

export type QueryUserReviewsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<UserReviewWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserReviewSort>>>;
};

export type QueryUserRecommendedCoursesArgs = {
  count?: InputMaybe<Scalars["Int"]>;
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
  createLanguages: CreateLanguagesMutationResponse;
  deleteLanguages: DeleteInfo;
  updateLanguages: UpdateLanguagesMutationResponse;
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
  createUserReviews: CreateUserReviewsMutationResponse;
  deleteUserReviews: DeleteInfo;
  updateUserReviews: UpdateUserReviewsMutationResponse;
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

export type MutationCreateLanguagesArgs = {
  input: Array<LanguageCreateInput>;
};

export type MutationDeleteLanguagesArgs = {
  where?: InputMaybe<LanguageWhere>;
  delete?: InputMaybe<LanguageDeleteInput>;
};

export type MutationUpdateLanguagesArgs = {
  where?: InputMaybe<LanguageWhere>;
  update?: InputMaybe<LanguageUpdateInput>;
  connect?: InputMaybe<LanguageConnectInput>;
  disconnect?: InputMaybe<LanguageDisconnectInput>;
  create?: InputMaybe<LanguageRelationInput>;
  delete?: InputMaybe<LanguageDeleteInput>;
  connectOrCreate?: InputMaybe<LanguageConnectOrCreateInput>;
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

export type MutationCreateUserReviewsArgs = {
  input: Array<UserReviewCreateInput>;
};

export type MutationDeleteUserReviewsArgs = {
  where?: InputMaybe<UserReviewWhere>;
  delete?: InputMaybe<UserReviewDeleteInput>;
};

export type MutationUpdateUserReviewsArgs = {
  where?: InputMaybe<UserReviewWhere>;
  update?: InputMaybe<UserReviewUpdateInput>;
  connect?: InputMaybe<UserReviewConnectInput>;
  disconnect?: InputMaybe<UserReviewDisconnectInput>;
  create?: InputMaybe<UserReviewRelationInput>;
  delete?: InputMaybe<UserReviewDeleteInput>;
  connectOrCreate?: InputMaybe<UserReviewConnectOrCreateInput>;
};

export enum Difficulty {
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
  externalRating?: Maybe<Scalars["Float"]>;
  externalRatingsCount?: Maybe<Scalars["Int"]>;
  bookmarked: Scalars["Boolean"];
  difficulty?: Maybe<Difficulty>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  price?: Maybe<CoursePrice>;
  priceAggregate?: Maybe<CourseCoursePricePriceAggregationSelection>;
  platform?: Maybe<CoursePlatform>;
  platformAggregate?: Maybe<CourseCoursePlatformPlatformAggregationSelection>;
  languages: Array<Language>;
  languagesAggregate?: Maybe<CourseLanguageLanguagesAggregationSelection>;
  tags: Array<TopicTag>;
  tagsAggregate?: Maybe<CourseTopicTagTagsAggregationSelection>;
  bookmarkedBy: Array<User>;
  bookmarkedByAggregate?: Maybe<CourseUserBookmarkedByAggregationSelection>;
  reviews: Array<UserReview>;
  reviewsAggregate?: Maybe<CourseUserReviewReviewsAggregationSelection>;
  priceConnection: CoursePriceConnection;
  platformConnection: CoursePlatformConnection;
  languagesConnection: CourseLanguagesConnection;
  tagsConnection: CourseTagsConnection;
  bookmarkedByConnection: CourseBookmarkedByConnection;
  reviewsConnection: CourseReviewsConnection;
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
  where?: InputMaybe<LanguageWhere>;
  options?: InputMaybe<LanguageOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseLanguagesAggregateArgs = {
  where?: InputMaybe<LanguageWhere>;
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

export type CourseBookmarkedByArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseBookmarkedByAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseReviewsArgs = {
  where?: InputMaybe<UserReviewWhere>;
  options?: InputMaybe<UserReviewOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type CourseReviewsAggregateArgs = {
  where?: InputMaybe<UserReviewWhere>;
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

export type CourseBookmarkedByConnectionArgs = {
  where?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CourseBookmarkedByConnectionSort>>;
};

export type CourseReviewsConnectionArgs = {
  where?: InputMaybe<CourseReviewsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<CourseReviewsConnectionSort>>;
};

export type CourseAggregateSelection = {
  __typename?: "CourseAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CourseBookmarkedByConnection = {
  __typename?: "CourseBookmarkedByConnection";
  edges: Array<CourseBookmarkedByRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CourseBookmarkedByRelationship = {
  __typename?: "CourseBookmarkedByRelationship";
  cursor: Scalars["String"];
  node: User;
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
  price: FloatAggregateSelectionNullable;
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

export type CourseLanguageLanguagesAggregationSelection = {
  __typename?: "CourseLanguageLanguagesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseLanguageLanguagesNodeAggregateSelection>;
};

export type CourseLanguageLanguagesNodeAggregateSelection = {
  __typename?: "CourseLanguageLanguagesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  countryCodeISO: StringAggregateSelectionNonNullable;
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
  node: Language;
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
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
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
  price?: Maybe<Scalars["Float"]>;
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
  price: FloatAggregateSelectionNullable;
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
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
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

export type CourseReviewsConnection = {
  __typename?: "CourseReviewsConnection";
  edges: Array<CourseReviewsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type CourseReviewsRelationship = {
  __typename?: "CourseReviewsRelationship";
  cursor: Scalars["String"];
  node: UserReview;
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

export type CourseUserBookmarkedByAggregationSelection = {
  __typename?: "CourseUserBookmarkedByAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseUserBookmarkedByNodeAggregateSelection>;
};

export type CourseUserBookmarkedByNodeAggregateSelection = {
  __typename?: "CourseUserBookmarkedByNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CourseUserReviewReviewsAggregationSelection = {
  __typename?: "CourseUserReviewReviewsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<CourseUserReviewReviewsNodeAggregateSelection>;
};

export type CourseUserReviewReviewsNodeAggregateSelection = {
  __typename?: "CourseUserReviewReviewsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  rating: FloatAggregateSelectionNullable;
  comment: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
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

export type CreateLanguagesMutationResponse = {
  __typename?: "CreateLanguagesMutationResponse";
  info: CreateInfo;
  languages: Array<Language>;
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

export type CreateUserReviewsMutationResponse = {
  __typename?: "CreateUserReviewsMutationResponse";
  info: CreateInfo;
  userReviews: Array<UserReview>;
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

export type Language = {
  __typename?: "Language";
  name: Scalars["String"];
  countryCodeISO: Scalars["String"];
  courses: Array<Course>;
  coursesAggregate?: Maybe<LanguageCourseCoursesAggregationSelection>;
  coursesConnection: LanguageCoursesConnection;
};

export type LanguageCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type LanguageCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type LanguageCoursesConnectionArgs = {
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<LanguageCoursesConnectionSort>>;
};

export type LanguageAggregateSelection = {
  __typename?: "LanguageAggregateSelection";
  count: Scalars["Int"];
  name: StringAggregateSelectionNonNullable;
  countryCodeISO: StringAggregateSelectionNonNullable;
};

export type LanguageCourseCoursesAggregationSelection = {
  __typename?: "LanguageCourseCoursesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<LanguageCourseCoursesNodeAggregateSelection>;
};

export type LanguageCourseCoursesNodeAggregateSelection = {
  __typename?: "LanguageCourseCoursesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type LanguageCoursesConnection = {
  __typename?: "LanguageCoursesConnection";
  edges: Array<LanguageCoursesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type LanguageCoursesRelationship = {
  __typename?: "LanguageCoursesRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type LanguageEdge = {
  __typename?: "LanguageEdge";
  cursor: Scalars["String"];
  node: Language;
};

export type LanguagesConnection = {
  __typename?: "LanguagesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<LanguageEdge>;
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
  bookmarked: Scalars["Boolean"];
  difficulty?: Maybe<Difficulty>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  node: RoadmapNode;
  nodeAggregate?: Maybe<RoadmapRoadmapNodeNodeAggregationSelection>;
  tags: Array<TopicTag>;
  tagsAggregate?: Maybe<RoadmapTopicTagTagsAggregationSelection>;
  languages: Array<Language>;
  languagesAggregate?: Maybe<RoadmapLanguageLanguagesAggregationSelection>;
  createdBy: User;
  createdByAggregate?: Maybe<RoadmapUserCreatedByAggregationSelection>;
  bookmarkedBy: Array<User>;
  bookmarkedByAggregate?: Maybe<RoadmapUserBookmarkedByAggregationSelection>;
  reviews: Array<UserReview>;
  reviewsAggregate?: Maybe<RoadmapUserReviewReviewsAggregationSelection>;
  nodeConnection: RoadmapNodeConnection;
  tagsConnection: RoadmapTagsConnection;
  languagesConnection: RoadmapLanguagesConnection;
  createdByConnection: RoadmapCreatedByConnection;
  bookmarkedByConnection: RoadmapBookmarkedByConnection;
  reviewsConnection: RoadmapReviewsConnection;
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

export type RoadmapLanguagesArgs = {
  where?: InputMaybe<LanguageWhere>;
  options?: InputMaybe<LanguageOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapLanguagesAggregateArgs = {
  where?: InputMaybe<LanguageWhere>;
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

export type RoadmapBookmarkedByArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapBookmarkedByAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapReviewsArgs = {
  where?: InputMaybe<UserReviewWhere>;
  options?: InputMaybe<UserReviewOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapReviewsAggregateArgs = {
  where?: InputMaybe<UserReviewWhere>;
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

export type RoadmapLanguagesConnectionArgs = {
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapLanguagesConnectionSort>>;
};

export type RoadmapCreatedByConnectionArgs = {
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapCreatedByConnectionSort>>;
};

export type RoadmapBookmarkedByConnectionArgs = {
  where?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapBookmarkedByConnectionSort>>;
};

export type RoadmapReviewsConnectionArgs = {
  where?: InputMaybe<RoadmapReviewsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapReviewsConnectionSort>>;
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

export type RoadmapBookmarkedByConnection = {
  __typename?: "RoadmapBookmarkedByConnection";
  edges: Array<RoadmapBookmarkedByRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapBookmarkedByRelationship = {
  __typename?: "RoadmapBookmarkedByRelationship";
  cursor: Scalars["String"];
  node: User;
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

/** The result of a fulltext search on an index of Roadmap */
export type RoadmapFulltextResult = {
  __typename?: "RoadmapFulltextResult";
  score: Scalars["Float"];
  roadmap: Roadmap;
};

export type RoadmapLanguageLanguagesAggregationSelection = {
  __typename?: "RoadmapLanguageLanguagesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapLanguageLanguagesNodeAggregateSelection>;
};

export type RoadmapLanguageLanguagesNodeAggregateSelection = {
  __typename?: "RoadmapLanguageLanguagesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  countryCodeISO: StringAggregateSelectionNonNullable;
};

export type RoadmapLanguagesConnection = {
  __typename?: "RoadmapLanguagesConnection";
  edges: Array<RoadmapLanguagesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapLanguagesRelationship = {
  __typename?: "RoadmapLanguagesRelationship";
  cursor: Scalars["String"];
  node: Language;
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
  suggestedCourses: Array<Course>;
  suggestedCoursesAggregate?: Maybe<RoadmapNodeCourseSuggestedCoursesAggregationSelection>;
  childNodesConnection: RoadmapNodeChildNodesConnection;
  parentNodesConnection: RoadmapNodeParentNodesConnection;
  roadmapConnection: RoadmapNodeRoadmapConnection;
  suggestedCoursesConnection: RoadmapNodeSuggestedCoursesConnection;
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

export type RoadmapNodeSuggestedCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type RoadmapNodeSuggestedCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
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

export type RoadmapNodeSuggestedCoursesConnectionArgs = {
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectionSort>>;
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

export type RoadmapNodeCourseSuggestedCoursesAggregationSelection = {
  __typename?: "RoadmapNodeCourseSuggestedCoursesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapNodeCourseSuggestedCoursesNodeAggregateSelection>;
};

export type RoadmapNodeCourseSuggestedCoursesNodeAggregateSelection = {
  __typename?: "RoadmapNodeCourseSuggestedCoursesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
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

export type RoadmapNodeSuggestedCoursesConnection = {
  __typename?: "RoadmapNodeSuggestedCoursesConnection";
  edges: Array<RoadmapNodeSuggestedCoursesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapNodeSuggestedCoursesRelationship = {
  __typename?: "RoadmapNodeSuggestedCoursesRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type RoadmapReviewsConnection = {
  __typename?: "RoadmapReviewsConnection";
  edges: Array<RoadmapReviewsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type RoadmapReviewsRelationship = {
  __typename?: "RoadmapReviewsRelationship";
  cursor: Scalars["String"];
  node: UserReview;
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

export type RoadmapUserBookmarkedByAggregationSelection = {
  __typename?: "RoadmapUserBookmarkedByAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapUserBookmarkedByNodeAggregateSelection>;
};

export type RoadmapUserBookmarkedByNodeAggregateSelection = {
  __typename?: "RoadmapUserBookmarkedByNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
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

export type RoadmapUserReviewReviewsAggregationSelection = {
  __typename?: "RoadmapUserReviewReviewsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<RoadmapUserReviewReviewsNodeAggregateSelection>;
};

export type RoadmapUserReviewReviewsNodeAggregateSelection = {
  __typename?: "RoadmapUserReviewReviewsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  rating: FloatAggregateSelectionNullable;
  comment: StringAggregateSelectionNonNullable;
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
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
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

export type UpdateLanguagesMutationResponse = {
  __typename?: "UpdateLanguagesMutationResponse";
  info: UpdateInfo;
  languages: Array<Language>;
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

export type UpdateUserReviewsMutationResponse = {
  __typename?: "UpdateUserReviewsMutationResponse";
  info: UpdateInfo;
  userReviews: Array<UserReview>;
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
  preferableLanguages: Array<Language>;
  preferableLanguagesAggregate?: Maybe<UserLanguagePreferableLanguagesAggregationSelection>;
  preferableTopics: Array<TopicTag>;
  preferableTopicsAggregate?: Maybe<UserTopicTagPreferableTopicsAggregationSelection>;
  bookmarkedCourses: Array<Course>;
  bookmarkedCoursesAggregate?: Maybe<UserCourseBookmarkedCoursesAggregationSelection>;
  bookmarkedRoadmaps: Array<Roadmap>;
  bookmarkedRoadmapsAggregate?: Maybe<UserRoadmapBookmarkedRoadmapsAggregationSelection>;
  createdRoadmapsConnection: UserCreatedRoadmapsConnection;
  preferableLanguagesConnection: UserPreferableLanguagesConnection;
  preferableTopicsConnection: UserPreferableTopicsConnection;
  bookmarkedCoursesConnection: UserBookmarkedCoursesConnection;
  bookmarkedRoadmapsConnection: UserBookmarkedRoadmapsConnection;
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

export type UserPreferableLanguagesArgs = {
  where?: InputMaybe<LanguageWhere>;
  options?: InputMaybe<LanguageOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPreferableLanguagesAggregateArgs = {
  where?: InputMaybe<LanguageWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPreferableTopicsArgs = {
  where?: InputMaybe<TopicTagWhere>;
  options?: InputMaybe<TopicTagOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPreferableTopicsAggregateArgs = {
  where?: InputMaybe<TopicTagWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserBookmarkedCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserBookmarkedCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserBookmarkedRoadmapsArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserBookmarkedRoadmapsAggregateArgs = {
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

export type UserPreferableLanguagesConnectionArgs = {
  where?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserPreferableLanguagesConnectionSort>>;
};

export type UserPreferableTopicsConnectionArgs = {
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserPreferableTopicsConnectionSort>>;
};

export type UserBookmarkedCoursesConnectionArgs = {
  where?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserBookmarkedCoursesConnectionSort>>;
};

export type UserBookmarkedRoadmapsConnectionArgs = {
  where?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserBookmarkedRoadmapsConnectionSort>>;
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

export type UserBookmarkedCoursesConnection = {
  __typename?: "UserBookmarkedCoursesConnection";
  edges: Array<UserBookmarkedCoursesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserBookmarkedCoursesRelationship = {
  __typename?: "UserBookmarkedCoursesRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type UserBookmarkedRoadmapsConnection = {
  __typename?: "UserBookmarkedRoadmapsConnection";
  edges: Array<UserBookmarkedRoadmapsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserBookmarkedRoadmapsRelationship = {
  __typename?: "UserBookmarkedRoadmapsRelationship";
  cursor: Scalars["String"];
  node: Roadmap;
};

export type UserCourseBookmarkedCoursesAggregationSelection = {
  __typename?: "UserCourseBookmarkedCoursesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserCourseBookmarkedCoursesNodeAggregateSelection>;
};

export type UserCourseBookmarkedCoursesNodeAggregateSelection = {
  __typename?: "UserCourseBookmarkedCoursesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
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

export type UserLanguagePreferableLanguagesAggregationSelection = {
  __typename?: "UserLanguagePreferableLanguagesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserLanguagePreferableLanguagesNodeAggregateSelection>;
};

export type UserLanguagePreferableLanguagesNodeAggregateSelection = {
  __typename?: "UserLanguagePreferableLanguagesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  countryCodeISO: StringAggregateSelectionNonNullable;
};

export type UserPreferableLanguagesConnection = {
  __typename?: "UserPreferableLanguagesConnection";
  edges: Array<UserPreferableLanguagesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserPreferableLanguagesRelationship = {
  __typename?: "UserPreferableLanguagesRelationship";
  cursor: Scalars["String"];
  node: Language;
};

export type UserPreferableTopicsConnection = {
  __typename?: "UserPreferableTopicsConnection";
  edges: Array<UserPreferableTopicsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserPreferableTopicsRelationship = {
  __typename?: "UserPreferableTopicsRelationship";
  cursor: Scalars["String"];
  node: TopicTag;
};

export type UserReview = {
  __typename?: "UserReview";
  id: Scalars["ID"];
  rating?: Maybe<Scalars["Float"]>;
  comment: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  course?: Maybe<Course>;
  courseAggregate?: Maybe<UserReviewCourseCourseAggregationSelection>;
  roadmap?: Maybe<Roadmap>;
  roadmapAggregate?: Maybe<UserReviewRoadmapRoadmapAggregationSelection>;
  user: User;
  userAggregate?: Maybe<UserReviewUserUserAggregationSelection>;
  courseConnection: UserReviewCourseConnection;
  roadmapConnection: UserReviewRoadmapConnection;
  userConnection: UserReviewUserConnection;
};

export type UserReviewCourseArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserReviewCourseAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserReviewRoadmapArgs = {
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserReviewRoadmapAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserReviewUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserReviewUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserReviewCourseConnectionArgs = {
  where?: InputMaybe<UserReviewCourseConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserReviewCourseConnectionSort>>;
};

export type UserReviewRoadmapConnectionArgs = {
  where?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserReviewRoadmapConnectionSort>>;
};

export type UserReviewUserConnectionArgs = {
  where?: InputMaybe<UserReviewUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserReviewUserConnectionSort>>;
};

export type UserReviewAggregateSelection = {
  __typename?: "UserReviewAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  rating: FloatAggregateSelectionNullable;
  comment: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserReviewCourseConnection = {
  __typename?: "UserReviewCourseConnection";
  edges: Array<UserReviewCourseRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserReviewCourseCourseAggregationSelection = {
  __typename?: "UserReviewCourseCourseAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserReviewCourseCourseNodeAggregateSelection>;
};

export type UserReviewCourseCourseNodeAggregateSelection = {
  __typename?: "UserReviewCourseCourseNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserReviewCourseRelationship = {
  __typename?: "UserReviewCourseRelationship";
  cursor: Scalars["String"];
  node: Course;
};

export type UserReviewEdge = {
  __typename?: "UserReviewEdge";
  cursor: Scalars["String"];
  node: UserReview;
};

export type UserReviewRoadmapConnection = {
  __typename?: "UserReviewRoadmapConnection";
  edges: Array<UserReviewRoadmapRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserReviewRoadmapRelationship = {
  __typename?: "UserReviewRoadmapRelationship";
  cursor: Scalars["String"];
  node: Roadmap;
};

export type UserReviewRoadmapRoadmapAggregationSelection = {
  __typename?: "UserReviewRoadmapRoadmapAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserReviewRoadmapRoadmapNodeAggregateSelection>;
};

export type UserReviewRoadmapRoadmapNodeAggregateSelection = {
  __typename?: "UserReviewRoadmapRoadmapNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserReviewsConnection = {
  __typename?: "UserReviewsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserReviewEdge>;
};

export type UserReviewUserConnection = {
  __typename?: "UserReviewUserConnection";
  edges: Array<UserReviewUserRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserReviewUserRelationship = {
  __typename?: "UserReviewUserRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type UserReviewUserUserAggregationSelection = {
  __typename?: "UserReviewUserUserAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserReviewUserUserNodeAggregateSelection>;
};

export type UserReviewUserUserNodeAggregateSelection = {
  __typename?: "UserReviewUserUserNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserRoadmapBookmarkedRoadmapsAggregationSelection = {
  __typename?: "UserRoadmapBookmarkedRoadmapsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserRoadmapBookmarkedRoadmapsNodeAggregateSelection>;
};

export type UserRoadmapBookmarkedRoadmapsNodeAggregateSelection = {
  __typename?: "UserRoadmapBookmarkedRoadmapsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
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

export type UserTopicTagPreferableTopicsAggregationSelection = {
  __typename?: "UserTopicTagPreferableTopicsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserTopicTagPreferableTopicsNodeAggregateSelection>;
};

export type UserTopicTagPreferableTopicsNodeAggregateSelection = {
  __typename?: "UserTopicTagPreferableTopicsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CourseBookmarkedByAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CourseBookmarkedByAggregateInput>>;
  OR?: InputMaybe<Array<CourseBookmarkedByAggregateInput>>;
  NOT?: InputMaybe<CourseBookmarkedByAggregateInput>;
  node?: InputMaybe<CourseBookmarkedByNodeAggregationWhereInput>;
};

export type CourseBookmarkedByConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CourseBookmarkedByConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CourseBookmarkedByConnectionWhere = {
  AND?: InputMaybe<Array<CourseBookmarkedByConnectionWhere>>;
  OR?: InputMaybe<Array<CourseBookmarkedByConnectionWhere>>;
  NOT?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type CourseBookmarkedByConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: CourseBookmarkedByConnectOrCreateFieldInputOnCreate;
};

export type CourseBookmarkedByConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CourseBookmarkedByCreateFieldInput = {
  node: UserCreateInput;
};

export type CourseBookmarkedByDeleteFieldInput = {
  where?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type CourseBookmarkedByDisconnectFieldInput = {
  where?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type CourseBookmarkedByFieldInput = {
  create?: InputMaybe<Array<CourseBookmarkedByCreateFieldInput>>;
  connect?: InputMaybe<Array<CourseBookmarkedByConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<CourseBookmarkedByConnectOrCreateFieldInput>
  >;
};

export type CourseBookmarkedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseBookmarkedByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CourseBookmarkedByNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseBookmarkedByNodeAggregationWhereInput>;
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

export type CourseBookmarkedByUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CourseBookmarkedByUpdateFieldInput = {
  where?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  update?: InputMaybe<CourseBookmarkedByUpdateConnectionInput>;
  connect?: InputMaybe<Array<CourseBookmarkedByConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CourseBookmarkedByDisconnectFieldInput>>;
  create?: InputMaybe<Array<CourseBookmarkedByCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseBookmarkedByDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<CourseBookmarkedByConnectOrCreateFieldInput>
  >;
};

export type CourseConnectInput = {
  price?: InputMaybe<CoursePriceConnectFieldInput>;
  platform?: InputMaybe<CoursePlatformConnectFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
  bookmarkedBy?: InputMaybe<Array<CourseBookmarkedByConnectFieldInput>>;
  reviews?: InputMaybe<Array<CourseReviewsConnectFieldInput>>;
};

export type CourseConnectOrCreateInput = {
  platform?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
  bookmarkedBy?: InputMaybe<Array<CourseBookmarkedByConnectOrCreateFieldInput>>;
  reviews?: InputMaybe<Array<CourseReviewsConnectOrCreateFieldInput>>;
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
  externalRating?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount?: InputMaybe<Scalars["Int"]>;
  difficulty?: InputMaybe<Difficulty>;
  price?: InputMaybe<CoursePriceFieldInput>;
  platform?: InputMaybe<CoursePlatformFieldInput>;
  languages?: InputMaybe<CourseLanguagesFieldInput>;
  tags?: InputMaybe<CourseTagsFieldInput>;
  bookmarkedBy?: InputMaybe<CourseBookmarkedByFieldInput>;
  reviews?: InputMaybe<CourseReviewsFieldInput>;
};

export type CourseDeleteInput = {
  price?: InputMaybe<CoursePriceDeleteFieldInput>;
  platform?: InputMaybe<CoursePlatformDeleteFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesDeleteFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsDeleteFieldInput>>;
  bookmarkedBy?: InputMaybe<Array<CourseBookmarkedByDeleteFieldInput>>;
  reviews?: InputMaybe<Array<CourseReviewsDeleteFieldInput>>;
};

export type CourseDisconnectInput = {
  price?: InputMaybe<CoursePriceDisconnectFieldInput>;
  platform?: InputMaybe<CoursePlatformDisconnectFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesDisconnectFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsDisconnectFieldInput>>;
  bookmarkedBy?: InputMaybe<Array<CourseBookmarkedByDisconnectFieldInput>>;
  reviews?: InputMaybe<Array<CourseReviewsDisconnectFieldInput>>;
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
  where?: InputMaybe<LanguageConnectWhere>;
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CourseLanguagesConnectionSort = {
  node?: InputMaybe<LanguageSort>;
};

export type CourseLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  OR?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  NOT?: InputMaybe<CourseLanguagesConnectionWhere>;
  node?: InputMaybe<LanguageWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LanguageWhere>;
};

export type CourseLanguagesConnectOrCreateFieldInput = {
  where: LanguageConnectOrCreateWhere;
  onCreate: CourseLanguagesConnectOrCreateFieldInputOnCreate;
};

export type CourseLanguagesConnectOrCreateFieldInputOnCreate = {
  node: LanguageOnCreateInput;
};

export type CourseLanguagesCreateFieldInput = {
  node: LanguageCreateInput;
};

export type CourseLanguagesDeleteFieldInput = {
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
  delete?: InputMaybe<LanguageDeleteInput>;
};

export type CourseLanguagesDisconnectFieldInput = {
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
  disconnect?: InputMaybe<LanguageDisconnectInput>;
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

export type CourseLanguagesUpdateConnectionInput = {
  node?: InputMaybe<LanguageUpdateInput>;
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

export type CourseOnCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  url: Scalars["String"];
  externalRating?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount?: InputMaybe<Scalars["Int"]>;
  difficulty?: InputMaybe<Difficulty>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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
  price?: InputMaybe<Scalars["Float"]>;
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
  price_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  price_MIN_GT?: InputMaybe<Scalars["Float"]>;
  price_MAX_GT?: InputMaybe<Scalars["Float"]>;
  price_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_GTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  price_MIN_LT?: InputMaybe<Scalars["Float"]>;
  price_MAX_LT?: InputMaybe<Scalars["Float"]>;
  price_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_LTE?: InputMaybe<Scalars["Float"]>;
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
  price?: InputMaybe<Scalars["Float"]>;
  currencyCodeISO?: InputMaybe<Scalars["String"]>;
  price_ADD?: InputMaybe<Scalars["Float"]>;
  price_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  price_DIVIDE?: InputMaybe<Scalars["Float"]>;
  price_MULTIPLY?: InputMaybe<Scalars["Float"]>;
  course?: InputMaybe<CoursePriceCourseUpdateFieldInput>;
};

export type CoursePriceWhere = {
  OR?: InputMaybe<Array<CoursePriceWhere>>;
  AND?: InputMaybe<Array<CoursePriceWhere>>;
  NOT?: InputMaybe<CoursePriceWhere>;
  price?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  price_NOT?: InputMaybe<Scalars["Float"]>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  price_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
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
  bookmarkedBy?: InputMaybe<Array<CourseBookmarkedByCreateFieldInput>>;
  reviews?: InputMaybe<Array<CourseReviewsCreateFieldInput>>;
};

export type CourseReviewsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<CourseReviewsAggregateInput>>;
  OR?: InputMaybe<Array<CourseReviewsAggregateInput>>;
  NOT?: InputMaybe<CourseReviewsAggregateInput>;
  node?: InputMaybe<CourseReviewsNodeAggregationWhereInput>;
};

export type CourseReviewsConnectFieldInput = {
  where?: InputMaybe<UserReviewConnectWhere>;
  connect?: InputMaybe<Array<UserReviewConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type CourseReviewsConnectionSort = {
  node?: InputMaybe<UserReviewSort>;
};

export type CourseReviewsConnectionWhere = {
  AND?: InputMaybe<Array<CourseReviewsConnectionWhere>>;
  OR?: InputMaybe<Array<CourseReviewsConnectionWhere>>;
  NOT?: InputMaybe<CourseReviewsConnectionWhere>;
  node?: InputMaybe<UserReviewWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserReviewWhere>;
};

export type CourseReviewsConnectOrCreateFieldInput = {
  where: UserReviewConnectOrCreateWhere;
  onCreate: CourseReviewsConnectOrCreateFieldInputOnCreate;
};

export type CourseReviewsConnectOrCreateFieldInputOnCreate = {
  node: UserReviewOnCreateInput;
};

export type CourseReviewsCreateFieldInput = {
  node: UserReviewCreateInput;
};

export type CourseReviewsDeleteFieldInput = {
  where?: InputMaybe<CourseReviewsConnectionWhere>;
  delete?: InputMaybe<UserReviewDeleteInput>;
};

export type CourseReviewsDisconnectFieldInput = {
  where?: InputMaybe<CourseReviewsConnectionWhere>;
  disconnect?: InputMaybe<UserReviewDisconnectInput>;
};

export type CourseReviewsFieldInput = {
  create?: InputMaybe<Array<CourseReviewsCreateFieldInput>>;
  connect?: InputMaybe<Array<CourseReviewsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseReviewsConnectOrCreateFieldInput>>;
};

export type CourseReviewsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseReviewsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CourseReviewsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseReviewsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GT?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  rating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  rating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  rating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GTE?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  rating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  rating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  rating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LT?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  rating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  rating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  rating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LTE?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  rating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  rating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  rating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
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

export type CourseReviewsUpdateConnectionInput = {
  node?: InputMaybe<UserReviewUpdateInput>;
};

export type CourseReviewsUpdateFieldInput = {
  where?: InputMaybe<CourseReviewsConnectionWhere>;
  update?: InputMaybe<CourseReviewsUpdateConnectionInput>;
  connect?: InputMaybe<Array<CourseReviewsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CourseReviewsDisconnectFieldInput>>;
  create?: InputMaybe<Array<CourseReviewsCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseReviewsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseReviewsConnectOrCreateFieldInput>>;
};

/** Fields to sort Courses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseSort object. */
export type CourseSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  externalRating?: InputMaybe<SortDirection>;
  externalRatingsCount?: InputMaybe<SortDirection>;
  difficulty?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  bookmarked?: InputMaybe<SortDirection>;
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
  externalRating?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount?: InputMaybe<Scalars["Int"]>;
  difficulty?: InputMaybe<Difficulty>;
  externalRating_ADD?: InputMaybe<Scalars["Float"]>;
  externalRating_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  externalRating_DIVIDE?: InputMaybe<Scalars["Float"]>;
  externalRating_MULTIPLY?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_INCREMENT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_DECREMENT?: InputMaybe<Scalars["Int"]>;
  price?: InputMaybe<CoursePriceUpdateFieldInput>;
  platform?: InputMaybe<CoursePlatformUpdateFieldInput>;
  languages?: InputMaybe<Array<CourseLanguagesUpdateFieldInput>>;
  tags?: InputMaybe<Array<CourseTagsUpdateFieldInput>>;
  bookmarkedBy?: InputMaybe<Array<CourseBookmarkedByUpdateFieldInput>>;
  reviews?: InputMaybe<Array<CourseReviewsUpdateFieldInput>>;
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
  externalRating?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalRating_NOT?: InputMaybe<Scalars["Float"]>;
  externalRating_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalRating_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalRatingsCount_NOT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  externalRatingsCount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
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
  difficulty?: InputMaybe<Difficulty>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT?: InputMaybe<Difficulty>;
  difficulty_IN?: InputMaybe<Array<InputMaybe<Difficulty>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT_IN?: InputMaybe<Array<InputMaybe<Difficulty>>>;
  price?: InputMaybe<CoursePriceWhere>;
  price_NOT?: InputMaybe<CoursePriceWhere>;
  priceAggregate?: InputMaybe<CoursePriceAggregateInput>;
  platform?: InputMaybe<CoursePlatformWhere>;
  platform_NOT?: InputMaybe<CoursePlatformWhere>;
  platformAggregate?: InputMaybe<CoursePlatformAggregateInput>;
  /** @deprecated Use `languages_SOME` instead. */
  languages?: InputMaybe<LanguageWhere>;
  /** @deprecated Use `languages_NONE` instead. */
  languages_NOT?: InputMaybe<LanguageWhere>;
  languagesAggregate?: InputMaybe<CourseLanguagesAggregateInput>;
  /** Return Courses where all of the related Languages match this filter */
  languages_ALL?: InputMaybe<LanguageWhere>;
  /** Return Courses where none of the related Languages match this filter */
  languages_NONE?: InputMaybe<LanguageWhere>;
  /** Return Courses where one of the related Languages match this filter */
  languages_SINGLE?: InputMaybe<LanguageWhere>;
  /** Return Courses where some of the related Languages match this filter */
  languages_SOME?: InputMaybe<LanguageWhere>;
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
  /** @deprecated Use `bookmarkedBy_SOME` instead. */
  bookmarkedBy?: InputMaybe<UserWhere>;
  /** @deprecated Use `bookmarkedBy_NONE` instead. */
  bookmarkedBy_NOT?: InputMaybe<UserWhere>;
  bookmarkedByAggregate?: InputMaybe<CourseBookmarkedByAggregateInput>;
  /** Return Courses where all of the related Users match this filter */
  bookmarkedBy_ALL?: InputMaybe<UserWhere>;
  /** Return Courses where none of the related Users match this filter */
  bookmarkedBy_NONE?: InputMaybe<UserWhere>;
  /** Return Courses where one of the related Users match this filter */
  bookmarkedBy_SINGLE?: InputMaybe<UserWhere>;
  /** Return Courses where some of the related Users match this filter */
  bookmarkedBy_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `reviews_SOME` instead. */
  reviews?: InputMaybe<UserReviewWhere>;
  /** @deprecated Use `reviews_NONE` instead. */
  reviews_NOT?: InputMaybe<UserReviewWhere>;
  reviewsAggregate?: InputMaybe<CourseReviewsAggregateInput>;
  /** Return Courses where all of the related UserReviews match this filter */
  reviews_ALL?: InputMaybe<UserReviewWhere>;
  /** Return Courses where none of the related UserReviews match this filter */
  reviews_NONE?: InputMaybe<UserReviewWhere>;
  /** Return Courses where one of the related UserReviews match this filter */
  reviews_SINGLE?: InputMaybe<UserReviewWhere>;
  /** Return Courses where some of the related UserReviews match this filter */
  reviews_SOME?: InputMaybe<UserReviewWhere>;
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
  /** @deprecated Use `bookmarkedByConnection_SOME` instead. */
  bookmarkedByConnection?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  /** @deprecated Use `bookmarkedByConnection_NONE` instead. */
  bookmarkedByConnection_NOT?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  /** Return Courses where all of the related CourseBookmarkedByConnections match this filter */
  bookmarkedByConnection_ALL?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  /** Return Courses where none of the related CourseBookmarkedByConnections match this filter */
  bookmarkedByConnection_NONE?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  /** Return Courses where one of the related CourseBookmarkedByConnections match this filter */
  bookmarkedByConnection_SINGLE?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  /** Return Courses where some of the related CourseBookmarkedByConnections match this filter */
  bookmarkedByConnection_SOME?: InputMaybe<CourseBookmarkedByConnectionWhere>;
  /** @deprecated Use `reviewsConnection_SOME` instead. */
  reviewsConnection?: InputMaybe<CourseReviewsConnectionWhere>;
  /** @deprecated Use `reviewsConnection_NONE` instead. */
  reviewsConnection_NOT?: InputMaybe<CourseReviewsConnectionWhere>;
  /** Return Courses where all of the related CourseReviewsConnections match this filter */
  reviewsConnection_ALL?: InputMaybe<CourseReviewsConnectionWhere>;
  /** Return Courses where none of the related CourseReviewsConnections match this filter */
  reviewsConnection_NONE?: InputMaybe<CourseReviewsConnectionWhere>;
  /** Return Courses where one of the related CourseReviewsConnections match this filter */
  reviewsConnection_SINGLE?: InputMaybe<CourseReviewsConnectionWhere>;
  /** Return Courses where some of the related CourseReviewsConnections match this filter */
  reviewsConnection_SOME?: InputMaybe<CourseReviewsConnectionWhere>;
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

export type LanguageConnectInput = {
  courses?: InputMaybe<Array<LanguageCoursesConnectFieldInput>>;
};

export type LanguageConnectOrCreateInput = {
  courses?: InputMaybe<Array<LanguageCoursesConnectOrCreateFieldInput>>;
};

export type LanguageConnectOrCreateWhere = {
  node: LanguageUniqueWhere;
};

export type LanguageConnectWhere = {
  node: LanguageWhere;
};

export type LanguageCoursesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<LanguageCoursesAggregateInput>>;
  OR?: InputMaybe<Array<LanguageCoursesAggregateInput>>;
  NOT?: InputMaybe<LanguageCoursesAggregateInput>;
  node?: InputMaybe<LanguageCoursesNodeAggregationWhereInput>;
};

export type LanguageCoursesConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type LanguageCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type LanguageCoursesConnectionWhere = {
  AND?: InputMaybe<Array<LanguageCoursesConnectionWhere>>;
  OR?: InputMaybe<Array<LanguageCoursesConnectionWhere>>;
  NOT?: InputMaybe<LanguageCoursesConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type LanguageCoursesConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: LanguageCoursesConnectOrCreateFieldInputOnCreate;
};

export type LanguageCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type LanguageCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type LanguageCoursesDeleteFieldInput = {
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type LanguageCoursesDisconnectFieldInput = {
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type LanguageCoursesFieldInput = {
  create?: InputMaybe<Array<LanguageCoursesCreateFieldInput>>;
  connect?: InputMaybe<Array<LanguageCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LanguageCoursesConnectOrCreateFieldInput>>;
};

export type LanguageCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LanguageCoursesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LanguageCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LanguageCoursesNodeAggregationWhereInput>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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

export type LanguageCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type LanguageCoursesUpdateFieldInput = {
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
  update?: InputMaybe<LanguageCoursesUpdateConnectionInput>;
  connect?: InputMaybe<Array<LanguageCoursesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LanguageCoursesDisconnectFieldInput>>;
  create?: InputMaybe<Array<LanguageCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<LanguageCoursesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LanguageCoursesConnectOrCreateFieldInput>>;
};

export type LanguageCreateInput = {
  name: Scalars["String"];
  countryCodeISO: Scalars["String"];
  courses?: InputMaybe<LanguageCoursesFieldInput>;
};

export type LanguageDeleteInput = {
  courses?: InputMaybe<Array<LanguageCoursesDeleteFieldInput>>;
};

export type LanguageDisconnectInput = {
  courses?: InputMaybe<Array<LanguageCoursesDisconnectFieldInput>>;
};

export type LanguageOnCreateInput = {
  name: Scalars["String"];
  countryCodeISO: Scalars["String"];
};

export type LanguageOptions = {
  /** Specify one or more LanguageSort objects to sort Languages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LanguageSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type LanguageRelationInput = {
  courses?: InputMaybe<Array<LanguageCoursesCreateFieldInput>>;
};

/** Fields to sort Languages by. The order in which sorts are applied is not guaranteed when specifying many fields in one LanguageSort object. */
export type LanguageSort = {
  name?: InputMaybe<SortDirection>;
  countryCodeISO?: InputMaybe<SortDirection>;
};

export type LanguageUniqueWhere = {
  name?: InputMaybe<Scalars["String"]>;
  countryCodeISO?: InputMaybe<Scalars["String"]>;
};

export type LanguageUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  countryCodeISO?: InputMaybe<Scalars["String"]>;
  courses?: InputMaybe<Array<LanguageCoursesUpdateFieldInput>>;
};

export type LanguageWhere = {
  OR?: InputMaybe<Array<LanguageWhere>>;
  AND?: InputMaybe<Array<LanguageWhere>>;
  NOT?: InputMaybe<LanguageWhere>;
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
  coursesAggregate?: InputMaybe<LanguageCoursesAggregateInput>;
  /** Return Languages where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return Languages where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return Languages where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return Languages where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  /** @deprecated Use `coursesConnection_SOME` instead. */
  coursesConnection?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** @deprecated Use `coursesConnection_NONE` instead. */
  coursesConnection_NOT?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where all of the related LanguageCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where none of the related LanguageCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where one of the related LanguageCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where some of the related LanguageCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<LanguageCoursesConnectionWhere>;
};

export type RoadmapBookmarkedByAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapBookmarkedByAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapBookmarkedByAggregateInput>>;
  NOT?: InputMaybe<RoadmapBookmarkedByAggregateInput>;
  node?: InputMaybe<RoadmapBookmarkedByNodeAggregationWhereInput>;
};

export type RoadmapBookmarkedByConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapBookmarkedByConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type RoadmapBookmarkedByConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapBookmarkedByConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapBookmarkedByConnectionWhere>>;
  NOT?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type RoadmapBookmarkedByConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: RoadmapBookmarkedByConnectOrCreateFieldInputOnCreate;
};

export type RoadmapBookmarkedByConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type RoadmapBookmarkedByCreateFieldInput = {
  node: UserCreateInput;
};

export type RoadmapBookmarkedByDeleteFieldInput = {
  where?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type RoadmapBookmarkedByDisconnectFieldInput = {
  where?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type RoadmapBookmarkedByFieldInput = {
  create?: InputMaybe<Array<RoadmapBookmarkedByCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapBookmarkedByConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapBookmarkedByConnectOrCreateFieldInput>
  >;
};

export type RoadmapBookmarkedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapBookmarkedByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapBookmarkedByNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapBookmarkedByNodeAggregationWhereInput>;
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

export type RoadmapBookmarkedByUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type RoadmapBookmarkedByUpdateFieldInput = {
  where?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  update?: InputMaybe<RoadmapBookmarkedByUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapBookmarkedByConnectFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapBookmarkedByDisconnectFieldInput>>;
  create?: InputMaybe<Array<RoadmapBookmarkedByCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapBookmarkedByDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapBookmarkedByConnectOrCreateFieldInput>
  >;
};

export type RoadmapConnectInput = {
  node?: InputMaybe<RoadmapNodeConnectFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
  languages?: InputMaybe<Array<RoadmapLanguagesConnectFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
  bookmarkedBy?: InputMaybe<Array<RoadmapBookmarkedByConnectFieldInput>>;
  reviews?: InputMaybe<Array<RoadmapReviewsConnectFieldInput>>;
};

export type RoadmapConnectOrCreateInput = {
  node?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
  languages?: InputMaybe<Array<RoadmapLanguagesConnectOrCreateFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
  bookmarkedBy?: InputMaybe<
    Array<RoadmapBookmarkedByConnectOrCreateFieldInput>
  >;
  reviews?: InputMaybe<Array<RoadmapReviewsConnectOrCreateFieldInput>>;
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
  difficulty?: InputMaybe<Difficulty>;
  node?: InputMaybe<RoadmapNodeFieldInput>;
  tags?: InputMaybe<RoadmapTagsFieldInput>;
  languages?: InputMaybe<RoadmapLanguagesFieldInput>;
  createdBy?: InputMaybe<RoadmapCreatedByFieldInput>;
  bookmarkedBy?: InputMaybe<RoadmapBookmarkedByFieldInput>;
  reviews?: InputMaybe<RoadmapReviewsFieldInput>;
};

export type RoadmapDeleteInput = {
  node?: InputMaybe<RoadmapNodeDeleteFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsDeleteFieldInput>>;
  languages?: InputMaybe<Array<RoadmapLanguagesDeleteFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByDeleteFieldInput>;
  bookmarkedBy?: InputMaybe<Array<RoadmapBookmarkedByDeleteFieldInput>>;
  reviews?: InputMaybe<Array<RoadmapReviewsDeleteFieldInput>>;
};

export type RoadmapDisconnectInput = {
  node?: InputMaybe<RoadmapNodeDisconnectFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsDisconnectFieldInput>>;
  languages?: InputMaybe<Array<RoadmapLanguagesDisconnectFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByDisconnectFieldInput>;
  bookmarkedBy?: InputMaybe<Array<RoadmapBookmarkedByDisconnectFieldInput>>;
  reviews?: InputMaybe<Array<RoadmapReviewsDisconnectFieldInput>>;
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

export type RoadmapFulltext = {
  RoadmapInfo?: InputMaybe<RoadmapRoadmapInfoFulltext>;
};

/** The input for sorting a fulltext query on an index of Roadmap */
export type RoadmapFulltextSort = {
  score?: InputMaybe<SortDirection>;
  roadmap?: InputMaybe<RoadmapSort>;
};

/** The input for filtering a fulltext query on an index of Roadmap */
export type RoadmapFulltextWhere = {
  score?: InputMaybe<FloatWhere>;
  roadmap?: InputMaybe<RoadmapWhere>;
};

export type RoadmapLanguagesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapLanguagesAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapLanguagesAggregateInput>>;
  NOT?: InputMaybe<RoadmapLanguagesAggregateInput>;
  node?: InputMaybe<RoadmapLanguagesNodeAggregationWhereInput>;
};

export type RoadmapLanguagesConnectFieldInput = {
  where?: InputMaybe<LanguageConnectWhere>;
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapLanguagesConnectionSort = {
  node?: InputMaybe<LanguageSort>;
};

export type RoadmapLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapLanguagesConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapLanguagesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  node?: InputMaybe<LanguageWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LanguageWhere>;
};

export type RoadmapLanguagesConnectOrCreateFieldInput = {
  where: LanguageConnectOrCreateWhere;
  onCreate: RoadmapLanguagesConnectOrCreateFieldInputOnCreate;
};

export type RoadmapLanguagesConnectOrCreateFieldInputOnCreate = {
  node: LanguageOnCreateInput;
};

export type RoadmapLanguagesCreateFieldInput = {
  node: LanguageCreateInput;
};

export type RoadmapLanguagesDeleteFieldInput = {
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  delete?: InputMaybe<LanguageDeleteInput>;
};

export type RoadmapLanguagesDisconnectFieldInput = {
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  disconnect?: InputMaybe<LanguageDisconnectInput>;
};

export type RoadmapLanguagesFieldInput = {
  create?: InputMaybe<Array<RoadmapLanguagesCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapLanguagesConnectOrCreateFieldInput>
  >;
};

export type RoadmapLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapLanguagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapLanguagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapLanguagesNodeAggregationWhereInput>;
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

export type RoadmapLanguagesUpdateConnectionInput = {
  node?: InputMaybe<LanguageUpdateInput>;
};

export type RoadmapLanguagesUpdateFieldInput = {
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  update?: InputMaybe<RoadmapLanguagesUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapLanguagesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapLanguagesDisconnectFieldInput>>;
  create?: InputMaybe<Array<RoadmapLanguagesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapLanguagesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapLanguagesConnectOrCreateFieldInput>
  >;
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
  suggestedCourses?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesConnectFieldInput>
  >;
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
  suggestedCourses?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput>
  >;
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
  suggestedCourses?: InputMaybe<RoadmapNodeSuggestedCoursesFieldInput>;
};

export type RoadmapNodeDeleteFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
};

export type RoadmapNodeDeleteInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesDeleteFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesDeleteFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapDeleteFieldInput>;
  suggestedCourses?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesDeleteFieldInput>
  >;
};

export type RoadmapNodeDisconnectFieldInput = {
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
};

export type RoadmapNodeDisconnectInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesDisconnectFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesDisconnectFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapDisconnectFieldInput>;
  suggestedCourses?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesDisconnectFieldInput>
  >;
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
  suggestedCourses?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesCreateFieldInput>
  >;
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

export type RoadmapNodeSuggestedCoursesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapNodeSuggestedCoursesAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapNodeSuggestedCoursesAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeSuggestedCoursesAggregateInput>;
  node?: InputMaybe<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>;
};

export type RoadmapNodeSuggestedCoursesConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapNodeSuggestedCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type RoadmapNodeSuggestedCoursesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: RoadmapNodeSuggestedCoursesConnectOrCreateFieldInputOnCreate;
};

export type RoadmapNodeSuggestedCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type RoadmapNodeSuggestedCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type RoadmapNodeSuggestedCoursesDeleteFieldInput = {
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type RoadmapNodeSuggestedCoursesDisconnectFieldInput = {
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type RoadmapNodeSuggestedCoursesFieldInput = {
  create?: InputMaybe<Array<RoadmapNodeSuggestedCoursesCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput>
  >;
};

export type RoadmapNodeSuggestedCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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

export type RoadmapNodeSuggestedCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type RoadmapNodeSuggestedCoursesUpdateFieldInput = {
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  update?: InputMaybe<RoadmapNodeSuggestedCoursesUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<RoadmapNodeSuggestedCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapNodeSuggestedCoursesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput>
  >;
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
  suggestedCourses?: InputMaybe<
    Array<RoadmapNodeSuggestedCoursesUpdateFieldInput>
  >;
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
  /** @deprecated Use `suggestedCourses_SOME` instead. */
  suggestedCourses?: InputMaybe<CourseWhere>;
  /** @deprecated Use `suggestedCourses_NONE` instead. */
  suggestedCourses_NOT?: InputMaybe<CourseWhere>;
  suggestedCoursesAggregate?: InputMaybe<RoadmapNodeSuggestedCoursesAggregateInput>;
  /** Return RoadmapNodes where all of the related Courses match this filter */
  suggestedCourses_ALL?: InputMaybe<CourseWhere>;
  /** Return RoadmapNodes where none of the related Courses match this filter */
  suggestedCourses_NONE?: InputMaybe<CourseWhere>;
  /** Return RoadmapNodes where one of the related Courses match this filter */
  suggestedCourses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return RoadmapNodes where some of the related Courses match this filter */
  suggestedCourses_SOME?: InputMaybe<CourseWhere>;
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
  /** @deprecated Use `suggestedCoursesConnection_SOME` instead. */
  suggestedCoursesConnection?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** @deprecated Use `suggestedCoursesConnection_NONE` instead. */
  suggestedCoursesConnection_NOT?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where all of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_ALL?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_NONE?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_SINGLE?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_SOME?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
};

export type RoadmapOnCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Difficulty>;
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
  languages?: InputMaybe<Array<RoadmapLanguagesCreateFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
  bookmarkedBy?: InputMaybe<Array<RoadmapBookmarkedByCreateFieldInput>>;
  reviews?: InputMaybe<Array<RoadmapReviewsCreateFieldInput>>;
};

export type RoadmapReviewsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<RoadmapReviewsAggregateInput>>;
  OR?: InputMaybe<Array<RoadmapReviewsAggregateInput>>;
  NOT?: InputMaybe<RoadmapReviewsAggregateInput>;
  node?: InputMaybe<RoadmapReviewsNodeAggregationWhereInput>;
};

export type RoadmapReviewsConnectFieldInput = {
  where?: InputMaybe<UserReviewConnectWhere>;
  connect?: InputMaybe<Array<UserReviewConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type RoadmapReviewsConnectionSort = {
  node?: InputMaybe<UserReviewSort>;
};

export type RoadmapReviewsConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapReviewsConnectionWhere>>;
  OR?: InputMaybe<Array<RoadmapReviewsConnectionWhere>>;
  NOT?: InputMaybe<RoadmapReviewsConnectionWhere>;
  node?: InputMaybe<UserReviewWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserReviewWhere>;
};

export type RoadmapReviewsConnectOrCreateFieldInput = {
  where: UserReviewConnectOrCreateWhere;
  onCreate: RoadmapReviewsConnectOrCreateFieldInputOnCreate;
};

export type RoadmapReviewsConnectOrCreateFieldInputOnCreate = {
  node: UserReviewOnCreateInput;
};

export type RoadmapReviewsCreateFieldInput = {
  node: UserReviewCreateInput;
};

export type RoadmapReviewsDeleteFieldInput = {
  where?: InputMaybe<RoadmapReviewsConnectionWhere>;
  delete?: InputMaybe<UserReviewDeleteInput>;
};

export type RoadmapReviewsDisconnectFieldInput = {
  where?: InputMaybe<RoadmapReviewsConnectionWhere>;
  disconnect?: InputMaybe<UserReviewDisconnectInput>;
};

export type RoadmapReviewsFieldInput = {
  create?: InputMaybe<Array<RoadmapReviewsCreateFieldInput>>;
  connect?: InputMaybe<Array<RoadmapReviewsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapReviewsConnectOrCreateFieldInput>>;
};

export type RoadmapReviewsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapReviewsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RoadmapReviewsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapReviewsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  comment_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  comment_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  comment_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  rating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GT?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  rating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  rating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  rating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_GTE?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  rating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  rating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  rating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LT?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  rating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  rating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  rating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rating_LTE?: InputMaybe<Scalars["Float"]>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  rating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  rating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  rating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
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

export type RoadmapReviewsUpdateConnectionInput = {
  node?: InputMaybe<UserReviewUpdateInput>;
};

export type RoadmapReviewsUpdateFieldInput = {
  where?: InputMaybe<RoadmapReviewsConnectionWhere>;
  update?: InputMaybe<RoadmapReviewsUpdateConnectionInput>;
  connect?: InputMaybe<Array<RoadmapReviewsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapReviewsDisconnectFieldInput>>;
  create?: InputMaybe<Array<RoadmapReviewsCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapReviewsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapReviewsConnectOrCreateFieldInput>>;
};

export type RoadmapRoadmapInfoFulltext = {
  phrase: Scalars["String"];
};

/** Fields to sort Roadmaps by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoadmapSort object. */
export type RoadmapSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  difficulty?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  bookmarked?: InputMaybe<SortDirection>;
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
  difficulty?: InputMaybe<Difficulty>;
  node?: InputMaybe<RoadmapNodeUpdateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsUpdateFieldInput>>;
  languages?: InputMaybe<Array<RoadmapLanguagesUpdateFieldInput>>;
  createdBy?: InputMaybe<RoadmapCreatedByUpdateFieldInput>;
  bookmarkedBy?: InputMaybe<Array<RoadmapBookmarkedByUpdateFieldInput>>;
  reviews?: InputMaybe<Array<RoadmapReviewsUpdateFieldInput>>;
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
  difficulty?: InputMaybe<Difficulty>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT?: InputMaybe<Difficulty>;
  difficulty_IN?: InputMaybe<Array<InputMaybe<Difficulty>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT_IN?: InputMaybe<Array<InputMaybe<Difficulty>>>;
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
  /** @deprecated Use `languages_SOME` instead. */
  languages?: InputMaybe<LanguageWhere>;
  /** @deprecated Use `languages_NONE` instead. */
  languages_NOT?: InputMaybe<LanguageWhere>;
  languagesAggregate?: InputMaybe<RoadmapLanguagesAggregateInput>;
  /** Return Roadmaps where all of the related Languages match this filter */
  languages_ALL?: InputMaybe<LanguageWhere>;
  /** Return Roadmaps where none of the related Languages match this filter */
  languages_NONE?: InputMaybe<LanguageWhere>;
  /** Return Roadmaps where one of the related Languages match this filter */
  languages_SINGLE?: InputMaybe<LanguageWhere>;
  /** Return Roadmaps where some of the related Languages match this filter */
  languages_SOME?: InputMaybe<LanguageWhere>;
  createdBy?: InputMaybe<UserWhere>;
  createdBy_NOT?: InputMaybe<UserWhere>;
  createdByAggregate?: InputMaybe<RoadmapCreatedByAggregateInput>;
  /** @deprecated Use `bookmarkedBy_SOME` instead. */
  bookmarkedBy?: InputMaybe<UserWhere>;
  /** @deprecated Use `bookmarkedBy_NONE` instead. */
  bookmarkedBy_NOT?: InputMaybe<UserWhere>;
  bookmarkedByAggregate?: InputMaybe<RoadmapBookmarkedByAggregateInput>;
  /** Return Roadmaps where all of the related Users match this filter */
  bookmarkedBy_ALL?: InputMaybe<UserWhere>;
  /** Return Roadmaps where none of the related Users match this filter */
  bookmarkedBy_NONE?: InputMaybe<UserWhere>;
  /** Return Roadmaps where one of the related Users match this filter */
  bookmarkedBy_SINGLE?: InputMaybe<UserWhere>;
  /** Return Roadmaps where some of the related Users match this filter */
  bookmarkedBy_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `reviews_SOME` instead. */
  reviews?: InputMaybe<UserReviewWhere>;
  /** @deprecated Use `reviews_NONE` instead. */
  reviews_NOT?: InputMaybe<UserReviewWhere>;
  reviewsAggregate?: InputMaybe<RoadmapReviewsAggregateInput>;
  /** Return Roadmaps where all of the related UserReviews match this filter */
  reviews_ALL?: InputMaybe<UserReviewWhere>;
  /** Return Roadmaps where none of the related UserReviews match this filter */
  reviews_NONE?: InputMaybe<UserReviewWhere>;
  /** Return Roadmaps where one of the related UserReviews match this filter */
  reviews_SINGLE?: InputMaybe<UserReviewWhere>;
  /** Return Roadmaps where some of the related UserReviews match this filter */
  reviews_SOME?: InputMaybe<UserReviewWhere>;
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
  /** @deprecated Use `languagesConnection_SOME` instead. */
  languagesConnection?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** @deprecated Use `languagesConnection_NONE` instead. */
  languagesConnection_NOT?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where all of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_ALL?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where none of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_NONE?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where one of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_SINGLE?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where some of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_SOME?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  createdByConnection?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  createdByConnection_NOT?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  /** @deprecated Use `bookmarkedByConnection_SOME` instead. */
  bookmarkedByConnection?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  /** @deprecated Use `bookmarkedByConnection_NONE` instead. */
  bookmarkedByConnection_NOT?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  /** Return Roadmaps where all of the related RoadmapBookmarkedByConnections match this filter */
  bookmarkedByConnection_ALL?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  /** Return Roadmaps where none of the related RoadmapBookmarkedByConnections match this filter */
  bookmarkedByConnection_NONE?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  /** Return Roadmaps where one of the related RoadmapBookmarkedByConnections match this filter */
  bookmarkedByConnection_SINGLE?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  /** Return Roadmaps where some of the related RoadmapBookmarkedByConnections match this filter */
  bookmarkedByConnection_SOME?: InputMaybe<RoadmapBookmarkedByConnectionWhere>;
  /** @deprecated Use `reviewsConnection_SOME` instead. */
  reviewsConnection?: InputMaybe<RoadmapReviewsConnectionWhere>;
  /** @deprecated Use `reviewsConnection_NONE` instead. */
  reviewsConnection_NOT?: InputMaybe<RoadmapReviewsConnectionWhere>;
  /** Return Roadmaps where all of the related RoadmapReviewsConnections match this filter */
  reviewsConnection_ALL?: InputMaybe<RoadmapReviewsConnectionWhere>;
  /** Return Roadmaps where none of the related RoadmapReviewsConnections match this filter */
  reviewsConnection_NONE?: InputMaybe<RoadmapReviewsConnectionWhere>;
  /** Return Roadmaps where one of the related RoadmapReviewsConnections match this filter */
  reviewsConnection_SINGLE?: InputMaybe<RoadmapReviewsConnectionWhere>;
  /** Return Roadmaps where some of the related RoadmapReviewsConnections match this filter */
  reviewsConnection_SOME?: InputMaybe<RoadmapReviewsConnectionWhere>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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

export type UserBookmarkedCoursesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserBookmarkedCoursesAggregateInput>>;
  OR?: InputMaybe<Array<UserBookmarkedCoursesAggregateInput>>;
  NOT?: InputMaybe<UserBookmarkedCoursesAggregateInput>;
  node?: InputMaybe<UserBookmarkedCoursesNodeAggregationWhereInput>;
};

export type UserBookmarkedCoursesConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserBookmarkedCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type UserBookmarkedCoursesConnectionWhere = {
  AND?: InputMaybe<Array<UserBookmarkedCoursesConnectionWhere>>;
  OR?: InputMaybe<Array<UserBookmarkedCoursesConnectionWhere>>;
  NOT?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type UserBookmarkedCoursesConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: UserBookmarkedCoursesConnectOrCreateFieldInputOnCreate;
};

export type UserBookmarkedCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type UserBookmarkedCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type UserBookmarkedCoursesDeleteFieldInput = {
  where?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type UserBookmarkedCoursesDisconnectFieldInput = {
  where?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type UserBookmarkedCoursesFieldInput = {
  create?: InputMaybe<Array<UserBookmarkedCoursesCreateFieldInput>>;
  connect?: InputMaybe<Array<UserBookmarkedCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserBookmarkedCoursesConnectOrCreateFieldInput>
  >;
};

export type UserBookmarkedCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserBookmarkedCoursesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserBookmarkedCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserBookmarkedCoursesNodeAggregationWhereInput>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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

export type UserBookmarkedCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type UserBookmarkedCoursesUpdateFieldInput = {
  where?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  update?: InputMaybe<UserBookmarkedCoursesUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserBookmarkedCoursesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserBookmarkedCoursesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserBookmarkedCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserBookmarkedCoursesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserBookmarkedCoursesConnectOrCreateFieldInput>
  >;
};

export type UserBookmarkedRoadmapsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserBookmarkedRoadmapsAggregateInput>>;
  OR?: InputMaybe<Array<UserBookmarkedRoadmapsAggregateInput>>;
  NOT?: InputMaybe<UserBookmarkedRoadmapsAggregateInput>;
  node?: InputMaybe<UserBookmarkedRoadmapsNodeAggregationWhereInput>;
};

export type UserBookmarkedRoadmapsConnectFieldInput = {
  where?: InputMaybe<RoadmapConnectWhere>;
  connect?: InputMaybe<Array<RoadmapConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserBookmarkedRoadmapsConnectionSort = {
  node?: InputMaybe<RoadmapSort>;
};

export type UserBookmarkedRoadmapsConnectionWhere = {
  AND?: InputMaybe<Array<UserBookmarkedRoadmapsConnectionWhere>>;
  OR?: InputMaybe<Array<UserBookmarkedRoadmapsConnectionWhere>>;
  NOT?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  node?: InputMaybe<RoadmapWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapWhere>;
};

export type UserBookmarkedRoadmapsConnectOrCreateFieldInput = {
  where: RoadmapConnectOrCreateWhere;
  onCreate: UserBookmarkedRoadmapsConnectOrCreateFieldInputOnCreate;
};

export type UserBookmarkedRoadmapsConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
};

export type UserBookmarkedRoadmapsCreateFieldInput = {
  node: RoadmapCreateInput;
};

export type UserBookmarkedRoadmapsDeleteFieldInput = {
  where?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  delete?: InputMaybe<RoadmapDeleteInput>;
};

export type UserBookmarkedRoadmapsDisconnectFieldInput = {
  where?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
};

export type UserBookmarkedRoadmapsFieldInput = {
  create?: InputMaybe<Array<UserBookmarkedRoadmapsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserBookmarkedRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserBookmarkedRoadmapsConnectOrCreateFieldInput>
  >;
};

export type UserBookmarkedRoadmapsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserBookmarkedRoadmapsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserBookmarkedRoadmapsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserBookmarkedRoadmapsNodeAggregationWhereInput>;
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

export type UserBookmarkedRoadmapsUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type UserBookmarkedRoadmapsUpdateFieldInput = {
  where?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  update?: InputMaybe<UserBookmarkedRoadmapsUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserBookmarkedRoadmapsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserBookmarkedRoadmapsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserBookmarkedRoadmapsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserBookmarkedRoadmapsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserBookmarkedRoadmapsConnectOrCreateFieldInput>
  >;
};

export type UserConnectInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
  preferableLanguages?: InputMaybe<
    Array<UserPreferableLanguagesConnectFieldInput>
  >;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsConnectFieldInput>>;
  bookmarkedCourses?: InputMaybe<Array<UserBookmarkedCoursesConnectFieldInput>>;
  bookmarkedRoadmaps?: InputMaybe<
    Array<UserBookmarkedRoadmapsConnectFieldInput>
  >;
};

export type UserConnectOrCreateInput = {
  createdRoadmaps?: InputMaybe<
    Array<UserCreatedRoadmapsConnectOrCreateFieldInput>
  >;
  preferableLanguages?: InputMaybe<
    Array<UserPreferableLanguagesConnectOrCreateFieldInput>
  >;
  preferableTopics?: InputMaybe<
    Array<UserPreferableTopicsConnectOrCreateFieldInput>
  >;
  bookmarkedCourses?: InputMaybe<
    Array<UserBookmarkedCoursesConnectOrCreateFieldInput>
  >;
  bookmarkedRoadmaps?: InputMaybe<
    Array<UserBookmarkedRoadmapsConnectOrCreateFieldInput>
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
  preferableLanguages?: InputMaybe<UserPreferableLanguagesFieldInput>;
  preferableTopics?: InputMaybe<UserPreferableTopicsFieldInput>;
  bookmarkedCourses?: InputMaybe<UserBookmarkedCoursesFieldInput>;
  bookmarkedRoadmaps?: InputMaybe<UserBookmarkedRoadmapsFieldInput>;
};

export type UserDeleteInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsDeleteFieldInput>>;
  preferableLanguages?: InputMaybe<
    Array<UserPreferableLanguagesDeleteFieldInput>
  >;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsDeleteFieldInput>>;
  bookmarkedCourses?: InputMaybe<Array<UserBookmarkedCoursesDeleteFieldInput>>;
  bookmarkedRoadmaps?: InputMaybe<
    Array<UserBookmarkedRoadmapsDeleteFieldInput>
  >;
};

export type UserDisconnectInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsDisconnectFieldInput>>;
  preferableLanguages?: InputMaybe<
    Array<UserPreferableLanguagesDisconnectFieldInput>
  >;
  preferableTopics?: InputMaybe<
    Array<UserPreferableTopicsDisconnectFieldInput>
  >;
  bookmarkedCourses?: InputMaybe<
    Array<UserBookmarkedCoursesDisconnectFieldInput>
  >;
  bookmarkedRoadmaps?: InputMaybe<
    Array<UserBookmarkedRoadmapsDisconnectFieldInput>
  >;
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

export type UserPreferableLanguagesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserPreferableLanguagesAggregateInput>>;
  OR?: InputMaybe<Array<UserPreferableLanguagesAggregateInput>>;
  NOT?: InputMaybe<UserPreferableLanguagesAggregateInput>;
  node?: InputMaybe<UserPreferableLanguagesNodeAggregationWhereInput>;
};

export type UserPreferableLanguagesConnectFieldInput = {
  where?: InputMaybe<LanguageConnectWhere>;
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserPreferableLanguagesConnectionSort = {
  node?: InputMaybe<LanguageSort>;
};

export type UserPreferableLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<UserPreferableLanguagesConnectionWhere>>;
  OR?: InputMaybe<Array<UserPreferableLanguagesConnectionWhere>>;
  NOT?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  node?: InputMaybe<LanguageWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LanguageWhere>;
};

export type UserPreferableLanguagesConnectOrCreateFieldInput = {
  where: LanguageConnectOrCreateWhere;
  onCreate: UserPreferableLanguagesConnectOrCreateFieldInputOnCreate;
};

export type UserPreferableLanguagesConnectOrCreateFieldInputOnCreate = {
  node: LanguageOnCreateInput;
};

export type UserPreferableLanguagesCreateFieldInput = {
  node: LanguageCreateInput;
};

export type UserPreferableLanguagesDeleteFieldInput = {
  where?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  delete?: InputMaybe<LanguageDeleteInput>;
};

export type UserPreferableLanguagesDisconnectFieldInput = {
  where?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  disconnect?: InputMaybe<LanguageDisconnectInput>;
};

export type UserPreferableLanguagesFieldInput = {
  create?: InputMaybe<Array<UserPreferableLanguagesCreateFieldInput>>;
  connect?: InputMaybe<Array<UserPreferableLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserPreferableLanguagesConnectOrCreateFieldInput>
  >;
};

export type UserPreferableLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPreferableLanguagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserPreferableLanguagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserPreferableLanguagesNodeAggregationWhereInput>;
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

export type UserPreferableLanguagesUpdateConnectionInput = {
  node?: InputMaybe<LanguageUpdateInput>;
};

export type UserPreferableLanguagesUpdateFieldInput = {
  where?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  update?: InputMaybe<UserPreferableLanguagesUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserPreferableLanguagesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserPreferableLanguagesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserPreferableLanguagesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserPreferableLanguagesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserPreferableLanguagesConnectOrCreateFieldInput>
  >;
};

export type UserPreferableTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserPreferableTopicsAggregateInput>>;
  OR?: InputMaybe<Array<UserPreferableTopicsAggregateInput>>;
  NOT?: InputMaybe<UserPreferableTopicsAggregateInput>;
  node?: InputMaybe<UserPreferableTopicsNodeAggregationWhereInput>;
};

export type UserPreferableTopicsConnectFieldInput = {
  where?: InputMaybe<TopicTagConnectWhere>;
  connect?: InputMaybe<Array<TopicTagConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserPreferableTopicsConnectionSort = {
  node?: InputMaybe<TopicTagSort>;
};

export type UserPreferableTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserPreferableTopicsConnectionWhere>>;
  OR?: InputMaybe<Array<UserPreferableTopicsConnectionWhere>>;
  NOT?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  node?: InputMaybe<TopicTagWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicTagWhere>;
};

export type UserPreferableTopicsConnectOrCreateFieldInput = {
  where: TopicTagConnectOrCreateWhere;
  onCreate: UserPreferableTopicsConnectOrCreateFieldInputOnCreate;
};

export type UserPreferableTopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicTagOnCreateInput;
};

export type UserPreferableTopicsCreateFieldInput = {
  node: TopicTagCreateInput;
};

export type UserPreferableTopicsDeleteFieldInput = {
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  delete?: InputMaybe<TopicTagDeleteInput>;
};

export type UserPreferableTopicsDisconnectFieldInput = {
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
};

export type UserPreferableTopicsFieldInput = {
  create?: InputMaybe<Array<UserPreferableTopicsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserPreferableTopicsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserPreferableTopicsConnectOrCreateFieldInput>
  >;
};

export type UserPreferableTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPreferableTopicsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserPreferableTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserPreferableTopicsNodeAggregationWhereInput>;
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

export type UserPreferableTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicTagUpdateInput>;
};

export type UserPreferableTopicsUpdateFieldInput = {
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  update?: InputMaybe<UserPreferableTopicsUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserPreferableTopicsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserPreferableTopicsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserPreferableTopicsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserPreferableTopicsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserPreferableTopicsConnectOrCreateFieldInput>
  >;
};

export type UserRelationInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
  preferableLanguages?: InputMaybe<
    Array<UserPreferableLanguagesCreateFieldInput>
  >;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsCreateFieldInput>>;
  bookmarkedCourses?: InputMaybe<Array<UserBookmarkedCoursesCreateFieldInput>>;
  bookmarkedRoadmaps?: InputMaybe<
    Array<UserBookmarkedRoadmapsCreateFieldInput>
  >;
};

export type UserReviewConnectInput = {
  course?: InputMaybe<UserReviewCourseConnectFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapConnectFieldInput>;
  user?: InputMaybe<UserReviewUserConnectFieldInput>;
};

export type UserReviewConnectOrCreateInput = {
  course?: InputMaybe<UserReviewCourseConnectOrCreateFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapConnectOrCreateFieldInput>;
  user?: InputMaybe<UserReviewUserConnectOrCreateFieldInput>;
};

export type UserReviewConnectOrCreateWhere = {
  node: UserReviewUniqueWhere;
};

export type UserReviewConnectWhere = {
  node: UserReviewWhere;
};

export type UserReviewCourseAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserReviewCourseAggregateInput>>;
  OR?: InputMaybe<Array<UserReviewCourseAggregateInput>>;
  NOT?: InputMaybe<UserReviewCourseAggregateInput>;
  node?: InputMaybe<UserReviewCourseNodeAggregationWhereInput>;
};

export type UserReviewCourseConnectFieldInput = {
  where?: InputMaybe<CourseConnectWhere>;
  connect?: InputMaybe<CourseConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserReviewCourseConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type UserReviewCourseConnectionWhere = {
  AND?: InputMaybe<Array<UserReviewCourseConnectionWhere>>;
  OR?: InputMaybe<Array<UserReviewCourseConnectionWhere>>;
  NOT?: InputMaybe<UserReviewCourseConnectionWhere>;
  node?: InputMaybe<CourseWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CourseWhere>;
};

export type UserReviewCourseConnectOrCreateFieldInput = {
  where: CourseConnectOrCreateWhere;
  onCreate: UserReviewCourseConnectOrCreateFieldInputOnCreate;
};

export type UserReviewCourseConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type UserReviewCourseCreateFieldInput = {
  node: CourseCreateInput;
};

export type UserReviewCourseDeleteFieldInput = {
  where?: InputMaybe<UserReviewCourseConnectionWhere>;
  delete?: InputMaybe<CourseDeleteInput>;
};

export type UserReviewCourseDisconnectFieldInput = {
  where?: InputMaybe<UserReviewCourseConnectionWhere>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
};

export type UserReviewCourseFieldInput = {
  create?: InputMaybe<UserReviewCourseCreateFieldInput>;
  connect?: InputMaybe<UserReviewCourseConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserReviewCourseConnectOrCreateFieldInput>;
};

export type UserReviewCourseNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserReviewCourseNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserReviewCourseNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserReviewCourseNodeAggregationWhereInput>;
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
  externalRating_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LT?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRating_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  externalRating_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  externalRatingsCount_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars["Int"]>;
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

export type UserReviewCourseUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type UserReviewCourseUpdateFieldInput = {
  where?: InputMaybe<UserReviewCourseConnectionWhere>;
  update?: InputMaybe<UserReviewCourseUpdateConnectionInput>;
  connect?: InputMaybe<UserReviewCourseConnectFieldInput>;
  disconnect?: InputMaybe<UserReviewCourseDisconnectFieldInput>;
  create?: InputMaybe<UserReviewCourseCreateFieldInput>;
  delete?: InputMaybe<UserReviewCourseDeleteFieldInput>;
  connectOrCreate?: InputMaybe<UserReviewCourseConnectOrCreateFieldInput>;
};

export type UserReviewCreateInput = {
  rating?: InputMaybe<Scalars["Float"]>;
  comment: Scalars["String"];
  course?: InputMaybe<UserReviewCourseFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapFieldInput>;
  user?: InputMaybe<UserReviewUserFieldInput>;
};

export type UserReviewDeleteInput = {
  course?: InputMaybe<UserReviewCourseDeleteFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapDeleteFieldInput>;
  user?: InputMaybe<UserReviewUserDeleteFieldInput>;
};

export type UserReviewDisconnectInput = {
  course?: InputMaybe<UserReviewCourseDisconnectFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapDisconnectFieldInput>;
  user?: InputMaybe<UserReviewUserDisconnectFieldInput>;
};

export type UserReviewOnCreateInput = {
  rating?: InputMaybe<Scalars["Float"]>;
  comment: Scalars["String"];
};

export type UserReviewOptions = {
  /** Specify one or more UserReviewSort objects to sort UserReviews by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserReviewSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type UserReviewRelationInput = {
  course?: InputMaybe<UserReviewCourseCreateFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapCreateFieldInput>;
  user?: InputMaybe<UserReviewUserCreateFieldInput>;
};

export type UserReviewRoadmapAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserReviewRoadmapAggregateInput>>;
  OR?: InputMaybe<Array<UserReviewRoadmapAggregateInput>>;
  NOT?: InputMaybe<UserReviewRoadmapAggregateInput>;
  node?: InputMaybe<UserReviewRoadmapNodeAggregationWhereInput>;
};

export type UserReviewRoadmapConnectFieldInput = {
  where?: InputMaybe<RoadmapConnectWhere>;
  connect?: InputMaybe<RoadmapConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserReviewRoadmapConnectionSort = {
  node?: InputMaybe<RoadmapSort>;
};

export type UserReviewRoadmapConnectionWhere = {
  AND?: InputMaybe<Array<UserReviewRoadmapConnectionWhere>>;
  OR?: InputMaybe<Array<UserReviewRoadmapConnectionWhere>>;
  NOT?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  node?: InputMaybe<RoadmapWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<RoadmapWhere>;
};

export type UserReviewRoadmapConnectOrCreateFieldInput = {
  where: RoadmapConnectOrCreateWhere;
  onCreate: UserReviewRoadmapConnectOrCreateFieldInputOnCreate;
};

export type UserReviewRoadmapConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
};

export type UserReviewRoadmapCreateFieldInput = {
  node: RoadmapCreateInput;
};

export type UserReviewRoadmapDeleteFieldInput = {
  where?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  delete?: InputMaybe<RoadmapDeleteInput>;
};

export type UserReviewRoadmapDisconnectFieldInput = {
  where?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
};

export type UserReviewRoadmapFieldInput = {
  create?: InputMaybe<UserReviewRoadmapCreateFieldInput>;
  connect?: InputMaybe<UserReviewRoadmapConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserReviewRoadmapConnectOrCreateFieldInput>;
};

export type UserReviewRoadmapNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserReviewRoadmapNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserReviewRoadmapNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserReviewRoadmapNodeAggregationWhereInput>;
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

export type UserReviewRoadmapUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type UserReviewRoadmapUpdateFieldInput = {
  where?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  update?: InputMaybe<UserReviewRoadmapUpdateConnectionInput>;
  connect?: InputMaybe<UserReviewRoadmapConnectFieldInput>;
  disconnect?: InputMaybe<UserReviewRoadmapDisconnectFieldInput>;
  create?: InputMaybe<UserReviewRoadmapCreateFieldInput>;
  delete?: InputMaybe<UserReviewRoadmapDeleteFieldInput>;
  connectOrCreate?: InputMaybe<UserReviewRoadmapConnectOrCreateFieldInput>;
};

/** Fields to sort UserReviews by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserReviewSort object. */
export type UserReviewSort = {
  id?: InputMaybe<SortDirection>;
  rating?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserReviewUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type UserReviewUpdateInput = {
  rating?: InputMaybe<Scalars["Float"]>;
  comment?: InputMaybe<Scalars["String"]>;
  rating_ADD?: InputMaybe<Scalars["Float"]>;
  rating_SUBTRACT?: InputMaybe<Scalars["Float"]>;
  rating_DIVIDE?: InputMaybe<Scalars["Float"]>;
  rating_MULTIPLY?: InputMaybe<Scalars["Float"]>;
  course?: InputMaybe<UserReviewCourseUpdateFieldInput>;
  roadmap?: InputMaybe<UserReviewRoadmapUpdateFieldInput>;
  user?: InputMaybe<UserReviewUserUpdateFieldInput>;
};

export type UserReviewUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserReviewUserAggregateInput>>;
  OR?: InputMaybe<Array<UserReviewUserAggregateInput>>;
  NOT?: InputMaybe<UserReviewUserAggregateInput>;
  node?: InputMaybe<UserReviewUserNodeAggregationWhereInput>;
};

export type UserReviewUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type UserReviewUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type UserReviewUserConnectionWhere = {
  AND?: InputMaybe<Array<UserReviewUserConnectionWhere>>;
  OR?: InputMaybe<Array<UserReviewUserConnectionWhere>>;
  NOT?: InputMaybe<UserReviewUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type UserReviewUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: UserReviewUserConnectOrCreateFieldInputOnCreate;
};

export type UserReviewUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type UserReviewUserCreateFieldInput = {
  node: UserCreateInput;
};

export type UserReviewUserDeleteFieldInput = {
  where?: InputMaybe<UserReviewUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type UserReviewUserDisconnectFieldInput = {
  where?: InputMaybe<UserReviewUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type UserReviewUserFieldInput = {
  create?: InputMaybe<UserReviewUserCreateFieldInput>;
  connect?: InputMaybe<UserReviewUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserReviewUserConnectOrCreateFieldInput>;
};

export type UserReviewUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserReviewUserNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserReviewUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserReviewUserNodeAggregationWhereInput>;
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

export type UserReviewUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type UserReviewUserUpdateFieldInput = {
  where?: InputMaybe<UserReviewUserConnectionWhere>;
  update?: InputMaybe<UserReviewUserUpdateConnectionInput>;
  connect?: InputMaybe<UserReviewUserConnectFieldInput>;
  disconnect?: InputMaybe<UserReviewUserDisconnectFieldInput>;
  create?: InputMaybe<UserReviewUserCreateFieldInput>;
  delete?: InputMaybe<UserReviewUserDeleteFieldInput>;
  connectOrCreate?: InputMaybe<UserReviewUserConnectOrCreateFieldInput>;
};

export type UserReviewWhere = {
  OR?: InputMaybe<Array<UserReviewWhere>>;
  AND?: InputMaybe<Array<UserReviewWhere>>;
  NOT?: InputMaybe<UserReviewWhere>;
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
  rating?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rating_NOT?: InputMaybe<Scalars["Float"]>;
  rating_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rating_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  rating_LT?: InputMaybe<Scalars["Float"]>;
  rating_LTE?: InputMaybe<Scalars["Float"]>;
  rating_GT?: InputMaybe<Scalars["Float"]>;
  rating_GTE?: InputMaybe<Scalars["Float"]>;
  comment?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT?: InputMaybe<Scalars["String"]>;
  comment_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  comment_CONTAINS?: InputMaybe<Scalars["String"]>;
  comment_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  comment_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
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
  course?: InputMaybe<CourseWhere>;
  course_NOT?: InputMaybe<CourseWhere>;
  courseAggregate?: InputMaybe<UserReviewCourseAggregateInput>;
  roadmap?: InputMaybe<RoadmapWhere>;
  roadmap_NOT?: InputMaybe<RoadmapWhere>;
  roadmapAggregate?: InputMaybe<UserReviewRoadmapAggregateInput>;
  user?: InputMaybe<UserWhere>;
  user_NOT?: InputMaybe<UserWhere>;
  userAggregate?: InputMaybe<UserReviewUserAggregateInput>;
  courseConnection?: InputMaybe<UserReviewCourseConnectionWhere>;
  courseConnection_NOT?: InputMaybe<UserReviewCourseConnectionWhere>;
  roadmapConnection?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  roadmapConnection_NOT?: InputMaybe<UserReviewRoadmapConnectionWhere>;
  userConnection?: InputMaybe<UserReviewUserConnectionWhere>;
  userConnection_NOT?: InputMaybe<UserReviewUserConnectionWhere>;
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
  preferableLanguages?: InputMaybe<
    Array<UserPreferableLanguagesUpdateFieldInput>
  >;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsUpdateFieldInput>>;
  bookmarkedCourses?: InputMaybe<Array<UserBookmarkedCoursesUpdateFieldInput>>;
  bookmarkedRoadmaps?: InputMaybe<
    Array<UserBookmarkedRoadmapsUpdateFieldInput>
  >;
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
  /** @deprecated Use `preferableLanguages_SOME` instead. */
  preferableLanguages?: InputMaybe<LanguageWhere>;
  /** @deprecated Use `preferableLanguages_NONE` instead. */
  preferableLanguages_NOT?: InputMaybe<LanguageWhere>;
  preferableLanguagesAggregate?: InputMaybe<UserPreferableLanguagesAggregateInput>;
  /** Return Users where all of the related Languages match this filter */
  preferableLanguages_ALL?: InputMaybe<LanguageWhere>;
  /** Return Users where none of the related Languages match this filter */
  preferableLanguages_NONE?: InputMaybe<LanguageWhere>;
  /** Return Users where one of the related Languages match this filter */
  preferableLanguages_SINGLE?: InputMaybe<LanguageWhere>;
  /** Return Users where some of the related Languages match this filter */
  preferableLanguages_SOME?: InputMaybe<LanguageWhere>;
  /** @deprecated Use `preferableTopics_SOME` instead. */
  preferableTopics?: InputMaybe<TopicTagWhere>;
  /** @deprecated Use `preferableTopics_NONE` instead. */
  preferableTopics_NOT?: InputMaybe<TopicTagWhere>;
  preferableTopicsAggregate?: InputMaybe<UserPreferableTopicsAggregateInput>;
  /** Return Users where all of the related TopicTags match this filter */
  preferableTopics_ALL?: InputMaybe<TopicTagWhere>;
  /** Return Users where none of the related TopicTags match this filter */
  preferableTopics_NONE?: InputMaybe<TopicTagWhere>;
  /** Return Users where one of the related TopicTags match this filter */
  preferableTopics_SINGLE?: InputMaybe<TopicTagWhere>;
  /** Return Users where some of the related TopicTags match this filter */
  preferableTopics_SOME?: InputMaybe<TopicTagWhere>;
  /** @deprecated Use `bookmarkedCourses_SOME` instead. */
  bookmarkedCourses?: InputMaybe<CourseWhere>;
  /** @deprecated Use `bookmarkedCourses_NONE` instead. */
  bookmarkedCourses_NOT?: InputMaybe<CourseWhere>;
  bookmarkedCoursesAggregate?: InputMaybe<UserBookmarkedCoursesAggregateInput>;
  /** Return Users where all of the related Courses match this filter */
  bookmarkedCourses_ALL?: InputMaybe<CourseWhere>;
  /** Return Users where none of the related Courses match this filter */
  bookmarkedCourses_NONE?: InputMaybe<CourseWhere>;
  /** Return Users where one of the related Courses match this filter */
  bookmarkedCourses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return Users where some of the related Courses match this filter */
  bookmarkedCourses_SOME?: InputMaybe<CourseWhere>;
  /** @deprecated Use `bookmarkedRoadmaps_SOME` instead. */
  bookmarkedRoadmaps?: InputMaybe<RoadmapWhere>;
  /** @deprecated Use `bookmarkedRoadmaps_NONE` instead. */
  bookmarkedRoadmaps_NOT?: InputMaybe<RoadmapWhere>;
  bookmarkedRoadmapsAggregate?: InputMaybe<UserBookmarkedRoadmapsAggregateInput>;
  /** Return Users where all of the related Roadmaps match this filter */
  bookmarkedRoadmaps_ALL?: InputMaybe<RoadmapWhere>;
  /** Return Users where none of the related Roadmaps match this filter */
  bookmarkedRoadmaps_NONE?: InputMaybe<RoadmapWhere>;
  /** Return Users where one of the related Roadmaps match this filter */
  bookmarkedRoadmaps_SINGLE?: InputMaybe<RoadmapWhere>;
  /** Return Users where some of the related Roadmaps match this filter */
  bookmarkedRoadmaps_SOME?: InputMaybe<RoadmapWhere>;
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
  /** @deprecated Use `preferableLanguagesConnection_SOME` instead. */
  preferableLanguagesConnection?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  /** @deprecated Use `preferableLanguagesConnection_NONE` instead. */
  preferableLanguagesConnection_NOT?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  /** Return Users where all of the related UserPreferableLanguagesConnections match this filter */
  preferableLanguagesConnection_ALL?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  /** Return Users where none of the related UserPreferableLanguagesConnections match this filter */
  preferableLanguagesConnection_NONE?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  /** Return Users where one of the related UserPreferableLanguagesConnections match this filter */
  preferableLanguagesConnection_SINGLE?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  /** Return Users where some of the related UserPreferableLanguagesConnections match this filter */
  preferableLanguagesConnection_SOME?: InputMaybe<UserPreferableLanguagesConnectionWhere>;
  /** @deprecated Use `preferableTopicsConnection_SOME` instead. */
  preferableTopicsConnection?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** @deprecated Use `preferableTopicsConnection_NONE` instead. */
  preferableTopicsConnection_NOT?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where all of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_ALL?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where none of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_NONE?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where one of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_SINGLE?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where some of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_SOME?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** @deprecated Use `bookmarkedCoursesConnection_SOME` instead. */
  bookmarkedCoursesConnection?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  /** @deprecated Use `bookmarkedCoursesConnection_NONE` instead. */
  bookmarkedCoursesConnection_NOT?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  /** Return Users where all of the related UserBookmarkedCoursesConnections match this filter */
  bookmarkedCoursesConnection_ALL?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  /** Return Users where none of the related UserBookmarkedCoursesConnections match this filter */
  bookmarkedCoursesConnection_NONE?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  /** Return Users where one of the related UserBookmarkedCoursesConnections match this filter */
  bookmarkedCoursesConnection_SINGLE?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  /** Return Users where some of the related UserBookmarkedCoursesConnections match this filter */
  bookmarkedCoursesConnection_SOME?: InputMaybe<UserBookmarkedCoursesConnectionWhere>;
  /** @deprecated Use `bookmarkedRoadmapsConnection_SOME` instead. */
  bookmarkedRoadmapsConnection?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  /** @deprecated Use `bookmarkedRoadmapsConnection_NONE` instead. */
  bookmarkedRoadmapsConnection_NOT?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  /** Return Users where all of the related UserBookmarkedRoadmapsConnections match this filter */
  bookmarkedRoadmapsConnection_ALL?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  /** Return Users where none of the related UserBookmarkedRoadmapsConnections match this filter */
  bookmarkedRoadmapsConnection_NONE?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  /** Return Users where one of the related UserBookmarkedRoadmapsConnections match this filter */
  bookmarkedRoadmapsConnection_SINGLE?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
  /** Return Users where some of the related UserBookmarkedRoadmapsConnections match this filter */
  bookmarkedRoadmapsConnection_SOME?: InputMaybe<UserBookmarkedRoadmapsConnectionWhere>;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface CourseAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
  description?: StringAggregateInputNullable;
  url?: StringAggregateInputNonNullable;
  externalRating?: FloatAggregateInputNullable;
  externalRatingsCount?: IntAggregateInputNullable;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface CoursePriceAggregateSelectionInput {
  count?: boolean;
  price?: FloatAggregateInputNullable;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface LanguageAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  countryCodeISO?: StringAggregateInputNonNullable;
}

export declare class LanguageModel {
  public find(args?: {
    where?: LanguageWhere;

    options?: LanguageOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Language[]>;
  public create(args: {
    input: LanguageCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateLanguagesMutationResponse>;
  public update(args: {
    where?: LanguageWhere;
    update?: LanguageUpdateInput;
    connect?: LanguageConnectInput;
    disconnect?: LanguageDisconnectInput;
    create?: LanguageCreateInput;
    connectOrCreate?: LanguageConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateLanguagesMutationResponse>;
  public delete(args: {
    where?: LanguageWhere;
    delete?: LanguageDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: LanguageWhere;

    aggregate: LanguageAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<LanguageAggregateSelection>;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
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
    fulltext?: RoadmapFulltext;
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
    fulltext?: RoadmapFulltext;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
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
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
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
export interface UserReviewAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  rating?: FloatAggregateInputNullable;
  comment?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class UserReviewModel {
  public find(args?: {
    where?: UserReviewWhere;

    options?: UserReviewOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UserReview[]>;
  public create(args: {
    input: UserReviewCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUserReviewsMutationResponse>;
  public update(args: {
    where?: UserReviewWhere;
    update?: UserReviewUpdateInput;
    connect?: UserReviewConnectInput;
    disconnect?: UserReviewDisconnectInput;
    create?: UserReviewCreateInput;
    connectOrCreate?: UserReviewConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUserReviewsMutationResponse>;
  public delete(args: {
    where?: UserReviewWhere;
    delete?: UserReviewDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserReviewWhere;

    aggregate: UserReviewAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserReviewAggregateSelection>;
}

export interface ModelMap {
  User: UserModel;
  Course: CourseModel;
  CoursePrice: CoursePriceModel;
  CoursePlatform: CoursePlatformModel;
  Language: LanguageModel;
  Roadmap: RoadmapModel;
  RoadmapNode: RoadmapNodeModel;
  RoadmapEdge: RoadmapEdgeModel;
  TopicTag: TopicTagModel;
  UserReview: UserReviewModel;
}
