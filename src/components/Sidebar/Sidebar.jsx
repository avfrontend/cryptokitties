import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  // SidebarRouter,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={toggle}>
            Roadmap
          </SidebarLink>
          <SidebarLink to="faqs" onClick={toggle}>
            FAQs
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRouter to="/signin">Sign in</SidebarRouter> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
