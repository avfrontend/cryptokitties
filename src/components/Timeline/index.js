import React from "react";
import {
  TimelineSection,
  TimeLineListWrapper,
  TimelineListItem,
  TimelineListItemTitle,
  TimelineListItemDesc,
} from "./TimelineElements";

function Timeline() {
  return (
    <>
      <TimelineSection>
        <TimeLineListWrapper>
          <TimelineListItem bulletPrimary={"true"}>
            <TimelineListItemTitle titlePrimary={"true"}>
              Pre-launch Poll
            </TimelineListItemTitle>
            <TimelineListItemDesc descPrimary={"true"}>
              A poll that will help us decide on the causes that we are going to
              support. All voters will get the option of 10 causes that
              CryptoCatWomen will donate.
            </TimelineListItemDesc>
          </TimelineListItem>
          <TimelineListItem bulletPrimary={"true"}>
            <TimelineListItemTitle titlePrimary={"true"}>
              10% SOLD
            </TimelineListItemTitle>
            <TimelineListItemDesc descPrimary={"true"}>
              Early Adopters Airdrop Yayyy! We made it to the first step. As a
              reward for you, we are going to airdrop 10 CryptoCatWomen to 10 of
              our early adopters. You mean the world to us!
            </TimelineListItemDesc>
          </TimelineListItem>
          <TimelineListItem bulletPrimary={"true"}>
            <TimelineListItemTitle>25% SOLD</TimelineListItemTitle>
            <TimelineListItemDesc>
              10% of primary sales will be donated to the causes that you voted
              for during our pre-launch vote. A proof of donation will be
              published. This donation will increase the value of our NFT
              project and therefore, it will automatically benefit existing
              holders.
            </TimelineListItemDesc>
          </TimelineListItem>
          <TimelineListItem>
            <TimelineListItemTitle>50% SOLD</TimelineListItemTitle>
            <TimelineListItemDesc>
              Launch Angry Memes - Metoshi's 3rd game Communities game revamped.
              Release of a new comic book about the Adventures of Metoshi the
              Red Panda.Metoshi Marketplace Launch. Cross-chain BEP-721 /
              ERC-721.
            </TimelineListItemDesc>
          </TimelineListItem>
          <TimelineListItem>
            <TimelineListItemTitle>75% SOLD</TimelineListItemTitle>
            <TimelineListItemDesc>
              10% of primary sales will be donated to the causes that you voted
              for during our pre-launch vote. A proof of donation will be
              published. This donation will increase the value of our NFT
              project and therefore, it will automatically benefit existing
              holders. As the project's value will go up because of the
              predicted media exposure, we will increase the selling price of
              our NFT artwork by 100%
            </TimelineListItemDesc>
          </TimelineListItem>
          <TimelineListItem>
            <TimelineListItemTitle>100% SOLD</TimelineListItemTitle>
            <TimelineListItemDesc>
              10% of primary sales will be donated to the causes that you voted
              for during our pre-launch vote. A proof of donation will be
              published. This donation will increase the value of our NFT
              project and therefore, it will automatically benefit existing
              holders.
            </TimelineListItemDesc>
          </TimelineListItem>
        </TimeLineListWrapper>
      </TimelineSection>
    </>
  );
}

export default Timeline;
