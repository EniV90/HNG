import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="footer">
        <footer>
          <div>
            <img
              src="\assets\images\zuri_logo (1).png"
              alt="zuri logo"
              id="logo"
            />
          </div>

          <div>
            <p id="message">HNG Internship 9 Frontend Task</p>
          </div>
          <div>
            <img src="\assets\images\I4G.png" alt="14G" className="logg" />
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;
