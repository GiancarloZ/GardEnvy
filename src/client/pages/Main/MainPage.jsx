import getUsers from "@wasp/queries/getUsers";
import { useQuery } from "@wasp/queries";

// Styles
import {
  Wrapper,
  HeaderWrapper,
  Title,
  Subtitle,
  ButtonWrapper,
  PlantButton,
} from "./styled";

const MainPage = ({ user }) => {
  const { data: users, isFetching, error } = useQuery(getUsers);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Welcome to GardEnvy</Title>
      </HeaderWrapper>
      <HeaderWrapper>
        <Subtitle> Your real garden in the virtual world.</Subtitle>
      </HeaderWrapper>
      <HeaderWrapper>
        <Subtitle>
          Search through our database of Seeds or add your own.
        </Subtitle>
      </HeaderWrapper>
      <HeaderWrapper>
        <Subtitle>
          Plant seeds into your virtual garden, take photos of your progress,
          and share with community.
        </Subtitle>
      </HeaderWrapper>
      <ButtonWrapper>
        <PlantButton to={"/gardens"}>Plant</PlantButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MainPage;
