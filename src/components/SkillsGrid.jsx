import styled from "styled-components";
import { skills } from "../data/profile";
import Reveal from "./Reveal";
import { Section, Eyebrow, Heading, Tag } from "./ui";

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
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 20px;
`;

const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0 0 16px 0;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default function SkillsGrid() {
  return (
    <Section $bordered>
      <Reveal>
        <Eyebrow>stack</Eyebrow>
        <Heading style={{ marginBottom: 40 }}>Tools of the trade</Heading>
      </Reveal>

      <Grid style={{ marginTop: 40 }}>
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 60}>
            <CategoryCard>
              <CategoryTitle>{category}</CategoryTitle>
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
