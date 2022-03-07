import React from 'react'
import styled from "styled-components/macro";
import {Social} from "./Social"
import footerBg from '../../assets/img/bg/hero-section-bg.png';
import titleAfter from '../../assets/img/icon/footer-title-after.png';
import titleBefore from '../../assets/img/icon/footer-title-before.png';

const FooterSection = styled.div`
    background:url(${footerBg}), #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding: 200px 0;
    @media only screen and (max-width: 768px) {
        padding: 80px 0;
    }
`

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterContent = styled.div`
    text-align: center;
`

const FooterTitle = styled.h2`
    color: #fff;
    position: relative;
    &:after {
        content: url(${titleAfter})
    }
    &:before {
        content: url(${titleBefore});
        position: absolute;
        left: 190px;
        bottom: -30px;
    }
    @media only screen and (max-width: 991px) {
        &:before {
            display:none;
        }
        &:after {
            display:none;
        }
    }

`

const FooterSocialWrapper = styled.div`
    margin-top:40px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    a {
        display:inline-block;
    }
`
const FooterSocialItem = styled.div`
    a {
       display: inline-block
    }
    img {
            width: 150px;
        }
    @media only screen and (max-width: 991px) {
        img {
            width: 100px;
        }
    }
    @media only screen and (max-width: 768px) {
        img {
            width: 50px;
        }
    }
    `

function Footer() {
  return (
      <FooterSection>
          <FooterWrapper>
              <FooterContent>
                  <FooterTitle className='section-title'>
                    Contacts
                  </FooterTitle>
                <FooterSocialWrapper>
                    {Social.map((social) =>[
                        <FooterSocialItem  key={social.id}>
                            <a href={social.link} rel="noreferrer" target="_blank">
                                <img src={social.img} alt={social.alt} />
                            </a>
                        </FooterSocialItem>
                    ])}
                </FooterSocialWrapper>
              </FooterContent>
          </FooterWrapper>
      </FooterSection>
  )
}

export default Footer