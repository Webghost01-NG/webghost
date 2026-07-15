import styled from "styled-components";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "../data/profile";
import Reveal from "../components/Reveal";
import { Tag } from "../components/ui";

const Wrap = styled.section`
  max-width: 768px;
  margin: 0 auto;
  padding: 64px 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { padding: 64px 32px; }
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 40px;
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin-bottom: 16px;
`;

const Badge = styled.span`
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.secondaryDim};
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => `${theme.colors.secondary}1a`};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 10px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 8px 0 0 0;
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const ExtLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme, $muted }) => ($muted ? theme.colors.muted : theme.colors.primary)};
  &:hover { ${({ $muted, theme }) => ($muted ? `color: ${theme.colors.primary};` : "text-decoration: underline;")} }
`;

const Block = styled.div`
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const BlockLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.dim};
  margin: 0 0 12px 0;
`;

const HackContext = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0 0 0;
  line-height: 1.7;
`;

const PointList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Wrap>
      <Back to="/projects"><ArrowLeft size={14} /> back to ledger</Back>

      <Reveal>
        <Meta>
          <span>{project.block}</span>
          <Badge>{project.status}</Badge>
        </Meta>

        <Title>{project.name}</Title>
        <Tagline>{project.tagline}</Tagline>

        <StackRow>
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </StackRow>

        <LinkRow>
          {project.liveUrl && (
            <ExtLink href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site <ArrowUpRight size={14} />
            </ExtLink>
          )}
          {project.githubUrl && (
            <ExtLink $muted href={project.githubUrl} target="_blank" rel="noreferrer">
              <Code2 size={14} /> Source
            </ExtLink>
          )}
        </LinkRow>

        <Block>
          <BlockLabel>context</BlockLabel>
          <HackContext>{project.hackathon}</HackContext>
          <Description>{project.description}</Description>
        </Block>

        <Block style={{ paddingTop: 0, borderTop: "none", marginTop: 32 }}>
          <BlockLabel>what shipped</BlockLabel>
          <PointList>
            {project.points.map((pt) => (
              <Point key={pt}>{pt}</Point>
            ))}
          </PointList>
        </Block>
      </Reveal>
    </Wrap>
  );
}
