import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components/macro";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrap = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;

  h1 {
    padding: 20px 0;
    font-size: 36px;
    font-family: "GeoramaBold";
  }

  span {
    margin-right: 1.5rem;
  }
`;
const Dropdown = styled.div`
  color: #c2abcb;
  text-align: left;
  padding-left: 50px;
  p {
    font-size: 16px;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <AccordionSection>
        {Data.map((item, index) => [
          <div key={index}>
            <Wrap onClick={() => toggle(index)}>
              <span>
                {clicked === index ? (
                  <FiMinus color="#FF14B1" />
                ) : (
                  <FiPlus color="#fff" />
                )}
              </span>
              <h1>{item.question}</h1>
            </Wrap>
            {clicked === index ? (
              <Dropdown>
                <p>{item.answer}</p>
              </Dropdown>
            ) : null}
          </div>,
        ])}
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
