import styled from "styled-components/macro";

export const TimelineSection = styled.div`
  position: relative;
  padding-left: 25px;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    width: 2px;
    background: linear-gradient(180deg, #ff14c0 30%, #817499 30%);
    bottom: 0;
    top: 0;
  }
`;

export const TimeLineListWrapper = styled.div`
  margin-top: 50px;
`;

export const TimelineListItem = styled.div`
  margin-bottom: 80px;
  color: #fff;
  width: 350px;
  background-color: ${({ hasBackground }) =>
    hasBackground ? "rgba(255, 255, 255, 0.04);" : "transparent"};
  &:before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: ${({ bulletPrimary }) =>
      bulletPrimary ? "#ff1493" : "#C2ABCB"};
    display: block;
    position: absolute;
    left: -5px;
    border-radius: 50%;
    box-shadow: ${({ bulletPrimary }) =>
      bulletPrimary ? "0px 0px 0px 7px pink" : "0 0 0 7px #2a1752"};
  }

  @media only screen and (max-width: 1199px) {
    width: auto;
  }
`;

export const TimelineListItemTitle = styled.h3`
  color: ${({ titlePrimary }) => (titlePrimary ? "#FF14B1" : "#fff")};
  font-size: 16px;
  font-weight: bold;
`;

export const TimelineListItemDesc = styled.p`
  color: ${({ descPrimary }) => (descPrimary ? "#000" : "#C2ABCB")};
`;
