import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
// import instagram from "../assets/images/Instagram.png";
// import facebook from "../assets/images/Facebook.png";
// import twitter from "../assets/images/Twitter.png";
// import Linkdin from "../assets/images/Linkdin.png";

import React from "react";
import { button, explore, router, title } from "../router/index";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header__title">
            {title.map((title, index) => (
              <h1 className="home__title" key={index}>
                <NavLink to={title.path}>{title.name}</NavLink>
              </h1>
            ))}
          </div>
          <div className="header__ul">
            <ul className="header__ul">
              <li className="header__li">
                <img src={img1} className="clock" alt="" />
                <h3 className="header__clock">
                  Mon - Fri
                  <br/> 9.00 - 18.00
                </h3>
              </li>
              <li className="header__li">
                <img src={img2} className="email" alt="" />
                <a href="mailto:sharqtransservis@gmail.com" className="header__clock2">
                  Email
                  sharqtransservis
                  <br/>
                  @gmail.com
                </a>
              </li>
              <li className="header__li">
                <img src={img3} className="tell" alt="" />
                <a href="tel:+998977000708" className="header__clock">
                +998977000708
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section>
          <div className="header__bottom">
            <div className="bottom__title3">
              <button className="media__seven">
                <span className="menu__line">
                  
                </span>
              </button>
              <ul className="bottom__title">
                {router.map((router, index) => (
                  <li className="bottom__li" key={index}>
                    <NavLink to={router.path}>{router.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bottom__button">
              <button className="bottom__title2">
                <a href="" className="bottom__title2-text">
                  {
                  button.map((button, i) => (
                    <NavLink to={button.path} key={i}>{button.name}</NavLink>
                  ))
                 }
                </a>
              </button>
            </div>
          </div>
        </section>
        <section className="section__second">
          <div>
            <img src={img4} alt="" className="section__backround" />
          </div>
          <div className="section__second-div">
            <div className="aaa">
              <div className="under__section">
                <h1 className="section__text-title">
                  Logistics & Supply Chain Solutions
                </h1>
              </div>
              <h2 className="section__text">
                Your Gateway to any Destination in the World
              </h2>
              <p className="section__text-bottom">
                In augue ligula, feugiat ut nulla consequat. Ut est lacus,
                molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
                id dapibus finibus, enim diam interdum nulla, sed laoreet risus
                lectus.
              </p>
            </div>
            <button className="section__second-button">
              <p className="explore__more-in">
                {explore.map((explore, i) => (
                <NavLink to={explore.path} key={i}>{explore.name}</NavLink>
              ))}
              </p>
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;




