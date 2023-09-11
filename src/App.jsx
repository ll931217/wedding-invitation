import React, { Component } from 'react';
import Stories from 'react-insta-stories';
import Sound from 'react-sound';

import './App.css';

export default () => {
  const stories = [
    'images/1.png',
    {
      url: 'images/2.png',
      seeMore: () => {
        window.location.replace('https://goo.gl/maps/LSN98yg3uEXQZT278')
      },
    },
  ]
  return (
    <div>
      <Sound
        url="music.mp3"
        autoLoad={true}
        loop={true}
      />
      <Stories
        id="stories"
        stories={stories}
        defaultInterval={5000}
        width={432}
        height="100vh"
        loop={true}
      />
    </div>
  );
};