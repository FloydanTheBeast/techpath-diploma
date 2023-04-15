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
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type CourseAggregateSelection = {
  __typename?: 'CourseAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
};

export type CourseCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CourseEdge = {
  __typename?: 'CourseEdge';
  cursor: Scalars['String'];
  node: Course;
};

export type CourseOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CourseSort objects to sort Courses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CourseSort>>;
};

/** Fields to sort Courses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseSort object. */
export type CourseSort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type CourseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CourseWhere = {
  AND?: InputMaybe<Array<CourseWhere>>;
  NOT?: InputMaybe<CourseWhere>;
  OR?: InputMaybe<Array<CourseWhere>>;
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
  title?: InputMaybe<Scalars['String']>;
  title_CONTAINS?: InputMaybe<Scalars['String']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']>;
  title_IN?: InputMaybe<Array<Scalars['String']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CoursesConnection = {
  __typename?: 'CoursesConnection';
  edges: Array<CourseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createCourses: CreateCoursesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteCourses: DeleteInfo;
  deleteUsers: DeleteInfo;
  /** Sign in existing user */
  signIn: AuthSessionResponse;
  /** Sign up new common user */
  signUp: AuthSessionResponse;
  updateCourses: UpdateCoursesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateCoursesArgs = {
  input: Array<CourseCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
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

export type MutationUpdateCoursesArgs = {
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
  courses: Array<Course>;
  coursesAggregate: CourseAggregateSelection;
  coursesConnection: CoursesConnection;
  currentUser: UserResponse;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
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
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  roles: Array<Scalars['String']>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  email: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
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
  email?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
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
