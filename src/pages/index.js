import React from "react"

import Layout from "../components/layout"
import cover from "../images/cover_bg_3.jpg"
import SEO from "../components/seo"
import Countdown from "../components/Countdown"
import Noivos from "../components/Noivos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="qbootstrap-hero" data-section="home">
      <div className="qbootstrap-overlay"></div>
      <div
        className="qbootstrap-cover text-center"
        data-stellar-background-ratio="0.5"
        // style={{ backgroundImage: cover }}
      >
        <div className="display-t">
          <div className="display-tc">
            <div className="container">
              <div className="col-md-10 col-md-offset-1">
                <div className="animate-box svg-sm colored">
                  <img
                    src="images/flaticon/svg/004-nature.svg"
                    className="svg"
                    alt="Free HTML5 Bootstrap Template by QBootstrap.com"
                  />
                  <h1 className="holder">
                    <span>O Casamento de</span>
                  </h1>
                  <h2>Vinícius &amp; Raquel</h2>
                  <p>25.10.2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="qbootstrap-couple" className="qbootstrap-section-gray">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 animate-box">
            <div className="col-md-12 text-center section-heading svg-sm colored">
              <img
                src="images/flaticon/svg/005-two.svg"
                className="svg"
                alt="Free HTML5 Bootstrap Template by QBootstrap.com"
              />
              <h2>Estão se Casando</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                accusamus, sequi, minima repellendus explicabo magni aperiam,
                ducimus perferendis ad quidem suscipit omnis unde veritatis
                pariatur. Commodi, nisi. Iusto, accusantium a.
              </p>
              <p>
                <strong>on Dec 28, 2017 &mdash; Boracay, Philippines</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
              <img
                src="images/groom.jpg"
                className="img-responsive"
                alt="Free HTML5 Bootstrap Template by QBootstrap.com"
              />
              <h3>Louie Jie L. Mahusay</h3>
              <span>Groom</span>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2 nopadding">
              <h2 className="amp-center">
                <img
                  src="images/flaticon/svg/003-luxury.svg"
                  className="svg img-responsive"
                  alt="Free HTML5 Bootstrap Template by QBootstrap.com"
                />
              </h2>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
              <img
                src="images/bride.jpg"
                className="img-responsive"
                alt="Free HTML5 Bootstrap Template by QBootstrap.com"
              />
              <h3>Marializa R. Tabay</h3>
              <span>Bride</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Countdown></Countdown>
    <Noivos></Noivos>
  </Layout>
)

export default IndexPage
