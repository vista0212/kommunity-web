import React from 'react';
import styled from 'styled-components';

const PostWriteBlock = styled.form`
  @media only screen and (min-width: 1920px) {
    width: 100%;
    height: 17em;

    display: flex;
    flex-direction: column;

    border: 0.095em solid #505afc;
    border-radius: 1em;

    box-sizing: border-box;
  }
`;

const WriteDescription = styled.a`
  @media only screen and (min-width: 1920px) {
    padding: 0.5em 0.7em;

    box-sizing: border-box;

    display: inline;

    font-size: 1.5em;
    color: black;
    font-weight: bold;

    border: none;
    border-bottom: 0.095em solid #505afc;

    font-family: 'Ink Free';
  }
`;

const WriteInput = styled.textarea`
  @media only screen and (min-width: 1920px) {
    padding: 1.2em 1.5em;

    width: 100%;
    height: 60%;
    font-size: 1.1em;

    box-sizing: border-box;

    border: none;
    resize: none;

    :focus {
      border: none;
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  @media only screen and (min-width: 1920px) {
    width: 100%;
    height: 3.4em;

    border: none;
    border-top: 0.095em solid #505afc;
    border-radius: 0 0 0.8em 0.8em;
    background: none;

    color: black;

    font-size: 1.2em;
    font-weight: bold;
    font-family: InkFree;

    cursor: pointer;

    &:hover {
      background: #505afc;
      color: white;
      outline: none;
    }

    font-family: 'Ink Free';
  }
`;

const PostWrite = () => {
  return (
    <PostWriteBlock>
      <WriteDescription>Write Box</WriteDescription>
      <WriteInput placeholder="글을 입력하세요" />
      <SubmitButton>Done</SubmitButton>
    </PostWriteBlock>
  );
};

export default PostWrite;
