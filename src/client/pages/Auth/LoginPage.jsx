import { Link } from "react-router-dom";
import { SignInButton as GoogleSignInButton } from "@wasp/auth/helpers/Google";

import LoginForm from "@wasp/auth/forms/Login";

import { Wrapper } from "./styled";

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginForm />
      <br />
      <GoogleSignInButton />
      <br />
      <span>
        I don't have an account yet (<Link to="/signup">go to signup</Link>).
      </span>
    </Wrapper>
  );
};

export default LoginPage;
