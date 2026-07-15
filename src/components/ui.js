import styled from "styled-components";

export const Container = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 32px;
  }
`;

export const Section = styled.section`
  max-width: 1152px;
  margin: 0 auto;
  padding: 64px 20px;
  ${({ $bordered, theme }) => $bordered && `border-top: 1px solid ${theme.colors.line};`}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 64px 32px;
  }
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 8px 0;
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 600;
`;

export const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  padding: 2px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.base};
  border: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.muted};
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
`;

export const MonoLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
`;
