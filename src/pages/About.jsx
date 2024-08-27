import React from "react";
import aboutImage from "../assets/images/about__img1.png";
import fakeFooter from "../assets/images/fake__footer.png";
import firstCustomer from "../assets/images/firstCustomer.png";
import secondCustomer from "../assets/images/secondCustomer.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import fiveStar from '../assets/images/fiveStar.png'
const About = () => {
  return (
    <>
      <section className="page__section">
        <div className="shitf">
          <h1 className="about__page-title">What Our Customer Say</h1>
        </div>
        <div className="two__customer">
          <div className="first__customer">
            <div className="customer__info">
              <div className="customer__images">
                <img src={firstCustomer} alt="" className="about__customer" />
              </div>
              <div className="customer__estimate">
                <h3 className="customer__name">Kathleen Smith</h3>
                <p className="customer__about-staff">Fuel Company</p>
              </div>
            </div>
            <div className="customer__word">
              <p className="word__about">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
            <div className="bottom__stars">
              <img src={fiveStar} alt="" className="stars" />
            </div>
          </div>
          <div className="second__customer">
            <div className="customer__info">
              <div className="customer__images">
                <img src={secondCustomer} alt="" className="about__customer2" />
              </div>
              <div className="customer__estimate2">
                <h3 className="customer__name2">John Martin</h3>
                <p className="customer__about-staff2">Restoration Company</p>
              </div>
            </div>
            <div className="customer__word2">
              <p className="word__about2">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
            <div className="bottom__stars">
              <img src={fiveStar} alt="" className="stars" />
            </div>
          </div>
        </div>
      </section>
      <header className="need__fix-height">
        <div className="page__top">
          <img src={fakeFooter} alt="" className="page__top-img" />
        </div>
        <div className="page1__title">About Our Logistics</div>
        <div className="about__us-page1">
          <div className="page1-img">
            <img src={aboutImage} alt="" className="page1"/>
          </div>
          <div className="company__overview">
            <h1 className="overview__title">Our Company Overview</h1>
            <p className="company__text">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="overview__text">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem quia
              voluptassit.
            </p>
          </div>
        </div>
      </header>


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

export default About;
