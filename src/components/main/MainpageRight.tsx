import React from 'react';
import styled from 'styled-components';
import Profile from './profile/Profile';

const MainpageRightBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 0 3em;

    width: 45%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
  }
`;

const MainpageRight: React.FC = () => {
  return (
    <>
      <MainpageRightBlock>
        <Profile />
      </MainpageRightBlock>
    </>
  );
};

export default MainpageRight;
