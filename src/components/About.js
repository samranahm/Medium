import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Media import

import whiteLogo from "../media/pictures/download.png";

function About({logo}) {
  useEffect(() => {
    document.title = "About Medium";
  });
  return (
    <div className="About">
      <div className="about-header">
        <img
          src={whiteLogo}
          alt="Logo"
          className="header-logo about-header-logo"
        />
        <div className="btn-container">
          <button id="login-btn">log in</button>
          <button id="signup-btn">Sign up</button>
        </div>
      </div>
      <div className="about-body">
        <div className="about-body-text">
          <h2 id="about-everyone">
            Everyone has a <br />
            story to tell.
          </h2>
          <p className="about-para">
            Medium is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; Medium is quiet yet full of insight.
            It’s simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to say.
          </p>
          <p className="about-para">
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </p>
          <p className="about-para para-ultimately">
            Ultimately, our goal is to deepen our collective <br />{" "}
            understanding of the world through the power of <br />
            writing.
          </p>
          <p className="about-para">
            Over 100 million people connect and share their wisdom on Medium
            every month. Many are professional writers, but just as many
            aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur
            novelists, and anyone burning with a story they need to get out into
            the world. They write about what they’re working on, what’s keeping
            them up at night, what they’ve lived through, and what they’ve
            learned that the rest of us might want to know too.
          </p>
          <p className="about-para">
            Instead of selling ads or selling your data, we’re supported by a
            growing community of <u>Medium members</u> who align with our
            mission. If you’re new here, <u>start exploring</u>. Dive deeper
            into whatever matters to you. Find a post that helps you learn
            something new, or reconsider something familiar—and then{" "}
            <u>share your own story</u>.
          </p>
        </div>
      </div>
      <div className="about-options">
        <div className="divOne">
          <Link to="/" id="optionOne">
            Start reading
          </Link>
          <FontAwesomeIcon className="faIcon" icon={faArrowRight} />
        </div>
        <div className="divTwo">
          <Link to="/new-story" id="optionTwo">
            Start writing
          </Link>
          <FontAwesomeIcon className="faIcon" icon={faArrowRight} />
        </div>
        <div className="divThree">
          <Link to="/membership" id="optionThree">
            Become A member
          </Link>
          <FontAwesomeIcon className="faIcon" icon={faArrowRight} />
        </div>
      </div>
      <div className="about-footer">
      <img
          src={logo}
          alt="Logo"
          className="header-logo about-header-logo"
        />
        <div className="btn-container">
        <Link to='/about' className="footer-btn">About</Link>
        <Link to='/' className="footer-btn">Terms</Link>
        <Link to='/' className="footer-btn">Privacy</Link>
        <Link to='/' className="footer-btn">Help</Link>
        <Link to='/' className="footer-btn">Teams</Link>
        <Link to='/' className="footer-btn">Press</Link>
        </div>
        

      </div>
    </div>
  );
}

export default About;
