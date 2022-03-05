import React from 'react'
import './HeroSection.css'
import catHeroImg from '../../assets/img/images/hero-cat.png';
import { Mint } from '..';

function HeroSection() {
  return (
    <div id='home' className='hero-section'>
      <div className="container">
        <div className="hero-section__content">
          <div className="hero-section__text">
            <h1 className='section-title'>CryptoKitties</h1>
            <h2>Destined to have an impact on the world</h2>
            <p>4780/5000 minted</p>
						<Mint/>
          </div>
          <div className="hero-section__img-wrapper">
            <img src={catHeroImg} alt="cat nft" />
          </div>
        </div>
      </div>
      <div className="hero-section__bottom-shape">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d="M0,6V0h1000v100L0,6z"></path>
      </svg>
      </div>
    </div>
  )
}

export default HeroSection