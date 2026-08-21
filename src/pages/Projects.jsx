import { useState, useMemo } from "react";
import styled from "styled-components";
import { Search, SlidersHorizontal } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { Section, Eyebrow, Heading } from "../components/ui";
import { projects } from "../data/profile";

const Intro = styled.p`
  max-width: 560px;
  color: ${({ theme }) => theme.colors.muted};
  margin: 8px 0 32px 0;
`;

const ControlsBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SearchBox = styled.div`
  position: relative;
  max-width: 380px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 14px 10px 38px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SearchIconWrap = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.dim};
  display: flex;
  align-items: center;
`;

const TabsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TabBtn = styled.button`
  background: ${({ theme, $active }) => ($active ? `${theme.colors.primary}1f` : theme.colors.surface)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.line)};
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.muted)};
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ResultsCount = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(3, 1fr); }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme }) => theme.colors.lineBright};
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web3", label: "Web3 & Solidity" },
  { id: "ai", label: "Autonomous AI & MCP" },
  { id: "fullstack", label: "Full-Stack & React" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      let matchesTab = true;
      const stackString = p.stack.join(" ").toLowerCase();
      const nameString = p.name.toLowerCase();

      if (activeTab === "web3") {
        matchesTab =
          stackString.includes("solidity") ||
          stackString.includes("web3") ||
          stackString.includes("ethers") ||
          stackString.includes("monad") ||
          stackString.includes("stellar") ||
          stackString.includes("okx") ||
          stackString.includes("bot chain") ||
          stackString.includes("eip-712");
      } else if (activeTab === "ai") {
        matchesTab =
          stackString.includes("mcp") ||
          stackString.includes("ai") ||
          stackString.includes("agent") ||
          stackString.includes("aidid") ||
          stackString.includes("ftsov2");
      } else if (activeTab === "fullstack") {
        matchesTab =
          stackString.includes("next.js") ||
          stackString.includes("react") ||
          stackString.includes("vite") ||
          stackString.includes("node.js") ||
          stackString.includes("express") ||
          stackString.includes("postgresql");
      }

      // Search query filter
      const q = query.trim().toLowerCase();
      let matchesSearch = true;
      if (q) {
        matchesSearch =
          nameString.includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          stackString.includes(q);
      }

      return matchesTab && matchesSearch;
    });
  }, [activeTab, query]);

  return (
    <Section>
      <Reveal>
        <Eyebrow>Protocol Ledger</Eyebrow>
        <Heading>Shipped Projects ({projects.length})</Heading>
        <Intro>Explore production-ready Web3 protocols, AI agents, and full-stack applications shipped under hackathon deadlines.</Intro>
      </Reveal>

      <ControlsBar>
        <SearchBox>
          <SearchIconWrap>
            <Search size={16} />
          </SearchIconWrap>
          <SearchInput
            type="text"
            placeholder="Search projects by stack, name, or keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchBox>

        <TabsRow>
          {CATEGORIES.map((cat) => (
            <TabBtn
              key={cat.id}
              $active={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </TabBtn>
          ))}
        </TabsRow>
      </ControlsBar>

      <ResultsCount>
        Showing {filteredProjects.length} of {projects.length} protocols
      </ResultsCount>

      {filteredProjects.length > 0 ? (
        <Grid>
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 60} />
          ))}
        </Grid>
      ) : (
        <EmptyState>
          <SlidersHorizontal size={24} style={{ marginBottom: 12, opacity: 0.6 }} />
          <p>No projects match your current filter or search criteria.</p>
        </EmptyState>
      )}
    </Section>
  );
}
