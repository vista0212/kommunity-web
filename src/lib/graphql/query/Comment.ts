import gql from 'graphql-tag';

export type Comment = {
  pk: number;
  user_pk: string;
  board_pk: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
