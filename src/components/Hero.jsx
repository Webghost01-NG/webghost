import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Mail, ExternalLink, Award, Code2 } from "lucide-react";
import { useTypedHash } from "../hooks/useTypedHash";
import { profile, stats } from "../data/profile";

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Wrap = styled.section`
  max-width: 1152px;
  margin: 0 auto;
  padding: 56px 20px 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 80px 32px 64px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.15fr 0.85fr;
  }
`;

const BadgeRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const StatusBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  padding: 4px 12px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Web3BridgeBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 4px 12px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.4rem, 5.5vw, 3.8rem);
  line-height: 1.08;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: -0.02em;
`;

const Muted = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Summary = styled(motion.p)`
  margin: 24px 0 0 0;
  max-width: 580px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  line-height: 1.7;
`;

const Socials = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primaryDim};
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateY(-2px);
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
`;

const PrimaryBtn = styled(motion(Link))`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #16a34a);
  color: #0b1220;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(34, 197, 94, 0.35);

  &:hover {
    box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
  }
`;

const GhostBtn = styled(motion(Link))`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.lineBright};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  max-width: 580px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
`;

const StatValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin: 4px 0 0 0;
`;

const BlockCard = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radii.xl};
  border: 1px solid ${({ theme }) => theme.colors.lineBright};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.surface} 0%, ${({ theme }) => theme.colors.base} 100%);
  padding: 28px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  box-shadow: 0 10px 40px -10px rgba(34, 197, 94, 0.25), 0 0 20px rgba(6, 182, 212, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.highlight});
  }
`;

const BlockHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const BlockNum = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const MiningStatus = styled.span`
  color: ${({ theme, $settled }) => ($settled ? theme.colors.secondary : theme.colors.muted)};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Dl = styled.dl`
  margin: 18px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Dt = styled.dt`
  color: ${({ theme }) => theme.colors.dim};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Dd = styled.dd`
  margin: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-all;
`;

export default function Hero() {
  const { hash, settled } = useTypedHash(40, 18);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <Wrap>
      <Grid>
        <div>
          <BadgeRow initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <StatusBadge>● Available for Hire</StatusBadge>
            <Web3BridgeBadge>
              <Award size={13} /> Web3Bridge Africa Alumni
            </Web3BridgeBadge>
          </BadgeRow>

          <Title initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {first} {rest[0]}
            <br />
            <Muted>building </Muted>
            <GradientText>AI & Web3 Protocols</GradientText>
            <Muted>.</Muted>
          </Title>

          <Summary initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {profile.summary}
          </Summary>

          <Socials initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <SocialIcon href={profile.githubUrl} target="_blank" rel="noreferrer" title="GitHub Profile">
              <GithubIcon size={18} />
            </SocialIcon>
            <SocialIcon href={profile.linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn Profile">
              <LinkedinIcon size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} title="Send Email">
              <Mail size={18} />
            </SocialIcon>
          </Socials>

          <Actions initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <PrimaryBtn to="/projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Explore Projects →
            </PrimaryBtn>
            <GhostBtn to="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Get in Touch
            </GhostBtn>
          </Actions>

          <StatsGrid initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            {stats.map((s) => (
              <StatCard key={s.label}>
                <StatValue>{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </div>

        <BlockCard initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <BlockHead>
            <BlockNum>block #0xWEB3GHOST</BlockNum>
            <MiningStatus $settled={settled}>{settled ? "● confirmed" : "○ mining…"}</MiningStatus>
          </BlockHead>
          <Dl>
            <div>
              <Dt>State Hash</Dt>
              <Dd>0x{hash || "…"}</Dd>
            </div>
            <div>
              <Dt>Location & Base</Dt>
              <Dd>{profile.location}</Dd>
            </div>
            <div>
              <Dt>Primary Discipline</Dt>
              <Dd>{profile.role}</Dd>
            </div>
            <div>
              <Dt>Affiliation</Dt>
              <Dd>Web3Bridge Africa · LASU Physics</Dd>
            </div>
            <div>
              <Dt>Direct Email</Dt>
              <Dd>{profile.email}</Dd>
            </div>
          </Dl>
        </BlockCard>
      </Grid>
    </Wrap>
  );
}
