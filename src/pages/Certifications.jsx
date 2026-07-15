import styled from "styled-components";
import { ShieldCheck } from "lucide-react";
import { certifications, education } from "../data/profile";
import Reveal from "../components/Reveal";
import { Section, Eyebrow, Heading } from "../components/ui";

const Intro = styled.p`
  max-width: 560px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 8px 0 48px 0;
`;

const List = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  margin-bottom: 64px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  &:last-child { border-bottom: none; }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
    flex-direction: row;
  }
  flex-direction: column;
`;

const RowLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const CertName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CertMeta = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 4px 0 0 0;
`;

const Flag = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
`;

const CertId = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.dim};
  white-space: nowrap;
`;

const EduRow = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  &:last-child { border-bottom: none; margin-bottom: 0; }
`;

const EduDegree = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const EduPeriod = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin: 4px 0 0 0;
`;

export default function Certifications() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>verified credentials</Eyebrow>
        <Heading>Certifications</Heading>
        <Intro>Each entry below is independently verifiable via its credential ID.</Intro>
      </Reveal>

      <List>
        {certifications.map((c, i) => (
          <Reveal key={c.name + c.date} delay={i * 40}>
            <Row>
              <RowLeft>
                <ShieldCheck size={18} color="#06b6d4" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <CertName>{c.name}</CertName>
                  <CertMeta>
                    {c.issuer} · {c.date}
                    {c.flagged && <Flag> · unconfirmed</Flag>}
                  </CertMeta>
                </div>
              </RowLeft>
              {c.id && <CertId>{c.id}</CertId>}
            </Row>
          </Reveal>
        ))}
      </List>

      <Reveal>
        <Eyebrow>record</Eyebrow>
        <Heading style={{ fontSize: 24, marginBottom: 24 }}>Education</Heading>
      </Reveal>
      <div style={{ marginTop: 24 }}>
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 60}>
            <EduRow>
              <EduDegree>
                {e.degree} — {e.school}
                {e.flagged && <Flag> · unconfirmed</Flag>}
              </EduDegree>
              <EduPeriod>{e.period}</EduPeriod>
            </EduRow>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
