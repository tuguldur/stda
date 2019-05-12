import React, { Component } from "react";
import Button from "@material-ui/core/Button";
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
          <div className="column">
            <h1>Your Dream Starts With Us</h1>
            <p>
              Монгол улсад Мэдээллийн технологийн салбар үүсэн хөгжиж эхэлсэн
              үеэс хойд бүс нутгийн хөгжилд нэмэр болохын тулд Дархан-Уул
              аймгийн хэмжээнд хамгийн анхны “Компьютерийн програм хангамжийн
              инженер” мэргэжлийг нээж, анхны элсэлтийг 1999 оноос авч эхэлсэн
              билээ.
            </p>
            <div className="btn-hero">
              <Button variant="outlined">Дэлгэрэнгүйг үзэх</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
