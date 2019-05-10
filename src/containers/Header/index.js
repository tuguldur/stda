import React, { Component } from "react";
import "./style.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="section section--dark hero hero--centered">
        <div className="container container--hero anim-appear">
          <div className="column" />
        </div>
      </section>
    );
  }
}

export default Header;
