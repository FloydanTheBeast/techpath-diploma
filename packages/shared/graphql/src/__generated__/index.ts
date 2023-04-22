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
  user: UserResponse;
};

export type Course = {
  __typename?: 'Course';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  price?: Maybe<CoursePrice>;
  priceAggregate?: Maybe<CourseCoursePricePriceAggregationSelection>;
  priceConnection: CoursePriceConnection;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
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
  price?: InputMaybe<CoursePriceConnectFieldInput>;
};

export type CourseConnectOrCreateWhere = {
  node: CourseUniqueWhere;
};

export type CourseConnectWhere = {
  node: CourseWhere;
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
  price?: InputMaybe<CoursePriceFieldInput>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CourseDeleteInput = {
  price?: InputMaybe<CoursePriceDeleteFieldInput>;
};

export type CourseDisconnectInput = {
  price?: InputMaybe<CoursePriceDisconnectFieldInput>;
};

export type CourseEdge = {
  __typename?: 'CourseEdge';
  cursor: Scalars['String'];
  node: Course;
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

export type CreateSkillTagsMutationResponse = {
  __typename?: 'CreateSkillTagsMutationResponse';
  info: CreateInfo;
  skillTags: Array<SkillTag>;
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
  createCoursePrices: CreateCoursePricesMutationResponse;
  createCourses: CreateCoursesMutationResponse;
  createSkillTags: CreateSkillTagsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteCoursePrices: DeleteInfo;
  deleteCourses: DeleteInfo;
  deleteSkillTags: DeleteInfo;
  deleteUsers: DeleteInfo;
  /** Sign in existing user */
  signIn: AuthSessionResponse;
  /** Sign up new common user */
  signUp: AuthSessionResponse;
  updateCoursePrices: UpdateCoursePricesMutationResponse;
  updateCourses: UpdateCoursesMutationResponse;
  updateSkillTags: UpdateSkillTagsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateCoursePricesArgs = {
  input: Array<CoursePriceCreateInput>;
};

export type MutationCreateCoursesArgs = {
  input: Array<CourseCreateInput>;
};

export type MutationCreateSkillTagsArgs = {
  input: Array<SkillTagCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteCoursePricesArgs = {
  delete?: InputMaybe<CoursePriceDeleteInput>;
  where?: InputMaybe<CoursePriceWhere>;
};

export type MutationDeleteCoursesArgs = {
  delete?: InputMaybe<CourseDeleteInput>;
  where?: InputMaybe<CourseWhere>;
};

export type MutationDeleteSkillTagsArgs = {
  where?: InputMaybe<SkillTagWhere>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationSignInArgs = {
  data: UserSignInInput;
};

export type MutationSignUpArgs = {
  data: UserSignUpInput;
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
  create?: InputMaybe<CourseRelationInput>;
  delete?: InputMaybe<CourseDeleteInput>;
  disconnect?: InputMaybe<CourseDisconnectInput>;
  update?: InputMaybe<CourseUpdateInput>;
  where?: InputMaybe<CourseWhere>;
};

export type MutationUpdateSkillTagsArgs = {
  update?: InputMaybe<SkillTagUpdateInput>;
  where?: InputMaybe<SkillTagWhere>;
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
  coursePrices: Array<CoursePrice>;
  coursePricesAggregate: CoursePriceAggregateSelection;
  coursePricesConnection: CoursePricesConnection;
  courses: Array<Course>;
  coursesAggregate: CourseAggregateSelection;
  coursesConnection: CoursesConnection;
  currentUser: UserResponse;
  skillTags: Array<SkillTag>;
  skillTagsAggregate: SkillTagAggregateSelection;
  skillTagsConnection: SkillTagsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
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

export type QuerySkillTagsArgs = {
  options?: InputMaybe<SkillTagOptions>;
  where?: InputMaybe<SkillTagWhere>;
};

export type QuerySkillTagsAggregateArgs = {
  where?: InputMaybe<SkillTagWhere>;
};

export type QuerySkillTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SkillTagSort>>>;
  where?: InputMaybe<SkillTagWhere>;
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

export type SkillTag = {
  __typename?: 'SkillTag';
  id: Scalars['ID'];
};

export type SkillTagAggregateSelection = {
  __typename?: 'SkillTagAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
};

export type SkillTagCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type SkillTagEdge = {
  __typename?: 'SkillTagEdge';
  cursor: Scalars['String'];
  node: SkillTag;
};

export type SkillTagOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more SkillTagSort objects to sort SkillTags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SkillTagSort>>;
};

/** Fields to sort SkillTags by. The order in which sorts are applied is not guaranteed when specifying many fields in one SkillTagSort object. */
export type SkillTagSort = {
  id?: InputMaybe<SortDirection>;
};

export type SkillTagUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type SkillTagWhere = {
  AND?: InputMaybe<Array<SkillTagWhere>>;
  NOT?: InputMaybe<SkillTagWhere>;
  OR?: InputMaybe<Array<SkillTagWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type SkillTagsConnection = {
  __typename?: 'SkillTagsConnection';
  edges: Array<SkillTagEdge>;
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

export type UpdateSkillTagsMutationResponse = {
  __typename?: 'UpdateSkillTagsMutationResponse';
  info: UpdateInfo;
  skillTags: Array<SkillTag>;
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
    __typename?: 'AuthSessionResponse';
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

export type CourseInfoFragment = {
  __typename?: 'Course';
  id: string;
  title: string;
  description?: string | null;
  url: string;
  createdAt: any;
  updatedAt?: any | null;
  price?: { __typename?: 'CoursePrice'; currency?: string | null; price?: number | null } | null;
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
  }>;
};

export type CreateCourseMutationVariables = Exact<{
  course: CourseCreateInput;
}>;

export type CreateCourseMutation = {
  __typename?: 'Mutation';
  createCourses: {
    __typename?: 'CreateCoursesMutationResponse';
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
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'accessTokenExpiresIn' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshTokenExpiresIn' } },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'course' } },
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
                  values: [{ kind: 'Variable', name: { kind: 'Name', value: 'course' } }],
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
 *      course: // value for 'course'
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
