import styled from "styled-components";
import { skills } from "../data/profile";
import Reveal from "./Reveal";
import { Section, Eyebrow, Heading, Tag } from "./ui";
import { Code, Cpu, Database, ShieldCheck, Terminal } from "lucide-react";

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lineBright};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(6, 182, 212, 0.1);
  }
`;

const CategoryHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

const IconWrap = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
`;

const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CATEGORY_ICONS = {
  Languages: <Code size={18} />,
  Frontend: <Cpu size={18} />,
  Backend: <Database size={18} />,
  "Web3 / Blockchain": <ShieldCheck size={18} />,
  "Tools & DevOps": <Terminal size={18} />,
};

export default function SkillsGrid() {
  return (
    <Section $bordered>
      <Reveal>
        <Eyebrow>Stack & Expertise</Eyebrow>
        <Heading style={{ marginBottom: 40 }}>Technologies & Tools</Heading>
      </Reveal>

      <Grid style={{ marginTop: 40 }}>
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 60}>
            <CategoryCard>
              <CategoryHead>
                <IconWrap>{CATEGORY_ICONS[category] || <Code size={18} />}</IconWrap>
                <CategoryTitle>{category}</CategoryTitle>
              </CategoryHead>
              <TagRow>
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagRow>
            </CategoryCard>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
