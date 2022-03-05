import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import starIcon from "../../assets/img/icon/star-nav-icon.png";
import starBtnIcon from "../../assets/img/icon/star-button.png";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
  padding-top: ${({ scrollNav }) => (scrollNav ? "0" : "60px")};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: "GeoramaBold";
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  font-size: 16px;
  cursor: pointer;
  font-family: "GeoramaMedium";

  &:after {
    content: ${({ imgafter }) => (imgafter ? `url(${starIcon})` : "")};
    padding: 0 1.25rem;
    display: inline-block;
    vertical-align: middle;
  }

  &:hover {
    color: #000;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 10px;
  background: #000000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
  &:after {
    content: url(${starBtnIcon});
    padding-left: 5px;
    display: inline-block;
    vertical-align: middle;
  }
`;
