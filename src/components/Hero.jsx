import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useTypedHash } from "../hooks/useTypedHash";
import { profile, stats } from "../data/profile";

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
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const Status = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0 16px 0;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  line-height: 1.05;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Muted = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`;
const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Summary = styled(motion.p)`
  margin: 24px 0 0 0;
  max-width: 560px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  line-height: 1.7;
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
`;

const PrimaryBtn = styled(motion(Link))`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.base};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
`;

const GhostBtn = styled(motion(Link))`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.lineBright};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  font-weight: 500;
  display: inline-block;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;
  max-width: 560px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;
const StatLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin: 4px 0 0 0;
`;

const BlockCard = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  box-shadow: 0 0 40px -15px rgba(34, 197, 94, 0.2);
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
`;

const MiningStatus = styled.span`
  color: ${({ theme, $settled }) => ($settled ? theme.colors.secondary : theme.colors.muted)};
`;

const Dl = styled.dl`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Dt = styled.dt`
  color: ${({ theme }) => theme.colors.dim};
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
          <Status initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            status: available for hire
          </Status>

          <Title initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {first} {rest[0]}
            <br />
            <Muted>builds on the chain</Muted>
            <Accent>.</Accent>
          </Title>

          <Summary initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {profile.summary}
          </Summary>

          <Actions initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <PrimaryBtn to="/projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              View projects →
            </PrimaryBtn>
            <GhostBtn to="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Get in touch
            </GhostBtn>
          </Actions>

          <StatsGrid initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            {stats.map((s) => (
              <div key={s.label}>
                <StatValue>{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </div>
            ))}
          </StatsGrid>
        </div>

        <BlockCard initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <BlockHead>
            <BlockNum>block #0</BlockNum>
            <MiningStatus $settled={settled}>{settled ? "● confirmed" : "○ mining…"}</MiningStatus>
          </BlockHead>
          <Dl>
            <div><Dt>hash</Dt><Dd>0x{hash || "…"}</Dd></div>
            <div><Dt>from</Dt><Dd>{profile.location}</Dd></div>
            <div><Dt>role</Dt><Dd>{profile.role}</Dd></div>
            <div><Dt>contact</Dt><Dd>{profile.email}</Dd></div>
          </Dl>
        </BlockCard>
      </Grid>
    </Wrap>
  );
}
