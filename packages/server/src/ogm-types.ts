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
  Float: number;
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
  courses: Array<Course>;
  coursesAggregate: CourseAggregateSelection;
  coursesConnection: CoursesConnection;
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

export type QueryCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  options?: InputMaybe<CourseOptions>;
};

export type QueryCoursesAggregateArgs = {
  where?: InputMaybe<CourseWhere>;
};

export type QueryCoursesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<CourseWhere>;
  sort?: InputMaybe<Array<InputMaybe<CourseSort>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createCourses: CreateCoursesMutationResponse;
  deleteCourses: DeleteInfo;
  updateCourses: UpdateCoursesMutationResponse;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
};

export type MutationCreateCoursesArgs = {
  input: Array<CourseCreateInput>;
};

export type MutationDeleteCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
};

export type MutationUpdateCoursesArgs = {
  where?: InputMaybe<CourseWhere>;
  update?: InputMaybe<CourseUpdateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Course = {
  __typename?: "Course";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type CourseAggregateSelection = {
  __typename?: "CourseAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
};

export type CourseEdge = {
  __typename?: "CourseEdge";
  cursor: Scalars["String"];
  node: Course;
};

export type CoursesConnection = {
  __typename?: "CoursesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<CourseEdge>;
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

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
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
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type CourseCreateInput = {
  title: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
};

export type CourseOptions = {
  /** Specify one or more CourseSort objects to sort Courses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CourseSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort Courses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CourseSort object. */
export type CourseSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
};

export type CourseUpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
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
};

export type UserCreateInput = {
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

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  password?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<Array<Scalars["String"]>>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  roles_POP?: InputMaybe<Scalars["Int"]>;
  roles_PUSH?: InputMaybe<Array<Scalars["String"]>>;
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
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  email?: StringAggregateInputNonNullable;
  password?: StringAggregateInputNonNullable;
  firstName?: StringAggregateInputNonNullable;
  lastName?: StringAggregateInputNonNullable;
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

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;

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
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface CourseAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
  description?: StringAggregateInputNullable;
}

export declare class CourseModel {
  public find(args?: {
    where?: CourseWhere;

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

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCoursesMutationResponse>;
  public delete(args: {
    where?: CourseWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CourseWhere;

    aggregate: CourseAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CourseAggregateSelection>;
}

export interface ModelMap {
  User: UserModel;
  Course: CourseModel;
}
