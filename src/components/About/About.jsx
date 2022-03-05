import React from 'react'
import './About.css'
import aboutImg from '../../assets/img/images/about-img.png';
import { Mint } from '..';

function About() {
  return (
    <div className='about-section' id='about'>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-6 about-section__text">
              <h2 className="section-title">
                About<br></br>
                <span>CryptoKitties</span>
              </h2>
              <p>
              ​Women Rise is a collection of 10,000 randomly generated and unique NFT art pieces created by the internationally acclaimed visual artist Maliha Abidi. The collection represents women from around the world and the traits go beyond the diversity of just skin colors. Women activists, artists, scientists, coders and many others rising to make the world a better place!
              </p>
              <p>
                Women Rise allows art lovers to own a unique art piece while also making the NFT space more diverse and inclusive.
              </p>
              <Mint/>
          </div>
        </div>
      </div>
      <div className="container">
      <div className='about-section__img-wrapper'>
            <img src={aboutImg} alt="" />
          </div>
      </div>
      <div className="about-section__bottom-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
    </div>
  )
}

export default About