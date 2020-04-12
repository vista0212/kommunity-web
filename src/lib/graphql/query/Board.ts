import gql from 'graphql-tag';
import { Comment } from './Comment';
import { User } from './User';

export type Board = {
  pk: number;
  user_pk: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  comment: Comment[];
  user: User;
  boardImage: BoardImage[];
};

export type BoardImage = {
  pk: number;
  board_pk: number;
  image: string;
};

export const GET_BOARD = gql`
  query Getboard($token: String!) {
    boards(token: $token) {
      pk
      user_pk
      content
      likes
      createdAt
      updatedAt
      comment {
        pk
        user_pk
        board_pk
        content
        createdAt
        updatedAt
      }
      user {
        pk
        name
        image
      }
      boardImage {
        pk
        board_pk
        image
      }
    }
  }
`;

export const POST_BOARD = gql`
  mutation Postboard($token: String!, $content: String!) {
    postBoard(token: $token, content: $content) {
      pk
    }
  }
`;

export const POST_IMAGE = gql`
  mutation Postimage($token: String!, $board_pk: Int!, $file: Upload!) {
    postImage(token: $token, board_pk: $board_pk, file: $file)
  }
`;
