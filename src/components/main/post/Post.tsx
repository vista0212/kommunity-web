import React from 'react';
import styled from 'styled-components';
import { GET_BOARD, Board } from '../../../lib/graphql/query/Board';
import { useQuery } from 'react-apollo';
import PostItem from './PostItem';

const PostBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 5em 0 0 0;

    width: 100%;

    font-family: 'NanumSquareRound';
  }
`;

const Post = ({ token }: { token: string | null }) => {
  const { loading, error, data } = useQuery(GET_BOARD, {
    variables: {
      token,
    },
  });

  if (loading) console.log('loading. . .');
  if (error) console.log(error);

  return (
    <PostBlock>
      {data ? (
        data.boards.map((board: Board) => <PostItem token={token} board={board} />)
      ) : (
        <div></div>
      )}
    </PostBlock>
  );
};

export default Post;
