import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ArrowUpRight, ExternalLink as ExternalIcon } from "lucide-react";
import Reveal from "./Reveal";
import { Tag } from "./ui";

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Card = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.lineBright};
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 197, 94, 0.15);
    &::before {
      opacity: 1;
    }
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
`;

const Badge = styled.span`
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid ${({ theme, $first }) => ($first ? theme.colors.highlightDim : theme.colors.secondaryDim)};
  color: ${({ theme, $first }) => ($first ? theme.colors.highlight : theme.colors.secondary)};
  background: ${({ theme, $first }) => ($first ? `${theme.colors.highlight}1f` : `${theme.colors.secondary}1f`)};
`;

const LinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.base};
  color: ${({ theme }) => theme.colors.muted};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primaryDim};
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateY(-1px);
  }
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0 6px 0;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
  line-height: 1.5;
  flex-grow: 1;
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 18px;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const ViewLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
  }
`;

const LiveDemoBadge = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.primary};
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: #4ade80;
  }
`;

export default function ProjectCard({ project, delay = 0 }) {
  const isFirst = project.status === "1st Place";

  return (
    <Reveal delay={delay}>
      <Card whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Top>
          <Meta>
            <span>{project.block}</span>
            <Badge $first={isFirst}>{project.status}</Badge>
          </Meta>
          <LinksGroup>
            {project.githubUrl && (
              <IconLink href={project.githubUrl} target="_blank" rel="noreferrer" title="View Source Code on GitHub">
                <GithubIcon size={16} />
              </IconLink>
            )}
            {project.liveUrl && (
              <IconLink href={project.liveUrl} target="_blank" rel="noreferrer" title="Open Live Site">
                <ExternalIcon size={16} />
              </IconLink>
            )}
          </LinksGroup>
        </Top>

        <Name>{project.name}</Name>
        <Tagline>{project.tagline}</Tagline>

        <StackRow>
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </StackRow>

        <CardFooter>
          <ViewLink to={`/projects/${project.slug}`}>
            Details <ArrowUpRight size={14} />
          </ViewLink>

          {project.liveUrl && (
            <LiveDemoBadge href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo <ArrowUpRight size={12} />
            </LiveDemoBadge>
          )}
        </CardFooter>
      </Card>
    </Reveal>
  );
}
