import gql from 'graphql-tag';

export type User = {
  pk: string;
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export const REGISTER = gql`
  mutation Register($id: String!, $email: String!, $signKey: String!, $password: String!) {
    register(id: $id, email: $email, signKey: $signKey, password: $password)
  }
`;

export const LOGIN = gql`
  mutation Login($id: String!, $password: String!) {
    login(id: $id, password: $password) {
      token
    }
  }
`;

export const IMAGE = gql`
  mutation Image($file: Upload!) {
    image(file: $file)
  }
`;

export const GET_USER = gql`
  query GetUser($token: String!) {
    getUser(token: $token) {
      pk
      email
      name
      image
    }
  }
`;
