import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { Tag } from "./ui";

const Card = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
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
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid ${({ theme, $first }) => ($first ? theme.colors.highlightDim : theme.colors.secondaryDim)};
  color: ${({ theme, $first }) => ($first ? theme.colors.highlight : theme.colors.secondary)};
  background: ${({ theme, $first }) => ($first ? `${theme.colors.highlight}1a` : `${theme.colors.secondary}1a`)};
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0 4px 0;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
`;

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
`;

const ViewLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.primary};
  &:hover { text-decoration: underline; }
`;

export default function ProjectCard({ project, delay = 0 }) {
  const isFirst = project.status === "1st Place";

  return (
    <Reveal delay={delay}>
      <Card whileHover={{ y: -4, borderColor: "#334155" }} transition={{ duration: 0.2 }}>
        <Top>
          <Meta>
            <span>{project.block}</span>
            <Badge $first={isFirst}>{project.status}</Badge>
          </Meta>
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live site`}>
              <ArrowUpRight size={18} />
            </ExternalLink>
          )}
        </Top>

        <Name>{project.name}</Name>
        <Tagline>{project.tagline}</Tagline>

        <StackRow>
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </StackRow>

        <ViewLink to={`/projects/${project.slug}`}>View transaction →</ViewLink>
      </Card>
    </Reveal>
  );
}
