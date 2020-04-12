import React from 'react';
import styled from 'styled-components';
import { MdThumbUp, MdComment } from 'react-icons/md';
import { GET_BOARD, Board, BoardImage } from '../../../lib/graphql/query/Board';
import { useQuery } from 'react-apollo';

const PostBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 5em 0;

    width: 100%;

    font-family: 'NanumSquareRound';
  }
`;

const PostItem = styled.div`
  @media only screen and (min-width: 1920px) {
    width: 100%;

    border: 0.1em solid #505afc;
    border-radius: 16px;

    display: flex;
    flex-direction: column;

    margin-bottom: 5em;
  }
`;

const PostInfo = styled.div`
  @media only screen and (min-width: 1920px) {
    height: 3em;
    border-bottom: 0.1em solid #505afc;

    display: flex;
    flex-direction: row;
  }
`;

const UserImage = styled.img`
  @media only screen and (min-width: 1920px) {
    margin: 0.5em 0.5em 0.5em 1.2em;

    width: 2em;
    height: 2em;

    border: 0.05em solid #505afc;
    border-radius: 30px;

    display: flex;
  }
`;

const UserName = styled.a`
  @media only screen and (min-width: 1920px) {
    width: 35em;

    margin: 0.9em 0em;
    font-size: 1em;
  }
`;

const LikeCountBlock = styled.div`
  color: #505afc;

  margin-top: 0.9em;

  display: flex;
  flex-direction: row;
  align-content: center;
`;

const LikeCount = styled.div`
  color: black;

  margin-top: 0.07em;
  margin-left: 0.1em;
  font-size: 0.9em;
`;

const PostContentBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    display: flex;
    flex-direction: column;
  }
`;

const PostContent = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 2em 2.5em;
  }
`;

const PostImage = styled.img`
  @media only screen and (min-width: 1920px) {
    margin: 0 auto;
    margin-bottom: 3em;

    width: 38em;
    height: 38em;
  }
`;

const PostBottomBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    display: flex;
    flex-direction: row;

    border-top: 0.1em solid #505afc;
    border-bottom: 0.1em solid #505afc;

    height: 3em;
  }
`;

const PostLikeBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    width: 50%;

    display: flex;

    justify-content: center;

    border-right: 0.05em solid #505afc;

    svg {
      margin-top: 0.85em;
    }
  }
`;

const PostLike = styled.a`
  @media only screen and (min-width: 1920px) {
    margin-top: 1.2em;
    margin-left: 0.3em;
    font-size: 0.8em;
  }
`;

const PostCommentBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    width: 50%;

    display: flex;

    justify-content: center;

    border-left: 0.05em solid #505afc;

    svg {
      margin-top: 0.85em;
    }
  }
`;

const PostComment = styled.a`
  @media only screen and (min-width: 1920px) {
    margin-top: 1.2em;
    margin-left: 0.3em;
    font-size: 0.8em;
  }
`;

const CommentBox = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 3em 2em;

    display: flex;
    flex-direction: column;
  }
`;

const CommentWriteBlock = styled.form`
  @media only screen and (min-width: 1920px) {
    width: 34.8em;
    padding: 0 2em;
    margin-bottom: 2.7em;

    display: flex;
    flex-direction: column;

    align-content: center;
  }
`;

const CommentInput = styled.textarea`
  @media only screen and (min-width: 1920px) {
    padding: 0.5em 1em;

    width: 100%;
    height: 5em;

    border: 0.15em solid #505afc;

    resize: none;

    box-sizing: border-box;
  }
`;

const CommentWriteButton = styled.button`
  @media only screen and (min-width: 1920px) {
    width: 100%;
    height: 3em;

    color: white;

    border: 0.15em solid #505afc;

    background: #505afc;

    cursor: pointer;
  }
`;

const CommentBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    width: 100%;

    display: flex;
    flex-direction: row;

    margin: 0.5em 0;
  }
`;

const CommentUserImage = styled.img`
  @media only screen and (min-width: 1920px) {
    width: 2em;
    height: 2em;

    background: #ddd;

    border: 0.07em solid #505afc;
    border-radius: 20px;
  }
`;

const CommentContentBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    padding: 0.5em 1em;
    margin-left: 1em;

    width: 33em;

    background: #efefef;

    border-radius: 16px;

    font-size: 1em;

    word-break: break-all;

    display: flex;
    flex-direction: column;
  }
`;

const CommentUserName = styled.a`
  @media only screen and (min-width: 1920px) {
    font-size: 0.9em;

    color: #505afc;
  }
`;

const CommentContent = styled.div`
  @media only screen and (min-width: 1920px) {
    font-size: 1em;

    color: black;
  }
`;

const Post = ({ token }: { token: string | null }) => {
  const { loading, error, data } = useQuery(GET_BOARD, {
    variables: {
      token,
    },
  });

  if (loading) console.log('loading. . .');
  if (error) console.log(error);

  return (
    <PostBlock>
      {data ? (
        data.boards.map((board: Board) => (
          <PostItem>
            <PostInfo>
              <UserImage
                src={
                  board.user.image
                    ? board.user.image
                    : 'https://s3-kommunity.s3.ap-northeast-2.amazonaws.com/board-image/1586617608119noProfile.jpg'
                }
              />
              <UserName>{board.user.name}</UserName>
              <LikeCountBlock>
                <MdThumbUp />
                <LikeCount>{board.likes}</LikeCount>
              </LikeCountBlock>
            </PostInfo>
            <PostContentBlock>
              <PostContent>
                {board.content.split('\n').map((text) => (
                  <div>
                    {text}
                    <br />
                  </div>
                ))}
              </PostContent>
              {board.boardImage.map((image: BoardImage) => (
                <PostImage
                  src={
                    'https://s3-kommunity.s3.ap-northeast-2.amazonaws.com/board-image/' +
                    image.image
                  }
                />
              ))}
            </PostContentBlock>
            <PostBottomBlock>
              <PostLikeBlock>
                <MdThumbUp />
                <PostLike>좋아요</PostLike>
              </PostLikeBlock>
              <PostCommentBlock>
                <MdComment />
                <PostComment>댓글</PostComment>
              </PostCommentBlock>
            </PostBottomBlock>
            <CommentBox>
              <CommentWriteBlock>
                <CommentInput placeholder="댓글을 입력하세요" />
                <CommentWriteButton>작성하기</CommentWriteButton>
              </CommentWriteBlock>
              <CommentBlock>
                <CommentUserImage src="/images/noProfile.jpg" />
                <CommentContentBlock>
                  <CommentUserName>김경백</CommentUserName>
                  <CommentContent>
                    ㅁ이ㅏㄻㄴㅇ리ㅏㅓㅁㄴㅇㄹ;ㅣㅏ먼ㅇ리ㅏㅓㄴㅇ리ㅏ;ㅇㄴ멀;ㅣ만ㅇ러니아sadfasdfasdfhsakjdflasdlkfjsaldjfklasdjfkalsd;fjklaksdjfl;asdjflasdjflasd;fjasdlkfjasd;lfkjasdfl;asjflkasdjflkasdjfkalsdjfkldsjkl
                  </CommentContent>
                </CommentContentBlock>
              </CommentBlock>
              <CommentBlock>
                <CommentUserImage src="/images/noProfile.jpg" />
                <CommentContentBlock>
                  <CommentUserName>김경백</CommentUserName>
                  <CommentContent>
                    ㅁ이ㅏㄻㄴㅇ리ㅏㅓㅁㄴㅇㄹ;ㅣㅏ먼ㅇ리ㅏㅓㄴㅇ리ㅏ;ㅇㄴ멀;ㅣ만ㅇ러니아sadfasdfasdfhsakjdflasdlkfjsaldjfklasdjfkalsd;fjklaksdjfl;asdjflasdjflasd;fjasdlkfjasd;lfkjasdfl;asjflkasdjflkasdjfkalsdjfkldsjkl
                  </CommentContent>
                </CommentContentBlock>
              </CommentBlock>
              <CommentBlock>
                <CommentUserImage src="/images/noProfile.jpg" />
                <CommentContentBlock>
                  <CommentUserName>김경백</CommentUserName>
                  <CommentContent>
                    ㅁ이ㅏㄻㄴㅇ리ㅏㅓㅁㄴㅇㄹ;ㅣㅏ먼ㅇ리ㅏㅓㄴㅇ리ㅏ;ㅇㄴ멀;ㅣ만ㅇ러니아sadfasdfasdfhsakjdflasdlkfjsaldjfklasdjfkalsd;fjklaksdjfl;asdjflasdjflasd;fjasdlkfjasd;lfkjasdfl;asjflkasdjflkasdjfkalsdjfkldsjkl
                  </CommentContent>
                </CommentContentBlock>
              </CommentBlock>
              <CommentBlock>
                <CommentUserImage src="/images/noProfile.jpg" />
                <CommentContentBlock>
                  <CommentUserName>김경백</CommentUserName>
                  <CommentContent>
                    ㅁ이ㅏㄻㄴㅇ리ㅏㅓㅁㄴㅇㄹ;ㅣㅏ먼ㅇ리ㅏㅓㄴㅇ리ㅏ;ㅇㄴ멀;ㅣ만ㅇ러니아sadfasdfasdfhsakjdflasdlkfjsaldjfklasdjfkalsd;fjklaksdjfl;asdjflasdjflasd;fjasdlkfjasd;lfkjasdfl;asjflkasdjflkasdjfkalsdjfkldsjkl
                  </CommentContent>
                </CommentContentBlock>
              </CommentBlock>
              <CommentBlock>
                <CommentUserImage src="/images/noProfile.jpg" />
                <CommentContentBlock>
                  <CommentUserName>김경백</CommentUserName>
                  <CommentContent>
                    ㅁ이ㅏㄻㄴㅇ리ㅏㅓㅁㄴㅇㄹ;ㅣㅏ먼ㅇ리ㅏㅓㄴㅇ리ㅏ;ㅇㄴ멀;ㅣ만ㅇ러니아sadfasdfasdfhsakjdflasdlkfjsaldjfklasdjfkalsd;fjklaksdjfl;asdjflasdjflasd;fjasdlkfjasd;lfkjasdfl;asjflkasdjflkasdjfkalsdjfkldsjkl
                  </CommentContent>
                </CommentContentBlock>
              </CommentBlock>
            </CommentBox>
          </PostItem>
        ))
      ) : (
        <div></div>
      )}
    </PostBlock>
  );
};

export default Post;
