import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;

  * {
    @media (min-width: 580px) {
      flex-basis: calc(${(1 / 2) * 100}% - 6px);
    }
    @media (min-width: 1024px) {
      flex-basis: calc(${(1 / 3) * 100}% - 8px);
    }
    @media (min-width: 1440px) {
      flex-basis: calc(${(1 / 4) * 100}% - 18px);
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    padding: 24px;
    gap: 24px;
  }
`;

export const HeaderWrapper = styled.div``;

export const HeaderTitle = styled.h1``;
