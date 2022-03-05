import React from 'react'
import styled from "styled-components/macro";

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

function Mint() {
  return (
     <MintBtns>
		<MintBtnsItem>
			<button
				className="btn--primary"
			>
				Mint
			</button>
        </MintBtnsItem>
        <MintBtnsItem>
			<a
				className="btn--secondary"
				href="https://testnets.opensea.io/collection/ugly-turbo-2"
				target="_blank"
				rel="noreferrer"
			>
				OpenSea
			</a>
        </MintBtnsItem>
     </MintBtns>
  )
}

export default Mint