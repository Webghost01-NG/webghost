import styled from "styled-components";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SkillsGrid from "../components/SkillsGrid";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { Section, Eyebrow, Heading } from "../components/ui";
import { projects, experience, achievements } from "../data/profile";

const SectionHead = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
`;

const ViewAll = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.muted};
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(3, 1fr); }
`;

const JobRow = styled.div`
  display: grid;
  gap: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  &:last-child { border-bottom: none; }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 180px 1fr;
  }
`;

const JobPeriod = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin: 0;
`;

const JobRole = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const JobCompany = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 4px 0 0 0;
`;

const PointList = styled.ul`
  margin: 12px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Point = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
  display: flex;
  gap: 8px;

  &::before {
    content: "·";
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 18px;
    line-height: 1.3;
  }
`;

const AchievementRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  &:last-child { border-bottom: none; }
`;

const AchievementTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const AchievementDate = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  white-space: nowrap;
`;

export default function Home({ onOpenResume }) {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero onOpenResume={onOpenResume} />
      <SkillsGrid />

      <Section $bordered>
        <Reveal>
          <SectionHead>
            <div>
              <Eyebrow>ledger</Eyebrow>
              <Heading>Featured transactions</Heading>
            </div>
            <ViewAll to="/projects">View all →</ViewAll>
          </SectionHead>
        </Reveal>

        <ProjectGrid>
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 80} />
          ))}
        </ProjectGrid>
      </Section>

      <Section $bordered>
        <Reveal>
          <Eyebrow>history</Eyebrow>
          <Heading style={{ marginBottom: 40 }}>Experience</Heading>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 40 }}>
          {experience.map((job, i) => (
            <Reveal key={job.role + job.company} delay={i * 80}>
              <JobRow>
                <JobPeriod>{job.period}</JobPeriod>
                <div>
                  <JobRole>{job.role}</JobRole>
                  <JobCompany>{job.company}</JobCompany>
                  <PointList>
                    {job.points.map((pt) => (
                      <Point key={pt}>{pt}</Point>
                    ))}
                  </PointList>
                </div>
              </JobRow>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section $bordered>
        <Reveal>
          <Eyebrow>record</Eyebrow>
          <Heading style={{ marginBottom: 40 }}>Achievements</Heading>
        </Reveal>
        <div style={{ marginTop: 40 }}>
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <AchievementRow>
                <AchievementTitle>{a.title}</AchievementTitle>
                <AchievementDate>{a.date}</AchievementDate>
              </AchievementRow>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
