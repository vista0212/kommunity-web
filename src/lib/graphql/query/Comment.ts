import gql from 'graphql-tag';
import { User } from './User';

export type Comment = {
  pk: number;
  user_pk: string;
  board_pk: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};

export const POST_COMMENT = gql`
  mutation Postcontent($token: String!, $board_pk: Int!, $content: String!) {
    postComment(token: $token, board_pk: $board_pk, content: $content)
  }
`;
