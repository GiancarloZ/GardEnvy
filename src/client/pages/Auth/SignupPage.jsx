import { Link } from "react-router-dom";
import { SignInButton as GoogleSignInButton } from "@wasp/auth/helpers/Google";

import SignupForm from "@wasp/auth/forms/Signup";
import { Wrapper } from "./styled";

const SignupPage = () => {
  return (
    <Wrapper>
      <SignupForm />
      <br />
      <GoogleSignInButton />
      <br />
      <span>
        I already have an account&#63; (<Link to="/login">go to login</Link>).
      </span>
    </Wrapper>
  );
};

export default SignupPage;
