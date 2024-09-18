import React, { useEffect } from "react";
import LoginSignupModal from "./Model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Media import

import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import careerImg from "../media/pictures/careerImg.jpg";
import cropLogo from "../media/pictures/crop-logo.png";
import imgOne from "../media/pictures/1.jpg";
import imgTwo from "../media/pictures/2.jpg";
import imgThree from "../media/pictures/3.jpg";
import imgFour from "../media/pictures/4.jpg";
import imgFive from "../media/pictures/5.jpg";
import careerSecondImg from "../media/pictures/career-second-img.jpg";
import boxlogo from "../media/pictures/box-logo.jpg";
import building from "../media/pictures/building.jpg";
import resume from "../media/pictures/s-resume.jpg";
import alexander from "../media/pictures/alexander.png";
import zulieImg from "../media/pictures/zulie.jpg";
import zulieDp from "../media/pictures/zulie_dp.png";
import rebecaImg from "../media/pictures/rebecca_img.jpg";
import rebecaDp from "../media/pictures/rebecca_dp.jpg";
import gifCard from "../media/pictures/r2-c2gif.gif"
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
              <button className="ba">View all open positions</button>
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
            <h3 className="pd-ha">Why work at Medium</h3>
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
          <div>
            <h3 className="pd-ha">join our team</h3>
            <button className="ba">View all open positions</button>
          </div>
        </div>
        <div id="second-img-con">
          <img id="second-img" src={careerSecondImg} alt="pic" />
        </div>
        <div className="career-content-pi">
          <h3 className="pd-ha head">Learn more about Medium</h3>
          <div id="box">
            <div id="box-text">
              <h3>The Medium Blog</h3>
              <p>The official Medium blog.</p>
              <p>blog.medium.com</p>
            </div>

            <img src={boxlogo} alt="logo" />
          </div>
          <div id="post-box-btn">
            <button>Medium</button>
            <button>Career</button>
            <button>jobs</button>
          </div>
          <div className="icons second-icons">
            <div id="group-one">
              <div className="tooltip-container">
                <FontAwesomeIcon className="job-icon" icon={faHandsClapping} />
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
                <FontAwesomeIcon
                  className="job-icon"
                  icon={faArrowUpFromBracket}
                />
                <div className="tooltip-text">Share</div>
              </div>
            </div>
          </div>
        </div>
        <div id="dynamic-cards-con">
          <div className="cards-con-content">
            <div className="career-jobs">
              <div id="profile-logo">
                <img id="card-profile-img-second" src={cropLogo} alt="profile" />
                <img
                  className="profile-second-img"
                  src={cropLogo}
                  alt="profile"
                />
              </div>
            </div>
            <div id="profile-text">
              <div>
                <h3 className="pd-hr">Written by Jobs @ Medium</h3>
                <button>7.3K Followers</button>
                <span>· Editor for</span>
                <button>Jobs at Medium</button>
              </div>
              <div id="text-btn-con">
                <button>Follow</button>
                <FontAwesomeIcon id="text-btn-con-icon" icon={faEnvelope} />
              </div>
            </div>
            <div id="profile-text-two-con">
              <div id="profile-text-two">
                <h4>More from Jobs @ Medium and Jobs at Medium</h4>
                <div id="profile-job">
                  <img
                    className="card-profile-img profile-img"
                    src={cropLogo}
                    alt="profile"
                  />
                  <button className="sbtn">Jobs @ Medium</button>
                </div>
                <div id="re-profile-text-two">
                  <button className="sbtn">
                    <h3 className="pd-hr">
                      A Guide to technical interview at Medium
                    </h3>
                  </button>
                  <p>
                    Here at Medium, we realize that being asked to solve an
                    unfamiliar problem on a whiteboard, is not the same as
                    coding i…
                  </p>
                  <div className="text-icons-con">
                    <div className="text-icons">
                      <button className="sbtn">Dec 9, 2016</button>
                      <FontAwesomeIcon
                        className="sicon"
                        icon={faHandsClapping}
                      />
                      <span>661</span>
                      <FontAwesomeIcon className="sicon2" icon={faComment} />
                      <span>3</span>
                    </div>
                    <div id="bookmark-con">
                      <FontAwesomeIcon icon={faBookmark} />
                    </div>
                  </div>
                </div>
              </div>
              <img id="building-pic" src={building} alt="building pic" />
            </div>
            <div id="two-btns-con">
              <button>See all from Jobs @ Medium</button>
              <button>See all from Jobs at Medium</button>
            </div>
          </div>
          <div id="border"></div>
          {/* Upto boder section */}
          <div className="card-con-content">
            <h3 id="recommended-heading">Recommended from Medium</h3>
            <div className="card-row-con">
              <div className="card card-custom">
                {" "}
                {/* R1-C1*/}
                <img className="card-img" src={resume} alt="resume" />
                <div className="icon-and-text">
                  <img className="card-profile" src={alexander} alt=""/>
                  <p>Alexander Nguyen in Level up coding</p>
                </div>
                <h3>
                  The resume that got a software engineer a $300,000 job at
                  Google.
                </h3>
                <p>1-page. Well-formatted.</p>
                <div className="card-icons-con">
                  <div id="set-one-icons">
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <span className="main-card-icons">Jun 1</span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faHandsClapping} /> 21k
                    </span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faComment} /> 402
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="main-card-icons"
                    icon={faBookmark}
                  />
                </div>
              </div>
              <div className="card card-custom">
                {" "}
                {/* R1-C2*/}
                <img className="card-img" src={zulieImg} alt="resume" />
                <div className="icon-and-text">
                  <img className="card-profile" src={zulieDp} alt="" />
                  <p>Zulie Rane in Zulie Writes</p>
                </div>
                <h3>
                A Complete Beginner’s Guide on How to Earn by Writing Articles
                
                </h3>
                <p>This is for you if you have never earned a penny in your life from writing — but you want...</p>
                <div className="card-icons-con">
                  <div id="set-one-icons">
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <span className="main-card-icons">Dec 17, 2023</span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faHandsClapping} /> 23k
                    </span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faComment} /> 553
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="main-card-icons"
                    icon={faBookmark}
                  />
                </div>
              </div>
            </div>
            <div className="card-row-con">
              <div className="card card-custom">
                {" "}
                {/* R2-C1*/}
                <img className="card-img" src={rebecaImg} alt="resume" />
                <div className="icon-and-text">
                  <img className="card-profile" src={rebecaDp} alt="" />
                  <p>Rebeca in ILLUMINATION</p>
                </div>
                <h3>
                I Started Waking up at 4:30 a.m. Daily— This Is What Happened
                </h3>
                <p>For 21 days, I wake up at 4:30. The results were CRAZY.</p>
                <div className="card-icons-con">
                  <div id="set-one-icons">
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <span className="main-card-icons">Apr 10</span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faHandsClapping} /> 8.2k
                    </span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faComment} /> 216
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="main-card-icons"
                    icon={faBookmark}
                  />
                </div>
              </div>
              <div className="card card-custom">
                {" "}
                {/* R2-C2*/}
                <img className="card-img" src={gifCard} alt="" />
                <div className="icon-and-text">
                  <img className="card-profile" src={alexander} alt="" />
                  <p>Alexander Nguyen in Level up coding</p>
                </div>
                <h3>
                  The resume that got a software engineer a $300,000 job at
                  Google.
                </h3>
                <p>1-page. Well-formatted.</p>
                <div className="card-icons-con">
                  <div id="set-one-icons">
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <span className="main-card-icons">Jun 1</span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faHandsClapping} /> 21k
                    </span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faComment} /> 402
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="main-card-icons"
                    icon={faBookmark}
                  />
                </div>
              </div>
            </div>
            <div className="card-row-con">
              <div className="test-card"></div>
            </div>
          </div>
        </div>
      </div>
      <LoginSignupModal />
    </div>
  );
}

export default Career;
