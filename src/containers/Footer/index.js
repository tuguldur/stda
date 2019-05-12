import React, { Component } from "react";
import "./style.css";
import footerImg from "../images/must-logo.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="container container--jumbo">
          <div className="footer-block footer-block--about">
            <a href="/" className="footer-block__logo">
              <img src={footerImg} alt="logo" className="footer-block-logo" />
            </a>
            <div className="footer-block__content">
              <p className="footer-block__description">
                Бид Монголын зах зээлийн эрэлтэд нийцсэн, програм хангамжийн
                орчин үеийн дэвшилтэт технологийг ашиглах, өндөр ур чадвартай
                инженерүүдийг бэлтгэн гаргах зорилготой. Компьютерийн ухаан,
                програм хангамжийн инженер мэргэжилтэнг 2003 оноос эхлэн нийт
                300- аад бакалавр мэргэжилтэн, 9 дипломын дээд мэргэжилтэн
                бэлтгэж, 90 гаруй хувь нь мэргэжлээрээ ажиллаж байна.
              </p>
              <ul className="footer-block__social-nav">
                <li className="footer-block__social-nav-item">
                  <a
                    href="https://www.facebook.com/SHUTISdarkhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-block__social-nav-link"
                  >
                    Facebook
                  </a>
                </li>
                <li className="footer-block__social-nav-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-block__social-nav-link"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-block footer-block--legal">
            <div className="footer-block__content">
              <ul className="footer-block__legal-nav">
                <li className="footer-block__legal-nav-item">
                  <a
                    href="http://unimis.stda.edu.mn/teacher"
                    target="_blank"
                    className="footer-block__legal-nav-link"
                    rel="noopener noreferrer"
                  >
                    Багшийн веб
                  </a>
                </li>
                <li className="footer-block__legal-nav-item">
                  <a
                    href="http://unimis.stda.edu.mn/student"
                    target="_blank"
                    className="footer-block__legal-nav-link"
                    rel="noopener noreferrer"
                  >
                    Оюутны веб
                  </a>
                </li>
                <li className="footer-block__legal-nav-item">
                  <a
                    href="http://unimis.stda.edu.mn/attest/"
                    target="_blank"
                    className="footer-block__legal-nav-link"
                    rel="noopener noreferrer"
                  >
                    Аттестатчиллын веб
                  </a>
                </li>
                <li className="footer-block__legal-nav-item">
                  <a
                    href="http://stda.edu.mn/library/"
                    target="_blank"
                    className="footer-block__legal-nav-link"
                    rel="noopener noreferrer"
                  >
                    Номын сангийн веб
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
