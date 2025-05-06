import React from 'react';

// Pictures
import portrait from '../assets/portrait.png';

export default function About() {
  return (
    <div className="skills skills--about">
      <div className="skills__illustration">
        <img
          src={portrait}
          alt="Portrait"
          className="skills__illustration__part skills__illustration__part--portrait"
        />
      </div>

      <div
        id="about"
        className="skills__content"
      >
        <h2 className="skills__content__title">About Me</h2>
        <p className="skills__content__subtitle">
          As a full-stack developer with several years of experience, I've
          already had the opportunity to work freelance on various projects for
          a variety of clients. I also have corporate experience, having worked
          for an innovative company for over a year. <br/><br/>This experience in a wide
          variety of fields allows me to adapt and best support you in your
          project.
        </p>
      </div>
    </div>
  );
}
