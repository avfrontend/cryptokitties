import React from 'react'
import styled from "styled-components/macro";
import {Social} from "./Social"
import footerBg from '../../assets/img/bg/hero-section-bg.png';

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
    color: #fff;
    text-align: center;
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
                <h2 className='section-title'>
                    Contacts
                </h2>
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