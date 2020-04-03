import React from 'react';
import MainpageRight from './MainpageRight';
import MainpageLeft from './MainpageLeft';
import { useQuery } from 'react-apollo';
import { GET_USER } from '../../lib/graphql/query/User';
import { ApolloError } from 'apollo-client';

const MainComponent = () => {
  const accessToken: string | null = localStorage.getItem('accessToken');

  console.log(accessToken);

  if (!accessToken) {
    window.alert('로그인이 필요합니다!');
    window.location.href = 'http://localhost:3000/login';
  }

  const { error, data } = useQuery(GET_USER, {
    variables: {
      token: accessToken
    }
  });

  if (error) {
    window.alert(error.graphQLErrors[0].message);
    window.location.href = 'http://localhost:3000/login';
  }

  return (
    <>
      <MainpageLeft />
      <MainpageRight />
    </>
  );
};

export default MainComponent;
