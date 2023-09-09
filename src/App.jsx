import React, { Component } from 'react';
import Stories from 'react-insta-stories';

import './App.css';

export default () => {
  const stories = [
    'images/1.jpg',
    {
      content: (props) => (
        <div style={{ background: 'pink', padding: 20 }}>
          <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
    'images/2.jpg',
    'images/3.jpg',
    {
      url: 'images/4.jpg',
      header: {
        heading: 'Heading',
        subHeading: 'Sub Heading',
      },
      seeMore: () => {
        window.location.replace('https://goo.gl/maps/LSN98yg3uEXQZT278')
      },
    },
  ]
  return (
    <Stories
      id="stories"
      stories={stories}
      defaultInterval={5000}
      width={432}
      height="100vh"
      loop={true}
    />
  );
};