import React, { useEffect } from "react";
import LoginSignupModal from "./Model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Media import

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import careerImg from "../media/pictures/careerImg.jpg";
import cropLogo from "../media/pictures/crop-logo.png";
import imgOne from "../media/pictures/1.jpg";
import imgTwo from "../media/pictures/2.jpg";
import imgThree from "../media/pictures/3.jpg";
import imgFour from "../media/pictures/4.jpg";
import imgFive from "../media/pictures/5.jpg";

function Career({ logo }) {
  useEffect(() => {
    document.title =
      "Careers at Medium | by Jobs @ Medium | Jobs at Medium | Medium";
  });
  return (
    <div className="career-body">
      <header className="career-header">
        <img className="header-logo career-logo" src={logo} alt=" logo" />

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="header-right">
          <p>
            <FontAwesomeIcon icon={faPenToSquare} /> Write
          </p>
          <button className="signup-btn">Sign up</button>
          <button className="signin-btn">Sign in</button>
          <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
        </div>
      </header>
      <div className="body">
        <img className="career-img" src={careerImg} alt="Medium Team" />
        <div className="career-content">
          <div id="main-text">
            <h2>Career at Medium</h2>
            <p id="p1">
              Help us build the best place to read and write on the internet.
            </p>

            <div className="career-jobs">
              <div id="profile-logo">
                <img className="profile-img" src={cropLogo} alt="profile" />
                <img
                  className="second-profile-img profile-img"
                  src={cropLogo}
                  alt="profile"
                />
              </div>
              <div id="jobs-text">
                <div id="jobs-upperline">
                  <button className="jobs-btn">Jobs @ medium</button>
                  <span>.</span>
                  <button id="follow-btn">Follow</button>
                </div>
                <div id="jobs-lowerline">
                  <span>Published in</span>
                  <button className="jobs-btn">Jobs at Medium</button>
                  <span>·</span>
                  <span>3 min read</span>
                  <span>·</span>
                  <span>Jun 8, 2023</span>
                </div>
              </div>
            </div>
            <div className="icons">
              <div id="group-one">
                <div className="tooltip-container">
                  <FontAwesomeIcon
                    className="job-icon"
                    icon={faHandsClapping}
                  />
                  <div className="tooltip-text">Clap</div>
                </div>
                <span>13.4k</span>

                <div className="tooltip-container">
                  <FontAwesomeIcon className="job-icon" icon={faComment} />
                  <div className="tooltip-text">Comments</div>
                </div>
              </div>

              <div id="group-two">
                <div className="tooltip-container">
                  <FontAwesomeIcon className="job-icon" icon={faBookmark} />
                  <div className="tooltip-text">Bookmark</div>
                </div>

                <div className="tooltip-container">
                  <FontAwesomeIcon className="job-icon" icon={faCirclePlay} />
                  <div className="tooltip-text">Play</div>
                </div>

                <div className="tooltip-container">
                  <FontAwesomeIcon
                    className="job-icon"
                    icon={faArrowUpFromBracket}
                  />
                  <div className="tooltip-text">Share</div>
                </div>
              </div>
            </div>
            <div>
              <p id="pa">
                IMPORTANT NOTE: Medium has been made aware of a scam that
                involves offering people jobs at Medium. Please do not engage
                with offers that look similar to this. All our open positions
                are available <u>here</u>.
              </p>
              <button id="ba">View all open positions</button>
            </div>
            <div>
              <p id="pb">
                At Medium, we believe in the power of words — and we’re on a
                mission to bring the world’s expertise to life through memorable
                storytelling. Our platform rewards great writing and puts power
                back in the hands of readers. Medium’s subscription model means
                we rely on our members, not ads. We’re looking for teammates who
                are inspired by our mission, who are deeply thoughtful and
                empathetic, and who are passionate about the future of online
                publishing. Sound like you? Keep reading!
              </p>
              <br />

              <p id="pc">
                Note: Medium only hires and communicates via{" "}
                <span className="link">pinpointhq.com</span> our third-party
                recruiting platform. If you you receive job offers for Medium
                via LinkedIn or other platforms, it may be a scam; please verify
                it by contacting us at{" "}
                <span className="link">help.medium.com</span>.
              </p>
            </div>
          </div>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div id="pd">
            <h3 id="pd-ha">Why work at Medium</h3>
            <h3 className="pd-hr">A meaningful mission</h3>
            <p>
              From our engineers to our content ops team, employees at Medium
              (aka “Medians”) are driven by passion, vision, and purpose. We
              believe in building a high-quality, open platform for sharing
              ideas — free from harassment, hate speech, and other harmful
              content. We strive to create a diverse, inclusive place for
              everyone to feel seen, safe, and supported, both on our product
              and within our organization.
            </p>
            <h3 className="pd-hr">Remote-first culture</h3>
            <p>
              Collaborate with colleagues from Paris to Portland: Medium is a
              100% remote workplace. We’ll provide you with what you need to do
              your best work, including a stipend for home office expenses,
              Wi-Fi reimbursement, and a local co-working space membership. (We
              also know how valuable it is to meet your team IRL, so we hold an
              all-company retreat every year.)
            </p>
          </div>
        </div>
        <div id="pictures-container">
          <div id="upper-con">
            <img src={imgOne} alt="FirsImg" />
            <img src={imgTwo} alt="SecondImg" />
          </div>
          <div id="lower-con">
            <img className="second-grp" src={imgThree} alt="ThridImg" />
            <img className="thrid-grp" src={imgFour} alt="FourthImg" />
            <img className="second-grp" src={imgFive} alt="FifthImg" />
          </div>
        </div>
        <div className="career-content">
          <h3 className="pd-hr">A creative environment</h3>
          <p className="para-e">
            We’re building a culture, not just a product. We believe in
            experimentation, innovation, and collaboration. We give hi5s and
            lightning talks and all-company presentations about the ambitious
            challenges we’re tackling. We share travel photos our Slack
            #watercooler channel and craft fun playlists for Friday writing
            hour. We question ideas in product workshops, learn from the
            expertise of our colleagues, and new create things together.
          </p>
          <h3 className="pd-hr">Generous benefits</h3>
          <p className="para-e">
            Comprehensive health insurance, 401(k) plans, parental leave, and
            unlimited paid time off are just the start. Our values show up in
            your benefits: We provide coverage and support for your gym
            membership, education and professional development, career coaching,
            financial advising, mental health support, and more.
          </p>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          
        </div>
      </div>
      <LoginSignupModal />
    </div>
  );
}

export default Career;
