import React, { Component } from "react";

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <section id="profile">
          <header>
            <div className="profile-contain">
              <div className="figure">
                <img
                  src="assets\images\profile_1.jpg"
                  alt="profile"
                  id="profile__img"
                  className="image-main"
                />
                <img
                  src="assets\images\camera_icon.png"
                  alt="camera icon"
                  id="icon"
                  className="image-hover cursor-pointer"
                />
              </div>

              <img
                src="assets/images/share_button_desktop.png"
                alt="share button"
                className="button_desktop"
              />
              <img
                src="assets/images/share_button_mobile.png"
                alt="share_button"
                className="button_mobile"
              />
            </div>

            <br />
            <h1 id="twitter">£NI 🧃 💎</h1>
            {/* <h1 id="slack">Eni Victor</h1> */}
          </header>
        </section>
        <section id="links">
          <div id="main">
            <a
              href="https://twitter.com/VictorEni_"
              id="twitter"
              target="_blank"
            >
              <p>Twitter Link</p>
            </a>
            <a
              href="https://training.zuri.team/"
              id="btn__zuri"
              target="_blank"
            >
              <p>Zuri Team</p>
            </a>
            <a href="http://books.zuri.team" id="books" target="_blank">
              <p>Zuri books</p>
            </a>
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id= Eni Victor"
              target="_blank"
              id="book__python"
            >
              <p>Python Books</p>
            </a>
            <a
              href="https://background.zuri.team"
              target="_blank"
              id="pitch"
              title="Have you been looking to find coders to work on a project for you? Zuri offers a service of providing the best coders in the industry who perfrom excellently"
            >
              <p>Background Checkers for coders</p>
            </a>
            <a
              href="https://books.zuri.team/design-rules"
              target="_blank"
              id="book__design"
              title="Do you want to learn how to design and you don't know where to start from? Zuri has the best free design book for people who wants to learn designing"
            >
              <p>Design Books</p>
            </a>
          </div>
        </section>
        <section id="social_links">
          <a href="https://hng9.slack.com" target="_blank" id="left">
            <img src="assets/images/slack.png" target="_blank" alt="slack" />
          </a>
          <a href="https://www.github.com/EniV90">
            <img src="assets/images/github.png" alt="github" />
          </a>
          <br />
          <hr />
        </section>
        <br />
        <section id="footer">
          <footer>
            <div>
              <img
                src="assets\images\zuri_logo (1).png"
                alt="zuri logo"
                id="logo"
              />
            </div>

            <div>
              <p id="message">HNG Internship 9 Frontend Task</p>
            </div>
            <div>
              <img src="assets\images\I4G.png" alt="14G" className="logg" />
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

export default Link;
