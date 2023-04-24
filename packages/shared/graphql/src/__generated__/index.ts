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
  id: Scalars['ID'];
  languages: Array<CourseLanguage>;
  languagesAggregate?: Maybe<CourseCourseLanguageLanguagesAggregationSelection>;
  languagesConnection: CourseLanguagesConnection;
  platform?: Maybe<CoursePlatform>;
  platformAggregate?: Maybe<CourseCoursePlatformPlatformAggregationSelection>;
  platformConnection: CoursePlatformConnection;
  price?: Maybe<CoursePrice>;
  priceAggregate?: Maybe<CourseCoursePricePriceAggregationSelection>;
  priceConnection: CoursePriceConnection;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type CourseLanguagesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseLanguageOptions>;
  where?: InputMaybe<CourseLanguageWhere>;
};

export type CourseLanguagesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseLanguageWhere>;
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

export type CourseAggregateSelection = {
  __typename?: 'CourseAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CourseConnectInput = {
  languages?: InputMaybe<Array<CourseLanguagesConnectFieldInput>>;
  platform?: InputMaybe<CoursePlatformConnectFieldInput>;
  price?: InputMaybe<CoursePriceConnectFieldInput>;
};

export type CourseConnectOrCreateInput = {
  languages?: InputMaybe<Array<CourseLanguagesConnectOrCreateFieldInput>>;
  platform?: InputMaybe<CoursePlatformConnectOrCreateFieldInput>;
};

export type CourseConnectOrCreateWhere = {
  node: CourseUniqueWhere;
};

export type CourseConnectWhere = {
  node: CourseWhere;
};

export type CourseCourseLanguageLanguagesAggregationSelection = {
  __typename?: 'CourseCourseLanguageLanguagesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CourseCourseLanguageLanguagesNodeAggregateSelection>;
};

export type CourseCourseLanguageLanguagesNodeAggregateSelection = {
  __typename?: 'CourseCourseLanguageLanguagesNodeAggregateSelection';
  countryCodeISO: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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
  currency: StringAggregateSelectionNullable;
  price: IntAggregateSelectionNullable;
};

export type CourseCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<CourseLanguagesFieldInput>;
  platform?: InputMaybe<CoursePlatformFieldInput>;
  price?: InputMaybe<CoursePriceFieldInput>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CourseDeleteInput = {
  languages?: InputMaybe<Array<CourseLanguagesDeleteFieldInput>>;
  platform?: InputMaybe<CoursePlatformDeleteFieldInput>;
  price?: InputMaybe<CoursePriceDeleteFieldInput>;
};

export type CourseDisconnectInput = {
  languages?: InputMaybe<Array<CourseLanguagesDisconnectFieldInput>>;
  platform?: InputMaybe<CoursePlatformDisconnectFieldInput>;
  price?: InputMaybe<CoursePriceDisconnectFieldInput>;
};

export type CourseEdge = {
  __typename?: 'CourseEdge';
  cursor: Scalars['String'];
  node: Course;
};

export type CourseLanguage = {
  __typename?: 'CourseLanguage';
  countryCodeISO: Scalars['String'];
  courses: Array<Course>;
  coursesAggregate?: Maybe<CourseLanguageCourseCoursesAggregationSelection>;
  coursesConnection: CourseLanguageCoursesConnection;
  name: Scalars['String'];
};

export type CourseLanguageCoursesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CourseOptions>;
  where?: InputMaybe<CourseWhere>;
};

export type CourseLanguageCoursesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CourseWhere>;
};

export type CourseLanguageCoursesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CourseLanguageCoursesConnectionSort>>;
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
};

export type CourseLanguageAggregateSelection = {
  __typename?: 'CourseLanguageAggregateSelection';
  count: Scalars['Int'];
  countryCodeISO: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
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

export type CourseLanguageCourseCoursesAggregationSelection = {
  __typename?: 'CourseLanguageCourseCoursesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CourseLanguageCourseCoursesNodeAggregateSelection>;
};

export type CourseLanguageCourseCoursesNodeAggregateSelection = {
  __typename?: 'CourseLanguageCourseCoursesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  url: StringAggregateSelectionNonNullable;
};

export type CourseLanguageCoursesAggregateInput = {
  AND?: InputMaybe<Array<CourseLanguageCoursesAggregateInput>>;
  NOT?: InputMaybe<CourseLanguageCoursesAggregateInput>;
  OR?: InputMaybe<Array<CourseLanguageCoursesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CourseLanguageCoursesNodeAggregationWhereInput>;
};

export type CourseLanguageCoursesConnectFieldInput = {
  connect?: InputMaybe<Array<CourseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseConnectWhere>;
};

export type CourseLanguageCoursesConnectOrCreateFieldInput = {
  onCreate: CourseLanguageCoursesConnectOrCreateFieldInputOnCreate;
  where: CourseConnectOrCreateWhere;
};

export type CourseLanguageCoursesConnectOrCreateFieldInputOnCreate = {
  node: CourseOnCreateInput;
};

export type CourseLanguageCoursesConnection = {
  __typename?: 'CourseLanguageCoursesConnection';
  edges: Array<CourseLanguageCoursesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CourseLanguageCoursesConnectionSort = {
  node?: InputMaybe<CourseSort>;
};

export type CourseLanguageCoursesConnectionWhere = {
  AND?: InputMaybe<Array<CourseLanguageCoursesConnectionWhere>>;
  NOT?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  OR?: InputMaybe<Array<CourseLanguageCoursesConnectionWhere>>;
  node?: InputMaybe<CourseWhere>;
};

export type CourseLanguageCoursesCreateFieldInput = {
  node: CourseCreateInput;
};

export type CourseLanguageCoursesDeleteFieldInput = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
};

export type CourseLanguageCoursesDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseDisconnectInput>;
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
};

export type CourseLanguageCoursesFieldInput = {
  connect?: InputMaybe<Array<CourseLanguageCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseLanguageCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CourseLanguageCoursesCreateFieldInput>>;
};

export type CourseLanguageCoursesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CourseLanguageCoursesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CourseLanguageCoursesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CourseLanguageCoursesNodeAggregationWhereInput>>;
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

export type CourseLanguageCoursesRelationship = {
  __typename?: 'CourseLanguageCoursesRelationship';
  cursor: Scalars['String'];
  node: Course;
};

export type CourseLanguageCoursesUpdateConnectionInput = {
  node?: InputMaybe<CourseUpdateInput>;
};

export type CourseLanguageCoursesUpdateFieldInput = {
  connect?: InputMaybe<Array<CourseLanguageCoursesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CourseLanguageCoursesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CourseLanguageCoursesCreateFieldInput>>;
  delete?: InputMaybe<Array<CourseLanguageCoursesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CourseLanguageCoursesDisconnectFieldInput>>;
  update?: InputMaybe<CourseLanguageCoursesUpdateConnectionInput>;
  where?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
};

export type CourseLanguageCreateInput = {
  countryCodeISO: Scalars['String'];
  courses?: InputMaybe<CourseLanguageCoursesFieldInput>;
  name: Scalars['String'];
};

export type CourseLanguageDeleteInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesDeleteFieldInput>>;
};

export type CourseLanguageDisconnectInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesDisconnectFieldInput>>;
};

export type CourseLanguageOnCreateInput = {
  countryCodeISO: Scalars['String'];
  name: Scalars['String'];
};

export type CourseLanguageOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CourseLanguageSort objects to sort CourseLanguages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CourseLanguageSort>>;
};

export type CourseLanguageRelationInput = {
  courses?: InputMaybe<Array<CourseLanguageCoursesCreateFieldInput>>;
};

/** Fields to sort CourseLanguages by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseLanguageSort object. */
export type CourseLanguageSort = {
  countryCodeISO?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CourseLanguageUniqueWhere = {
  countryCodeISO?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CourseLanguageUpdateInput = {
  countryCodeISO?: InputMaybe<Scalars['String']>;
  courses?: InputMaybe<Array<CourseLanguageCoursesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type CourseLanguageWhere = {
  AND?: InputMaybe<Array<CourseLanguageWhere>>;
  NOT?: InputMaybe<CourseLanguageWhere>;
  OR?: InputMaybe<Array<CourseLanguageWhere>>;
  countryCodeISO?: InputMaybe<Scalars['String']>;
  countryCodeISO_CONTAINS?: InputMaybe<Scalars['String']>;
  countryCodeISO_ENDS_WITH?: InputMaybe<Scalars['String']>;
  countryCodeISO_IN?: InputMaybe<Array<Scalars['String']>>;
  countryCodeISO_STARTS_WITH?: InputMaybe<Scalars['String']>;
  coursesAggregate?: InputMaybe<CourseLanguageCoursesAggregateInput>;
  /** Return CourseLanguages where all of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_ALL?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where none of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_NONE?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where one of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_SINGLE?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where some of the related CourseLanguageCoursesConnections match this filter */
  coursesConnection_SOME?: InputMaybe<CourseLanguageCoursesConnectionWhere>;
  /** Return CourseLanguages where all of the related Courses match this filter */
  courses_ALL?: InputMaybe<CourseWhere>;
  /** Return CourseLanguages where none of the related Courses match this filter */
  courses_NONE?: InputMaybe<CourseWhere>;
  /** Return CourseLanguages where one of the related Courses match this filter */
  courses_SINGLE?: InputMaybe<CourseWhere>;
  /** Return CourseLanguages where some of the related Courses match this filter */
  courses_SOME?: InputMaybe<CourseWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
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
  connect?: InputMaybe<Array<CourseLanguageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<CourseLanguageConnectWhere>;
};

export type CourseLanguagesConnectOrCreateFieldInput = {
  onCreate: CourseLanguagesConnectOrCreateFieldInputOnCreate;
  where: CourseLanguageConnectOrCreateWhere;
};

export type CourseLanguagesConnectOrCreateFieldInputOnCreate = {
  node: CourseLanguageOnCreateInput;
};

export type CourseLanguagesConnection = {
  __typename?: 'CourseLanguagesConnection';
  edges: Array<CourseLanguagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CourseLanguagesConnectionSort = {
  node?: InputMaybe<CourseLanguageSort>;
};

export type CourseLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  NOT?: InputMaybe<CourseLanguagesConnectionWhere>;
  OR?: InputMaybe<Array<CourseLanguagesConnectionWhere>>;
  node?: InputMaybe<CourseLanguageWhere>;
};

export type CourseLanguagesCreateFieldInput = {
  node: CourseLanguageCreateInput;
};

export type CourseLanguagesDeleteFieldInput = {
  delete?: InputMaybe<CourseLanguageDeleteInput>;
  where?: InputMaybe<CourseLanguagesConnectionWhere>;
};

export type CourseLanguagesDisconnectFieldInput = {
  disconnect?: InputMaybe<CourseLanguageDisconnectInput>;
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
  node: CourseLanguage;
};

export type CourseLanguagesUpdateConnectionInput = {
  node?: InputMaybe<CourseLanguageUpdateInput>;
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
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  logoUrl_CONTAINS?: InputMaybe<Scalars['String']>;
  logoUrl_ENDS_WITH?: InputMaybe<Scalars['String']>;
  logoUrl_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logoUrl_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
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
  currency?: Maybe<Scalars['String']>;
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
  currency: StringAggregateSelectionNullable;
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
  currency?: InputMaybe<Scalars['String']>;
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
  currency_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  currency_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  currency_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  currency_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  currency_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  currency_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  currency_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  currency_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  currency_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  currency_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  currency_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  currency_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  currency_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  currency_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  currency_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
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
  currency?: InputMaybe<SortDirection>;
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
  currency?: InputMaybe<Scalars['String']>;
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
  currency?: InputMaybe<Scalars['String']>;
  currency_CONTAINS?: InputMaybe<Scalars['String']>;
  currency_ENDS_WITH?: InputMaybe<Scalars['String']>;
  currency_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_STARTS_WITH?: InputMaybe<Scalars['String']>;
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
};

/** Fields to sort Courses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseSort object. */
export type CourseSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type CourseUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CourseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<CourseLanguagesUpdateFieldInput>>;
  platform?: InputMaybe<CoursePlatformUpdateFieldInput>;
  price?: InputMaybe<CoursePriceUpdateFieldInput>;
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
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
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
  /** Return Courses where all of the related CourseLanguages match this filter */
  languages_ALL?: InputMaybe<CourseLanguageWhere>;
  /** Return Courses where none of the related CourseLanguages match this filter */
  languages_NONE?: InputMaybe<CourseLanguageWhere>;
  /** Return Courses where one of the related CourseLanguages match this filter */
  languages_SINGLE?: InputMaybe<CourseLanguageWhere>;
  /** Return Courses where some of the related CourseLanguages match this filter */
  languages_SOME?: InputMaybe<CourseLanguageWhere>;
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
  title?: InputMaybe<Scalars['String']>;
  title_CONTAINS?: InputMaybe<Scalars['String']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']>;
  title_IN?: InputMaybe<Array<Scalars['String']>>;
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
  url_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CoursesConnection = {
  __typename?: 'CoursesConnection';
  edges: Array<CourseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreateCourseLanguagesMutationResponse = {
  __typename?: 'CreateCourseLanguagesMutationResponse';
  courseLanguages: Array<CourseLanguage>;
  info: CreateInfo;
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

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourseLanguages: CreateCourseLanguagesMutationResponse;
  createCoursePlatforms: CreateCoursePlatformsMutationResponse;
  createCoursePrices: CreateCoursePricesMutationResponse;
  createCourses: CreateCoursesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteCourseLanguages: DeleteInfo;
  deleteCoursePlatforms: DeleteInfo;
  deleteCoursePrices: DeleteInfo;
  deleteCourses: DeleteInfo;
  deleteUsers: DeleteInfo;
  /** Refresh user auth session */
  refreshSession: AuthSessionResponse;
  /** Sign in existing user */
  signIn: AuthSessionWithUserResponse;
  /** Sign up new common user */
  signUp: AuthSessionWithUserResponse;
  updateCourseLanguages: UpdateCourseLanguagesMutationResponse;
  updateCoursePlatforms: UpdateCoursePlatformsMutationResponse;
  updateCoursePrices: UpdateCoursePricesMutationResponse;
  updateCourses: UpdateCoursesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateCourseLanguagesArgs = {
  input: Array<CourseLanguageCreateInput>;
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

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteCourseLanguagesArgs = {
  delete?: InputMaybe<CourseLanguageDeleteInput>;
  where?: InputMaybe<CourseLanguageWhere>;
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

export type MutationDeleteUsersArgs = {
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

export type MutationUpdateCourseLanguagesArgs = {
  connect?: InputMaybe<CourseLanguageConnectInput>;
  connectOrCreate?: InputMaybe<CourseLanguageConnectOrCreateInput>;
  create?: InputMaybe<CourseLanguageRelationInput>;
  delete?: InputMaybe<CourseLanguageDeleteInput>;
  disconnect?: InputMaybe<CourseLanguageDisconnectInput>;
  update?: InputMaybe<CourseLanguageUpdateInput>;
  where?: InputMaybe<CourseLanguageWhere>;
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

export type MutationUpdateUsersArgs = {
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
  courseLanguages: Array<CourseLanguage>;
  courseLanguagesAggregate: CourseLanguageAggregateSelection;
  courseLanguagesConnection: CourseLanguagesConnection;
  coursePlatforms: Array<CoursePlatform>;
  coursePlatformsAggregate: CoursePlatformAggregateSelection;
  coursePlatformsConnection: CoursePlatformsConnection;
  coursePrices: Array<CoursePrice>;
  coursePricesAggregate: CoursePriceAggregateSelection;
  coursePricesConnection: CoursePricesConnection;
  courses: Array<Course>;
  coursesAggregate: CourseAggregateSelection;
  coursesConnection: CoursesConnection;
  currentUser: UserResponse;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryCourseLanguagesArgs = {
  options?: InputMaybe<CourseLanguageOptions>;
  where?: InputMaybe<CourseLanguageWhere>;
};

export type QueryCourseLanguagesAggregateArgs = {
  where?: InputMaybe<CourseLanguageWhere>;
};

export type QueryCourseLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CourseLanguageSort>>>;
  where?: InputMaybe<CourseLanguageWhere>;
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

export type UpdateCourseLanguagesMutationResponse = {
  __typename?: 'UpdateCourseLanguagesMutationResponse';
  courseLanguages: Array<CourseLanguage>;
  info: UpdateInfo;
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

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  roles: Array<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type UserCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  roles: Array<Scalars['String']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  roles: Array<Scalars['String']>;
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

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
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
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<Scalars['String']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_CONTAINS?: InputMaybe<Scalars['String']>;
  firstName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  firstName_IN?: InputMaybe<Array<Scalars['String']>>;
  firstName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_CONTAINS?: InputMaybe<Scalars['String']>;
  lastName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  lastName_IN?: InputMaybe<Array<Scalars['String']>>;
  lastName_STARTS_WITH?: InputMaybe<Scalars['String']>;
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
  price?: { __typename?: 'CoursePrice'; currency?: string | null; price?: number | null } | null;
  platform?: {
    __typename?: 'CoursePlatform';
    id: string;
    name: string;
    logoUrl?: string | null;
    url: string;
  } | null;
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
    price?: { __typename?: 'CoursePrice'; currency?: string | null; price?: number | null } | null;
    platform?: {
      __typename?: 'CoursePlatform';
      id: string;
      name: string;
      logoUrl?: string | null;
      url: string;
    } | null;
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
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
