import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-apollo';
import { REGISTER } from '../lib/graphql/query/User';

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

type Input = {
  id: HTMLInputElement | null;
  password: HTMLInputElement | null;
  email: HTMLInputElement | null;
  signKey: HTMLInputElement | null;
};

const Registerpage: React.FC = () => {
  const [register, { data }] = useMutation(REGISTER);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signKey, setSignKey] = useState('');

  return (
    <RegisterBlock
      onSubmit={e => {
        e.preventDefault();
        register({
          variables: {
            id,
            password,
            email,
            signKey
          }
        }).catch(err => {
          console.log(err);
          alert('회원가입 실패');
        });
      }}
    >
      <RegisterTitle>회원가입</RegisterTitle>
      <RegisterInput
        onChange={e => {
          setId(e.target.value);
        }}
        placeholder="아이디를 입력해주세요"
      />
      <RegisterInput
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <RegisterInput onChange={e => setEmail(e.target.value)} placeholder="이메일을 입력해주세요" />
      <RegisterInput onChange={e => setSignKey(e.target.value)} placeholder="키를 입력해주세요" />
      <RegisterButton type="submit">회원가입</RegisterButton>
    </RegisterBlock>
  );
};

export default Registerpage;
