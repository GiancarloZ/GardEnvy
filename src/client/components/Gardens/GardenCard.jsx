import React from "react";
import Button from "../Button";

// Styled
import {
  CardWrapper,
  CardFrame,
  CardImage,
  HeaderTitle,
  InfoWrapper,
  StageItem,
} from "./styled";

export function GardenCard({ garden }) {
  return (
    <CardWrapper>
      <HeaderTitle>{garden?.name}</HeaderTitle>
      <CardFrame>
        <CardImage src={garden?.image} />
      </CardFrame>
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
      <Button type="button" active>
        Enter Garden
      </Button>
    </CardWrapper>
  );
}
