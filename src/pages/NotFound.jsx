import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.section`
  max-width: 560px;
  margin: 0 auto;
  padding: 128px 20px;
  text-align: center;
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.danger};
  margin: 0 0 16px 0;
`;

const Code = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 48px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 16px 0;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin: 0 0 32px 0;
`;

const Back = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  &:hover { text-decoration: underline; }
`;

export default function NotFound() {
  return (
    <Wrap>
      <Label>transaction reverted</Label>
      <Code>404</Code>
      <Sub>This block doesn't exist on the chain.</Sub>
      <Back to="/">← return to genesis block</Back>
    </Wrap>
  );
}
