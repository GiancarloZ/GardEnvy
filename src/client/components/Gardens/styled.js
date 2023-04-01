import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.base6};
  border-radius: 24px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const CardFrame = styled.div`
  display: block;
  width: 100%;
  position: relative;

  border-radius: 12px;
  filter: drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714))
    drop-shadow(0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027))
    drop-shadow(0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125))
    drop-shadow(0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973))
    drop-shadow(0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864));
`;

export const CardImage = styled.img`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  border-radius: 12px;

  img,
  video,
  div {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 12px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 12px;
  gap: 24px;

  @media (min-width: 769px) {
    padding: 24px;
  }
`;

export const StageItem = styled.div`
  font-size: 14px;

  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

// FloatingAddGarden

export const FloatingButtonWrapper = styled.button`
  position: fixed;
  bottom: 12px;
  right: 12px;
  border-radius: 100px;
  background-color: #1e960b;
  width: 75px;
  height: 75px;
  cursor: pointer;
  border: 0;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transform: scale(0.9);
  }
`;
