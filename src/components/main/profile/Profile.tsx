import React from 'react';
import styled from 'styled-components';
import { User } from '../../../lib/graphql/query/User';

const ProfileBlock = styled.div`
  box-sizing: border-box;

  height: 10em;

  border: 0.095em solid #505afc;
  border-radius: 1em;

  display: flex;
  flex-direction: column;
`;

const ProfileTop = styled.div`
  box-sizing: border-box;

  height: 25%;

  padding-left: 1em;

  font-size: 1em;
  font-weight: bold;

  display: flex;

  align-items: center;
`;

const ProfileBody = styled.div`
  height: 75%;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-top: 0.095em solid #505afc;

  box-sizing: content-box;
`;

const ProfileImageBlock = styled.div`
  padding: 0em 1.7em;

  width: 35%;

  height: 6em;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 0.095em solid #505afc;
`;

const ProfileImage = styled.img`
  @media only screen and (min-width: 1920px) {
    width: 5em;
    height: 5em;

    border: 0.095em solid #505afc;
    border-radius: 5em;
  }
`;

const ProfileInfoBlock = styled.div`
  @media only screen and (min-width: 1920px) {
    width: 65%;
    height: 100%;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 1em 1.3em;

    font-size: 1.2em;
    font-weight: bold;

    justify-content: center;
  }
`;

const ProfileInfo = styled.a`
  font-weight: light;
`;

const Profile = ({ user }: { user: User | undefined }) => {
  return (
    <ProfileBlock>
      <ProfileTop>My Profile</ProfileTop>
      <ProfileBody>
        <ProfileImageBlock>
          <ProfileImage src="/images/noProfile.jpg" />
        </ProfileImageBlock>
        <ProfileInfoBlock>
          <ProfileInfo>이름 : {user ? user.name : undefined}</ProfileInfo>
          <ProfileInfo>이메일 : {user ? user.email : undefined} </ProfileInfo>
          <ProfileInfo>Gender: Male</ProfileInfo>
        </ProfileInfoBlock>
      </ProfileBody>
    </ProfileBlock>
  );
};

export default Profile;
