import styled from "@emotion/styled";

const FormControl = styled.div`
  position: relative;
  margin: 20px 0;
  width: 300px;
`;

const Input = styled.input`
  background: #e2b411;
  border: 0;
  border-bottom: 2px solid #333;
  padding: 15px 0;
  display: block;
  font-size: 18px;
  font-family: "Muli", sans-serif;
  width: 100%;
  transition: 0.1s ease-in;

  &:focus,
  &:valid {
    border-bottom-color: #111111;
    outline: none;
  }

  &:focus + label span,
  &:valid + label span {
    color: #111111;
    transform: translateY(-30px);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 0;
`;

const Span = styled.span`
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #111111;
`;

export const FormInput = ({ label, type = "text", onChange, ...props }) => {
  return (
    <FormControl>
      <Input type={type} onChange={onChange} {...props} required />
      <Label>
        <Span>{label}</Span>
      </Label>
    </FormControl>
  );
};
