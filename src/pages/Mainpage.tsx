import React from 'react';
import styled from 'styled-components';
import MainComponent from '../components/main/MainComponent';

const MainpageBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 5em 20em;

    display: flex;
    flex-direction: row;

    font-famliy: 'NanumSquareRound';
  }
`;

const Mainpage: React.FC = () => {
  return (
    <MainpageBlock>
      <MainComponent />
    </MainpageBlock>
  );
};

export default Mainpage;
