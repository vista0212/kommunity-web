import React from 'react';
import styled from 'styled-components';
import PostWrite from './post/PostWrite';
import Post from './post/Post';

const MainpageLeftBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 0 0.5em;

    width: 55%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainpageLeft = () => {
  return (
    <>
      <MainpageLeftBlock>
        <PostWrite />
        <Post />
      </MainpageLeftBlock>
    </>
  );
};

export default MainpageLeft;
