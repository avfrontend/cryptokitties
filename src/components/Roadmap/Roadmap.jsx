import React from 'react'
import './Roadmap.css'
import roadMapImg from '../../assets/img/images/roadmap-img.png';
import purpleElipse from '../../assets/img/images/purple-elipse.png';
import pinkElipse from '../../assets/img/images/pink-elipse.png';
import yellowElipse from '../../assets/img/images/yellow-elipse.png';
import blueElipse from '../../assets/img/images/blue-elipse.png';
import greenElipse from '../../assets/img/images/green-elipse.png';
import {Timeline} from '../../components'

function Roadmap() {
  return (
    <div id='roadmap' className='roadmap-section'>
      <div className="roadmap-section__bg-top">
      <div className="roadmap-section__bottom-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="roadmap-section__content">
              <h2 className="section-title">Roadmap</h2>
              <p className='roadmap-section__desc'>This roadmap outlines our goals and where we want to take Metoshi. We have a lot of ideas and concepts that we are working on.</p>
              <Timeline/>
            </div>
          </div>
          <div className="col-lg-6">
            <img className='roadmap-section__img img-fluid' src={roadMapImg} alt="Roadmap" />
            <div className="roadmap-section__animated-img">
              <img src={purpleElipse} alt="" />
            </div>
            <div className="roadmap-section__animated-img">
              <img src={pinkElipse} alt="" />
            </div>
            <div className="roadmap-section__animated-img">
              <img src={yellowElipse} alt="" />
            </div>
            <div className="roadmap-section__animated-img">
              <img src={blueElipse} alt="" />
            </div>
            <div className="roadmap-section__animated-img">
              <img src={greenElipse} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap