import React from "react";

// Styled
import {
  CardWrapper,
  CardFrame,
  SectionWrapper,
  CardImage,
  HeaderTitle,
  InfoWrapper,
  StageItem,
} from "./styled";

export function GardenCard({ garden }) {
  return (
    <CardWrapper>
      <HeaderTitle>{garden.title}</HeaderTitle>
      <SectionWrapper>
        <CardFrame>
          <CardImage src={garden.image} />
        </CardFrame>
        <div>
          <InfoWrapper>
            <StageItem>
              Seed Stage <>16</>
            </StageItem>
            <StageItem>
              Sprout Stage <>16</>
            </StageItem>
            <StageItem>
              Seedling Stage <>16</>
            </StageItem>
            <StageItem>
              Maturity Stage <>16</>
            </StageItem>
          </InfoWrapper>
          <Button>Enter Garden</Button>
        </div>
      </SectionWrapper>
    </CardWrapper>
  );
}
