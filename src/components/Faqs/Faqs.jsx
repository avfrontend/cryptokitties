import React from 'react'
import './Faqs.css'
import { Accordion } from "../../components";


function Faqs() {
  return (
    <div id='faqs' className='faqs-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
          <h2 className="section-title">
            FAQs
          </h2>
          </div>
          <div className="col-md-7">
            <Accordion/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs