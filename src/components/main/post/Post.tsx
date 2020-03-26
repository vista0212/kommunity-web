import React from 'react';
import styled from 'styled-components';

const PostBlock = styled.div`
  padding: 5em 0;

  width: 100%;

  font-family: 'NanumGothic';
`;

const PostItem = styled.div`
  width: 100%;

  border: 0.1em solid #505afc;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  height: 3em;
  border-bottom: 0.1em solid #505afc;

  display: flex;
  align-content: center;
  flex-direction: row;
`;

const UserImage = styled.img`
  margin: 0.5em 0.5em 0.5em 1.2em;

  width: 2em;
  height: 2em;

  border: 0.05em solid #505afc;
  border-radius: 30px;

  display: flex;
`;

const UserName = styled.a`
  margin: 0.9em 0em;
  font-size: 1em;
`;

const PostContentBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostContent = styled.div`
  padding: 2em 2.5em;
`;

const PostImage = styled.img`
  margin: 0 auto;
  margin-bottom: 3em;

  width: 38em;
  height: 38em;
`;

const Post: React.FC = () => {
  return (
    <>
      <PostBlock>
        <PostItem>
          <UserInfo>
            <UserImage src="/images/profile.jpg" />
            <UserName>김경백</UserName>
          </UserInfo>
          <PostContentBlock>
            <PostContent>
              asdfsadf
              <br />
              asdfsadfasdfsadf
              <br />
              asdfsadfasdfsadf
              <br />
              asdfsadfasdfsadf
              <br />
              asdfsadfasdfsadf
            </PostContent>
            <PostImage src="/images/image.jpg" />
          </PostContentBlock>
        </PostItem>
      </PostBlock>
    </>
  );
};

export default Post;
