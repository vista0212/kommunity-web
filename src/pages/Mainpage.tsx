import React from 'react';
import styled from 'styled-components';
import MainpageLeft from '../components/main/MainpageLeft';
import MainpageRight from '../components/main/MainpageRight';

const MainpageBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 5em 20em;

    display: flex;
    flex-direction: row;
  }
`;

const Mainpage: React.FC = () => {
  return (
    <>
      <MainpageBlock>
        <MainpageLeft />
        <MainpageRight />
      </MainpageBlock>
    </>
  );
};

export default Mainpage;
