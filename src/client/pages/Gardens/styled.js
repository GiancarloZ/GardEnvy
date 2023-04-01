import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;

  * {
    @media (min-width: 500px) {
      flex-basis: calc(${(1 / 2) * 100}% - 12px);
    }
    @media (min-width: 768px) {
      flex-basis: calc(${(1 / 3) * 100}% - 16px);
    }
    @media (min-width: 1440px) {
      flex-basis: calc(${(1 / 4) * 100}% - 18px);
    }
  }

  @media (min-width: 500px) {
    padding: 24px;
    flex-direction: row;
    gap: 24px;
  }
`;

export const HeaderWrapper = styled.div``;

export const HeaderTitle = styled.h1``;
