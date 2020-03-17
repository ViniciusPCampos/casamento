import React from "react"

// import { Container } from './styles';

export default function Countdown() {
  return (
    <>
      <div
        id="qbootstrap-countdown"
        data-stellar-background-ratio="0.5"
        // style="background-image: url(images/cover_bg_2.jpg);"
        data-section="wedding-day"
      >
        <div className="overlay"></div>
        <div className="display-over">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-12 section-heading text-center svg-sm colored">
                <img
                  src="images/flaticon/svg/006-flower-bell-outline-design-variant-with-vines-and-leaves.svg"
                  className="svg"
                  alt="Free HTML5 Bootstrap Template by QBootstrap.com"
                />
                <h2 className="">O Grande Dia</h2>
                <span className="datewed">Domingo, 25 de Outubro, 2020</span>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center">
                <p className="countdown">
                  <span id="days"></span>
                  <span id="hours"></span>
                  <span id="minutes"></span>
                  <span id="seconds"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
