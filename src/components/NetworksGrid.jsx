import styled from "styled-components";
import { networks } from "../data/profile";
import Reveal from "./Reveal";
import { Section, Eyebrow, Heading } from "./ui";
import { Cpu, CheckCircle } from "lucide-react";

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const NetworkCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lineBright};
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const NetName = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const NetType = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const NetStatus = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.dim};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default function NetworksGrid() {
  return (
    <Section $bordered>
      <Reveal>
        <Eyebrow>Multi-Chain Ecosystem</Eyebrow>
        <Heading>Supported Blockchains & L2 Networks</Heading>
      </Reveal>

      <Grid>
        {networks.map((net, i) => (
          <Reveal key={net.name} delay={i * 50}>
            <NetworkCard>
              <div>
                <NetName>{net.name}</NetName>
                <NetType>{net.type}</NetType>
              </div>
              <NetStatus>
                <CheckCircle size={12} color="#22c55e" />
                <span>{net.status}</span>
              </NetStatus>
            </NetworkCard>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
