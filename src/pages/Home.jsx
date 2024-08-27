import React from "react";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.svg";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.png";
import img15 from "../assets/images/img15.png";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import money from "../assets/images/money.png";
import box from "../assets/images/box.png";
import { NavLink } from "react-router-dom";
import { button } from "../router";
const Home = () => {
  return (
    <>
      <section className="section__third">
        <div className="four__icon">
          <div className="icon">
            <div>
              <img src={img5} alt="" className="four__icon1" />
            </div>
            <div className="salom">
              <h1 className="four__icon-title">Sea Transport Services</h1>
              <p className="four__icon-text">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="icon">
            <div>
              <img src={img6} alt="" className="four__icon1" />
            </div>
            <div>
              <h1 className="four__icon-title">Warehousing Servicess</h1>
              <p className="four__icon-text">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="icon">
            <div>
              <img src={img7} alt="" className="four__icon1" />
            </div>
            <div>
              <h1 className="four__icon-title">Air Freight</h1>
              <p className="four__icon-text">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="icon">
            <div>
              <img src={img8} alt="" className="four__icon1" />
            </div>
            <div>
              <h1 className="four__icon-title">Local Shipping Services</h1>
              <p className="four__icon-text">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="big__images">
        <img src={img9} alt="" className="container__img" />
      </div>
      <section className="why__us">
        <div className="margn">
          <h1 className="solution">
            We provide full range global logistics solution
          </h1>
          <div className="value__text">
            <p className="value">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="value">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
          <div className="icon__box">
            <div className="icon__first">
              <img src={box} alt="" className="box__deliver" />
              <h2 className="box__deliver-text">Delivery on Time</h2>
            </div>
            <div className="icon__first">
              <img src={money} alt="" className="box__deliver" />
              <h2 className="box__deliver-text">Optimized Travel Cost</h2>
            </div>
          </div>
        </div>
        <div className="why__us-bgimg">
          <img src={img10} alt="" className="fly__girl" />
        </div>
      </section>
      <div className="beetwen__line"></div>

      <main>
        <div className="world__tour">
          <h1 className="transport">Transporting Across The World</h1>
          <div className="world__tour-images">
            <div className="across_world">
              <img src={img11} alt="" className="more__work" />
              <div className="h3__and-p">
                <h3 className="world__tour-title">Contract Logistics</h3>
                <p className="world__tour-text">Road Transportation</p>
              </div>
            </div>
            <div className="across_world">
              <img src={img12} alt="" className="more__work" />
              <div className="h3__and-p">
                <h3 className="world__tour-title">Warehouse & Distribution</h3>
                <p className="world__tour-text">Large Warehouse</p>
              </div>
            </div>
            <div className="across_world">
              <img src={img13} alt="" className="more__work" />
              <div className="h3__and-p">
                <h3 className="world__tour-title">Specialized Transport</h3>
                <p className="world__tour-text">Ocean Transports</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="beetwen__line2"></div>

      <section className="about__team">
        <div className="team">
          <h1 className="expert__team">Meet Expert Team</h1>
        </div>
        <div className="people__picture">
          <div className="staffes">
            <img src={img14} alt="" className="staff__picture" />
            <div className="staff__info">
              <h1 className="staff__name">Jessca Arow</h1>
              <p className="staff__job">Driver</p>
            </div>
          </div>
          <div className="staffes">
            <img src={img15} alt="" className="staff__picture" />
            <div className="staff__info">
              <h1 className="staff__name">Kathleen Smith</h1>
              <p className="staff__job">Driver</p>
            </div>
          </div>
          <div className="staffes">
            <img src={img16} alt="" className="staff__picture" />
            <div className="staff__info">
              <h1 className="staff__name">Rebecca Tylor</h1>
              <p className="staff__job">Driver</p>
            </div>
          </div>
        </div>
      </section>
      <main className="media__mistake">
        <button className="main__button">
          <a href="" className="more__work">
          {
            button.map((button, i) => (
            <NavLink to={button.path} key={i}>{button.name}</NavLink>
            ))
          }
          </a>
        </button>
      </main>

      <div className="beetwen__line2"></div>

      <main className="beetwen__footer">
        <img src={img17} alt="" className="footer__container" />
      </main>
      <footer className="footer-icon">
        <div className="footer__info">
          <p className="footer__text">
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="footer__icons-two">
            <div className="footer__icon">
              <img src={img3} alt="" className="footer__email" />
              <h4 className="footer__tell-text">Email contact@logistics.com</h4>
            </div>
            <div className="footer__icon">
              <img src={img2} alt="" className="footer__tell" />
              <h4 className="footer__tell-text">Call Us (00) 112 365 489</h4>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__line"></div>
      <footer className="footer">
        <h1 className="footer__owner">
          Copyright © SHARQ-TRANS-SERVIS | Designed by VictorFlow - Powered by
          Webflow.
        </h1>
        <div className="footet__main">
          <a href="" className="adds">
            Style Guide
          </a>
          <a href="" className="adds">
            Licenses{" "}
          </a>
          <a href="" className="adds">
            Changelog
          </a>
          <a href="" className="adds">
            Password
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
