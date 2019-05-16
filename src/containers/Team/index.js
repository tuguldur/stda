import React, { Component } from "react";
import "./style.css";
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = [
      {
        name: "name",
        src:
          "https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F1VKBitGP7fOOJO21ggWRhMp1QR81nhqff%2Fdarktheme-2x1.png",
        alt: "tuguldur",
        type: "Tuki",
        link: "/gmail.com"
      }
    ];
    const team = data.map((data, index) => (
      <div className="tile" key={index}>
        <a href={data.link} className="tile__link">
          <figure className="tile__poster">
            <div>
              <img className="tile__image" src={data.src} alt={data.alt} />
            </div>
          </figure>
          <h3 className="eyebrow">{data.type}</h3>
          <h4>
            <span className="tile__link">{data.name}</span>
          </h4>
        </a>
      </div>
    ));
    return (
      <section className="section">
        <div className="container container--jumbo">
          <div>
            <div className="col-list">
              <section className="module-module col-2 h2-spacing -ratio-2-1">
                <div className="module">
                  <h2>Багшлах бүрэлдэхүүн</h2>
                  <p>Some title</p>
                </div>
              </section>
            </div>
            <div className="multi-up multi-up--3 multi-up--slim teacher-tile">
              {team}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
