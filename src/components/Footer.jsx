import styled from "styled-components";
import { profile } from "../data/profile";

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  margin-top: 96px;
`;

const Inner = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 40px 32px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copy = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  gap: 24px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};

  a:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Copy>© {new Date().getFullYear()} {profile.name} — block #∞</Copy>
        <Links>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">github</a>
          <a href={`mailto:${profile.email}`}>email</a>
          <span>{profile.telegram}</span>
        </Links>
      </Inner>
    </Wrap>
  );
}
