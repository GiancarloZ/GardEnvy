import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  padding: 12px;
  display: block;
  background: ${({ theme }) => theme.colors.base6};
  border-radius: 24px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const UpperWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

export const CardFrame = styled.div`
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  filter: drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714))
    drop-shadow(0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027))
    drop-shadow(0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125))
    drop-shadow(0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973))
    drop-shadow(0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864));
  margin-bottom: 20px;
`;

export const CardImage = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  border-radius: 12px;
  img,
  video,
  div,
  svg {
    object-fit: cover;
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    border-radius: 12px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  marign: 0;
  max-height: 30px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 12px;
  gap: 12px;
  display: flex;

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

export const ButtonWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: block;
  width: 100%;
  margin-bottom: 12px;
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
  z-index: 1;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transform: scale(0.9);
  }
`;
