import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 28px;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 36px;
  line-height: 28px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const PlantButton = styled(Link)`
  background: transparent;
  border: 0;
  width: 240px;
  height: 90px;
  font-size: 24px;
  background-color: #237d09;
  border-radius: 24px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
