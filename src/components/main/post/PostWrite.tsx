import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-apollo';
import { POST_BOARD, POST_IMAGE, Board } from '../../../lib/graphql/query/Board';

const PostWriteBlock = styled.form`
  @media only screen and (min-width: 1920px) {
    width: 100%;
    height: 20em;

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
    height: 50%;
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

const ImageBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 0.1em 1em;

    width: 100%;
    height: 5em;

    border-top: 0.15em solid #505afc;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-content: center;
  }
`;

const ImageInput = styled.input`
  @media only screen and (min-width: 1920px) {
    margin-top: 0.45em;
    margin-right: 1em;

    width: 3.5em;
    height: 3.5em;

    border: 1px solid;
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

const PostWrite = ({ token }: { token: string | null }) => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File[]>([]);

  const [postBoard] = useMutation(POST_BOARD);
  const [postImage] = useMutation(POST_IMAGE);

  const changeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;

    if (files && files.length > 0) {
      const file = Array.from(files);

      setFile(file);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await postBoard({
        variables: {
          token,
          content,
        },
      });

      console.log(data.postBoard.pk);

      for (var i = 0; i < file.length; i++) {
        await postImage({
          variables: {
            token,
            board_pk: data.postBoard.pk,
            file: file[i],
          },
        });
      }

      setContent('');
      window.location.reload();
    } catch (err) {
      alert(err.networkError.result.errors[0].message);
    }
  };

  return (
    <PostWriteBlock onSubmit={onSubmit}>
      <WriteDescription>Write Box</WriteDescription>
      <WriteInput onChange={(e) => setContent(e.target.value)} placeholder="글을 입력하세요" />
      <ImageBlock>
        <ImageInput onChange={changeFile} id="files" type="file" multiple />
      </ImageBlock>
      <SubmitButton type="submit">Done</SubmitButton>
    </PostWriteBlock>
  );
};

export default PostWrite;
