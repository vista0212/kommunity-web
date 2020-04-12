import React from 'react';
import MainpageRight from './MainpageRight';
import MainpageLeft from './MainpageLeft';
import { useQuery } from 'react-apollo';
import { GET_USER, User } from '../../lib/graphql/query/User';

const MainComponent = () => {
  const accessToken: string | null = localStorage.getItem('accessToken');

  if (!accessToken) {
    window.alert('로그인이 필요합니다!');
    window.location.href = 'http://localhost:3000/login';
  }

  return (
    <>
      <MainpageLeft token={accessToken} />
      <MainpageRight token={accessToken} />
    </>
  );
};

export default MainComponent;
