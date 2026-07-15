import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { Section, Eyebrow, Heading } from "../components/ui";
import { projects } from "../data/profile";

const Intro = styled.p`
  max-width: 560px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 8px 0 48px 0;
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(3, 1fr); }
`;

export default function Projects() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>ledger</Eyebrow>
        <Heading>All transactions</Heading>
        <Intro>Every project below was shipped end-to-end — most under hackathon deadlines.</Intro>
      </Reveal>

      <Grid>
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={i * 70} />
        ))}
      </Grid>
    </Section>
  );
}
