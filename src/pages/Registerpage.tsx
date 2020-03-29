import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-apollo';
import { REGISTER } from '../lib/graphql/query/User';

const isId = (id: string) => {
  //영어 소문자로 시작하는 6~20자 아이디
  const idRegex = /^[a-z]+[a-z0-9]{5,19}$/g;

  return idRegex.test(id);
};

const isEmail = (email: string) => {
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};

const isPassword = (password: string) => {
  const passwordRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  return passwordRegex.test(password);
};

const isSignKey = (signKey: string) => {
  const signKeyRegex = /^[A-Z]{6}$/;

  return signKeyRegex.test(signKey);
};

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

const RegisterInputBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    margin: 1em 0em;
  }
`;

const RegisterInput = styled.input`
  @media only screen and (min-width: 1920px) {
    padding: 0.3em 0.5em;

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

const ErrorMessage = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 0;

    font-size: 1em;

    color: red;
  }
`;

const Registerpage: React.FC = () => {
  const [register] = useMutation(REGISTER);

  const [dataError, setError] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signKey, setSignKey] = useState('');

  const onTextValidation = () => {
    if (!isId(id) || !isPassword(password) || !isEmail(email) || !isSignKey(signKey)) {
      setError(true);
      return false;
    }

    return true;
  };

  const Register = async () => {
    const valid = onTextValidation();

    if (valid) {
      try {
        await register({
          variables: {
            id,
            password,
            email,
            signKey
          }
        });

        alert('회원가입이 완료되었습니다.');
        window.location.href = 'http://localhost:3000/login';
      } catch (err) {
        alert(err.networkError.result.errors[0].message);
      }

      setError(false);
    }
  };

  return (
    <RegisterBlock
      onSubmit={e => {
        e.preventDefault();
        Register();
      }}
    >
      <RegisterTitle>회원가입</RegisterTitle>
      <RegisterInputBlock>
        <RegisterInput
          onChange={e => {
            setId(e.target.value);
          }}
          placeholder="아이디를 입력해주세요(영어 소문자로 시작하며 숫자를 포함하여 6~20자)"
        />
      </RegisterInputBlock>
      <RegisterInputBlock>
        <RegisterInput
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="비밀번호를 입력해주세요(영어 대소문자, 숫자, 특수문자를 포함하여 8~15자)"
        />
      </RegisterInputBlock>
      <RegisterInputBlock>
        <RegisterInput
          type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
      </RegisterInputBlock>
      <RegisterInputBlock>
        <RegisterInput onChange={e => setSignKey(e.target.value)} placeholder="키를 입력해주세요" />
      </RegisterInputBlock>

      <ErrorMessage>{dataError ? 'Invalid Data' : ''}</ErrorMessage>
      <RegisterButton type="submit">회원가입</RegisterButton>
    </RegisterBlock>
  );
};

export default Registerpage;
