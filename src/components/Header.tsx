import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: white;

  h1 {
    font-family: 'Ink Free';
    padding-left: 2em;
    color: #505afc;
  }

  border-bottom: 0.15em solid #505afc;
`;
