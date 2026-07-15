import styled from "styled-components";
import { Mail, Phone, Send } from "lucide-react";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { Section, Eyebrow, Heading } from "../components/ui";
import { profile } from "../data/profile";

const Intro = styled.p`
  max-width: 560px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 8px 0 48px 0;
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.2fr;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  &:last-child { margin-bottom: 0; }
`;

const InfoText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

export default function Contact() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>reach out</Eyebrow>
        <Heading>Let's build something</Heading>
        <Intro>Open to full-time roles, freelance builds, and hackathon teams. Send a message and I'll reply within a day or two.</Intro>
      </Reveal>

      <Grid>
        <Reveal>
          <div>
            <InfoRow>
              <Mail size={18} color="#22c55e" />
              <a href={`mailto:${profile.email}`}><InfoText>{profile.email}</InfoText></a>
            </InfoRow>
            <InfoRow>
              <Phone size={18} color="#22c55e" />
              <InfoText>{profile.phone}</InfoText>
            </InfoRow>
            <InfoRow>
              <Send size={18} color="#22c55e" />
              <InfoText>{profile.telegram} on Telegram</InfoText>
            </InfoRow>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </Grid>
    </Section>
  );
}
