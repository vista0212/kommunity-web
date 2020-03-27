import React from 'react';
import styled from 'styled-components';

const RegisterBlock = styled.form`
  @media only screen and (min-width: 1920px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    height: 52.22em;

    padding: 8em 38em;

    box-sizing: border-box;

    font-family: 'NanumSquareRound';
  }
`;

const RegisterTitle = styled.h1``;

const RegisterInput = styled.input`
  @media only screen and (min-width: 1920px) {
    padding: 0.3em 0.5em;
    margin: 1em 0em;

    width: 100%;
    height: 3em;

    font-size: 1.2em;

    box-sizing: border-box;
    border-radius: 16px;
    border: 0.1em solid #ddd;

    :focus {
      outline: #ccc;
      border: 0.1em solid #ccc;
    }
  }
`;

const RegisterButton = styled.button`
  margin-top: 0.5em;

  width: 100%;

  background: #505afc;

  font-size: 2em;
  color: white;

  font-family: 'NanumSquareRound';

  height: 2em;

  border: none;
  border-radius: 16px;

  box-sizing: border-box;

  cursor: pointer;
`;

const Registerpage: React.FC = () => {
  return (
    <RegisterBlock>
      <RegisterTitle>회원가입</RegisterTitle>
      <RegisterInput placeholder="아이디를 입력해주세요" />
      <RegisterInput placeholder="비밀번호를 입력해주세요" />
      <RegisterInput placeholder="이메일을 입력해주세요" />
      <RegisterInput placeholder="이름을 입력해주세요" />
      <RegisterButton>회원가입</RegisterButton>
    </RegisterBlock>
  );
};

export default Registerpage;
