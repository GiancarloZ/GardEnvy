import React from "react";
import Button from "../Button";
import { Image } from "@emotion-icons/ionicons-outline";

// Styled
import {
  CardWrapper,
  CardFrame,
  CardImage,
  HeaderTitle,
  InfoWrapper,
  StageItem,
  ButtonWrapper,
} from "./styled";

export function GardenCard({ garden }) {
  return (
    <CardWrapper>
      <HeaderTitle>{garden?.name}</HeaderTitle>
      <CardFrame>
        <CardImage>
          <Image />
        </CardImage>
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
      <ButtonWrapper>
        <Button type="button" active>
          Enter Garden
        </Button>
      </ButtonWrapper>
    </CardWrapper>
  );
}
