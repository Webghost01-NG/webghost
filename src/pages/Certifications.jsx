import styled from "styled-components";
import { ShieldCheck, Award, ExternalLink, GraduationCap, CheckCircle2 } from "lucide-react";
import { certifications, education } from "../data/profile";
import Reveal from "../components/Reveal";
import { Section, Eyebrow, Heading } from "../components/ui";

const Intro = styled.p`
  max-width: 560px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 8px 0 40px 0;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  margin-bottom: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CertCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lineBright};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(6, 182, 212, 0.15);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CertTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px 0;
`;

const CertMeta = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
`;

const IssuerBadge = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
`;

const CertIdText = styled.span`
  color: ${({ theme }) => theme.colors.dim};
  word-break: break-all;
`;

const VerifyLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
  }
`;

const EduGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EduCard = styled.div`
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
`;

const EduDegree = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 6px 0;
`;

const EduSchool = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 4px 0;
`;

const EduPeriod = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin: 0;
`;

export default function Certifications() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Verified Credentials & Track Record</Eyebrow>
        <Heading>Certifications ({certifications.length})</Heading>
        <Intro>Independently verifiable certificates issued by Cyfrin Updraft and freeCodeCamp.</Intro>
      </Reveal>

      <Grid>
        {certifications.map((c, i) => {
          const verifyUrl = c.id
            ? `https://updraft.cyfrin.io/certificates/${c.id}`
            : c.issuer.includes("Cyfrin")
            ? "https://updraft.cyfrin.io"
            : "https://freecodecamp.org";

          return (
            <Reveal key={c.name + c.date} delay={i * 40}>
              <CertCard>
                <CardTop>
                  <IconWrap>
                    <ShieldCheck size={22} />
                  </IconWrap>
                  <div>
                    <CertTitle>{c.name}</CertTitle>
                    <CertMeta>
                      Issued by <IssuerBadge>{c.issuer}</IssuerBadge> · {c.date}
                    </CertMeta>
                  </div>
                </CardTop>

                <CardFooter>
                  {c.id ? <CertIdText>ID: {c.id}</CertIdText> : <CertIdText>Status: Verified</CertIdText>}
                  <VerifyLink href={verifyUrl} target="_blank" rel="noreferrer">
                    Verify <ExternalLink size={12} />
                  </VerifyLink>
                </CardFooter>
              </CertCard>
            </Reveal>
          );
        })}
      </Grid>

      <Reveal>
        <Eyebrow>Academic & Professional Background</Eyebrow>
        <Heading style={{ fontSize: 24, marginBottom: 24 }}>Education & Training</Heading>
      </Reveal>
      <EduGrid>
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 60}>
            <EduCard>
              <EduDegree>{e.degree}</EduDegree>
              <EduSchool>{e.school}</EduSchool>
              <EduPeriod>{e.period}</EduPeriod>
              {e.note && <p style={{ margin: "10px 0 0 0", color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{e.note}</p>}
            </EduCard>
          </Reveal>
        ))}
      </EduGrid>
    </Section>
  );
}
