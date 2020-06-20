import React from 'react';
import {useProfile} from '../hooks/useProfileGithub';
import './AboutMe.css';

function AboutMe(props) {
  const user = useProfile('GeDiez')

  return (
    <div className="aboutMe">
      <div className="aboutMe__avatar">
        <img src={user.avatar} alt=""/>
      </div>
      <div className="aboutMe__content">
        <p>mi nombre es: {user.name}</p>
        <p>mi username es: {user.username}</p>
        <p>Biografía: {user.bio}</p>
      </div>
    </div>
  )
}

export default AboutMe
