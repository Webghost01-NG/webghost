import styled from "styled-components";
import { articles } from "../data/profile";
import Reveal from "./Reveal";
import { Section, Eyebrow, Heading } from "./ui";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin-top: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ArticleCard = styled.a`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lineBright};
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.15);
  }
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const TagBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.25);
  padding: 3px 8px;
  border-radius: 4px;
`;

const ReadTime = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.dim};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const ArticleTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 10px 0;
  line-height: 1.4;
`;

const Snippet = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
  line-height: 1.6;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function ArticlesSection() {
  return (
    <Section $bordered>
      <Reveal>
        <Eyebrow>Technical Writing & Research</Eyebrow>
        <Heading>Articles & Notes</Heading>
      </Reveal>

      <Grid>
        {articles.map((art, i) => (
          <Reveal key={art.title} delay={i * 70}>
            <ArticleCard href={art.url} target="_blank" rel="noreferrer">
              <div>
                <TagRow>
                  <TagBadge>{art.tag}</TagBadge>
                  <ReadTime>
                    <Clock size={11} /> {art.readTime}
                  </ReadTime>
                </TagRow>
                <ArticleTitle>{art.title}</ArticleTitle>
                <Snippet>{art.snippet}</Snippet>
              </div>

              <CardFooter>
                <span>Read Publication</span>
                <ArrowUpRight size={14} />
              </CardFooter>
            </ArticleCard>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
