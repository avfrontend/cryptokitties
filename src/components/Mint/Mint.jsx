import React from 'react'
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const MintBtns = styled.div`
  display: flex;

  @media only screen and (max-width: 1199px) {
      justify-content: center;
  }
  @media only screen and (max-width: 575px) {
      flex-direction: column;
  }
`

const MintBtnsItem = styled.div`
  &:first-child{
      margin-right: 10px;
  }
  @media only screen and (max-width: 575px) {
      margin-right: 0;
      margin-bottom: 10px;;
  }
`

const MintBtnPrimary = styled.button`
	background: #ff14b1;
	color: #fff;
	border-radius: 10px;
	border: none;
	padding: 10px 70px;
	font-size: 18px;
`

const MintBtnSecondary = styled(Link)`
  background: #f2f2f2;
  color: #ff14b1;
  padding: 10px 60px;
  border-radius: 10px;
  display: inline-block;
  font-size: 18px;
  &:hover {
	color: #ff14b1;
  }
`

function Mint() {
  return (
    <MintBtns>
      <MintBtnsItem>
        <MintBtnPrimary>
          Mint
        </MintBtnPrimary>
      </MintBtnsItem>
      <MintBtnsItem>
        <MintBtnSecondary to="/">
          OpenSea
        </MintBtnSecondary>
      </MintBtnsItem>
    </MintBtns>
  )
}

export default Mint