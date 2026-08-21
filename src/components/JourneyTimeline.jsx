import styled from "styled-components";
import { journey } from "../data/profile";
import Reveal from "./Reveal";
import { Section, Eyebrow, Heading } from "./ui";
import { Calendar, Compass } from "lucide-react";

const TimelineWrapper = styled.div`
  position: relative;
  margin-top: 48px;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 7px;
    width: 2px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}, transparent);
  }
`;

const TimelineNode = styled.div`
  position: relative;
  margin-bottom: 36px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NodeDot = styled.span`
  position: absolute;
  left: -20px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.base};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`;

const NodeCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 22px;
  margin-left: 12px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lineBright};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(34, 197, 94, 0.12);
  }
`;

const NodeHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const NodeTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px 0;
`;

const NodeInst = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-weight: 500;
`;

const NodePeriod = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.25);
  padding: 3px 10px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const NodeDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 12px 0 0 0;
  line-height: 1.6;
`;

export default function JourneyTimeline() {
  return (
    <Section $bordered>
      <Reveal>
        <Eyebrow>Milestones & Growth</Eyebrow>
        <Heading>The Web3 Journey</Heading>
      </Reveal>

      <TimelineWrapper>
        {journey.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <TimelineNode>
              <NodeDot />
              <NodeCard>
                <NodeHeader>
                  <div>
                    <NodeTitle>{item.title}</NodeTitle>
                    <NodeInst>{item.institution}</NodeInst>
                  </div>
                  <NodePeriod>
                    <Calendar size={12} /> {item.period}
                  </NodePeriod>
                </NodeHeader>
                <NodeDesc>{item.description}</NodeDesc>
              </NodeCard>
            </TimelineNode>
          </Reveal>
        ))}
      </TimelineWrapper>
    </Section>
  );
}
