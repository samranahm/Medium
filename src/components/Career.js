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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


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
        <img className="career-img" src="media/pictures/careerImg.jpg" alt="Medium Team" />
        <div className="career-content">
          <div id="main-text">
            <h2>Career at Medium</h2>
            <p id="p1">
              Help us build the best place to read and write on the internet.
            </p>

            <div className="career-jobs">
              <div id="profile-logo">
                <img className="profile-img" src="media/pictures/crop-logo.png" alt="profile" />
                <img
                  className="second-profile-img profile-img"
                  src="media/pictures/crop-logo.png"
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
            <img src="media/pictures/1.jpg" alt="FirsImg" />
            <img src="media/pictures/2.jpg"alt="SecondImg" />
          </div>
          <div id="lower-con">
            <img className="second-grp" src="media/pictures/3.jpg"alt="ThridImg" />
            <img className="thrid-grp" src="media/pictures/4.jpg" alt="FourthImg" />
            <img className="second-grp" src="media/pictures/5.jpg" alt="FifthImg" />
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
          <img id="second-img" src="media/pictures/career-second-img.jpg" alt="pic" />
        </div>
        <div className="career-content-pi">
          <h3 className="pd-ha head">Learn more about Medium</h3>
          <div id="box">
            <div id="box-text">
              <h3>The Medium Blog</h3>
              <p>The official Medium blog.</p>
              <p>blog.medium.com</p>
            </div>

            <img src="media/pictures/box-logo.jpg" alt="logo" />
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
                <img
                  id="card-profile-img-second"
                  src="media/pictures/crop-logo.png"
                  alt="profile"
                />
                <img
                  className="profile-second-img"
                  src="media/pictures/crop-logo.png"
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
                    src="media/pictures/crop-logo.png"
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
              <img id="building-pic" src="media/pictures/building.jpg"  alt="building pic" />
            </div>
            <div className="two-btns-con">
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
                <img className="card-img" src="media/pictures/s-resume.jpg" alt="resume" />
                <div className="icon-and-text">
                  <img className="card-profile" src="media/pictures/alexander.png" alt="" />
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
                <img className="card-img" src="media/pictures/zulie.jpg" alt="" />
                <div className="icon-and-text">
                  <img className="card-profile" src="media/pictures/zulie_dp.png" alt="" />
                  <p>Zulie Rane in Zulie Writes</p>
                </div>
                <h3>
                  A Complete Beginner’s Guide on How to Earn by Writing Articles
                </h3>
                <p>
                  This is for you if you have never earned a penny in your life
                  from writing — but you want...
                </p>
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
            <div className="card-row-con-second">
              <div className="second-left">
                {" "}
                {/*second left upper*/}
                <h4>Lists</h4>
                <div className="imgs-and-text">
                  <div className="multi-imgs">
                    <img
                      className="upper-1"
                      src="media/pictures/second_left_upper_1.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-2"
                      src="media/pictures/second_left_upper_2.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-3"
                      src="media/pictures/second_left_upper_3.jpg"
                      alt="pic"
                    />
                  </div>
                  <div className="h5-and-span">
                    <h5 className="h5">
                      How to Career Plan When You’ve Already Started a...
                    </h5>
                    <div className="span-text">
                      <span>10 Stories </span>
                      <span className="dot"> . </span>
                      <span>457Saves</span>
                    </div>
                  </div>
                </div>
                {/*second left lower*/}
                <div className="imgs-and-text">
                  <div className="multi-imgs">
                    <img
                      className="upper-1"
                      src="media/pictures/second_left_lower_1.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-2"
                      src="media/pictures/second_left_lower_2.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-3"
                      src="media/pictures/second_left_lower_3.jpg"
                      alt="pic"
                    />
                  </div>
                  <div className="h5-and-span">
                    <h5 className="h5">
                      How to find a mentor
                    </h5>
                    <div className="span-text">
                      <span>11 Stories </span>
                      <span className="dot"> . </span>
                      <span>687Saves</span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="second-left">
                {" "}
                {/*second right upper*/}
                <div className="imgs-and-text">
                  <div className="multi-imgs">
                    <img
                      className="upper-1"
                      src="media/pictures/second_right_upper_1.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-2"
                      src="media/pictures/second_right_upper_2.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-3"
                      src="media/pictures/second_right_upper_3.jpg"
                      alt="pic"
                    />
                  </div>
                  <div className="h5-and-span">
                    <h5 className="h5">
                     Stories to Help You Level-Up at Work
                    </h5>
                    <div className="span-text">
                      <span>18 Stories </span>
                      <span className="dot"> . </span>
                      <span>803Saves</span>
                    </div>
                  </div>
                </div>
                {/*second right lower*/}
                <div className="imgs-and-text">
                  <div className="multi-imgs">
                    <img
                      className="upper-1"
                      src="media/pictures/second_right_lower_1.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-2"
                      src="media/pictures/second_right_lower_2.jpg"
                      alt="pic"
                    />
                    <img
                      className="upper-3"
                      src="media/pictures/second_right_lower_3.jpg"
                      alt="pic"
                    />
                  </div>
                  <div className="h5-and-span">
                    <h5 className="h5">
                      How to Boost Employee Experience With Career...
                    </h5>
                    <div className="span-text">
                      <span>7 Stories </span>
                      <span className="dot"> . </span>
                      <span>198Saves</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="card-row-con">
              <div className="card card-custom">
                {" "}
                {/* R2-C1*/}
                <img className="card-img" src="media/pictures/rebecca_img.jpg" alt="" />
                <div className="icon-and-text">
                  <img className="card-profile" src="media/pictures/rebecca_dp.jpg" alt="" />
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
                <img className="card-img" src="media/pictures/r2-c2gif.gif" alt="" />
                <div className="icon-and-text">
                  <img className="card-profile" src="media/pictures/gif_card_logo.jpg" alt="" />
                  <p>Devon Price in Human Parts</p>
                </div>
                <h3>Laziness Does Not Exist</h3>
                <p>
                  Psychological research is clear: when people procrastinate,
                  there's usually a good reason
                </p>
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
              <div className="card card-custom">
                {" "}
                {/* R3-C1*/}
                <img className="card-img" src="media/pictures/hazel_img.jpg" alt="" />
                <div className="icon-and-text">
                  <img className="card-profile" src="media/pictures/hazel_dp.jpg" alt="" />
                  <p>Hazel paradise</p>
                </div>
                <h3>How I Create Passive Income With No Money</h3>
                <p>Many ways to start a passive income today</p>
                <div className="card-icons-con">
                  <div id="set-one-icons">
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <span className="main-card-icons">Mar 27</span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faHandsClapping} /> 23k
                    </span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faComment} /> 696
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
                {/* R3-C2*/}
                <img className="card-img" src="media/pictures/bryan_img.jpg" alt="" />
                <div className="icon-and-text">
                  <img className="card-profile" src="media/pictures/bryan.jpg" alt="" />
                  <p>Bryan Ye in Better Humans</p>
                </div>
                <h3>How To Wake Up at 5 A.M. Every Day</h3>
                <p>
                  An unconventional and compassionate guide to becoming an early
                  bird
                </p>
                <div className="card-icons-con">
                  <div id="set-one-icons">
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <span className="main-card-icons">Oct 03, 2019</span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faHandsClapping} /> 103k
                    </span>
                    <span className="main-card-icons">
                      <FontAwesomeIcon icon={faComment} /> 1052
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="main-card-icons"
                    icon={faBookmark}
                  />
                </div>
              </div>
            </div>
            
            <div id="last-btn">
            <button id="recommendations-btn">See more recommendations</button>
            </div>
            
          </div>
        </div>
      </div>
      <LoginSignupModal />
    </div>
  );
}

export default Career;
