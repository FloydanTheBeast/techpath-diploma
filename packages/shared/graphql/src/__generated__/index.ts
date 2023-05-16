import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthSessionResponse = {
  __typename?: 'AuthSessionResponse';
  accessToken: Scalars['String'];
  accessTokenExpiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
  refreshTokenExpiresIn: Scalars['Float'];
};

export type AuthSessionWithUserResponse = {
  __typename?: 'AuthSessionWithUserResponse';
  accessToken: Scalars['String'];
  accessTokenExpiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
  refreshTokenExpiresIn: Scalars['Float'];
  user: UserResponse;
};

export type Course = {
  __typename?: 'Course';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Difficulty>;
  externalRating?: Maybe<Scalars['Float']>;
  externalRatingsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  languages: Array<Language>;
  languagesAggregate?: Maybe<CourseLanguageLanguagesAggregationSelection>;
  languagesConnection: CourseLanguagesConnection;
  platform?: Maybe<CoursePlatform>;
  platformAggregate?: Maybe<CourseCoursePlatformPlatformAggregationSelection>;
  platformConnection: CoursePlatformConnection;
  price?: Maybe<CoursePrice>;
  priceAggregate?: Maybe<CourseCoursePricePriceAggregationSelection>;
  priceConnection: CoursePriceConnection;
  tags: Array<TopicTag>;
  tagsAggregate?: Maybe<CourseTopicTagTagsAggregationSelection>;
  tagsConnection: CourseTagsConnection;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type CourseLanguagesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LanguageOptions>;
  where?: InputMaybe<LanguageWhere>;
};

export type CourseLanguagesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LanguageWhere>;
};

export type CourseLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CourseLanguagesConnectionSort>>;
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
};

export type CoursePlatformArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CoursePlatformOptions>;
  where?: InputMaybe<CoursePlatformWhere>;
};

export type CoursePlatformAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CoursePlatformWhere>;
};

export type CoursePlatformConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CoursePlatformConnectionSort>>;
  where?: InputMaybe<CoursePlatformConnectionWhere>;
};

export type CoursePriceArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CoursePriceOptions>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type CoursePriceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type CoursePriceConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CoursePriceConnectionSort>>;
  where?: InputMaybe<CoursePriceConnectionWhere>;
};

export type CourseTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TopicTagOptions>;
  where?: InputMaybe<TopicTagWhere>;
};

export type CourseTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TopicTagWhere>;
};

export type CourseTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CourseTagsConnectionSort>>;
  where?: InputMaybe<CourseTagsConnectionWhere>;
};

export type CourseAggregateSelection = {
  __typename?: 'CourseAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CourseConnectInput = {
  languages?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  platform?: InputMaybe<CoursePlatformConnectFieldInput>;
  price?: InputMaybe<CoursePriceConnectFieldInput>;
  tags?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
};

export type CourseConnectOrCreateInput = {
  languages?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
  platform?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
  tags?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
};

export type CourseConnectOrCreateWhere = {
  node: CourseUniqueWhere;
};

export type CourseConnectWhere = {
  node: CourseWhere;
};

export type CourseCourseInfoFulltext = {
  phrase: Scalars['String'];
};

export type CourseCoursePlatformPlatformAggregationSelection = {
  __typename?: 'CourseCoursePlatformPlatformAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CourseCoursePlatformPlatformNodeAggregateSelection>;
};

export type CourseCoursePlatformPlatformNodeAggregateSelection = {
  __typename?: 'CourseCoursePlatformPlatformNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  logoUrl: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CourseCoursePricePriceAggregationSelection = {
  __typename?: 'CourseCoursePricePriceAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CourseCoursePricePriceNodeAggregateSelection>;
};

export type CourseCoursePricePriceNodeAggregateSelection = {
  __typename?: 'CourseCoursePricePriceNodeAggregateSelection';
  currencyCodeISO: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
};

export type CourseCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  externalRating?: InputMaybe<Scalars['Float']>;
  externalRatingsCount?: InputMaybe<Scalars['Int']>;
  languages?: InputMaybe<CourseLanguagesFieldInput>;
  platform?: InputMaybe<CoursePlatformFieldInput>;
  price?: InputMaybe<CoursePriceFieldInput>;
  tags?: InputMaybe<CourseTagsFieldInput>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CourseDeleteInput = {
  languages?: InputMaybe<Array<CourseLanguagesDeleteFieldInput>>;
  platform?: InputMaybe<CoursePlatformDeleteFieldInput>;
  price?: InputMaybe<CoursePriceDeleteFieldInput>;
  tags?: InputMaybe<Array<CourseTagsDeleteFieldInput>>;
};

export type CourseDisconnectInput = {
  languages?: InputMaybe<Array<CourseLanguagesDisconnectFieldInput>>;
  platform?: InputMaybe<CoursePlatformDisconnectFieldInput>;
  price?: InputMaybe<CoursePriceDisconnectFieldInput>;
  tags?: InputMaybe<Array<CourseTagsDisconnectFieldInput>>;
};

export type CourseEdge = {
  __typename?: 'CourseEdge';
  cursor: Scalars['String'];
  node: Course;
};

export type CourseFulltext = {
  CourseInfo?: InputMaybe<CourseCourseInfoFulltext>;
};

/** The result of a fulltext search on an index of Course */
export type CourseFulltextResult = {
  __typename?: 'CourseFulltextResult';
  course: Course;
  score: Scalars['Float'];
};

/** The input for sorting a fulltext query on an index of Course */
export type CourseFulltextSort = {
  course?: InputMaybe<CourseSort>;
  score?: InputMaybe<SortDirection>;
};

/** The input for filtering a fulltext query on an index of Course */
export type CourseFulltextWhere = {
  course?: InputMaybe<CourseWhere>;
  score?: InputMaybe<FloatWhere>;
};

export type CourseLanguageLanguagesAggregationSelection = {
  __typename?: 'CourseLanguageLanguagesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CourseLanguageLanguagesNodeAggregateSelection>;
};

export type CourseLanguageLanguagesNodeAggregateSelection = {
  __typename?: 'CourseLanguageLanguagesNodeAggregateSelection';
  countryCodeISO: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CourseLanguagesAggregateInput = {
  AND?: InputMaybe<Array<CourseLanguagesAggregateInput>>;
  NOT?: InputMaybe<CourseLanguagesAggregateInput>;
  OR?: InputMaybe<Array<CourseLanguagesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CourseLanguagesNodeAggregationWhereInput>;
};

export type CourseLanguagesConnectFieldInput = {
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<LanguageConnectWhere>;
};

export type CourseLanguagesConnectOrCreateFieldInput = {
  onCreate: CourseLanguagesConnectOrCreateFieldInputOnCreate;
  where: LanguageConnectOrCreateWhere;
};

export type CourseLanguagesConnectOrCreateFieldInputOnCreate = {
  node: LanguageOnCreateInput;
};

export type CourseLanguagesConnection = {
  __typename?: 'CourseLanguagesConnection';
  edges: Array<CourseLanguagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CourseLanguagesConnectionSort = {
  node?: InputMaybe<LanguageSort>;
};

export type CourseLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  NOT?: InputMaybe<CourseLanguagesConnectionWhere>;
  OR?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  node?: InputMaybe<LanguageWhere>;
};

export type CourseLanguagesCreateFieldInput = {
  node: LanguageCreateInput;
};

export type CourseLanguagesDeleteFieldInput = {
  delete?: InputMaybe<LanguageDeleteInput>;
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
};

export type CourseLanguagesDisconnectFieldInput = {
  disconnect?: InputMaybe<LanguageDisconnectInput>;
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
};

export type CourseLanguagesFieldInput = {
  connect?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CourseLanguagesCreateFieldInput>>;
};

export type CourseLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseLanguagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseLanguagesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CourseLanguagesNodeAggregationWhereInput>>;
  countryCodeISO_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  countryCodeISO_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type CourseLanguagesRelationship = {
  __typename?: 'CourseLanguagesRelationship';
  cursor: Scalars['String'];
  node: Language;
};

export type CourseLanguagesUpdateConnectionInput = {
  node?: InputMaybe<LanguageUpdateInput>;
};

export type CourseLanguagesUpdateFieldInput = {
  connect?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CourseLanguagesCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseLanguagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CourseLanguagesDisconnectFieldInput>>;
  update?: InputMaybe<CourseLanguagesUpdateConnectionInput>;
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
};

export type CourseOnCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  externalRating?: InputMaybe<Scalars['Float']>;
  externalRatingsCount?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CourseOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CourseSort objects to sort Courses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CourseSort>>;
};

export type CoursePlatform = {
  __typename?: 'CoursePlatform';
  courses: Array<Course>;
  coursesAggregate?: Maybe<CoursePlatformCourseCoursesAggregationSelection>;
  coursesConnection: CoursePlatformCoursesConnection;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type CoursePlatformCoursesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type CoursePlatformCoursesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseWhere>;
};

export type CoursePlatformCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CoursePlatformCoursesConnectionSort>>;
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
};

export type CoursePlatformAggregateInput = {
  AND?: InputMaybe<Array<CoursePlatformAggregateInput>>;
  NOT?: InputMaybe<CoursePlatformAggregateInput>;
  OR?: InputMaybe<Array<CoursePlatformAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CoursePlatformNodeAggregationWhereInput>;
};

export type CoursePlatformAggregateSelection = {
  __typename?: 'CoursePlatformAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  logoUrl: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CoursePlatformConnectFieldInput = {
  connect?: InputMaybe<CoursePlatformConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CoursePlatformConnectWhere>;
};

export type CoursePlatformConnectInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesConnectFieldInput>>;
};

export type CoursePlatformConnectOrCreateFieldInput = {
  onCreate: CoursePlatformConnectOrCreateFieldInputOnCreate;
  where: CoursePlatformConnectOrCreateWhere;
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

export type CoursePlatformConnection = {
  __typename?: 'CoursePlatformConnection';
  edges: Array<CoursePlatformRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CoursePlatformConnectionSort = {
  node?: InputMaybe<CoursePlatformSort>;
};

export type CoursePlatformConnectionWhere = {
  AND?: InputMaybe<Array<CoursePlatformConnectionWhere>>;
  NOT?: InputMaybe<CoursePlatformConnectionWhere>;
  OR?: InputMaybe<Array<CoursePlatformConnectionWhere>>;
  node?: InputMaybe<CoursePlatformWhere>;
};

export type CoursePlatformCourseCoursesAggregationSelection = {
  __typename?: 'CoursePlatformCourseCoursesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CoursePlatformCourseCoursesNodeAggregateSelection>;
};

export type CoursePlatformCourseCoursesNodeAggregateSelection = {
  __typename?: 'CoursePlatformCourseCoursesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CoursePlatformCoursesAggregateInput = {
  AND?: InputMaybe<Array<CoursePlatformCoursesAggregateInput>>;
  NOT?: InputMaybe<CoursePlatformCoursesAggregateInput>;
  OR?: InputMaybe<Array<CoursePlatformCoursesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CoursePlatformCoursesNodeAggregationWhereInput>;
};

export type CoursePlatformCoursesConnectFieldInput = {
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseConnectWhere>;
};

export type CoursePlatformCoursesConnectOrCreateFieldInput = {
  onCreate: CoursePlatformCoursesConnectOrCreateFieldInputOnCreate;
  where: CourseConnectOrCreateWhere;
};

export type CoursePlatformCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type CoursePlatformCoursesConnection = {
  __typename?: 'CoursePlatformCoursesConnection';
  edges: Array<CoursePlatformCoursesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CoursePlatformCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type CoursePlatformCoursesConnectionWhere = {
  AND?: InputMaybe<Array<CoursePlatformCoursesConnectionWhere>>;
  NOT?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  OR?: InputMaybe<Array<CoursePlatformCoursesConnectionWhere>>;
  node?: InputMaybe<CourseWhere>;
};

export type CoursePlatformCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type CoursePlatformCoursesDeleteFieldInput = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
};

export type CoursePlatformCoursesDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseDisconnectInput>;
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
};

export type CoursePlatformCoursesFieldInput = {
  connect?: InputMaybe<Array<CoursePlatformCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CoursePlatformCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CoursePlatformCoursesCreateFieldInput>>;
};

export type CoursePlatformCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePlatformCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePlatformCoursesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CoursePlatformCoursesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type CoursePlatformCoursesRelationship = {
  __typename?: 'CoursePlatformCoursesRelationship';
  cursor: Scalars['String'];
  node: Course;
};

export type CoursePlatformCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type CoursePlatformCoursesUpdateFieldInput = {
  connect?: InputMaybe<Array<CoursePlatformCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CoursePlatformCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CoursePlatformCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<CoursePlatformCoursesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CoursePlatformCoursesDisconnectFieldInput>>;
  update?: InputMaybe<CoursePlatformCoursesUpdateConnectionInput>;
  where?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
};

export type CoursePlatformCreateFieldInput = {
  node: CoursePlatformCreateInput;
};

export type CoursePlatformCreateInput = {
  courses?: InputMaybe<CoursePlatformCoursesFieldInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type CoursePlatformDeleteFieldInput = {
  delete?: InputMaybe<CoursePlatformDeleteInput>;
  where?: InputMaybe<CoursePlatformConnectionWhere>;
};

export type CoursePlatformDeleteInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesDeleteFieldInput>>;
};

export type CoursePlatformDisconnectFieldInput = {
  disconnect?: InputMaybe<CoursePlatformDisconnectInput>;
  where?: InputMaybe<CoursePlatformConnectionWhere>;
};

export type CoursePlatformDisconnectInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesDisconnectFieldInput>>;
};

export type CoursePlatformEdge = {
  __typename?: 'CoursePlatformEdge';
  cursor: Scalars['String'];
  node: CoursePlatform;
};

export type CoursePlatformFieldInput = {
  connect?: InputMaybe<CoursePlatformConnectFieldInput>;
  connectOrCreate?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
  create?: InputMaybe<CoursePlatformCreateFieldInput>;
};

export type CoursePlatformNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePlatformNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePlatformNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CoursePlatformNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  logoUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  logoUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  logoUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  logoUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  logoUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  logoUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  logoUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  logoUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  logoUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  logoUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  logoUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  logoUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  logoUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  logoUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  logoUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type CoursePlatformOnCreateInput = {
  logoUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type CoursePlatformOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CoursePlatformSort objects to sort CoursePlatforms by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CoursePlatformSort>>;
};

export type CoursePlatformRelationInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesCreateFieldInput>>;
};

export type CoursePlatformRelationship = {
  __typename?: 'CoursePlatformRelationship';
  cursor: Scalars['String'];
  node: CoursePlatform;
};

/** Fields to sort CoursePlatforms by. The order in which sorts are applied is not guaranteed when specifying many fields in one CoursePlatformSort object. */
export type CoursePlatformSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  logoUrl?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type CoursePlatformUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CoursePlatformUpdateConnectionInput = {
  node?: InputMaybe<CoursePlatformUpdateInput>;
};

export type CoursePlatformUpdateFieldInput = {
  connect?: InputMaybe<CoursePlatformConnectFieldInput>;
  connectOrCreate?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
  create?: InputMaybe<CoursePlatformCreateFieldInput>;
  delete?: InputMaybe<CoursePlatformDeleteFieldInput>;
  disconnect?: InputMaybe<CoursePlatformDisconnectFieldInput>;
  update?: InputMaybe<CoursePlatformUpdateConnectionInput>;
  where?: InputMaybe<CoursePlatformConnectionWhere>;
};

export type CoursePlatformUpdateInput = {
  courses?: InputMaybe<Array<CoursePlatformCoursesUpdateFieldInput>>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CoursePlatformWhere = {
  AND?: InputMaybe<Array<CoursePlatformWhere>>;
  NOT?: InputMaybe<CoursePlatformWhere>;
  OR?: InputMaybe<Array<CoursePlatformWhere>>;
  coursesAggregate?: InputMaybe<CoursePlatformCoursesAggregateInput>;
  /** Return CoursePlatforms where all of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where none of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where one of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where some of the related CoursePlatformCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<CoursePlatformCoursesConnectionWhere>;
  /** Return CoursePlatforms where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return CoursePlatforms where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return CoursePlatforms where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return CoursePlatforms where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  logoUrl_CONTAINS?: InputMaybe<Scalars['String']>;
  logoUrl_ENDS_WITH?: InputMaybe<Scalars['String']>;
  logoUrl_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logoUrl_MATCHES?: InputMaybe<Scalars['String']>;
  logoUrl_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_MATCHES?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  url_CONTAINS?: InputMaybe<Scalars['String']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_IN?: InputMaybe<Array<Scalars['String']>>;
  url_MATCHES?: InputMaybe<Scalars['String']>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CoursePlatformsConnection = {
  __typename?: 'CoursePlatformsConnection';
  edges: Array<CoursePlatformEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CoursePrice = {
  __typename?: 'CoursePrice';
  course?: Maybe<Course>;
  courseAggregate?: Maybe<CoursePriceCourseCourseAggregationSelection>;
  courseConnection: CoursePriceCourseConnection;
  currencyCodeISO?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type CoursePriceCourseArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type CoursePriceCourseAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseWhere>;
};

export type CoursePriceCourseConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CoursePriceCourseConnectionSort>>;
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
};

export type CoursePriceAggregateInput = {
  AND?: InputMaybe<Array<CoursePriceAggregateInput>>;
  NOT?: InputMaybe<CoursePriceAggregateInput>;
  OR?: InputMaybe<Array<CoursePriceAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CoursePriceNodeAggregationWhereInput>;
};

export type CoursePriceAggregateSelection = {
  __typename?: 'CoursePriceAggregateSelection';
  count: Scalars['Int'];
  currencyCodeISO: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
};

export type CoursePriceConnectFieldInput = {
  connect?: InputMaybe<CoursePriceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CoursePriceConnectWhere>;
};

export type CoursePriceConnectInput = {
  course?: InputMaybe<CoursePriceCourseConnectFieldInput>;
};

export type CoursePriceConnectOrCreateInput = {
  course?: InputMaybe<CoursePriceCourseConnectOrCreateFieldInput>;
};

export type CoursePriceConnectWhere = {
  node: CoursePriceWhere;
};

export type CoursePriceConnection = {
  __typename?: 'CoursePriceConnection';
  edges: Array<CoursePriceRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CoursePriceConnectionSort = {
  node?: InputMaybe<CoursePriceSort>;
};

export type CoursePriceConnectionWhere = {
  AND?: InputMaybe<Array<CoursePriceConnectionWhere>>;
  NOT?: InputMaybe<CoursePriceConnectionWhere>;
  OR?: InputMaybe<Array<CoursePriceConnectionWhere>>;
  node?: InputMaybe<CoursePriceWhere>;
};

export type CoursePriceCourseAggregateInput = {
  AND?: InputMaybe<Array<CoursePriceCourseAggregateInput>>;
  NOT?: InputMaybe<CoursePriceCourseAggregateInput>;
  OR?: InputMaybe<Array<CoursePriceCourseAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CoursePriceCourseNodeAggregationWhereInput>;
};

export type CoursePriceCourseConnectFieldInput = {
  connect?: InputMaybe<CourseConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseConnectWhere>;
};

export type CoursePriceCourseConnectOrCreateFieldInput = {
  onCreate: CoursePriceCourseConnectOrCreateFieldInputOnCreate;
  where: CourseConnectOrCreateWhere;
};

export type CoursePriceCourseConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type CoursePriceCourseConnection = {
  __typename?: 'CoursePriceCourseConnection';
  edges: Array<CoursePriceCourseRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CoursePriceCourseConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type CoursePriceCourseConnectionWhere = {
  AND?: InputMaybe<Array<CoursePriceCourseConnectionWhere>>;
  NOT?: InputMaybe<CoursePriceCourseConnectionWhere>;
  OR?: InputMaybe<Array<CoursePriceCourseConnectionWhere>>;
  node?: InputMaybe<CourseWhere>;
};

export type CoursePriceCourseCourseAggregationSelection = {
  __typename?: 'CoursePriceCourseCourseAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CoursePriceCourseCourseNodeAggregateSelection>;
};

export type CoursePriceCourseCourseNodeAggregateSelection = {
  __typename?: 'CoursePriceCourseCourseNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CoursePriceCourseCreateFieldInput = {
  node: CourseCreateInput;
};

export type CoursePriceCourseDeleteFieldInput = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
};

export type CoursePriceCourseDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseDisconnectInput>;
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
};

export type CoursePriceCourseFieldInput = {
  connect?: InputMaybe<CoursePriceCourseConnectFieldInput>;
  connectOrCreate?: InputMaybe<CoursePriceCourseConnectOrCreateFieldInput>;
  create?: InputMaybe<CoursePriceCourseCreateFieldInput>;
};

export type CoursePriceCourseNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePriceCourseNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePriceCourseNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CoursePriceCourseNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type CoursePriceCourseRelationship = {
  __typename?: 'CoursePriceCourseRelationship';
  cursor: Scalars['String'];
  node: Course;
};

export type CoursePriceCourseUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type CoursePriceCourseUpdateFieldInput = {
  connect?: InputMaybe<CoursePriceCourseConnectFieldInput>;
  connectOrCreate?: InputMaybe<CoursePriceCourseConnectOrCreateFieldInput>;
  create?: InputMaybe<CoursePriceCourseCreateFieldInput>;
  delete?: InputMaybe<CoursePriceCourseDeleteFieldInput>;
  disconnect?: InputMaybe<CoursePriceCourseDisconnectFieldInput>;
  update?: InputMaybe<CoursePriceCourseUpdateConnectionInput>;
  where?: InputMaybe<CoursePriceCourseConnectionWhere>;
};

export type CoursePriceCreateFieldInput = {
  node: CoursePriceCreateInput;
};

export type CoursePriceCreateInput = {
  course?: InputMaybe<CoursePriceCourseFieldInput>;
  currencyCodeISO?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type CoursePriceDeleteFieldInput = {
  delete?: InputMaybe<CoursePriceDeleteInput>;
  where?: InputMaybe<CoursePriceConnectionWhere>;
};

export type CoursePriceDeleteInput = {
  course?: InputMaybe<CoursePriceCourseDeleteFieldInput>;
};

export type CoursePriceDisconnectFieldInput = {
  disconnect?: InputMaybe<CoursePriceDisconnectInput>;
  where?: InputMaybe<CoursePriceConnectionWhere>;
};

export type CoursePriceDisconnectInput = {
  course?: InputMaybe<CoursePriceCourseDisconnectFieldInput>;
};

export type CoursePriceEdge = {
  __typename?: 'CoursePriceEdge';
  cursor: Scalars['String'];
  node: CoursePrice;
};

export type CoursePriceFieldInput = {
  connect?: InputMaybe<CoursePriceConnectFieldInput>;
  create?: InputMaybe<CoursePriceCreateFieldInput>;
};

export type CoursePriceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CoursePriceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CoursePriceNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CoursePriceNodeAggregationWhereInput>>;
  currencyCodeISO_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  currencyCodeISO_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  currencyCodeISO_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  currencyCodeISO_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  currencyCodeISO_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  currencyCodeISO_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  currencyCodeISO_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  price_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  price_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  price_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  price_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  price_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  price_MAX_GT?: InputMaybe<Scalars['Int']>;
  price_MAX_GTE?: InputMaybe<Scalars['Int']>;
  price_MAX_LT?: InputMaybe<Scalars['Int']>;
  price_MAX_LTE?: InputMaybe<Scalars['Int']>;
  price_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  price_MIN_GT?: InputMaybe<Scalars['Int']>;
  price_MIN_GTE?: InputMaybe<Scalars['Int']>;
  price_MIN_LT?: InputMaybe<Scalars['Int']>;
  price_MIN_LTE?: InputMaybe<Scalars['Int']>;
  price_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  price_SUM_GT?: InputMaybe<Scalars['Int']>;
  price_SUM_GTE?: InputMaybe<Scalars['Int']>;
  price_SUM_LT?: InputMaybe<Scalars['Int']>;
  price_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type CoursePriceOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CoursePriceSort objects to sort CoursePrices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CoursePriceSort>>;
};

export type CoursePriceRelationInput = {
  course?: InputMaybe<CoursePriceCourseCreateFieldInput>;
};

export type CoursePriceRelationship = {
  __typename?: 'CoursePriceRelationship';
  cursor: Scalars['String'];
  node: CoursePrice;
};

/** Fields to sort CoursePrices by. The order in which sorts are applied is not guaranteed when specifying many fields in one CoursePriceSort object. */
export type CoursePriceSort = {
  currencyCodeISO?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
};

export type CoursePriceUpdateConnectionInput = {
  node?: InputMaybe<CoursePriceUpdateInput>;
};

export type CoursePriceUpdateFieldInput = {
  connect?: InputMaybe<CoursePriceConnectFieldInput>;
  create?: InputMaybe<CoursePriceCreateFieldInput>;
  delete?: InputMaybe<CoursePriceDeleteFieldInput>;
  disconnect?: InputMaybe<CoursePriceDisconnectFieldInput>;
  update?: InputMaybe<CoursePriceUpdateConnectionInput>;
  where?: InputMaybe<CoursePriceConnectionWhere>;
};

export type CoursePriceUpdateInput = {
  course?: InputMaybe<CoursePriceCourseUpdateFieldInput>;
  currencyCodeISO?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  price_DECREMENT?: InputMaybe<Scalars['Int']>;
  price_INCREMENT?: InputMaybe<Scalars['Int']>;
};

export type CoursePriceWhere = {
  AND?: InputMaybe<Array<CoursePriceWhere>>;
  NOT?: InputMaybe<CoursePriceWhere>;
  OR?: InputMaybe<Array<CoursePriceWhere>>;
  course?: InputMaybe<CourseWhere>;
  courseAggregate?: InputMaybe<CoursePriceCourseAggregateInput>;
  courseConnection?: InputMaybe<CoursePriceCourseConnectionWhere>;
  courseConnection_NOT?: InputMaybe<CoursePriceCourseConnectionWhere>;
  course_NOT?: InputMaybe<CourseWhere>;
  currencyCodeISO?: InputMaybe<Scalars['String']>;
  currencyCodeISO_CONTAINS?: InputMaybe<Scalars['String']>;
  currencyCodeISO_ENDS_WITH?: InputMaybe<Scalars['String']>;
  currencyCodeISO_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currencyCodeISO_MATCHES?: InputMaybe<Scalars['String']>;
  currencyCodeISO_STARTS_WITH?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  price_GT?: InputMaybe<Scalars['Int']>;
  price_GTE?: InputMaybe<Scalars['Int']>;
  price_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  price_LT?: InputMaybe<Scalars['Int']>;
  price_LTE?: InputMaybe<Scalars['Int']>;
};

export type CoursePricesConnection = {
  __typename?: 'CoursePricesConnection';
  edges: Array<CoursePriceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CourseRelationInput = {
  languages?: InputMaybe<Array<CourseLanguagesCreateFieldInput>>;
  platform?: InputMaybe<CoursePlatformCreateFieldInput>;
  price?: InputMaybe<CoursePriceCreateFieldInput>;
  tags?: InputMaybe<Array<CourseTagsCreateFieldInput>>;
};

/** Fields to sort Courses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseSort object. */
export type CourseSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  difficulty?: InputMaybe<SortDirection>;
  externalRating?: InputMaybe<SortDirection>;
  externalRatingsCount?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type CourseTagsAggregateInput = {
  AND?: InputMaybe<Array<CourseTagsAggregateInput>>;
  NOT?: InputMaybe<CourseTagsAggregateInput>;
  OR?: InputMaybe<Array<CourseTagsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<CourseTagsEdgeAggregationWhereInput>;
  node?: InputMaybe<CourseTagsNodeAggregationWhereInput>;
};

export type CourseTagsConnectFieldInput = {
  connect?: InputMaybe<Array<TopicTagConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<TopicTagConnectWhere>;
};

export type CourseTagsConnectOrCreateFieldInput = {
  onCreate: CourseTagsConnectOrCreateFieldInputOnCreate;
  where: TopicTagConnectOrCreateWhere;
};

export type CourseTagsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: TopicTagOnCreateInput;
};

export type CourseTagsConnection = {
  __typename?: 'CourseTagsConnection';
  edges: Array<CourseTagsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CourseTagsConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<TopicTagSort>;
};

export type CourseTagsConnectionWhere = {
  AND?: InputMaybe<Array<CourseTagsConnectionWhere>>;
  NOT?: InputMaybe<CourseTagsConnectionWhere>;
  OR?: InputMaybe<Array<CourseTagsConnectionWhere>>;
  edge?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<TopicTagWhere>;
};

export type CourseTagsCreateFieldInput = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: TopicTagCreateInput;
};

export type CourseTagsDeleteFieldInput = {
  delete?: InputMaybe<TopicTagDeleteInput>;
  where?: InputMaybe<CourseTagsConnectionWhere>;
};

export type CourseTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
  where?: InputMaybe<CourseTagsConnectionWhere>;
};

export type CourseTagsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseTagsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseTagsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<CourseTagsEdgeAggregationWhereInput>>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MAX_GT?: InputMaybe<Scalars['Float']>;
  score_MAX_GTE?: InputMaybe<Scalars['Float']>;
  score_MAX_LT?: InputMaybe<Scalars['Float']>;
  score_MAX_LTE?: InputMaybe<Scalars['Float']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MIN_GT?: InputMaybe<Scalars['Float']>;
  score_MIN_GTE?: InputMaybe<Scalars['Float']>;
  score_MIN_LT?: InputMaybe<Scalars['Float']>;
  score_MIN_LTE?: InputMaybe<Scalars['Float']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  score_SUM_GT?: InputMaybe<Scalars['Float']>;
  score_SUM_GTE?: InputMaybe<Scalars['Float']>;
  score_SUM_LT?: InputMaybe<Scalars['Float']>;
  score_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type CourseTagsFieldInput = {
  connect?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CourseTagsCreateFieldInput>>;
};

export type CourseTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseTagsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseTagsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CourseTagsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type CourseTagsRelationship = IncludesTopic & {
  __typename?: 'CourseTagsRelationship';
  cursor: Scalars['String'];
  node: TopicTag;
  score?: Maybe<Scalars['Float']>;
};

export type CourseTagsUpdateConnectionInput = {
  edge?: InputMaybe<IncludesTopicUpdateInput>;
  node?: InputMaybe<TopicTagUpdateInput>;
};

export type CourseTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<CourseTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CourseTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseTagsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CourseTagsDisconnectFieldInput>>;
  update?: InputMaybe<CourseTagsUpdateConnectionInput>;
  where?: InputMaybe<CourseTagsConnectionWhere>;
};

export type CourseTopicTagTagsAggregationSelection = {
  __typename?: 'CourseTopicTagTagsAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<CourseTopicTagTagsEdgeAggregateSelection>;
  node?: Maybe<CourseTopicTagTagsNodeAggregateSelection>;
};

export type CourseTopicTagTagsEdgeAggregateSelection = {
  __typename?: 'CourseTopicTagTagsEdgeAggregateSelection';
  score: FloatAggregateSelectionNullable;
};

export type CourseTopicTagTagsNodeAggregateSelection = {
  __typename?: 'CourseTopicTagTagsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CourseUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CourseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  externalRating?: InputMaybe<Scalars['Float']>;
  externalRating_ADD?: InputMaybe<Scalars['Float']>;
  externalRating_DIVIDE?: InputMaybe<Scalars['Float']>;
  externalRating_MULTIPLY?: InputMaybe<Scalars['Float']>;
  externalRating_SUBTRACT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_DECREMENT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_INCREMENT?: InputMaybe<Scalars['Int']>;
  languages?: InputMaybe<Array<CourseLanguagesUpdateFieldInput>>;
  platform?: InputMaybe<CoursePlatformUpdateFieldInput>;
  price?: InputMaybe<CoursePriceUpdateFieldInput>;
  tags?: InputMaybe<Array<CourseTagsUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CourseWhere = {
  AND?: InputMaybe<Array<CourseWhere>>;
  NOT?: InputMaybe<CourseWhere>;
  OR?: InputMaybe<Array<CourseWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_MATCHES?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  difficulty_IN?: InputMaybe<Array<InputMaybe<Difficulty>>>;
  externalRating?: InputMaybe<Scalars['Float']>;
  externalRating_GT?: InputMaybe<Scalars['Float']>;
  externalRating_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  externalRating_LT?: InputMaybe<Scalars['Float']>;
  externalRating_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  externalRatingsCount_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_LTE?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  languagesAggregate?: InputMaybe<CourseLanguagesAggregateInput>;
  /** Return Courses where all of the related CourseLanguagesConnections match this filter */
  languagesConnection_ALL?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where none of the related CourseLanguagesConnections match this filter */
  languagesConnection_NONE?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where one of the related CourseLanguagesConnections match this filter */
  languagesConnection_SINGLE?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where some of the related CourseLanguagesConnections match this filter */
  languagesConnection_SOME?: InputMaybe<CourseLanguagesConnectionWhere>;
  /** Return Courses where all of the related Languages match this filter */
  languages_ALL?: InputMaybe<LanguageWhere>;
  /** Return Courses where none of the related Languages match this filter */
  languages_NONE?: InputMaybe<LanguageWhere>;
  /** Return Courses where one of the related Languages match this filter */
  languages_SINGLE?: InputMaybe<LanguageWhere>;
  /** Return Courses where some of the related Languages match this filter */
  languages_SOME?: InputMaybe<LanguageWhere>;
  platform?: InputMaybe<CoursePlatformWhere>;
  platformAggregate?: InputMaybe<CoursePlatformAggregateInput>;
  platformConnection?: InputMaybe<CoursePlatformConnectionWhere>;
  platformConnection_NOT?: InputMaybe<CoursePlatformConnectionWhere>;
  platform_NOT?: InputMaybe<CoursePlatformWhere>;
  price?: InputMaybe<CoursePriceWhere>;
  priceAggregate?: InputMaybe<CoursePriceAggregateInput>;
  priceConnection?: InputMaybe<CoursePriceConnectionWhere>;
  priceConnection_NOT?: InputMaybe<CoursePriceConnectionWhere>;
  price_NOT?: InputMaybe<CoursePriceWhere>;
  tagsAggregate?: InputMaybe<CourseTagsAggregateInput>;
  /** Return Courses where all of the related CourseTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where none of the related CourseTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where one of the related CourseTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where some of the related CourseTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<CourseTagsConnectionWhere>;
  /** Return Courses where all of the related TopicTags match this filter */
  tags_ALL?: InputMaybe<TopicTagWhere>;
  /** Return Courses where none of the related TopicTags match this filter */
  tags_NONE?: InputMaybe<TopicTagWhere>;
  /** Return Courses where one of the related TopicTags match this filter */
  tags_SINGLE?: InputMaybe<TopicTagWhere>;
  /** Return Courses where some of the related TopicTags match this filter */
  tags_SOME?: InputMaybe<TopicTagWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_CONTAINS?: InputMaybe<Scalars['String']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']>;
  title_IN?: InputMaybe<Array<Scalars['String']>>;
  title_MATCHES?: InputMaybe<Scalars['String']>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  url_CONTAINS?: InputMaybe<Scalars['String']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_IN?: InputMaybe<Array<Scalars['String']>>;
  url_MATCHES?: InputMaybe<Scalars['String']>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CoursesConnection = {
  __typename?: 'CoursesConnection';
  edges: Array<CourseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreateCoursePlatformsMutationResponse = {
  __typename?: 'CreateCoursePlatformsMutationResponse';
  coursePlatforms: Array<CoursePlatform>;
  info: CreateInfo;
};

export type CreateCoursePricesMutationResponse = {
  __typename?: 'CreateCoursePricesMutationResponse';
  coursePrices: Array<CoursePrice>;
  info: CreateInfo;
};

export type CreateCoursesMutationResponse = {
  __typename?: 'CreateCoursesMutationResponse';
  courses: Array<Course>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateLanguagesMutationResponse = {
  __typename?: 'CreateLanguagesMutationResponse';
  info: CreateInfo;
  languages: Array<Language>;
};

export type CreateRoadmapInput = {
  countryCodeISO: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  difficulty: Scalars['String'];
  edges: Array<RoadmapEdgeInput>;
  nodes: Array<RoadmapNodeInput>;
  tagsIds?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreateRoadmapNodesMutationResponse = {
  __typename?: 'CreateRoadmapNodesMutationResponse';
  info: CreateInfo;
  roadmapNodes: Array<RoadmapNode>;
};

export type CreateTopicTagsMutationResponse = {
  __typename?: 'CreateTopicTagsMutationResponse';
  info: CreateInfo;
  topicTags: Array<TopicTag>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']>;
  min?: Maybe<Scalars['DateTime']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export enum Difficulty {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE',
}

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float'];
  max: Scalars['Float'];
  min: Scalars['Float'];
  sum: Scalars['Float'];
};

export type FloatAggregateSelectionNullable = {
  __typename?: 'FloatAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** The input for filtering a float */
export type FloatWhere = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type HasChild = {
  id: Scalars['String'];
  targetHandle?: Maybe<Scalars['String']>;
};

export type HasChildCreateInput = {
  id: Scalars['String'];
  targetHandle?: InputMaybe<Scalars['String']>;
};

export type HasChildSort = {
  id?: InputMaybe<SortDirection>;
  targetHandle?: InputMaybe<SortDirection>;
};

export type HasChildUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  targetHandle?: InputMaybe<Scalars['String']>;
};

export type HasChildWhere = {
  AND?: InputMaybe<Array<HasChildWhere>>;
  NOT?: InputMaybe<HasChildWhere>;
  OR?: InputMaybe<Array<HasChildWhere>>;
  id?: InputMaybe<Scalars['String']>;
  id_CONTAINS?: InputMaybe<Scalars['String']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']>;
  id_IN?: InputMaybe<Array<Scalars['String']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']>;
  targetHandle?: InputMaybe<Scalars['String']>;
  targetHandle_CONTAINS?: InputMaybe<Scalars['String']>;
  targetHandle_ENDS_WITH?: InputMaybe<Scalars['String']>;
  targetHandle_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  targetHandle_MATCHES?: InputMaybe<Scalars['String']>;
  targetHandle_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IncludesTopic = {
  score?: Maybe<Scalars['Float']>;
};

export type IncludesTopicCreateInput = {
  score?: InputMaybe<Scalars['Float']>;
};

export type IncludesTopicSort = {
  score?: InputMaybe<SortDirection>;
};

export type IncludesTopicUpdateInput = {
  score?: InputMaybe<Scalars['Float']>;
  score_ADD?: InputMaybe<Scalars['Float']>;
  score_DIVIDE?: InputMaybe<Scalars['Float']>;
  score_MULTIPLY?: InputMaybe<Scalars['Float']>;
  score_SUBTRACT?: InputMaybe<Scalars['Float']>;
};

export type IncludesTopicWhere = {
  AND?: InputMaybe<Array<IncludesTopicWhere>>;
  NOT?: InputMaybe<IncludesTopicWhere>;
  OR?: InputMaybe<Array<IncludesTopicWhere>>;
  score?: InputMaybe<Scalars['Float']>;
  score_GT?: InputMaybe<Scalars['Float']>;
  score_GTE?: InputMaybe<Scalars['Float']>;
  score_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  score_LT?: InputMaybe<Scalars['Float']>;
  score_LTE?: InputMaybe<Scalars['Float']>;
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};

export type Language = {
  __typename?: 'Language';
  countryCodeISO: Scalars['String'];
  courses: Array<Course>;
  coursesAggregate?: Maybe<LanguageCourseCoursesAggregationSelection>;
  coursesConnection: LanguageCoursesConnection;
  name: Scalars['String'];
};

export type LanguageCoursesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type LanguageCoursesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseWhere>;
};

export type LanguageCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LanguageCoursesConnectionSort>>;
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
};

export type LanguageAggregateSelection = {
  __typename?: 'LanguageAggregateSelection';
  count: Scalars['Int'];
  countryCodeISO: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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

export type LanguageCourseCoursesAggregationSelection = {
  __typename?: 'LanguageCourseCoursesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<LanguageCourseCoursesNodeAggregateSelection>;
};

export type LanguageCourseCoursesNodeAggregateSelection = {
  __typename?: 'LanguageCourseCoursesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type LanguageCoursesAggregateInput = {
  AND?: InputMaybe<Array<LanguageCoursesAggregateInput>>;
  NOT?: InputMaybe<LanguageCoursesAggregateInput>;
  OR?: InputMaybe<Array<LanguageCoursesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<LanguageCoursesNodeAggregationWhereInput>;
};

export type LanguageCoursesConnectFieldInput = {
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseConnectWhere>;
};

export type LanguageCoursesConnectOrCreateFieldInput = {
  onCreate: LanguageCoursesConnectOrCreateFieldInputOnCreate;
  where: CourseConnectOrCreateWhere;
};

export type LanguageCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type LanguageCoursesConnection = {
  __typename?: 'LanguageCoursesConnection';
  edges: Array<LanguageCoursesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LanguageCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type LanguageCoursesConnectionWhere = {
  AND?: InputMaybe<Array<LanguageCoursesConnectionWhere>>;
  NOT?: InputMaybe<LanguageCoursesConnectionWhere>;
  OR?: InputMaybe<Array<LanguageCoursesConnectionWhere>>;
  node?: InputMaybe<CourseWhere>;
};

export type LanguageCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type LanguageCoursesDeleteFieldInput = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
};

export type LanguageCoursesDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseDisconnectInput>;
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
};

export type LanguageCoursesFieldInput = {
  connect?: InputMaybe<Array<LanguageCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LanguageCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LanguageCoursesCreateFieldInput>>;
};

export type LanguageCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LanguageCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LanguageCoursesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LanguageCoursesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type LanguageCoursesRelationship = {
  __typename?: 'LanguageCoursesRelationship';
  cursor: Scalars['String'];
  node: Course;
};

export type LanguageCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type LanguageCoursesUpdateFieldInput = {
  connect?: InputMaybe<Array<LanguageCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LanguageCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LanguageCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<LanguageCoursesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LanguageCoursesDisconnectFieldInput>>;
  update?: InputMaybe<LanguageCoursesUpdateConnectionInput>;
  where?: InputMaybe<LanguageCoursesConnectionWhere>;
};

export type LanguageCreateInput = {
  countryCodeISO: Scalars['String'];
  courses?: InputMaybe<LanguageCoursesFieldInput>;
  name: Scalars['String'];
};

export type LanguageDeleteInput = {
  courses?: InputMaybe<Array<LanguageCoursesDeleteFieldInput>>;
};

export type LanguageDisconnectInput = {
  courses?: InputMaybe<Array<LanguageCoursesDisconnectFieldInput>>;
};

export type LanguageEdge = {
  __typename?: 'LanguageEdge';
  cursor: Scalars['String'];
  node: Language;
};

export type LanguageOnCreateInput = {
  countryCodeISO: Scalars['String'];
  name: Scalars['String'];
};

export type LanguageOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LanguageSort objects to sort Languages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LanguageSort>>;
};

export type LanguageRelationInput = {
  courses?: InputMaybe<Array<LanguageCoursesCreateFieldInput>>;
};

/** Fields to sort Languages by. The order in which sorts are applied is not guaranteed when specifying many fields in one LanguageSort object. */
export type LanguageSort = {
  countryCodeISO?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type LanguageUniqueWhere = {
  countryCodeISO?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LanguageUpdateInput = {
  countryCodeISO?: InputMaybe<Scalars['String']>;
  courses?: InputMaybe<Array<LanguageCoursesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type LanguageWhere = {
  AND?: InputMaybe<Array<LanguageWhere>>;
  NOT?: InputMaybe<LanguageWhere>;
  OR?: InputMaybe<Array<LanguageWhere>>;
  countryCodeISO?: InputMaybe<Scalars['String']>;
  countryCodeISO_CONTAINS?: InputMaybe<Scalars['String']>;
  countryCodeISO_ENDS_WITH?: InputMaybe<Scalars['String']>;
  countryCodeISO_IN?: InputMaybe<Array<Scalars['String']>>;
  countryCodeISO_MATCHES?: InputMaybe<Scalars['String']>;
  countryCodeISO_STARTS_WITH?: InputMaybe<Scalars['String']>;
  coursesAggregate?: InputMaybe<LanguageCoursesAggregateInput>;
  /** Return Languages where all of the related LanguageCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where none of the related LanguageCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where one of the related LanguageCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where some of the related LanguageCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<LanguageCoursesConnectionWhere>;
  /** Return Languages where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return Languages where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return Languages where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return Languages where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_MATCHES?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type LanguagesConnection = {
  __typename?: 'LanguagesConnection';
  edges: Array<LanguageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCoursePlatforms: CreateCoursePlatformsMutationResponse;
  createCoursePrices: CreateCoursePricesMutationResponse;
  createCourses: CreateCoursesMutationResponse;
  createLanguages: CreateLanguagesMutationResponse;
  createRoadmap: Scalars['Boolean'];
  createRoadmapNodes: CreateRoadmapNodesMutationResponse;
  createTopicTags: CreateTopicTagsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteCoursePlatforms: DeleteInfo;
  deleteCoursePrices: DeleteInfo;
  deleteCourses: DeleteInfo;
  deleteLanguages: DeleteInfo;
  deleteRoadmapNodes: DeleteInfo;
  deleteRoadmaps: DeleteInfo;
  deleteTopicTags: DeleteInfo;
  deleteUsers: DeleteInfo;
  /** Refresh user auth session */
  refreshSession: AuthSessionResponse;
  /** Sign in existing user */
  signIn: AuthSessionWithUserResponse;
  /** Sign up new common user */
  signUp: AuthSessionWithUserResponse;
  updateCoursePlatforms: UpdateCoursePlatformsMutationResponse;
  updateCoursePrices: UpdateCoursePricesMutationResponse;
  updateCourses: UpdateCoursesMutationResponse;
  updateLanguages: UpdateLanguagesMutationResponse;
  updateRoadmapNodes: UpdateRoadmapNodesMutationResponse;
  updateRoadmaps: UpdateRoadmapsMutationResponse;
  updateTopicTags: UpdateTopicTagsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateCoursePlatformsArgs = {
  input: Array<CoursePlatformCreateInput>;
};

export type MutationCreateCoursePricesArgs = {
  input: Array<CoursePriceCreateInput>;
};

export type MutationCreateCoursesArgs = {
  input: Array<CourseCreateInput>;
};

export type MutationCreateLanguagesArgs = {
  input: Array<LanguageCreateInput>;
};

export type MutationCreateRoadmapArgs = {
  data: CreateRoadmapInput;
};

export type MutationCreateRoadmapNodesArgs = {
  input: Array<RoadmapNodeCreateInput>;
};

export type MutationCreateTopicTagsArgs = {
  input: Array<TopicTagCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteCoursePlatformsArgs = {
  delete?: InputMaybe<CoursePlatformDeleteInput>;
  where?: InputMaybe<CoursePlatformWhere>;
};

export type MutationDeleteCoursePricesArgs = {
  delete?: InputMaybe<CoursePriceDeleteInput>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type MutationDeleteCoursesArgs = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<CourseWhere>;
};

export type MutationDeleteLanguagesArgs = {
  delete?: InputMaybe<LanguageDeleteInput>;
  where?: InputMaybe<LanguageWhere>;
};

export type MutationDeleteRoadmapNodesArgs = {
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type MutationDeleteRoadmapsArgs = {
  delete?: InputMaybe<RoadmapDeleteInput>;
  where?: InputMaybe<RoadmapWhere>;
};

export type MutationDeleteTopicTagsArgs = {
  delete?: InputMaybe<TopicTagDeleteInput>;
  where?: InputMaybe<TopicTagWhere>;
};

export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};

export type MutationRefreshSessionArgs = {
  refreshToken: Scalars['String'];
};

export type MutationSignInArgs = {
  data: UserSignInInput;
};

export type MutationSignUpArgs = {
  data: UserSignUpInput;
};

export type MutationUpdateCoursePlatformsArgs = {
  connect?: InputMaybe<CoursePlatformConnectInput>;
  connectOrCreate?: InputMaybe<CoursePlatformConnectOrCreateInput>;
  create?: InputMaybe<CoursePlatformRelationInput>;
  delete?: InputMaybe<CoursePlatformDeleteInput>;
  disconnect?: InputMaybe<CoursePlatformDisconnectInput>;
  update?: InputMaybe<CoursePlatformUpdateInput>;
  where?: InputMaybe<CoursePlatformWhere>;
};

export type MutationUpdateCoursePricesArgs = {
  connect?: InputMaybe<CoursePriceConnectInput>;
  connectOrCreate?: InputMaybe<CoursePriceConnectOrCreateInput>;
  create?: InputMaybe<CoursePriceRelationInput>;
  delete?: InputMaybe<CoursePriceDeleteInput>;
  disconnect?: InputMaybe<CoursePriceDisconnectInput>;
  update?: InputMaybe<CoursePriceUpdateInput>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type MutationUpdateCoursesArgs = {
  connect?: InputMaybe<CourseConnectInput>;
  connectOrCreate?: InputMaybe<CourseConnectOrCreateInput>;
  create?: InputMaybe<CourseRelationInput>;
  delete?: InputMaybe<CourseDeleteInput>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
  update?: InputMaybe<CourseUpdateInput>;
  where?: InputMaybe<CourseWhere>;
};

export type MutationUpdateLanguagesArgs = {
  connect?: InputMaybe<LanguageConnectInput>;
  connectOrCreate?: InputMaybe<LanguageConnectOrCreateInput>;
  create?: InputMaybe<LanguageRelationInput>;
  delete?: InputMaybe<LanguageDeleteInput>;
  disconnect?: InputMaybe<LanguageDisconnectInput>;
  update?: InputMaybe<LanguageUpdateInput>;
  where?: InputMaybe<LanguageWhere>;
};

export type MutationUpdateRoadmapNodesArgs = {
  connect?: InputMaybe<RoadmapNodeConnectInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeConnectOrCreateInput>;
  create?: InputMaybe<RoadmapNodeRelationInput>;
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
  update?: InputMaybe<RoadmapNodeUpdateInput>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type MutationUpdateRoadmapsArgs = {
  connect?: InputMaybe<RoadmapConnectInput>;
  connectOrCreate?: InputMaybe<RoadmapConnectOrCreateInput>;
  create?: InputMaybe<RoadmapRelationInput>;
  delete?: InputMaybe<RoadmapDeleteInput>;
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
  update?: InputMaybe<RoadmapUpdateInput>;
  where?: InputMaybe<RoadmapWhere>;
};

export type MutationUpdateTopicTagsArgs = {
  connect?: InputMaybe<TopicTagConnectInput>;
  connectOrCreate?: InputMaybe<TopicTagConnectOrCreateInput>;
  create?: InputMaybe<TopicTagRelationInput>;
  delete?: InputMaybe<TopicTagDeleteInput>;
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
  update?: InputMaybe<TopicTagUpdateInput>;
  where?: InputMaybe<TopicTagWhere>;
};

export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  coursePlatforms: Array<CoursePlatform>;
  coursePlatformsAggregate: CoursePlatformAggregateSelection;
  coursePlatformsConnection: CoursePlatformsConnection;
  coursePrices: Array<CoursePrice>;
  coursePricesAggregate: CoursePriceAggregateSelection;
  coursePricesConnection: CoursePricesConnection;
  courses: Array<Course>;
  coursesAggregate: CourseAggregateSelection;
  coursesConnection: CoursesConnection;
  coursesFulltextCourseInfo: Array<CourseFulltextResult>;
  currentUser: UserResponse;
  languages: Array<Language>;
  languagesAggregate: LanguageAggregateSelection;
  languagesConnection: LanguagesConnection;
  roadmapNodes: Array<RoadmapNode>;
  roadmapNodesAggregate: RoadmapNodeAggregateSelection;
  roadmapNodesConnection: RoadmapNodesConnection;
  roadmaps: Array<Roadmap>;
  roadmapsAggregate: RoadmapAggregateSelection;
  roadmapsConnection: RoadmapsConnection;
  roadmapsFulltextRoadmapInfo: Array<RoadmapFulltextResult>;
  topicTags: Array<TopicTag>;
  topicTagsAggregate: TopicTagAggregateSelection;
  topicTagsConnection: TopicTagsConnection;
  userRecommendedCourses?: Maybe<Array<Course>>;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryCoursePlatformsArgs = {
  options?: InputMaybe<CoursePlatformOptions>;
  where?: InputMaybe<CoursePlatformWhere>;
};

export type QueryCoursePlatformsAggregateArgs = {
  where?: InputMaybe<CoursePlatformWhere>;
};

export type QueryCoursePlatformsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CoursePlatformSort>>>;
  where?: InputMaybe<CoursePlatformWhere>;
};

export type QueryCoursePricesArgs = {
  options?: InputMaybe<CoursePriceOptions>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type QueryCoursePricesAggregateArgs = {
  where?: InputMaybe<CoursePriceWhere>;
};

export type QueryCoursePricesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CoursePriceSort>>>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type QueryCoursesArgs = {
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type QueryCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
};

export type QueryCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CourseSort>>>;
  where?: InputMaybe<CourseWhere>;
};

export type QueryCoursesFulltextCourseInfoArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  phrase: Scalars['String'];
  sort?: InputMaybe<Array<CourseFulltextSort>>;
  where?: InputMaybe<CourseFulltextWhere>;
};

export type QueryLanguagesArgs = {
  options?: InputMaybe<LanguageOptions>;
  where?: InputMaybe<LanguageWhere>;
};

export type QueryLanguagesAggregateArgs = {
  where?: InputMaybe<LanguageWhere>;
};

export type QueryLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<LanguageSort>>>;
  where?: InputMaybe<LanguageWhere>;
};

export type QueryRoadmapNodesArgs = {
  options?: InputMaybe<RoadmapNodeOptions>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type QueryRoadmapNodesAggregateArgs = {
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type QueryRoadmapNodesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<RoadmapNodeSort>>>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type QueryRoadmapsArgs = {
  options?: InputMaybe<RoadmapOptions>;
  where?: InputMaybe<RoadmapWhere>;
};

export type QueryRoadmapsAggregateArgs = {
  where?: InputMaybe<RoadmapWhere>;
};

export type QueryRoadmapsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<RoadmapSort>>>;
  where?: InputMaybe<RoadmapWhere>;
};

export type QueryRoadmapsFulltextRoadmapInfoArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  phrase: Scalars['String'];
  sort?: InputMaybe<Array<RoadmapFulltextSort>>;
  where?: InputMaybe<RoadmapFulltextWhere>;
};

export type QueryTopicTagsArgs = {
  options?: InputMaybe<TopicTagOptions>;
  where?: InputMaybe<TopicTagWhere>;
};

export type QueryTopicTagsAggregateArgs = {
  where?: InputMaybe<TopicTagWhere>;
};

export type QueryTopicTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TopicTagSort>>>;
  where?: InputMaybe<TopicTagWhere>;
};

export type QueryUserRecommendedCoursesArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export type Roadmap = {
  __typename?: 'Roadmap';
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdByAggregate?: Maybe<RoadmapUserCreatedByAggregationSelection>;
  createdByConnection: RoadmapCreatedByConnection;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Difficulty>;
  edges?: Maybe<Array<RoadmapEdge>>;
  id: Scalars['ID'];
  languages: Array<Language>;
  languagesAggregate?: Maybe<RoadmapLanguageLanguagesAggregationSelection>;
  languagesConnection: RoadmapLanguagesConnection;
  node: RoadmapNode;
  nodeAggregate?: Maybe<RoadmapRoadmapNodeNodeAggregationSelection>;
  nodeConnection: RoadmapNodeConnection;
  nodes?: Maybe<Array<RoadmapNode>>;
  tags: Array<TopicTag>;
  tagsAggregate?: Maybe<RoadmapTopicTagTagsAggregationSelection>;
  tagsConnection: RoadmapTagsConnection;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoadmapCreatedByArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type RoadmapCreatedByAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UserWhere>;
};

export type RoadmapCreatedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapCreatedByConnectionSort>>;
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
};

export type RoadmapLanguagesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LanguageOptions>;
  where?: InputMaybe<LanguageWhere>;
};

export type RoadmapLanguagesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LanguageWhere>;
};

export type RoadmapLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapLanguagesConnectionSort>>;
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
};

export type RoadmapNodeArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoadmapNodeOptions>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapNodeConnectionSort>>;
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
};

export type RoadmapTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TopicTagOptions>;
  where?: InputMaybe<TopicTagWhere>;
};

export type RoadmapTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TopicTagWhere>;
};

export type RoadmapTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapTagsConnectionSort>>;
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
};

export type RoadmapAggregateSelection = {
  __typename?: 'RoadmapAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RoadmapConnectInput = {
  createdBy?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
  languages?: InputMaybe<Array<RoadmapLanguagesConnectFieldInput>>;
  node?: InputMaybe<RoadmapNodeConnectFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
};

export type RoadmapConnectOrCreateInput = {
  createdBy?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
  languages?: InputMaybe<Array<RoadmapLanguagesConnectOrCreateFieldInput>>;
  node?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
};

export type RoadmapConnectOrCreateWhere = {
  node: RoadmapUniqueWhere;
};

export type RoadmapConnectWhere = {
  node: RoadmapWhere;
};

export type RoadmapCreateInput = {
  createdBy?: InputMaybe<RoadmapCreatedByFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  languages?: InputMaybe<RoadmapLanguagesFieldInput>;
  node?: InputMaybe<RoadmapNodeFieldInput>;
  tags?: InputMaybe<RoadmapTagsFieldInput>;
  title: Scalars['String'];
};

export type RoadmapCreatedByAggregateInput = {
  AND?: InputMaybe<Array<RoadmapCreatedByAggregateInput>>;
  NOT?: InputMaybe<RoadmapCreatedByAggregateInput>;
  OR?: InputMaybe<Array<RoadmapCreatedByAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RoadmapCreatedByNodeAggregationWhereInput>;
};

export type RoadmapCreatedByConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<UserConnectWhere>;
};

export type RoadmapCreatedByConnectOrCreateFieldInput = {
  onCreate: RoadmapCreatedByConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type RoadmapCreatedByConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type RoadmapCreatedByConnection = {
  __typename?: 'RoadmapCreatedByConnection';
  edges: Array<RoadmapCreatedByRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapCreatedByConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type RoadmapCreatedByConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapCreatedByConnectionWhere>>;
  NOT?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapCreatedByConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type RoadmapCreatedByCreateFieldInput = {
  node: UserCreateInput;
};

export type RoadmapCreatedByDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
};

export type RoadmapCreatedByDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
};

export type RoadmapCreatedByFieldInput = {
  connect?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
  create?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
};

export type RoadmapCreatedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapCreatedByNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapCreatedByNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapCreatedByNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type RoadmapCreatedByRelationship = {
  __typename?: 'RoadmapCreatedByRelationship';
  cursor: Scalars['String'];
  node: User;
};

export type RoadmapCreatedByUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type RoadmapCreatedByUpdateFieldInput = {
  connect?: InputMaybe<RoadmapCreatedByConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapCreatedByConnectOrCreateFieldInput>;
  create?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
  delete?: InputMaybe<RoadmapCreatedByDeleteFieldInput>;
  disconnect?: InputMaybe<RoadmapCreatedByDisconnectFieldInput>;
  update?: InputMaybe<RoadmapCreatedByUpdateConnectionInput>;
  where?: InputMaybe<RoadmapCreatedByConnectionWhere>;
};

export type RoadmapDeleteInput = {
  createdBy?: InputMaybe<RoadmapCreatedByDeleteFieldInput>;
  languages?: InputMaybe<Array<RoadmapLanguagesDeleteFieldInput>>;
  node?: InputMaybe<RoadmapNodeDeleteFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsDeleteFieldInput>>;
};

export type RoadmapDisconnectInput = {
  createdBy?: InputMaybe<RoadmapCreatedByDisconnectFieldInput>;
  languages?: InputMaybe<Array<RoadmapLanguagesDisconnectFieldInput>>;
  node?: InputMaybe<RoadmapNodeDisconnectFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsDisconnectFieldInput>>;
};

export type RoadmapEdge = {
  __typename?: 'RoadmapEdge';
  id: Scalars['String'];
  source: Scalars['String'];
  target: Scalars['String'];
  targetHandle?: Maybe<Scalars['String']>;
};

export type RoadmapEdgeInput = {
  id: Scalars['ID'];
  source: Scalars['String'];
  target: Scalars['String'];
  targetHandle?: InputMaybe<Scalars['String']>;
};

export type RoadmapFulltext = {
  RoadmapInfo?: InputMaybe<RoadmapRoadmapInfoFulltext>;
};

/** The result of a fulltext search on an index of Roadmap */
export type RoadmapFulltextResult = {
  __typename?: 'RoadmapFulltextResult';
  roadmap: Roadmap;
  score: Scalars['Float'];
};

/** The input for sorting a fulltext query on an index of Roadmap */
export type RoadmapFulltextSort = {
  roadmap?: InputMaybe<RoadmapSort>;
  score?: InputMaybe<SortDirection>;
};

/** The input for filtering a fulltext query on an index of Roadmap */
export type RoadmapFulltextWhere = {
  roadmap?: InputMaybe<RoadmapWhere>;
  score?: InputMaybe<FloatWhere>;
};

export type RoadmapLanguageLanguagesAggregationSelection = {
  __typename?: 'RoadmapLanguageLanguagesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RoadmapLanguageLanguagesNodeAggregateSelection>;
};

export type RoadmapLanguageLanguagesNodeAggregateSelection = {
  __typename?: 'RoadmapLanguageLanguagesNodeAggregateSelection';
  countryCodeISO: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RoadmapLanguagesAggregateInput = {
  AND?: InputMaybe<Array<RoadmapLanguagesAggregateInput>>;
  NOT?: InputMaybe<RoadmapLanguagesAggregateInput>;
  OR?: InputMaybe<Array<RoadmapLanguagesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RoadmapLanguagesNodeAggregationWhereInput>;
};

export type RoadmapLanguagesConnectFieldInput = {
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<LanguageConnectWhere>;
};

export type RoadmapLanguagesConnectOrCreateFieldInput = {
  onCreate: RoadmapLanguagesConnectOrCreateFieldInputOnCreate;
  where: LanguageConnectOrCreateWhere;
};

export type RoadmapLanguagesConnectOrCreateFieldInputOnCreate = {
  node: LanguageOnCreateInput;
};

export type RoadmapLanguagesConnection = {
  __typename?: 'RoadmapLanguagesConnection';
  edges: Array<RoadmapLanguagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapLanguagesConnectionSort = {
  node?: InputMaybe<LanguageSort>;
};

export type RoadmapLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapLanguagesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapLanguagesConnectionWhere>>;
  node?: InputMaybe<LanguageWhere>;
};

export type RoadmapLanguagesCreateFieldInput = {
  node: LanguageCreateInput;
};

export type RoadmapLanguagesDeleteFieldInput = {
  delete?: InputMaybe<LanguageDeleteInput>;
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
};

export type RoadmapLanguagesDisconnectFieldInput = {
  disconnect?: InputMaybe<LanguageDisconnectInput>;
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
};

export type RoadmapLanguagesFieldInput = {
  connect?: InputMaybe<Array<RoadmapLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapLanguagesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapLanguagesCreateFieldInput>>;
};

export type RoadmapLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapLanguagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapLanguagesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapLanguagesNodeAggregationWhereInput>>;
  countryCodeISO_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  countryCodeISO_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  countryCodeISO_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  countryCodeISO_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapLanguagesRelationship = {
  __typename?: 'RoadmapLanguagesRelationship';
  cursor: Scalars['String'];
  node: Language;
};

export type RoadmapLanguagesUpdateConnectionInput = {
  node?: InputMaybe<LanguageUpdateInput>;
};

export type RoadmapLanguagesUpdateFieldInput = {
  connect?: InputMaybe<Array<RoadmapLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapLanguagesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapLanguagesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapLanguagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapLanguagesDisconnectFieldInput>>;
  update?: InputMaybe<RoadmapLanguagesUpdateConnectionInput>;
  where?: InputMaybe<RoadmapLanguagesConnectionWhere>;
};

export type RoadmapNode = {
  __typename?: 'RoadmapNode';
  childNodes: Array<RoadmapNode>;
  childNodesAggregate?: Maybe<RoadmapNodeRoadmapNodeChildNodesAggregationSelection>;
  childNodesConnection: RoadmapNodeChildNodesConnection;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parentNodes: Array<RoadmapNode>;
  parentNodesAggregate?: Maybe<RoadmapNodeRoadmapNodeParentNodesAggregationSelection>;
  parentNodesConnection: RoadmapNodeParentNodesConnection;
  positionX: Scalars['Float'];
  positionY: Scalars['Float'];
  roadmap?: Maybe<Roadmap>;
  roadmapAggregate?: Maybe<RoadmapNodeRoadmapRoadmapAggregationSelection>;
  roadmapConnection: RoadmapNodeRoadmapConnection;
  suggestedCourses: Array<Course>;
  suggestedCoursesAggregate?: Maybe<RoadmapNodeCourseSuggestedCoursesAggregationSelection>;
  suggestedCoursesConnection: RoadmapNodeSuggestedCoursesConnection;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type RoadmapNodeChildNodesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoadmapNodeOptions>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeChildNodesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeChildNodesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapNodeChildNodesConnectionSort>>;
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
};

export type RoadmapNodeParentNodesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoadmapNodeOptions>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeParentNodesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeParentNodesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapNodeParentNodesConnectionSort>>;
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
};

export type RoadmapNodeRoadmapArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoadmapOptions>;
  where?: InputMaybe<RoadmapWhere>;
};

export type RoadmapNodeRoadmapAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoadmapWhere>;
};

export type RoadmapNodeRoadmapConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapNodeRoadmapConnectionSort>>;
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
};

export type RoadmapNodeSuggestedCoursesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type RoadmapNodeSuggestedCoursesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseWhere>;
};

export type RoadmapNodeSuggestedCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectionSort>>;
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
};

export type RoadmapNodeAggregateInput = {
  AND?: InputMaybe<Array<RoadmapNodeAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeAggregateInput>;
  OR?: InputMaybe<Array<RoadmapNodeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RoadmapNodeNodeAggregationWhereInput>;
};

export type RoadmapNodeAggregateSelection = {
  __typename?: 'RoadmapNodeAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNonNullable;
};

export type RoadmapNodeChildNodesAggregateInput = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesAggregateInput>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<RoadmapNodeChildNodesEdgeAggregationWhereInput>;
  node?: InputMaybe<RoadmapNodeChildNodesNodeAggregationWhereInput>;
};

export type RoadmapNodeChildNodesConnectFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeConnectInput>>;
  edge: HasChildCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoadmapNodeConnectWhere>;
};

export type RoadmapNodeChildNodesConnectOrCreateFieldInput = {
  onCreate: RoadmapNodeChildNodesConnectOrCreateFieldInputOnCreate;
  where: RoadmapNodeConnectOrCreateWhere;
};

export type RoadmapNodeChildNodesConnectOrCreateFieldInputOnCreate = {
  edge: HasChildCreateInput;
  node: RoadmapNodeOnCreateInput;
};

export type RoadmapNodeChildNodesConnection = {
  __typename?: 'RoadmapNodeChildNodesConnection';
  edges: Array<RoadmapNodeChildNodesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapNodeChildNodesConnectionSort = {
  edge?: InputMaybe<HasChildSort>;
  node?: InputMaybe<RoadmapNodeSort>;
};

export type RoadmapNodeChildNodesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesConnectionWhere>>;
  edge?: InputMaybe<HasChildWhere>;
  node?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeChildNodesCreateFieldInput = {
  edge: HasChildCreateInput;
  node: RoadmapNodeCreateInput;
};

export type RoadmapNodeChildNodesDeleteFieldInput = {
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
};

export type RoadmapNodeChildNodesDisconnectFieldInput = {
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
};

export type RoadmapNodeChildNodesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesEdgeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  targetHandle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  targetHandle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapNodeChildNodesFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeChildNodesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapNodeChildNodesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeChildNodesCreateFieldInput>>;
};

export type RoadmapNodeChildNodesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeChildNodesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeChildNodesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeChildNodesNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  positionX_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  positionX_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_MAX_GT?: InputMaybe<Scalars['Float']>;
  positionX_MAX_GTE?: InputMaybe<Scalars['Float']>;
  positionX_MAX_LT?: InputMaybe<Scalars['Float']>;
  positionX_MAX_LTE?: InputMaybe<Scalars['Float']>;
  positionX_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_MIN_GT?: InputMaybe<Scalars['Float']>;
  positionX_MIN_GTE?: InputMaybe<Scalars['Float']>;
  positionX_MIN_LT?: InputMaybe<Scalars['Float']>;
  positionX_MIN_LTE?: InputMaybe<Scalars['Float']>;
  positionX_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_SUM_GT?: InputMaybe<Scalars['Float']>;
  positionX_SUM_GTE?: InputMaybe<Scalars['Float']>;
  positionX_SUM_LT?: InputMaybe<Scalars['Float']>;
  positionX_SUM_LTE?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  positionY_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_MAX_GT?: InputMaybe<Scalars['Float']>;
  positionY_MAX_GTE?: InputMaybe<Scalars['Float']>;
  positionY_MAX_LT?: InputMaybe<Scalars['Float']>;
  positionY_MAX_LTE?: InputMaybe<Scalars['Float']>;
  positionY_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_MIN_GT?: InputMaybe<Scalars['Float']>;
  positionY_MIN_GTE?: InputMaybe<Scalars['Float']>;
  positionY_MIN_LT?: InputMaybe<Scalars['Float']>;
  positionY_MIN_LTE?: InputMaybe<Scalars['Float']>;
  positionY_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_SUM_GT?: InputMaybe<Scalars['Float']>;
  positionY_SUM_GTE?: InputMaybe<Scalars['Float']>;
  positionY_SUM_LT?: InputMaybe<Scalars['Float']>;
  positionY_SUM_LTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapNodeChildNodesRelationship = HasChild & {
  __typename?: 'RoadmapNodeChildNodesRelationship';
  cursor: Scalars['String'];
  id: Scalars['String'];
  node: RoadmapNode;
  targetHandle?: Maybe<Scalars['String']>;
};

export type RoadmapNodeChildNodesUpdateConnectionInput = {
  edge?: InputMaybe<HasChildUpdateInput>;
  node?: InputMaybe<RoadmapNodeUpdateInput>;
};

export type RoadmapNodeChildNodesUpdateFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeChildNodesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapNodeChildNodesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeChildNodesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapNodeChildNodesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapNodeChildNodesDisconnectFieldInput>>;
  update?: InputMaybe<RoadmapNodeChildNodesUpdateConnectionInput>;
  where?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
};

export type RoadmapNodeConnectFieldInput = {
  connect?: InputMaybe<RoadmapNodeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoadmapNodeConnectWhere>;
};

export type RoadmapNodeConnectInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesConnectFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesConnectFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapConnectFieldInput>;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectFieldInput>>;
};

export type RoadmapNodeConnectOrCreateFieldInput = {
  onCreate: RoadmapNodeConnectOrCreateFieldInputOnCreate;
  where: RoadmapNodeConnectOrCreateWhere;
};

export type RoadmapNodeConnectOrCreateFieldInputOnCreate = {
  node: RoadmapNodeOnCreateInput;
};

export type RoadmapNodeConnectOrCreateInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesConnectOrCreateFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesConnectOrCreateFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapConnectOrCreateFieldInput>;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput>>;
};

export type RoadmapNodeConnectOrCreateWhere = {
  node: RoadmapNodeUniqueWhere;
};

export type RoadmapNodeConnectWhere = {
  node: RoadmapNodeWhere;
};

export type RoadmapNodeConnection = {
  __typename?: 'RoadmapNodeConnection';
  edges: Array<RoadmapNodeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapNodeConnectionSort = {
  node?: InputMaybe<RoadmapNodeSort>;
};

export type RoadmapNodeConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapNodeConnectionWhere>>;
  node?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeCourseSuggestedCoursesAggregationSelection = {
  __typename?: 'RoadmapNodeCourseSuggestedCoursesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RoadmapNodeCourseSuggestedCoursesNodeAggregateSelection>;
};

export type RoadmapNodeCourseSuggestedCoursesNodeAggregateSelection = {
  __typename?: 'RoadmapNodeCourseSuggestedCoursesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type RoadmapNodeCreateFieldInput = {
  node: RoadmapNodeCreateInput;
};

export type RoadmapNodeCreateInput = {
  childNodes?: InputMaybe<RoadmapNodeChildNodesFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  parentNodes?: InputMaybe<RoadmapNodeParentNodesFieldInput>;
  positionX: Scalars['Float'];
  positionY: Scalars['Float'];
  roadmap?: InputMaybe<RoadmapNodeRoadmapFieldInput>;
  suggestedCourses?: InputMaybe<RoadmapNodeSuggestedCoursesFieldInput>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type RoadmapNodeDeleteFieldInput = {
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
};

export type RoadmapNodeDeleteInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesDeleteFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesDeleteFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapDeleteFieldInput>;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCoursesDeleteFieldInput>>;
};

export type RoadmapNodeDisconnectFieldInput = {
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
};

export type RoadmapNodeDisconnectInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesDisconnectFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesDisconnectFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapDisconnectFieldInput>;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCoursesDisconnectFieldInput>>;
};

export type RoadmapNodeEdge = {
  __typename?: 'RoadmapNodeEdge';
  cursor: Scalars['String'];
  node: RoadmapNode;
};

export type RoadmapNodeFieldInput = {
  connect?: InputMaybe<RoadmapNodeConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
  create?: InputMaybe<RoadmapNodeCreateFieldInput>;
};

export type RoadmapNodeInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  position: RoadmapNodePositionInput;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCourseInput>>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type RoadmapNodeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  positionX_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  positionX_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_MAX_GT?: InputMaybe<Scalars['Float']>;
  positionX_MAX_GTE?: InputMaybe<Scalars['Float']>;
  positionX_MAX_LT?: InputMaybe<Scalars['Float']>;
  positionX_MAX_LTE?: InputMaybe<Scalars['Float']>;
  positionX_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_MIN_GT?: InputMaybe<Scalars['Float']>;
  positionX_MIN_GTE?: InputMaybe<Scalars['Float']>;
  positionX_MIN_LT?: InputMaybe<Scalars['Float']>;
  positionX_MIN_LTE?: InputMaybe<Scalars['Float']>;
  positionX_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_SUM_GT?: InputMaybe<Scalars['Float']>;
  positionX_SUM_GTE?: InputMaybe<Scalars['Float']>;
  positionX_SUM_LT?: InputMaybe<Scalars['Float']>;
  positionX_SUM_LTE?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  positionY_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_MAX_GT?: InputMaybe<Scalars['Float']>;
  positionY_MAX_GTE?: InputMaybe<Scalars['Float']>;
  positionY_MAX_LT?: InputMaybe<Scalars['Float']>;
  positionY_MAX_LTE?: InputMaybe<Scalars['Float']>;
  positionY_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_MIN_GT?: InputMaybe<Scalars['Float']>;
  positionY_MIN_GTE?: InputMaybe<Scalars['Float']>;
  positionY_MIN_LT?: InputMaybe<Scalars['Float']>;
  positionY_MIN_LTE?: InputMaybe<Scalars['Float']>;
  positionY_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_SUM_GT?: InputMaybe<Scalars['Float']>;
  positionY_SUM_GTE?: InputMaybe<Scalars['Float']>;
  positionY_SUM_LT?: InputMaybe<Scalars['Float']>;
  positionY_SUM_LTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapNodeOnCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  positionX: Scalars['Float'];
  positionY: Scalars['Float'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type RoadmapNodeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more RoadmapNodeSort objects to sort RoadmapNodes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoadmapNodeSort>>;
};

export type RoadmapNodeParentNodesAggregateInput = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesAggregateInput>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<RoadmapNodeParentNodesEdgeAggregationWhereInput>;
  node?: InputMaybe<RoadmapNodeParentNodesNodeAggregationWhereInput>;
};

export type RoadmapNodeParentNodesConnectFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeConnectInput>>;
  edge: HasChildCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoadmapNodeConnectWhere>;
};

export type RoadmapNodeParentNodesConnectOrCreateFieldInput = {
  onCreate: RoadmapNodeParentNodesConnectOrCreateFieldInputOnCreate;
  where: RoadmapNodeConnectOrCreateWhere;
};

export type RoadmapNodeParentNodesConnectOrCreateFieldInputOnCreate = {
  edge: HasChildCreateInput;
  node: RoadmapNodeOnCreateInput;
};

export type RoadmapNodeParentNodesConnection = {
  __typename?: 'RoadmapNodeParentNodesConnection';
  edges: Array<RoadmapNodeParentNodesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapNodeParentNodesConnectionSort = {
  edge?: InputMaybe<HasChildSort>;
  node?: InputMaybe<RoadmapNodeSort>;
};

export type RoadmapNodeParentNodesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesConnectionWhere>>;
  edge?: InputMaybe<HasChildWhere>;
  node?: InputMaybe<RoadmapNodeWhere>;
};

export type RoadmapNodeParentNodesCreateFieldInput = {
  edge: HasChildCreateInput;
  node: RoadmapNodeCreateInput;
};

export type RoadmapNodeParentNodesDeleteFieldInput = {
  delete?: InputMaybe<RoadmapNodeDeleteInput>;
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
};

export type RoadmapNodeParentNodesDisconnectFieldInput = {
  disconnect?: InputMaybe<RoadmapNodeDisconnectInput>;
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
};

export type RoadmapNodeParentNodesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesEdgeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  targetHandle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  targetHandle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  targetHandle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  targetHandle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  targetHandle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapNodeParentNodesFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeParentNodesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapNodeParentNodesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeParentNodesCreateFieldInput>>;
};

export type RoadmapNodeParentNodesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeParentNodesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeParentNodesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeParentNodesNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  positionX_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  positionX_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  positionX_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_MAX_GT?: InputMaybe<Scalars['Float']>;
  positionX_MAX_GTE?: InputMaybe<Scalars['Float']>;
  positionX_MAX_LT?: InputMaybe<Scalars['Float']>;
  positionX_MAX_LTE?: InputMaybe<Scalars['Float']>;
  positionX_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_MIN_GT?: InputMaybe<Scalars['Float']>;
  positionX_MIN_GTE?: InputMaybe<Scalars['Float']>;
  positionX_MIN_LT?: InputMaybe<Scalars['Float']>;
  positionX_MIN_LTE?: InputMaybe<Scalars['Float']>;
  positionX_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  positionX_SUM_GT?: InputMaybe<Scalars['Float']>;
  positionX_SUM_GTE?: InputMaybe<Scalars['Float']>;
  positionX_SUM_LT?: InputMaybe<Scalars['Float']>;
  positionX_SUM_LTE?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  positionY_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  positionY_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_MAX_GT?: InputMaybe<Scalars['Float']>;
  positionY_MAX_GTE?: InputMaybe<Scalars['Float']>;
  positionY_MAX_LT?: InputMaybe<Scalars['Float']>;
  positionY_MAX_LTE?: InputMaybe<Scalars['Float']>;
  positionY_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_MIN_GT?: InputMaybe<Scalars['Float']>;
  positionY_MIN_GTE?: InputMaybe<Scalars['Float']>;
  positionY_MIN_LT?: InputMaybe<Scalars['Float']>;
  positionY_MIN_LTE?: InputMaybe<Scalars['Float']>;
  positionY_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  positionY_SUM_GT?: InputMaybe<Scalars['Float']>;
  positionY_SUM_GTE?: InputMaybe<Scalars['Float']>;
  positionY_SUM_LT?: InputMaybe<Scalars['Float']>;
  positionY_SUM_LTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapNodeParentNodesRelationship = HasChild & {
  __typename?: 'RoadmapNodeParentNodesRelationship';
  cursor: Scalars['String'];
  id: Scalars['String'];
  node: RoadmapNode;
  targetHandle?: Maybe<Scalars['String']>;
};

export type RoadmapNodeParentNodesUpdateConnectionInput = {
  edge?: InputMaybe<HasChildUpdateInput>;
  node?: InputMaybe<RoadmapNodeUpdateInput>;
};

export type RoadmapNodeParentNodesUpdateFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeParentNodesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapNodeParentNodesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeParentNodesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapNodeParentNodesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapNodeParentNodesDisconnectFieldInput>>;
  update?: InputMaybe<RoadmapNodeParentNodesUpdateConnectionInput>;
  where?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
};

export type RoadmapNodePositionInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type RoadmapNodeRelationInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesCreateFieldInput>>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesCreateFieldInput>>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapCreateFieldInput>;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCoursesCreateFieldInput>>;
};

export type RoadmapNodeRelationship = {
  __typename?: 'RoadmapNodeRelationship';
  cursor: Scalars['String'];
  node: RoadmapNode;
};

export type RoadmapNodeRoadmapAggregateInput = {
  AND?: InputMaybe<Array<RoadmapNodeRoadmapAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeRoadmapAggregateInput>;
  OR?: InputMaybe<Array<RoadmapNodeRoadmapAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RoadmapNodeRoadmapNodeAggregationWhereInput>;
};

export type RoadmapNodeRoadmapConnectFieldInput = {
  connect?: InputMaybe<RoadmapConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoadmapConnectWhere>;
};

export type RoadmapNodeRoadmapConnectOrCreateFieldInput = {
  onCreate: RoadmapNodeRoadmapConnectOrCreateFieldInputOnCreate;
  where: RoadmapConnectOrCreateWhere;
};

export type RoadmapNodeRoadmapConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
};

export type RoadmapNodeRoadmapConnection = {
  __typename?: 'RoadmapNodeRoadmapConnection';
  edges: Array<RoadmapNodeRoadmapRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapNodeRoadmapConnectionSort = {
  node?: InputMaybe<RoadmapSort>;
};

export type RoadmapNodeRoadmapConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeRoadmapConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapNodeRoadmapConnectionWhere>>;
  node?: InputMaybe<RoadmapWhere>;
};

export type RoadmapNodeRoadmapCreateFieldInput = {
  node: RoadmapCreateInput;
};

export type RoadmapNodeRoadmapDeleteFieldInput = {
  delete?: InputMaybe<RoadmapDeleteInput>;
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
};

export type RoadmapNodeRoadmapDisconnectFieldInput = {
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
};

export type RoadmapNodeRoadmapFieldInput = {
  connect?: InputMaybe<RoadmapNodeRoadmapConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeRoadmapConnectOrCreateFieldInput>;
  create?: InputMaybe<RoadmapNodeRoadmapCreateFieldInput>;
};

export type RoadmapNodeRoadmapNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeRoadmapNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeRoadmapNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeRoadmapNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type RoadmapNodeRoadmapNodeChildNodesAggregationSelection = {
  __typename?: 'RoadmapNodeRoadmapNodeChildNodesAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<RoadmapNodeRoadmapNodeChildNodesEdgeAggregateSelection>;
  node?: Maybe<RoadmapNodeRoadmapNodeChildNodesNodeAggregateSelection>;
};

export type RoadmapNodeRoadmapNodeChildNodesEdgeAggregateSelection = {
  __typename?: 'RoadmapNodeRoadmapNodeChildNodesEdgeAggregateSelection';
  id: StringAggregateSelectionNonNullable;
  targetHandle: StringAggregateSelectionNullable;
};

export type RoadmapNodeRoadmapNodeChildNodesNodeAggregateSelection = {
  __typename?: 'RoadmapNodeRoadmapNodeChildNodesNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNonNullable;
};

export type RoadmapNodeRoadmapNodeParentNodesAggregationSelection = {
  __typename?: 'RoadmapNodeRoadmapNodeParentNodesAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<RoadmapNodeRoadmapNodeParentNodesEdgeAggregateSelection>;
  node?: Maybe<RoadmapNodeRoadmapNodeParentNodesNodeAggregateSelection>;
};

export type RoadmapNodeRoadmapNodeParentNodesEdgeAggregateSelection = {
  __typename?: 'RoadmapNodeRoadmapNodeParentNodesEdgeAggregateSelection';
  id: StringAggregateSelectionNonNullable;
  targetHandle: StringAggregateSelectionNullable;
};

export type RoadmapNodeRoadmapNodeParentNodesNodeAggregateSelection = {
  __typename?: 'RoadmapNodeRoadmapNodeParentNodesNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNonNullable;
};

export type RoadmapNodeRoadmapRelationship = {
  __typename?: 'RoadmapNodeRoadmapRelationship';
  cursor: Scalars['String'];
  node: Roadmap;
};

export type RoadmapNodeRoadmapRoadmapAggregationSelection = {
  __typename?: 'RoadmapNodeRoadmapRoadmapAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RoadmapNodeRoadmapRoadmapNodeAggregateSelection>;
};

export type RoadmapNodeRoadmapRoadmapNodeAggregateSelection = {
  __typename?: 'RoadmapNodeRoadmapRoadmapNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RoadmapNodeRoadmapUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type RoadmapNodeRoadmapUpdateFieldInput = {
  connect?: InputMaybe<RoadmapNodeRoadmapConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeRoadmapConnectOrCreateFieldInput>;
  create?: InputMaybe<RoadmapNodeRoadmapCreateFieldInput>;
  delete?: InputMaybe<RoadmapNodeRoadmapDeleteFieldInput>;
  disconnect?: InputMaybe<RoadmapNodeRoadmapDisconnectFieldInput>;
  update?: InputMaybe<RoadmapNodeRoadmapUpdateConnectionInput>;
  where?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
};

/** Fields to sort RoadmapNodes by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoadmapNodeSort object. */
export type RoadmapNodeSort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  positionX?: InputMaybe<SortDirection>;
  positionY?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type RoadmapNodeSuggestedCourseInput = {
  id: Scalars['String'];
};

export type RoadmapNodeSuggestedCoursesAggregateInput = {
  AND?: InputMaybe<Array<RoadmapNodeSuggestedCoursesAggregateInput>>;
  NOT?: InputMaybe<RoadmapNodeSuggestedCoursesAggregateInput>;
  OR?: InputMaybe<Array<RoadmapNodeSuggestedCoursesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>;
};

export type RoadmapNodeSuggestedCoursesConnectFieldInput = {
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseConnectWhere>;
};

export type RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput = {
  onCreate: RoadmapNodeSuggestedCoursesConnectOrCreateFieldInputOnCreate;
  where: CourseConnectOrCreateWhere;
};

export type RoadmapNodeSuggestedCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type RoadmapNodeSuggestedCoursesConnection = {
  __typename?: 'RoadmapNodeSuggestedCoursesConnection';
  edges: Array<RoadmapNodeSuggestedCoursesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapNodeSuggestedCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type RoadmapNodeSuggestedCoursesConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectionWhere>>;
  NOT?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectionWhere>>;
  node?: InputMaybe<CourseWhere>;
};

export type RoadmapNodeSuggestedCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type RoadmapNodeSuggestedCoursesDeleteFieldInput = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
};

export type RoadmapNodeSuggestedCoursesDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseDisconnectInput>;
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
};

export type RoadmapNodeSuggestedCoursesFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeSuggestedCoursesCreateFieldInput>>;
};

export type RoadmapNodeSuggestedCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapNodeSuggestedCoursesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapNodeSuggestedCoursesRelationship = {
  __typename?: 'RoadmapNodeSuggestedCoursesRelationship';
  cursor: Scalars['String'];
  node: Course;
};

export type RoadmapNodeSuggestedCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type RoadmapNodeSuggestedCoursesUpdateFieldInput = {
  connect?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapNodeSuggestedCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapNodeSuggestedCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapNodeSuggestedCoursesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapNodeSuggestedCoursesDisconnectFieldInput>>;
  update?: InputMaybe<RoadmapNodeSuggestedCoursesUpdateConnectionInput>;
  where?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
};

export type RoadmapNodeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type RoadmapNodeUpdateConnectionInput = {
  node?: InputMaybe<RoadmapNodeUpdateInput>;
};

export type RoadmapNodeUpdateFieldInput = {
  connect?: InputMaybe<RoadmapNodeConnectFieldInput>;
  connectOrCreate?: InputMaybe<RoadmapNodeConnectOrCreateFieldInput>;
  create?: InputMaybe<RoadmapNodeCreateFieldInput>;
  delete?: InputMaybe<RoadmapNodeDeleteFieldInput>;
  disconnect?: InputMaybe<RoadmapNodeDisconnectFieldInput>;
  update?: InputMaybe<RoadmapNodeUpdateConnectionInput>;
  where?: InputMaybe<RoadmapNodeConnectionWhere>;
};

export type RoadmapNodeUpdateInput = {
  childNodes?: InputMaybe<Array<RoadmapNodeChildNodesUpdateFieldInput>>;
  description?: InputMaybe<Scalars['String']>;
  parentNodes?: InputMaybe<Array<RoadmapNodeParentNodesUpdateFieldInput>>;
  positionX?: InputMaybe<Scalars['Float']>;
  positionX_ADD?: InputMaybe<Scalars['Float']>;
  positionX_DIVIDE?: InputMaybe<Scalars['Float']>;
  positionX_MULTIPLY?: InputMaybe<Scalars['Float']>;
  positionX_SUBTRACT?: InputMaybe<Scalars['Float']>;
  positionY?: InputMaybe<Scalars['Float']>;
  positionY_ADD?: InputMaybe<Scalars['Float']>;
  positionY_DIVIDE?: InputMaybe<Scalars['Float']>;
  positionY_MULTIPLY?: InputMaybe<Scalars['Float']>;
  positionY_SUBTRACT?: InputMaybe<Scalars['Float']>;
  roadmap?: InputMaybe<RoadmapNodeRoadmapUpdateFieldInput>;
  suggestedCourses?: InputMaybe<Array<RoadmapNodeSuggestedCoursesUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type RoadmapNodeWhere = {
  AND?: InputMaybe<Array<RoadmapNodeWhere>>;
  NOT?: InputMaybe<RoadmapNodeWhere>;
  OR?: InputMaybe<Array<RoadmapNodeWhere>>;
  childNodesAggregate?: InputMaybe<RoadmapNodeChildNodesAggregateInput>;
  /** Return RoadmapNodes where all of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_ALL?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_NONE?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_SINGLE?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodeChildNodesConnections match this filter */
  childNodesConnection_SOME?: InputMaybe<RoadmapNodeChildNodesConnectionWhere>;
  /** Return RoadmapNodes where all of the related RoadmapNodes match this filter */
  childNodes_ALL?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodes match this filter */
  childNodes_NONE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodes match this filter */
  childNodes_SINGLE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodes match this filter */
  childNodes_SOME?: InputMaybe<RoadmapNodeWhere>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_MATCHES?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  parentNodesAggregate?: InputMaybe<RoadmapNodeParentNodesAggregateInput>;
  /** Return RoadmapNodes where all of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_ALL?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_NONE?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_SINGLE?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodeParentNodesConnections match this filter */
  parentNodesConnection_SOME?: InputMaybe<RoadmapNodeParentNodesConnectionWhere>;
  /** Return RoadmapNodes where all of the related RoadmapNodes match this filter */
  parentNodes_ALL?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodes match this filter */
  parentNodes_NONE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodes match this filter */
  parentNodes_SINGLE?: InputMaybe<RoadmapNodeWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodes match this filter */
  parentNodes_SOME?: InputMaybe<RoadmapNodeWhere>;
  positionX?: InputMaybe<Scalars['Float']>;
  positionX_GT?: InputMaybe<Scalars['Float']>;
  positionX_GTE?: InputMaybe<Scalars['Float']>;
  positionX_IN?: InputMaybe<Array<Scalars['Float']>>;
  positionX_LT?: InputMaybe<Scalars['Float']>;
  positionX_LTE?: InputMaybe<Scalars['Float']>;
  positionY?: InputMaybe<Scalars['Float']>;
  positionY_GT?: InputMaybe<Scalars['Float']>;
  positionY_GTE?: InputMaybe<Scalars['Float']>;
  positionY_IN?: InputMaybe<Array<Scalars['Float']>>;
  positionY_LT?: InputMaybe<Scalars['Float']>;
  positionY_LTE?: InputMaybe<Scalars['Float']>;
  roadmap?: InputMaybe<RoadmapWhere>;
  roadmapAggregate?: InputMaybe<RoadmapNodeRoadmapAggregateInput>;
  roadmapConnection?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  roadmapConnection_NOT?: InputMaybe<RoadmapNodeRoadmapConnectionWhere>;
  roadmap_NOT?: InputMaybe<RoadmapWhere>;
  suggestedCoursesAggregate?: InputMaybe<RoadmapNodeSuggestedCoursesAggregateInput>;
  /** Return RoadmapNodes where all of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_ALL?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where none of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_NONE?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where one of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_SINGLE?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where some of the related RoadmapNodeSuggestedCoursesConnections match this filter */
  suggestedCoursesConnection_SOME?: InputMaybe<RoadmapNodeSuggestedCoursesConnectionWhere>;
  /** Return RoadmapNodes where all of the related Courses match this filter */
  suggestedCourses_ALL?: InputMaybe<CourseWhere>;
  /** Return RoadmapNodes where none of the related Courses match this filter */
  suggestedCourses_NONE?: InputMaybe<CourseWhere>;
  /** Return RoadmapNodes where one of the related Courses match this filter */
  suggestedCourses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return RoadmapNodes where some of the related Courses match this filter */
  suggestedCourses_SOME?: InputMaybe<CourseWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_CONTAINS?: InputMaybe<Scalars['String']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']>;
  title_IN?: InputMaybe<Array<Scalars['String']>>;
  title_MATCHES?: InputMaybe<Scalars['String']>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_CONTAINS?: InputMaybe<Scalars['String']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']>;
  type_IN?: InputMaybe<Array<Scalars['String']>>;
  type_MATCHES?: InputMaybe<Scalars['String']>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type RoadmapNodesConnection = {
  __typename?: 'RoadmapNodesConnection';
  edges: Array<RoadmapNodeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapOnCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  title: Scalars['String'];
};

export type RoadmapOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more RoadmapSort objects to sort Roadmaps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoadmapSort>>;
};

export type RoadmapRelationInput = {
  createdBy?: InputMaybe<RoadmapCreatedByCreateFieldInput>;
  languages?: InputMaybe<Array<RoadmapLanguagesCreateFieldInput>>;
  node?: InputMaybe<RoadmapNodeCreateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsCreateFieldInput>>;
};

export type RoadmapRoadmapInfoFulltext = {
  phrase: Scalars['String'];
};

export type RoadmapRoadmapNodeNodeAggregationSelection = {
  __typename?: 'RoadmapRoadmapNodeNodeAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RoadmapRoadmapNodeNodeNodeAggregateSelection>;
};

export type RoadmapRoadmapNodeNodeNodeAggregateSelection = {
  __typename?: 'RoadmapRoadmapNodeNodeNodeAggregateSelection';
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  positionX: FloatAggregateSelectionNonNullable;
  positionY: FloatAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNonNullable;
};

/** Fields to sort Roadmaps by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoadmapSort object. */
export type RoadmapSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  difficulty?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type RoadmapTagsAggregateInput = {
  AND?: InputMaybe<Array<RoadmapTagsAggregateInput>>;
  NOT?: InputMaybe<RoadmapTagsAggregateInput>;
  OR?: InputMaybe<Array<RoadmapTagsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<RoadmapTagsEdgeAggregationWhereInput>;
  node?: InputMaybe<RoadmapTagsNodeAggregationWhereInput>;
};

export type RoadmapTagsConnectFieldInput = {
  connect?: InputMaybe<Array<TopicTagConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<TopicTagConnectWhere>;
};

export type RoadmapTagsConnectOrCreateFieldInput = {
  onCreate: RoadmapTagsConnectOrCreateFieldInputOnCreate;
  where: TopicTagConnectOrCreateWhere;
};

export type RoadmapTagsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: TopicTagOnCreateInput;
};

export type RoadmapTagsConnection = {
  __typename?: 'RoadmapTagsConnection';
  edges: Array<RoadmapTagsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoadmapTagsConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<TopicTagSort>;
};

export type RoadmapTagsConnectionWhere = {
  AND?: InputMaybe<Array<RoadmapTagsConnectionWhere>>;
  NOT?: InputMaybe<RoadmapTagsConnectionWhere>;
  OR?: InputMaybe<Array<RoadmapTagsConnectionWhere>>;
  edge?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<TopicTagWhere>;
};

export type RoadmapTagsCreateFieldInput = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: TopicTagCreateInput;
};

export type RoadmapTagsDeleteFieldInput = {
  delete?: InputMaybe<TopicTagDeleteInput>;
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
};

export type RoadmapTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
};

export type RoadmapTagsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapTagsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapTagsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapTagsEdgeAggregationWhereInput>>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MAX_GT?: InputMaybe<Scalars['Float']>;
  score_MAX_GTE?: InputMaybe<Scalars['Float']>;
  score_MAX_LT?: InputMaybe<Scalars['Float']>;
  score_MAX_LTE?: InputMaybe<Scalars['Float']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MIN_GT?: InputMaybe<Scalars['Float']>;
  score_MIN_GTE?: InputMaybe<Scalars['Float']>;
  score_MIN_LT?: InputMaybe<Scalars['Float']>;
  score_MIN_LTE?: InputMaybe<Scalars['Float']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  score_SUM_GT?: InputMaybe<Scalars['Float']>;
  score_SUM_GTE?: InputMaybe<Scalars['Float']>;
  score_SUM_LT?: InputMaybe<Scalars['Float']>;
  score_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type RoadmapTagsFieldInput = {
  connect?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapTagsCreateFieldInput>>;
};

export type RoadmapTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RoadmapTagsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RoadmapTagsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RoadmapTagsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RoadmapTagsRelationship = IncludesTopic & {
  __typename?: 'RoadmapTagsRelationship';
  cursor: Scalars['String'];
  node: TopicTag;
  score?: Maybe<Scalars['Float']>;
};

export type RoadmapTagsUpdateConnectionInput = {
  edge?: InputMaybe<IncludesTopicUpdateInput>;
  node?: InputMaybe<TopicTagUpdateInput>;
};

export type RoadmapTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<RoadmapTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RoadmapTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RoadmapTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<RoadmapTagsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RoadmapTagsDisconnectFieldInput>>;
  update?: InputMaybe<RoadmapTagsUpdateConnectionInput>;
  where?: InputMaybe<RoadmapTagsConnectionWhere>;
};

export type RoadmapTopicTagTagsAggregationSelection = {
  __typename?: 'RoadmapTopicTagTagsAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<RoadmapTopicTagTagsEdgeAggregateSelection>;
  node?: Maybe<RoadmapTopicTagTagsNodeAggregateSelection>;
};

export type RoadmapTopicTagTagsEdgeAggregateSelection = {
  __typename?: 'RoadmapTopicTagTagsEdgeAggregateSelection';
  score: FloatAggregateSelectionNullable;
};

export type RoadmapTopicTagTagsNodeAggregateSelection = {
  __typename?: 'RoadmapTopicTagTagsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RoadmapUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type RoadmapUpdateInput = {
  createdBy?: InputMaybe<RoadmapCreatedByUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  languages?: InputMaybe<Array<RoadmapLanguagesUpdateFieldInput>>;
  node?: InputMaybe<RoadmapNodeUpdateFieldInput>;
  tags?: InputMaybe<Array<RoadmapTagsUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type RoadmapUserCreatedByAggregationSelection = {
  __typename?: 'RoadmapUserCreatedByAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RoadmapUserCreatedByNodeAggregateSelection>;
};

export type RoadmapUserCreatedByNodeAggregateSelection = {
  __typename?: 'RoadmapUserCreatedByNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RoadmapWhere = {
  AND?: InputMaybe<Array<RoadmapWhere>>;
  NOT?: InputMaybe<RoadmapWhere>;
  OR?: InputMaybe<Array<RoadmapWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserWhere>;
  createdByAggregate?: InputMaybe<RoadmapCreatedByAggregateInput>;
  createdByConnection?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  createdByConnection_NOT?: InputMaybe<RoadmapCreatedByConnectionWhere>;
  createdBy_NOT?: InputMaybe<UserWhere>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_MATCHES?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Difficulty>;
  difficulty_IN?: InputMaybe<Array<InputMaybe<Difficulty>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  languagesAggregate?: InputMaybe<RoadmapLanguagesAggregateInput>;
  /** Return Roadmaps where all of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_ALL?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where none of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_NONE?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where one of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_SINGLE?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where some of the related RoadmapLanguagesConnections match this filter */
  languagesConnection_SOME?: InputMaybe<RoadmapLanguagesConnectionWhere>;
  /** Return Roadmaps where all of the related Languages match this filter */
  languages_ALL?: InputMaybe<LanguageWhere>;
  /** Return Roadmaps where none of the related Languages match this filter */
  languages_NONE?: InputMaybe<LanguageWhere>;
  /** Return Roadmaps where one of the related Languages match this filter */
  languages_SINGLE?: InputMaybe<LanguageWhere>;
  /** Return Roadmaps where some of the related Languages match this filter */
  languages_SOME?: InputMaybe<LanguageWhere>;
  node?: InputMaybe<RoadmapNodeWhere>;
  nodeAggregate?: InputMaybe<RoadmapNodeAggregateInput>;
  nodeConnection?: InputMaybe<RoadmapNodeConnectionWhere>;
  nodeConnection_NOT?: InputMaybe<RoadmapNodeConnectionWhere>;
  node_NOT?: InputMaybe<RoadmapNodeWhere>;
  tagsAggregate?: InputMaybe<RoadmapTagsAggregateInput>;
  /** Return Roadmaps where all of the related RoadmapTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where none of the related RoadmapTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where one of the related RoadmapTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where some of the related RoadmapTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<RoadmapTagsConnectionWhere>;
  /** Return Roadmaps where all of the related TopicTags match this filter */
  tags_ALL?: InputMaybe<TopicTagWhere>;
  /** Return Roadmaps where none of the related TopicTags match this filter */
  tags_NONE?: InputMaybe<TopicTagWhere>;
  /** Return Roadmaps where one of the related TopicTags match this filter */
  tags_SINGLE?: InputMaybe<TopicTagWhere>;
  /** Return Roadmaps where some of the related TopicTags match this filter */
  tags_SOME?: InputMaybe<TopicTagWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_CONTAINS?: InputMaybe<Scalars['String']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']>;
  title_IN?: InputMaybe<Array<Scalars['String']>>;
  title_MATCHES?: InputMaybe<Scalars['String']>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type RoadmapsConnection = {
  __typename?: 'RoadmapsConnection';
  edges: Array<RoadmapEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type TopicTag = {
  __typename?: 'TopicTag';
  courses: Array<Course>;
  coursesAggregate?: Maybe<TopicTagCourseCoursesAggregationSelection>;
  coursesConnection: TopicTagCoursesConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  roadmaps: Array<Roadmap>;
  roadmapsAggregate?: Maybe<TopicTagRoadmapRoadmapsAggregationSelection>;
  roadmapsConnection: TopicTagRoadmapsConnection;
};

export type TopicTagCoursesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type TopicTagCoursesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseWhere>;
};

export type TopicTagCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TopicTagCoursesConnectionSort>>;
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
};

export type TopicTagRoadmapsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoadmapOptions>;
  where?: InputMaybe<RoadmapWhere>;
};

export type TopicTagRoadmapsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoadmapWhere>;
};

export type TopicTagRoadmapsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TopicTagRoadmapsConnectionSort>>;
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
};

export type TopicTagAggregateSelection = {
  __typename?: 'TopicTagAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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

export type TopicTagCourseCoursesAggregationSelection = {
  __typename?: 'TopicTagCourseCoursesAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<TopicTagCourseCoursesEdgeAggregateSelection>;
  node?: Maybe<TopicTagCourseCoursesNodeAggregateSelection>;
};

export type TopicTagCourseCoursesEdgeAggregateSelection = {
  __typename?: 'TopicTagCourseCoursesEdgeAggregateSelection';
  score: FloatAggregateSelectionNullable;
};

export type TopicTagCourseCoursesNodeAggregateSelection = {
  __typename?: 'TopicTagCourseCoursesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  externalRating: FloatAggregateSelectionNullable;
  externalRatingsCount: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type TopicTagCoursesAggregateInput = {
  AND?: InputMaybe<Array<TopicTagCoursesAggregateInput>>;
  NOT?: InputMaybe<TopicTagCoursesAggregateInput>;
  OR?: InputMaybe<Array<TopicTagCoursesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<TopicTagCoursesEdgeAggregationWhereInput>;
  node?: InputMaybe<TopicTagCoursesNodeAggregationWhereInput>;
};

export type TopicTagCoursesConnectFieldInput = {
  connect?: InputMaybe<Array<CourseConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseConnectWhere>;
};

export type TopicTagCoursesConnectOrCreateFieldInput = {
  onCreate: TopicTagCoursesConnectOrCreateFieldInputOnCreate;
  where: CourseConnectOrCreateWhere;
};

export type TopicTagCoursesConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: CourseOnCreateInput;
};

export type TopicTagCoursesConnection = {
  __typename?: 'TopicTagCoursesConnection';
  edges: Array<TopicTagCoursesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TopicTagCoursesConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<CourseSort>;
};

export type TopicTagCoursesConnectionWhere = {
  AND?: InputMaybe<Array<TopicTagCoursesConnectionWhere>>;
  NOT?: InputMaybe<TopicTagCoursesConnectionWhere>;
  OR?: InputMaybe<Array<TopicTagCoursesConnectionWhere>>;
  edge?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<CourseWhere>;
};

export type TopicTagCoursesCreateFieldInput = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: CourseCreateInput;
};

export type TopicTagCoursesDeleteFieldInput = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
};

export type TopicTagCoursesDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseDisconnectInput>;
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
};

export type TopicTagCoursesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagCoursesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagCoursesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<TopicTagCoursesEdgeAggregationWhereInput>>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MAX_GT?: InputMaybe<Scalars['Float']>;
  score_MAX_GTE?: InputMaybe<Scalars['Float']>;
  score_MAX_LT?: InputMaybe<Scalars['Float']>;
  score_MAX_LTE?: InputMaybe<Scalars['Float']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MIN_GT?: InputMaybe<Scalars['Float']>;
  score_MIN_GTE?: InputMaybe<Scalars['Float']>;
  score_MIN_LT?: InputMaybe<Scalars['Float']>;
  score_MIN_LTE?: InputMaybe<Scalars['Float']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  score_SUM_GT?: InputMaybe<Scalars['Float']>;
  score_SUM_GTE?: InputMaybe<Scalars['Float']>;
  score_SUM_LT?: InputMaybe<Scalars['Float']>;
  score_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type TopicTagCoursesFieldInput = {
  connect?: InputMaybe<Array<TopicTagCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TopicTagCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TopicTagCoursesCreateFieldInput>>;
};

export type TopicTagCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagCoursesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TopicTagCoursesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  externalRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  externalRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  externalRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  externalRatingsCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  externalRatingsCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type TopicTagCoursesRelationship = IncludesTopic & {
  __typename?: 'TopicTagCoursesRelationship';
  cursor: Scalars['String'];
  node: Course;
  score?: Maybe<Scalars['Float']>;
};

export type TopicTagCoursesUpdateConnectionInput = {
  edge?: InputMaybe<IncludesTopicUpdateInput>;
  node?: InputMaybe<CourseUpdateInput>;
};

export type TopicTagCoursesUpdateFieldInput = {
  connect?: InputMaybe<Array<TopicTagCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TopicTagCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TopicTagCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<TopicTagCoursesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TopicTagCoursesDisconnectFieldInput>>;
  update?: InputMaybe<TopicTagCoursesUpdateConnectionInput>;
  where?: InputMaybe<TopicTagCoursesConnectionWhere>;
};

export type TopicTagCreateInput = {
  courses?: InputMaybe<TopicTagCoursesFieldInput>;
  name: Scalars['String'];
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

export type TopicTagEdge = {
  __typename?: 'TopicTagEdge';
  cursor: Scalars['String'];
  node: TopicTag;
};

export type TopicTagOnCreateInput = {
  name: Scalars['String'];
};

export type TopicTagOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TopicTagSort objects to sort TopicTags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TopicTagSort>>;
};

export type TopicTagRelationInput = {
  courses?: InputMaybe<Array<TopicTagCoursesCreateFieldInput>>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsCreateFieldInput>>;
};

export type TopicTagRoadmapRoadmapsAggregationSelection = {
  __typename?: 'TopicTagRoadmapRoadmapsAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<TopicTagRoadmapRoadmapsEdgeAggregateSelection>;
  node?: Maybe<TopicTagRoadmapRoadmapsNodeAggregateSelection>;
};

export type TopicTagRoadmapRoadmapsEdgeAggregateSelection = {
  __typename?: 'TopicTagRoadmapRoadmapsEdgeAggregateSelection';
  score: FloatAggregateSelectionNullable;
};

export type TopicTagRoadmapRoadmapsNodeAggregateSelection = {
  __typename?: 'TopicTagRoadmapRoadmapsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TopicTagRoadmapsAggregateInput = {
  AND?: InputMaybe<Array<TopicTagRoadmapsAggregateInput>>;
  NOT?: InputMaybe<TopicTagRoadmapsAggregateInput>;
  OR?: InputMaybe<Array<TopicTagRoadmapsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<TopicTagRoadmapsEdgeAggregationWhereInput>;
  node?: InputMaybe<TopicTagRoadmapsNodeAggregationWhereInput>;
};

export type TopicTagRoadmapsConnectFieldInput = {
  connect?: InputMaybe<Array<RoadmapConnectInput>>;
  edge?: InputMaybe<IncludesTopicCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoadmapConnectWhere>;
};

export type TopicTagRoadmapsConnectOrCreateFieldInput = {
  onCreate: TopicTagRoadmapsConnectOrCreateFieldInputOnCreate;
  where: RoadmapConnectOrCreateWhere;
};

export type TopicTagRoadmapsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: RoadmapOnCreateInput;
};

export type TopicTagRoadmapsConnection = {
  __typename?: 'TopicTagRoadmapsConnection';
  edges: Array<TopicTagRoadmapsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TopicTagRoadmapsConnectionSort = {
  edge?: InputMaybe<IncludesTopicSort>;
  node?: InputMaybe<RoadmapSort>;
};

export type TopicTagRoadmapsConnectionWhere = {
  AND?: InputMaybe<Array<TopicTagRoadmapsConnectionWhere>>;
  NOT?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  OR?: InputMaybe<Array<TopicTagRoadmapsConnectionWhere>>;
  edge?: InputMaybe<IncludesTopicWhere>;
  node?: InputMaybe<RoadmapWhere>;
};

export type TopicTagRoadmapsCreateFieldInput = {
  edge?: InputMaybe<IncludesTopicCreateInput>;
  node: RoadmapCreateInput;
};

export type TopicTagRoadmapsDeleteFieldInput = {
  delete?: InputMaybe<RoadmapDeleteInput>;
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
};

export type TopicTagRoadmapsDisconnectFieldInput = {
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
};

export type TopicTagRoadmapsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagRoadmapsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagRoadmapsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<TopicTagRoadmapsEdgeAggregationWhereInput>>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  score_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  score_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MAX_GT?: InputMaybe<Scalars['Float']>;
  score_MAX_GTE?: InputMaybe<Scalars['Float']>;
  score_MAX_LT?: InputMaybe<Scalars['Float']>;
  score_MAX_LTE?: InputMaybe<Scalars['Float']>;
  score_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  score_MIN_GT?: InputMaybe<Scalars['Float']>;
  score_MIN_GTE?: InputMaybe<Scalars['Float']>;
  score_MIN_LT?: InputMaybe<Scalars['Float']>;
  score_MIN_LTE?: InputMaybe<Scalars['Float']>;
  score_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  score_SUM_GT?: InputMaybe<Scalars['Float']>;
  score_SUM_GTE?: InputMaybe<Scalars['Float']>;
  score_SUM_LT?: InputMaybe<Scalars['Float']>;
  score_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type TopicTagRoadmapsFieldInput = {
  connect?: InputMaybe<Array<TopicTagRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TopicTagRoadmapsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TopicTagRoadmapsCreateFieldInput>>;
};

export type TopicTagRoadmapsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagRoadmapsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicTagRoadmapsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TopicTagRoadmapsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type TopicTagRoadmapsRelationship = IncludesTopic & {
  __typename?: 'TopicTagRoadmapsRelationship';
  cursor: Scalars['String'];
  node: Roadmap;
  score?: Maybe<Scalars['Float']>;
};

export type TopicTagRoadmapsUpdateConnectionInput = {
  edge?: InputMaybe<IncludesTopicUpdateInput>;
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type TopicTagRoadmapsUpdateFieldInput = {
  connect?: InputMaybe<Array<TopicTagRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TopicTagRoadmapsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TopicTagRoadmapsCreateFieldInput>>;
  delete?: InputMaybe<Array<TopicTagRoadmapsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TopicTagRoadmapsDisconnectFieldInput>>;
  update?: InputMaybe<TopicTagRoadmapsUpdateConnectionInput>;
  where?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
};

/** Fields to sort TopicTags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TopicTagSort object. */
export type TopicTagSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type TopicTagUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TopicTagUpdateInput = {
  courses?: InputMaybe<Array<TopicTagCoursesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  roadmaps?: InputMaybe<Array<TopicTagRoadmapsUpdateFieldInput>>;
};

export type TopicTagWhere = {
  AND?: InputMaybe<Array<TopicTagWhere>>;
  NOT?: InputMaybe<TopicTagWhere>;
  OR?: InputMaybe<Array<TopicTagWhere>>;
  coursesAggregate?: InputMaybe<TopicTagCoursesAggregateInput>;
  /** Return TopicTags where all of the related TopicTagCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where none of the related TopicTagCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where one of the related TopicTagCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where some of the related TopicTagCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<TopicTagCoursesConnectionWhere>;
  /** Return TopicTags where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return TopicTags where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return TopicTags where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return TopicTags where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_MATCHES?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  roadmapsAggregate?: InputMaybe<TopicTagRoadmapsAggregateInput>;
  /** Return TopicTags where all of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_ALL?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where none of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_NONE?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where one of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_SINGLE?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where some of the related TopicTagRoadmapsConnections match this filter */
  roadmapsConnection_SOME?: InputMaybe<TopicTagRoadmapsConnectionWhere>;
  /** Return TopicTags where all of the related Roadmaps match this filter */
  roadmaps_ALL?: InputMaybe<RoadmapWhere>;
  /** Return TopicTags where none of the related Roadmaps match this filter */
  roadmaps_NONE?: InputMaybe<RoadmapWhere>;
  /** Return TopicTags where one of the related Roadmaps match this filter */
  roadmaps_SINGLE?: InputMaybe<RoadmapWhere>;
  /** Return TopicTags where some of the related Roadmaps match this filter */
  roadmaps_SOME?: InputMaybe<RoadmapWhere>;
};

export type TopicTagsConnection = {
  __typename?: 'TopicTagsConnection';
  edges: Array<TopicTagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UpdateCoursePlatformsMutationResponse = {
  __typename?: 'UpdateCoursePlatformsMutationResponse';
  coursePlatforms: Array<CoursePlatform>;
  info: UpdateInfo;
};

export type UpdateCoursePricesMutationResponse = {
  __typename?: 'UpdateCoursePricesMutationResponse';
  coursePrices: Array<CoursePrice>;
  info: UpdateInfo;
};

export type UpdateCoursesMutationResponse = {
  __typename?: 'UpdateCoursesMutationResponse';
  courses: Array<Course>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateLanguagesMutationResponse = {
  __typename?: 'UpdateLanguagesMutationResponse';
  info: UpdateInfo;
  languages: Array<Language>;
};

export type UpdateRoadmapNodesMutationResponse = {
  __typename?: 'UpdateRoadmapNodesMutationResponse';
  info: UpdateInfo;
  roadmapNodes: Array<RoadmapNode>;
};

export type UpdateRoadmapsMutationResponse = {
  __typename?: 'UpdateRoadmapsMutationResponse';
  info: UpdateInfo;
  roadmaps: Array<Roadmap>;
};

export type UpdateTopicTagsMutationResponse = {
  __typename?: 'UpdateTopicTagsMutationResponse';
  info: UpdateInfo;
  topicTags: Array<TopicTag>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  createdRoadmaps: Array<Roadmap>;
  createdRoadmapsAggregate?: Maybe<UserRoadmapCreatedRoadmapsAggregationSelection>;
  createdRoadmapsConnection: UserCreatedRoadmapsConnection;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  preferableTopics: Array<TopicTag>;
  preferableTopicsAggregate?: Maybe<UserTopicTagPreferableTopicsAggregationSelection>;
  preferableTopicsConnection: UserPreferableTopicsConnection;
  roles: Array<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreatedRoadmapsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoadmapOptions>;
  where?: InputMaybe<RoadmapWhere>;
};

export type UserCreatedRoadmapsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoadmapWhere>;
};

export type UserCreatedRoadmapsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserCreatedRoadmapsConnectionSort>>;
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
};

export type UserPreferableTopicsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TopicTagOptions>;
  where?: InputMaybe<TopicTagWhere>;
};

export type UserPreferableTopicsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TopicTagWhere>;
};

export type UserPreferableTopicsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserPreferableTopicsConnectionSort>>;
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserConnectInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsConnectOrCreateFieldInput>>;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  createdRoadmaps?: InputMaybe<UserCreatedRoadmapsFieldInput>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  preferableTopics?: InputMaybe<UserPreferableTopicsFieldInput>;
  roles: Array<Scalars['String']>;
};

export type UserCreatedRoadmapsAggregateInput = {
  AND?: InputMaybe<Array<UserCreatedRoadmapsAggregateInput>>;
  NOT?: InputMaybe<UserCreatedRoadmapsAggregateInput>;
  OR?: InputMaybe<Array<UserCreatedRoadmapsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<UserCreatedRoadmapsNodeAggregationWhereInput>;
};

export type UserCreatedRoadmapsConnectFieldInput = {
  connect?: InputMaybe<Array<RoadmapConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoadmapConnectWhere>;
};

export type UserCreatedRoadmapsConnectOrCreateFieldInput = {
  onCreate: UserCreatedRoadmapsConnectOrCreateFieldInputOnCreate;
  where: RoadmapConnectOrCreateWhere;
};

export type UserCreatedRoadmapsConnectOrCreateFieldInputOnCreate = {
  node: RoadmapOnCreateInput;
};

export type UserCreatedRoadmapsConnection = {
  __typename?: 'UserCreatedRoadmapsConnection';
  edges: Array<UserCreatedRoadmapsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserCreatedRoadmapsConnectionSort = {
  node?: InputMaybe<RoadmapSort>;
};

export type UserCreatedRoadmapsConnectionWhere = {
  AND?: InputMaybe<Array<UserCreatedRoadmapsConnectionWhere>>;
  NOT?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  OR?: InputMaybe<Array<UserCreatedRoadmapsConnectionWhere>>;
  node?: InputMaybe<RoadmapWhere>;
};

export type UserCreatedRoadmapsCreateFieldInput = {
  node: RoadmapCreateInput;
};

export type UserCreatedRoadmapsDeleteFieldInput = {
  delete?: InputMaybe<RoadmapDeleteInput>;
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
};

export type UserCreatedRoadmapsDisconnectFieldInput = {
  disconnect?: InputMaybe<RoadmapDisconnectInput>;
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
};

export type UserCreatedRoadmapsFieldInput = {
  connect?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreatedRoadmapsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
};

export type UserCreatedRoadmapsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCreatedRoadmapsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCreatedRoadmapsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserCreatedRoadmapsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreatedRoadmapsRelationship = {
  __typename?: 'UserCreatedRoadmapsRelationship';
  cursor: Scalars['String'];
  node: Roadmap;
};

export type UserCreatedRoadmapsUpdateConnectionInput = {
  node?: InputMaybe<RoadmapUpdateInput>;
};

export type UserCreatedRoadmapsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserCreatedRoadmapsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreatedRoadmapsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserCreatedRoadmapsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserCreatedRoadmapsDisconnectFieldInput>>;
  update?: InputMaybe<UserCreatedRoadmapsUpdateConnectionInput>;
  where?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
};

export type UserDeleteInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsDeleteFieldInput>>;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsDisconnectFieldInput>>;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOnCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  roles: Array<Scalars['String']>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserPreferableTopicsAggregateInput = {
  AND?: InputMaybe<Array<UserPreferableTopicsAggregateInput>>;
  NOT?: InputMaybe<UserPreferableTopicsAggregateInput>;
  OR?: InputMaybe<Array<UserPreferableTopicsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<UserPreferableTopicsNodeAggregationWhereInput>;
};

export type UserPreferableTopicsConnectFieldInput = {
  connect?: InputMaybe<Array<TopicTagConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<TopicTagConnectWhere>;
};

export type UserPreferableTopicsConnectOrCreateFieldInput = {
  onCreate: UserPreferableTopicsConnectOrCreateFieldInputOnCreate;
  where: TopicTagConnectOrCreateWhere;
};

export type UserPreferableTopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicTagOnCreateInput;
};

export type UserPreferableTopicsConnection = {
  __typename?: 'UserPreferableTopicsConnection';
  edges: Array<UserPreferableTopicsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserPreferableTopicsConnectionSort = {
  node?: InputMaybe<TopicTagSort>;
};

export type UserPreferableTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserPreferableTopicsConnectionWhere>>;
  NOT?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  OR?: InputMaybe<Array<UserPreferableTopicsConnectionWhere>>;
  node?: InputMaybe<TopicTagWhere>;
};

export type UserPreferableTopicsCreateFieldInput = {
  node: TopicTagCreateInput;
};

export type UserPreferableTopicsDeleteFieldInput = {
  delete?: InputMaybe<TopicTagDeleteInput>;
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
};

export type UserPreferableTopicsDisconnectFieldInput = {
  disconnect?: InputMaybe<TopicTagDisconnectInput>;
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
};

export type UserPreferableTopicsFieldInput = {
  connect?: InputMaybe<Array<UserPreferableTopicsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserPreferableTopicsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserPreferableTopicsCreateFieldInput>>;
};

export type UserPreferableTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPreferableTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserPreferableTopicsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserPreferableTopicsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type UserPreferableTopicsRelationship = {
  __typename?: 'UserPreferableTopicsRelationship';
  cursor: Scalars['String'];
  node: TopicTag;
};

export type UserPreferableTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicTagUpdateInput>;
};

export type UserPreferableTopicsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserPreferableTopicsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserPreferableTopicsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserPreferableTopicsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserPreferableTopicsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserPreferableTopicsDisconnectFieldInput>>;
  update?: InputMaybe<UserPreferableTopicsUpdateConnectionInput>;
  where?: InputMaybe<UserPreferableTopicsConnectionWhere>;
};

export type UserRelationInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsCreateFieldInput>>;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsCreateFieldInput>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  roles: Array<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type UserRoadmapCreatedRoadmapsAggregationSelection = {
  __typename?: 'UserRoadmapCreatedRoadmapsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UserRoadmapCreatedRoadmapsNodeAggregateSelection>;
};

export type UserRoadmapCreatedRoadmapsNodeAggregateSelection = {
  __typename?: 'UserRoadmapCreatedRoadmapsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserSignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserTopicTagPreferableTopicsAggregationSelection = {
  __typename?: 'UserTopicTagPreferableTopicsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UserTopicTagPreferableTopicsNodeAggregateSelection>;
};

export type UserTopicTagPreferableTopicsNodeAggregateSelection = {
  __typename?: 'UserTopicTagPreferableTopicsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateInput = {
  createdRoadmaps?: InputMaybe<Array<UserCreatedRoadmapsUpdateFieldInput>>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  preferableTopics?: InputMaybe<Array<UserPreferableTopicsUpdateFieldInput>>;
  roles?: InputMaybe<Array<Scalars['String']>>;
  roles_POP?: InputMaybe<Scalars['Int']>;
  roles_PUSH?: InputMaybe<Array<Scalars['String']>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdRoadmapsAggregate?: InputMaybe<UserCreatedRoadmapsAggregateInput>;
  /** Return Users where all of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_ALL?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where none of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_NONE?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where one of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_SINGLE?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where some of the related UserCreatedRoadmapsConnections match this filter */
  createdRoadmapsConnection_SOME?: InputMaybe<UserCreatedRoadmapsConnectionWhere>;
  /** Return Users where all of the related Roadmaps match this filter */
  createdRoadmaps_ALL?: InputMaybe<RoadmapWhere>;
  /** Return Users where none of the related Roadmaps match this filter */
  createdRoadmaps_NONE?: InputMaybe<RoadmapWhere>;
  /** Return Users where one of the related Roadmaps match this filter */
  createdRoadmaps_SINGLE?: InputMaybe<RoadmapWhere>;
  /** Return Users where some of the related Roadmaps match this filter */
  createdRoadmaps_SOME?: InputMaybe<RoadmapWhere>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<Scalars['String']>>;
  email_MATCHES?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_CONTAINS?: InputMaybe<Scalars['String']>;
  firstName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  firstName_IN?: InputMaybe<Array<Scalars['String']>>;
  firstName_MATCHES?: InputMaybe<Scalars['String']>;
  firstName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_MATCHES?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_CONTAINS?: InputMaybe<Scalars['String']>;
  lastName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  lastName_IN?: InputMaybe<Array<Scalars['String']>>;
  lastName_MATCHES?: InputMaybe<Scalars['String']>;
  lastName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  preferableTopicsAggregate?: InputMaybe<UserPreferableTopicsAggregateInput>;
  /** Return Users where all of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_ALL?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where none of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_NONE?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where one of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_SINGLE?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where some of the related UserPreferableTopicsConnections match this filter */
  preferableTopicsConnection_SOME?: InputMaybe<UserPreferableTopicsConnectionWhere>;
  /** Return Users where all of the related TopicTags match this filter */
  preferableTopics_ALL?: InputMaybe<TopicTagWhere>;
  /** Return Users where none of the related TopicTags match this filter */
  preferableTopics_NONE?: InputMaybe<TopicTagWhere>;
  /** Return Users where one of the related TopicTags match this filter */
  preferableTopics_SINGLE?: InputMaybe<TopicTagWhere>;
  /** Return Users where some of the related TopicTags match this filter */
  preferableTopics_SOME?: InputMaybe<TopicTagWhere>;
  roles?: InputMaybe<Array<Scalars['String']>>;
  roles_INCLUDES?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserInfoFragment = {
  __typename?: 'UserResponse';
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Array<string>;
};

export type SessionInfoFragment = {
  __typename?: 'AuthSessionWithUserResponse';
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: 'Query';
  currentUser: {
    __typename?: 'UserResponse';
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: Array<string>;
  };
};

export type SignInMutationVariables = Exact<{
  data: UserSignInInput;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'AuthSessionWithUserResponse';
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    refreshTokenExpiresIn: number;
    user: {
      __typename?: 'UserResponse';
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      roles: Array<string>;
    };
  };
};

export type SignUpMutationVariables = Exact<{
  data: UserSignUpInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'AuthSessionWithUserResponse';
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    refreshTokenExpiresIn: number;
    user: {
      __typename?: 'UserResponse';
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      roles: Array<string>;
    };
  };
};

export type RefreshSessionMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type RefreshSessionMutation = {
  __typename?: 'Mutation';
  refreshSession: { __typename?: 'AuthSessionResponse'; accessToken: string; refreshToken: string };
};

export type CoursePlatformInfoFragment = {
  __typename?: 'CoursePlatform';
  id: string;
  name: string;
  url: string;
  logoUrl?: string | null;
  createdAt: any;
  updatedAt?: any | null;
};

export type GetCoursePlatformsQueryVariables = Exact<{
  where?: InputMaybe<CoursePlatformWhere>;
}>;

export type GetCoursePlatformsQuery = {
  __typename?: 'Query';
  coursePlatforms: Array<{
    __typename?: 'CoursePlatform';
    id: string;
    name: string;
    url: string;
    logoUrl?: string | null;
    createdAt: any;
    updatedAt?: any | null;
  }>;
};

export type CreateCoursePlatformMutationVariables = Exact<{
  input: CoursePlatformCreateInput;
}>;

export type CreateCoursePlatformMutation = {
  __typename?: 'Mutation';
  createCoursePlatforms: {
    __typename?: 'CreateCoursePlatformsMutationResponse';
    coursePlatforms: Array<{ __typename?: 'CoursePlatform'; id: string }>;
  };
};

export type UpdateCoursePlatformByIdMutationVariables = Exact<{
  id: Scalars['ID'];
  input?: InputMaybe<CoursePlatformUpdateInput>;
}>;

export type UpdateCoursePlatformByIdMutation = {
  __typename?: 'Mutation';
  updateCoursePlatforms: {
    __typename?: 'UpdateCoursePlatformsMutationResponse';
    coursePlatforms: Array<{ __typename?: 'CoursePlatform'; id: string }>;
  };
};

export type DeleteCoursePlatformByIdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteCoursePlatformByIdMutation = {
  __typename?: 'Mutation';
  deleteCoursePlatforms: { __typename?: 'DeleteInfo'; nodesDeleted: number };
};

export type CourseInfoFragment = {
  __typename?: 'Course';
  id: string;
  title: string;
  description?: string | null;
  url: string;
  createdAt: any;
  updatedAt?: any | null;
  difficulty?: Difficulty | null;
  externalRating?: number | null;
  externalRatingsCount?: number | null;
  languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
  price?: {
    __typename?: 'CoursePrice';
    currencyCodeISO?: string | null;
    price?: number | null;
  } | null;
  platform?: {
    __typename?: 'CoursePlatform';
    id: string;
    name: string;
    logoUrl?: string | null;
    url: string;
  } | null;
  tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
};

export type GetCoursesQueryVariables = Exact<{
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
}>;

export type GetCoursesQuery = {
  __typename?: 'Query';
  courses: Array<{
    __typename?: 'Course';
    id: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt: any;
    updatedAt?: any | null;
    difficulty?: Difficulty | null;
    externalRating?: number | null;
    externalRatingsCount?: number | null;
    languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
    price?: {
      __typename?: 'CoursePrice';
      currencyCodeISO?: string | null;
      price?: number | null;
    } | null;
    platform?: {
      __typename?: 'CoursePlatform';
      id: string;
      name: string;
      logoUrl?: string | null;
      url: string;
    } | null;
    tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
  }>;
  coursesAggregate: { __typename?: 'CourseAggregateSelection'; count: number };
};

export type SearchCoursesQueryVariables = Exact<{
  searchQuery: Scalars['String'];
  where?: InputMaybe<CourseFulltextWhere>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type SearchCoursesQuery = {
  __typename?: 'Query';
  coursesFulltextCourseInfo: Array<{
    __typename?: 'CourseFulltextResult';
    score: number;
    course: {
      __typename?: 'Course';
      id: string;
      title: string;
      description?: string | null;
      url: string;
      createdAt: any;
      updatedAt?: any | null;
      difficulty?: Difficulty | null;
      externalRating?: number | null;
      externalRatingsCount?: number | null;
      languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
      price?: {
        __typename?: 'CoursePrice';
        currencyCodeISO?: string | null;
        price?: number | null;
      } | null;
      platform?: {
        __typename?: 'CoursePlatform';
        id: string;
        name: string;
        logoUrl?: string | null;
        url: string;
      } | null;
      tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
    };
  }>;
};

export type CreateCourseMutationVariables = Exact<{
  input: CourseCreateInput;
}>;

export type CreateCourseMutation = {
  __typename?: 'Mutation';
  createCourses: {
    __typename?: 'CreateCoursesMutationResponse';
    courses: Array<{ __typename?: 'Course'; id: string }>;
  };
};

export type UpdateCourseByIdMutationVariables = Exact<{
  id: Scalars['ID'];
  input?: InputMaybe<CourseUpdateInput>;
  connect?: InputMaybe<CourseConnectInput>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
}>;

export type UpdateCourseByIdMutation = {
  __typename?: 'Mutation';
  updateCourses: {
    __typename?: 'UpdateCoursesMutationResponse';
    courses: Array<{ __typename?: 'Course'; id: string }>;
  };
};

export type DeleteCourseByIdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteCourseByIdMutation = {
  __typename?: 'Mutation';
  deleteCourses: { __typename?: 'DeleteInfo'; nodesDeleted: number };
};

export type GlobalSearchQueryVariables = Exact<{
  searchQuery: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  minScore?: InputMaybe<Scalars['Float']>;
}>;

export type GlobalSearchQuery = {
  __typename?: 'Query';
  coursesFulltextCourseInfo: Array<{
    __typename?: 'CourseFulltextResult';
    score: number;
    course: {
      __typename?: 'Course';
      id: string;
      title: string;
      description?: string | null;
      url: string;
      createdAt: any;
      updatedAt?: any | null;
      difficulty?: Difficulty | null;
      externalRating?: number | null;
      externalRatingsCount?: number | null;
      languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
      price?: {
        __typename?: 'CoursePrice';
        currencyCodeISO?: string | null;
        price?: number | null;
      } | null;
      platform?: {
        __typename?: 'CoursePlatform';
        id: string;
        name: string;
        logoUrl?: string | null;
        url: string;
      } | null;
      tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
    };
  }>;
  roadmapsFulltextRoadmapInfo: Array<{
    __typename?: 'RoadmapFulltextResult';
    score: number;
    roadmap: {
      __typename?: 'Roadmap';
      id: string;
      title: string;
      description?: string | null;
      difficulty?: Difficulty | null;
      createdAt: any;
      updatedAt?: any | null;
      tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
      languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
      createdBy: { __typename?: 'User'; id: string; firstName: string; lastName: string };
    };
  }>;
};

export type RoadmapNodeInfoFragment = {
  __typename?: 'RoadmapNode';
  id: string;
  title: string;
  description?: string | null;
  type: string;
  positionX: number;
  positionY: number;
  suggestedCourses: Array<{
    __typename?: 'Course';
    id: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt: any;
    updatedAt?: any | null;
    difficulty?: Difficulty | null;
    externalRating?: number | null;
    externalRatingsCount?: number | null;
    languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
    price?: {
      __typename?: 'CoursePrice';
      currencyCodeISO?: string | null;
      price?: number | null;
    } | null;
    platform?: {
      __typename?: 'CoursePlatform';
      id: string;
      name: string;
      logoUrl?: string | null;
      url: string;
    } | null;
    tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
  }>;
};

export type RoadmapEdgeInfoFragment = {
  __typename?: 'RoadmapEdge';
  id: string;
  source: string;
  target: string;
  targetHandle?: string | null;
};

export type RoadmapInfoFragment = {
  __typename?: 'Roadmap';
  id: string;
  title: string;
  description?: string | null;
  difficulty?: Difficulty | null;
  createdAt: any;
  updatedAt?: any | null;
  tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
  languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
  createdBy: { __typename?: 'User'; id: string; firstName: string; lastName: string };
};

export type GetRoadmapsQueryVariables = Exact<{
  where?: InputMaybe<RoadmapWhere>;
  options?: InputMaybe<RoadmapOptions>;
}>;

export type GetRoadmapsQuery = {
  __typename?: 'Query';
  roadmaps: Array<{
    __typename?: 'Roadmap';
    id: string;
    title: string;
    description?: string | null;
    difficulty?: Difficulty | null;
    createdAt: any;
    updatedAt?: any | null;
    tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
    languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
    createdBy: { __typename?: 'User'; id: string; firstName: string; lastName: string };
  }>;
  roadmapsAggregate: { __typename?: 'RoadmapAggregateSelection'; count: number };
};

export type SearchRoadmapsQueryVariables = Exact<{
  searchQuery: Scalars['String'];
  where?: InputMaybe<RoadmapFulltextWhere>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type SearchRoadmapsQuery = {
  __typename?: 'Query';
  roadmapsFulltextRoadmapInfo: Array<{
    __typename?: 'RoadmapFulltextResult';
    score: number;
    roadmap: {
      __typename?: 'Roadmap';
      id: string;
      title: string;
      description?: string | null;
      difficulty?: Difficulty | null;
      createdAt: any;
      updatedAt?: any | null;
      tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
      languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
      createdBy: { __typename?: 'User'; id: string; firstName: string; lastName: string };
    };
  }>;
};

export type GetRoadmapByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetRoadmapByIdQuery = {
  __typename?: 'Query';
  roadmaps: Array<{
    __typename?: 'Roadmap';
    id: string;
    title: string;
    description?: string | null;
    difficulty?: Difficulty | null;
    createdAt: any;
    updatedAt?: any | null;
    tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
    languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
    nodes?: Array<{
      __typename?: 'RoadmapNode';
      id: string;
      title: string;
      description?: string | null;
      type: string;
      positionX: number;
      positionY: number;
      suggestedCourses: Array<{
        __typename?: 'Course';
        id: string;
        title: string;
        description?: string | null;
        url: string;
        createdAt: any;
        updatedAt?: any | null;
        difficulty?: Difficulty | null;
        externalRating?: number | null;
        externalRatingsCount?: number | null;
        languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
        price?: {
          __typename?: 'CoursePrice';
          currencyCodeISO?: string | null;
          price?: number | null;
        } | null;
        platform?: {
          __typename?: 'CoursePlatform';
          id: string;
          name: string;
          logoUrl?: string | null;
          url: string;
        } | null;
        tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
      }>;
    }> | null;
    edges?: Array<{
      __typename?: 'RoadmapEdge';
      id: string;
      source: string;
      target: string;
      targetHandle?: string | null;
    }> | null;
    createdBy: { __typename?: 'User'; id: string; firstName: string; lastName: string };
  }>;
};

export type CreateRoadmapMutationVariables = Exact<{
  data: CreateRoadmapInput;
}>;

export type CreateRoadmapMutation = { __typename?: 'Mutation'; createRoadmap: boolean };

export type GetTopicTagsQueryVariables = Exact<{
  where?: InputMaybe<TopicTagWhere>;
  options?: InputMaybe<TopicTagOptions>;
}>;

export type GetTopicTagsQuery = {
  __typename?: 'Query';
  topicTags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
};

export type GetUserRecommendedCoursesQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
}>;

export type GetUserRecommendedCoursesQuery = {
  __typename?: 'Query';
  userRecommendedCourses?: Array<{
    __typename?: 'Course';
    id: string;
    title: string;
    description?: string | null;
    url: string;
    createdAt: any;
    updatedAt?: any | null;
    difficulty?: Difficulty | null;
    externalRating?: number | null;
    externalRatingsCount?: number | null;
    languages: Array<{ __typename?: 'Language'; countryCodeISO: string }>;
    price?: {
      __typename?: 'CoursePrice';
      currencyCodeISO?: string | null;
      price?: number | null;
    } | null;
    platform?: {
      __typename?: 'CoursePlatform';
      id: string;
      name: string;
      logoUrl?: string | null;
      url: string;
    } | null;
    tags: Array<{ __typename?: 'TopicTag'; id: string; name: string }>;
  }> | null;
};

export const UserInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'UserResponse' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roles' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const SessionInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SessionInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AuthSessionWithUserResponse' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accessTokenExpiresIn' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenExpiresIn' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CoursePlatformInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CoursePlatformInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CoursePlatform' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CourseInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const RoadmapNodeInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapNodeInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapNode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'positionX' } },
          { kind: 'Field', name: { kind: 'Name', value: 'positionY' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'suggestedCourses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CourseInfo' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const RoadmapEdgeInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapEdgeInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapEdge' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'target' } },
          { kind: 'Field', name: { kind: 'Name', value: 'targetHandle' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const RoadmapInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Roadmap' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createdBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CurrentUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CurrentUser' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserInfo' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'UserResponse' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roles' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export const SignInDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignIn' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserSignInInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signIn' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SessionInfo' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserInfo' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'UserResponse' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roles' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SessionInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AuthSessionWithUserResponse' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accessTokenExpiresIn' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenExpiresIn' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignUpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserSignUpInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signUp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SessionInfo' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserInfo' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'UserResponse' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roles' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SessionInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AuthSessionWithUserResponse' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'accessTokenExpiresIn' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
          { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenExpiresIn' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const RefreshSessionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RefreshSession' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'refreshToken' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'refreshSession' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'refreshToken' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'refreshToken' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type RefreshSessionMutationFn = Apollo.MutationFunction<
  RefreshSessionMutation,
  RefreshSessionMutationVariables
>;

/**
 * __useRefreshSessionMutation__
 *
 * To run a mutation, you first call `useRefreshSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshSessionMutation, { data, loading, error }] = useRefreshSessionMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<RefreshSessionMutation, RefreshSessionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RefreshSessionMutation, RefreshSessionMutationVariables>(
    RefreshSessionDocument,
    options,
  );
}
export type RefreshSessionMutationHookResult = ReturnType<typeof useRefreshSessionMutation>;
export type RefreshSessionMutationResult = Apollo.MutationResult<RefreshSessionMutation>;
export type RefreshSessionMutationOptions = Apollo.BaseMutationOptions<
  RefreshSessionMutation,
  RefreshSessionMutationVariables
>;
export const GetCoursePlatformsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCoursePlatforms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CoursePlatformWhere' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coursePlatforms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CoursePlatformInfo' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CoursePlatformInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CoursePlatform' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetCoursePlatformsQuery__
 *
 * To run a query within a React component, call `useGetCoursePlatformsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursePlatformsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursePlatformsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCoursePlatformsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCoursePlatformsQuery, GetCoursePlatformsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCoursePlatformsQuery, GetCoursePlatformsQueryVariables>(
    GetCoursePlatformsDocument,
    options,
  );
}
export function useGetCoursePlatformsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCoursePlatformsQuery,
    GetCoursePlatformsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCoursePlatformsQuery, GetCoursePlatformsQueryVariables>(
    GetCoursePlatformsDocument,
    options,
  );
}
export type GetCoursePlatformsQueryHookResult = ReturnType<typeof useGetCoursePlatformsQuery>;
export type GetCoursePlatformsLazyQueryHookResult = ReturnType<
  typeof useGetCoursePlatformsLazyQuery
>;
export type GetCoursePlatformsQueryResult = Apollo.QueryResult<
  GetCoursePlatformsQuery,
  GetCoursePlatformsQueryVariables
>;
export const CreateCoursePlatformDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCoursePlatform' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CoursePlatformCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCoursePlatforms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ListValue',
                  values: [{ kind: 'Variable', name: { kind: 'Name', value: 'input' } }],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coursePlatforms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type CreateCoursePlatformMutationFn = Apollo.MutationFunction<
  CreateCoursePlatformMutation,
  CreateCoursePlatformMutationVariables
>;

/**
 * __useCreateCoursePlatformMutation__
 *
 * To run a mutation, you first call `useCreateCoursePlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoursePlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoursePlatformMutation, { data, loading, error }] = useCreateCoursePlatformMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCoursePlatformMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCoursePlatformMutation,
    CreateCoursePlatformMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateCoursePlatformMutation, CreateCoursePlatformMutationVariables>(
    CreateCoursePlatformDocument,
    options,
  );
}
export type CreateCoursePlatformMutationHookResult = ReturnType<
  typeof useCreateCoursePlatformMutation
>;
export type CreateCoursePlatformMutationResult =
  Apollo.MutationResult<CreateCoursePlatformMutation>;
export type CreateCoursePlatformMutationOptions = Apollo.BaseMutationOptions<
  CreateCoursePlatformMutation,
  CreateCoursePlatformMutationVariables
>;
export const UpdateCoursePlatformByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCoursePlatformById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CoursePlatformUpdateInput' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCoursePlatforms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'update' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coursePlatforms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type UpdateCoursePlatformByIdMutationFn = Apollo.MutationFunction<
  UpdateCoursePlatformByIdMutation,
  UpdateCoursePlatformByIdMutationVariables
>;

/**
 * __useUpdateCoursePlatformByIdMutation__
 *
 * To run a mutation, you first call `useUpdateCoursePlatformByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoursePlatformByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoursePlatformByIdMutation, { data, loading, error }] = useUpdateCoursePlatformByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCoursePlatformByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCoursePlatformByIdMutation,
    UpdateCoursePlatformByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCoursePlatformByIdMutation,
    UpdateCoursePlatformByIdMutationVariables
  >(UpdateCoursePlatformByIdDocument, options);
}
export type UpdateCoursePlatformByIdMutationHookResult = ReturnType<
  typeof useUpdateCoursePlatformByIdMutation
>;
export type UpdateCoursePlatformByIdMutationResult =
  Apollo.MutationResult<UpdateCoursePlatformByIdMutation>;
export type UpdateCoursePlatformByIdMutationOptions = Apollo.BaseMutationOptions<
  UpdateCoursePlatformByIdMutation,
  UpdateCoursePlatformByIdMutationVariables
>;
export const DeleteCoursePlatformByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteCoursePlatformById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCoursePlatforms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'nodesDeleted' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type DeleteCoursePlatformByIdMutationFn = Apollo.MutationFunction<
  DeleteCoursePlatformByIdMutation,
  DeleteCoursePlatformByIdMutationVariables
>;

/**
 * __useDeleteCoursePlatformByIdMutation__
 *
 * To run a mutation, you first call `useDeleteCoursePlatformByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCoursePlatformByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCoursePlatformByIdMutation, { data, loading, error }] = useDeleteCoursePlatformByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCoursePlatformByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCoursePlatformByIdMutation,
    DeleteCoursePlatformByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCoursePlatformByIdMutation,
    DeleteCoursePlatformByIdMutationVariables
  >(DeleteCoursePlatformByIdDocument, options);
}
export type DeleteCoursePlatformByIdMutationHookResult = ReturnType<
  typeof useDeleteCoursePlatformByIdMutation
>;
export type DeleteCoursePlatformByIdMutationResult =
  Apollo.MutationResult<DeleteCoursePlatformByIdMutation>;
export type DeleteCoursePlatformByIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteCoursePlatformByIdMutation,
  DeleteCoursePlatformByIdMutationVariables
>;
export const GetCoursesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCourses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseWhere' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'options' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseOptions' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'courses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'options' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'options' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CourseInfo' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coursesAggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCoursesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
}
export function useGetCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(
    GetCoursesDocument,
    options,
  );
}
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>;
export type GetCoursesQueryResult = Apollo.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export const SearchCoursesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchCourses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseFulltextWhere' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coursesFulltextCourseInfo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'phrase' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'course' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CourseInfo' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useSearchCoursesQuery__
 *
 * To run a query within a React component, call `useSearchCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCoursesQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchCoursesQuery(
  baseOptions: Apollo.QueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(
    SearchCoursesDocument,
    options,
  );
}
export function useSearchCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(
    SearchCoursesDocument,
    options,
  );
}
export type SearchCoursesQueryHookResult = ReturnType<typeof useSearchCoursesQuery>;
export type SearchCoursesLazyQueryHookResult = ReturnType<typeof useSearchCoursesLazyQuery>;
export type SearchCoursesQueryResult = Apollo.QueryResult<
  SearchCoursesQuery,
  SearchCoursesQueryVariables
>;
export const CreateCourseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCourse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCourses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ListValue',
                  values: [{ kind: 'Variable', name: { kind: 'Name', value: 'input' } }],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'courses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type CreateCourseMutationFn = Apollo.MutationFunction<
  CreateCourseMutation,
  CreateCourseMutationVariables
>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCourseMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(
    CreateCourseDocument,
    options,
  );
}
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<
  CreateCourseMutation,
  CreateCourseMutationVariables
>;
export const UpdateCourseByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCourseById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseUpdateInput' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'connect' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseConnectInput' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'disconnect' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CourseDisconnectInput' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCourses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'update' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'connect' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'connect' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'disconnect' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'disconnect' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'courses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type UpdateCourseByIdMutationFn = Apollo.MutationFunction<
  UpdateCourseByIdMutation,
  UpdateCourseByIdMutationVariables
>;

/**
 * __useUpdateCourseByIdMutation__
 *
 * To run a mutation, you first call `useUpdateCourseByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseByIdMutation, { data, loading, error }] = useUpdateCourseByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *      connect: // value for 'connect'
 *      disconnect: // value for 'disconnect'
 *   },
 * });
 */
export function useUpdateCourseByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCourseByIdMutation,
    UpdateCourseByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateCourseByIdMutation, UpdateCourseByIdMutationVariables>(
    UpdateCourseByIdDocument,
    options,
  );
}
export type UpdateCourseByIdMutationHookResult = ReturnType<typeof useUpdateCourseByIdMutation>;
export type UpdateCourseByIdMutationResult = Apollo.MutationResult<UpdateCourseByIdMutation>;
export type UpdateCourseByIdMutationOptions = Apollo.BaseMutationOptions<
  UpdateCourseByIdMutation,
  UpdateCourseByIdMutationVariables
>;
export const DeleteCourseByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteCourseById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCourses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'delete' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'where' },
                            value: { kind: 'ObjectValue', fields: [] },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'nodesDeleted' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type DeleteCourseByIdMutationFn = Apollo.MutationFunction<
  DeleteCourseByIdMutation,
  DeleteCourseByIdMutationVariables
>;

/**
 * __useDeleteCourseByIdMutation__
 *
 * To run a mutation, you first call `useDeleteCourseByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseByIdMutation, { data, loading, error }] = useDeleteCourseByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCourseByIdMutation,
    DeleteCourseByIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteCourseByIdMutation, DeleteCourseByIdMutationVariables>(
    DeleteCourseByIdDocument,
    options,
  );
}
export type DeleteCourseByIdMutationHookResult = ReturnType<typeof useDeleteCourseByIdMutation>;
export type DeleteCourseByIdMutationResult = Apollo.MutationResult<DeleteCourseByIdMutation>;
export type DeleteCourseByIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteCourseByIdMutation,
  DeleteCourseByIdMutationVariables
>;
export const GlobalSearchDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GlobalSearch' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'minScore' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coursesFulltextCourseInfo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'phrase' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'score' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'min' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'minScore' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'course' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CourseInfo' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roadmapsFulltextRoadmapInfo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'phrase' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'score' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'min' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'minScore' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'roadmap' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoadmapInfo' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Roadmap' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createdBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGlobalSearchQuery__
 *
 * To run a query within a React component, call `useGlobalSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalSearchQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      minScore: // value for 'minScore'
 *   },
 * });
 */
export function useGlobalSearchQuery(
  baseOptions: Apollo.QueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GlobalSearchQuery, GlobalSearchQueryVariables>(
    GlobalSearchDocument,
    options,
  );
}
export function useGlobalSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GlobalSearchQuery, GlobalSearchQueryVariables>(
    GlobalSearchDocument,
    options,
  );
}
export type GlobalSearchQueryHookResult = ReturnType<typeof useGlobalSearchQuery>;
export type GlobalSearchLazyQueryHookResult = ReturnType<typeof useGlobalSearchLazyQuery>;
export type GlobalSearchQueryResult = Apollo.QueryResult<
  GlobalSearchQuery,
  GlobalSearchQueryVariables
>;
export const GetRoadmapsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRoadmaps' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapWhere' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'options' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapOptions' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roadmaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'options' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'options' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoadmapInfo' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roadmapsAggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Roadmap' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createdBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetRoadmapsQuery__
 *
 * To run a query within a React component, call `useGetRoadmapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoadmapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoadmapsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetRoadmapsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRoadmapsQuery, GetRoadmapsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoadmapsQuery, GetRoadmapsQueryVariables>(GetRoadmapsDocument, options);
}
export function useGetRoadmapsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRoadmapsQuery, GetRoadmapsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRoadmapsQuery, GetRoadmapsQueryVariables>(
    GetRoadmapsDocument,
    options,
  );
}
export type GetRoadmapsQueryHookResult = ReturnType<typeof useGetRoadmapsQuery>;
export type GetRoadmapsLazyQueryHookResult = ReturnType<typeof useGetRoadmapsLazyQuery>;
export type GetRoadmapsQueryResult = Apollo.QueryResult<
  GetRoadmapsQuery,
  GetRoadmapsQueryVariables
>;
export const SearchRoadmapsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchRoadmaps' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapFulltextWhere' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roadmapsFulltextRoadmapInfo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'phrase' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'searchQuery' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'roadmap' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoadmapInfo' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'score' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Roadmap' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createdBy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useSearchRoadmapsQuery__
 *
 * To run a query within a React component, call `useSearchRoadmapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRoadmapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRoadmapsQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchRoadmapsQuery(
  baseOptions: Apollo.QueryHookOptions<SearchRoadmapsQuery, SearchRoadmapsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchRoadmapsQuery, SearchRoadmapsQueryVariables>(
    SearchRoadmapsDocument,
    options,
  );
}
export function useSearchRoadmapsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchRoadmapsQuery, SearchRoadmapsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchRoadmapsQuery, SearchRoadmapsQueryVariables>(
    SearchRoadmapsDocument,
    options,
  );
}
export type SearchRoadmapsQueryHookResult = ReturnType<typeof useSearchRoadmapsQuery>;
export type SearchRoadmapsLazyQueryHookResult = ReturnType<typeof useSearchRoadmapsLazyQuery>;
export type SearchRoadmapsQueryResult = Apollo.QueryResult<
  SearchRoadmapsQuery,
  SearchRoadmapsQueryVariables
>;
export const GetRoadmapByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRoadmapById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roadmaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'languages' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoadmapNodeInfo' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoadmapEdgeInfo' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdBy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapNodeInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapNode' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'positionX' } },
          { kind: 'Field', name: { kind: 'Name', value: 'positionY' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'suggestedCourses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CourseInfo' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RoadmapEdgeInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RoadmapEdge' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'target' } },
          { kind: 'Field', name: { kind: 'Name', value: 'targetHandle' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetRoadmapByIdQuery__
 *
 * To run a query within a React component, call `useGetRoadmapByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoadmapByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoadmapByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoadmapByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetRoadmapByIdQuery, GetRoadmapByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRoadmapByIdQuery, GetRoadmapByIdQueryVariables>(
    GetRoadmapByIdDocument,
    options,
  );
}
export function useGetRoadmapByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRoadmapByIdQuery, GetRoadmapByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRoadmapByIdQuery, GetRoadmapByIdQueryVariables>(
    GetRoadmapByIdDocument,
    options,
  );
}
export type GetRoadmapByIdQueryHookResult = ReturnType<typeof useGetRoadmapByIdQuery>;
export type GetRoadmapByIdLazyQueryHookResult = ReturnType<typeof useGetRoadmapByIdLazyQuery>;
export type GetRoadmapByIdQueryResult = Apollo.QueryResult<
  GetRoadmapByIdQuery,
  GetRoadmapByIdQueryVariables
>;
export const CreateRoadmapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateRoadmap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateRoadmapInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createRoadmap' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type CreateRoadmapMutationFn = Apollo.MutationFunction<
  CreateRoadmapMutation,
  CreateRoadmapMutationVariables
>;

/**
 * __useCreateRoadmapMutation__
 *
 * To run a mutation, you first call `useCreateRoadmapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoadmapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoadmapMutation, { data, loading, error }] = useCreateRoadmapMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRoadmapMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateRoadmapMutation, CreateRoadmapMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateRoadmapMutation, CreateRoadmapMutationVariables>(
    CreateRoadmapDocument,
    options,
  );
}
export type CreateRoadmapMutationHookResult = ReturnType<typeof useCreateRoadmapMutation>;
export type CreateRoadmapMutationResult = Apollo.MutationResult<CreateRoadmapMutation>;
export type CreateRoadmapMutationOptions = Apollo.BaseMutationOptions<
  CreateRoadmapMutation,
  CreateRoadmapMutationVariables
>;
export const GetTopicTagsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTopicTags' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicTagWhere' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'options' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicTagOptions' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topicTags' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'options' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'options' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetTopicTagsQuery__
 *
 * To run a query within a React component, call `useGetTopicTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicTagsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetTopicTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTopicTagsQuery, GetTopicTagsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTopicTagsQuery, GetTopicTagsQueryVariables>(
    GetTopicTagsDocument,
    options,
  );
}
export function useGetTopicTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTopicTagsQuery, GetTopicTagsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTopicTagsQuery, GetTopicTagsQueryVariables>(
    GetTopicTagsDocument,
    options,
  );
}
export type GetTopicTagsQueryHookResult = ReturnType<typeof useGetTopicTagsQuery>;
export type GetTopicTagsLazyQueryHookResult = ReturnType<typeof useGetTopicTagsLazyQuery>;
export type GetTopicTagsQueryResult = Apollo.QueryResult<
  GetTopicTagsQuery,
  GetTopicTagsQueryVariables
>;
export const GetUserRecommendedCoursesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserRecommendedCourses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'count' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userRecommendedCourses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'count' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'count' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CourseInfo' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CourseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Course' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'difficulty' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalRatingsCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countryCodeISO' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currencyCodeISO' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'platform' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetUserRecommendedCoursesQuery__
 *
 * To run a query within a React component, call `useGetUserRecommendedCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRecommendedCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRecommendedCoursesQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetUserRecommendedCoursesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserRecommendedCoursesQuery,
    GetUserRecommendedCoursesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserRecommendedCoursesQuery, GetUserRecommendedCoursesQueryVariables>(
    GetUserRecommendedCoursesDocument,
    options,
  );
}
export function useGetUserRecommendedCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserRecommendedCoursesQuery,
    GetUserRecommendedCoursesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserRecommendedCoursesQuery,
    GetUserRecommendedCoursesQueryVariables
  >(GetUserRecommendedCoursesDocument, options);
}
export type GetUserRecommendedCoursesQueryHookResult = ReturnType<
  typeof useGetUserRecommendedCoursesQuery
>;
export type GetUserRecommendedCoursesLazyQueryHookResult = ReturnType<
  typeof useGetUserRecommendedCoursesLazyQuery
>;
export type GetUserRecommendedCoursesQueryResult = Apollo.QueryResult<
  GetUserRecommendedCoursesQuery,
  GetUserRecommendedCoursesQueryVariables
>;
