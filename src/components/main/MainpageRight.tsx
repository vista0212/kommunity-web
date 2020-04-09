import React from 'react';
import styled from 'styled-components';
import Profile from './profile/Profile';
import { User, GET_USER } from '../../lib/graphql/query/User';
import { useQuery } from 'react-apollo';

const MainpageRightBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 0 4em;

    width: 45%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    font-family: 'NanumSquareRound';
  }
`;

const MainpageRight = ({ token }: { token: string | null }) => {
  const { error, data } = useQuery(GET_USER, {
    variables: {
      token,
    },
  });

  if (error) {
    alert('로그인이 필요합니다');
    window.location.href = 'http://localhost:3000/login';
  }

  const user: User | undefined = data ? data.getUser : undefined;

  return (
    <MainpageRightBlock>
      <Profile user={user} />
    </MainpageRightBlock>
  );
};

export default MainpageRight;
