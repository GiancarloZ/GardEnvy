import styled from "@emotion/styled";

const FormControl = styled.div`
  position: relative;
  margin: 12px 0;
`;

const Input = styled.textarea`
  background: #e2b411;
  border: 0;
  border-bottom: 2px solid #333;
  display: block;
  font-size: 18px;
  width: 100%;
  transition: 0.1s ease-in;
  padding: 15px 0 0 0;

  &:focus,
  &:valid {
    border-bottom-color: #111111;
    outline: none;
  }

  &:focus + label span,
  &:valid + label span {
    color: #777777;
    transform: translateY(-30px) scale(0.8) translateX(-15px);
  }
`;

const Label = styled.label`
  position: absolute;
  bottom: 15px;
  left: 0;
  pointer-events: none;
`;

const Span = styled.span`
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #111111;
`;

export const FormTextArea = ({ label, type = "text", onChange, ...props }) => {
  return (
    <FormControl>
      <Input type={type} onChange={onChange} {...props} />
      <Label>
        <Span>{label}</Span>
      </Label>
    </FormControl>
  );
};
