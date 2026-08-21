import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Send, Sparkles } from "lucide-react";
import { profile, projects, skills } from "../data/profile";

const TriggerBtn = styled(motion.button)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99;
  background: #0b1220;
  border: 1px solid #22c55e;
  color: #22c55e;
  padding: 12px 18px;
  border-radius: 9999px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(34, 197, 94, 0.3);

  &:hover {
    background: #131d2b;
    box-shadow: 0 8px 40px rgba(34, 197, 94, 0.5);
  }
`;

const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 10px #22c55e;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(11, 18, 32, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Window = styled(motion.div)`
  width: 100%;
  max-width: 780px;
  height: 520px;
  background: #090f1b;
  border: 1px solid #334155;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(34, 197, 94, 0.15);
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const WindowHeader = styled.div`
  background: #131d2b;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1e293b;
`;

const WindowControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DotBtn = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ $color }) => $color};
  cursor: pointer;
`;

const WindowTitle = styled.div`
  font-size: 12px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TerminalBody = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
`;

const OutputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CmdLine = styled.div`
  color: #22c55e;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ResponseText = styled.div`
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  padding-left: 18px;
`;

const QuickChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 16px;
  background: #0b1220;
  border-top: 1px solid #1e293b;
`;

const Chip = styled.button`
  background: #1e293b;
  color: #06b6d4;
  border: 1px solid #334155;
  border-radius: 4px;
  padding: 4px 10px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #06b6d4;
    color: #0b1220;
  }
`;

const InputBar = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #0f172a;
  border-top: 1px solid #1e293b;
`;

const PromptLabel = styled.span`
  color: #22c55e;
  font-size: 13px;
  white-space: nowrap;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #f8fafc;
  font-family: inherit;
  font-size: 13px;
  outline: none;
`;

const COMMANDS = {
  help: `Available commands:
  • whoami     - Summary about Abdurrahman (Web Ghost)
  • skills      - Primary tech stack & tools
  • projects    - Top featured hackathons & deployed protocols
  • web3bridge  - Web3Bridge Africa background
  • contact     - Direct email, phone, and Telegram
  • clear       - Clear terminal history`,
  whoami: `Name: ${profile.name} (${profile.alias})
Role: ${profile.role}
Base: ${profile.location}
Affiliation: Web3Bridge Africa Alumni & LASU Physics
Summary: ${profile.summary}`,
  skills: `Core Technologies:
  • Languages: ${skills.Languages.join(", ")}
  • Frontend: ${skills.Frontend.join(", ")}
  • Backend: ${skills.Backend.join(", ")}
  • Web3/EVM: ${skills["Web3 / Blockchain"].join(", ")}`,
  projects: `Top Featured Protocols:
${projects.slice(0, 5).map((p) => `  [${p.status}] ${p.name}: ${p.tagline} (${p.liveUrl || p.githubUrl})`).join("\n")}`,
  web3bridge: `Web3Bridge Africa Credentials:
  • Web3 Solidity Developer Trainee (July 2026 – Present)
  • Web2 Advanced Engineering Alumni (Jan 2026 – Apr 2026)`,
  contact: `Direct Contact Info:
  • Email: ${profile.email}
  • Telegram: ${profile.telegram}
  • GitHub: ${profile.githubUrl}
  • LinkedIn: ${profile.linkedinUrl}`,
};

export default function TerminalModal() {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { cmd: "init", resp: "⚡ Web Ghost Terminal v2.4 initialized. Type 'help' or click a command below." },
  ]);

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, open]);

  function handleRun(cmdString) {
    const cleanCmd = cmdString.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const response = COMMANDS[cleanCmd] || `Command '${cleanCmd}' not recognized. Type 'help' to view available commands.`;
    setHistory((prev) => [...prev, { cmd: cleanCmd, resp: response }]);
    setInputVal("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRun(inputVal);
  }

  return (
    <>
      <TriggerBtn onClick={() => setOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <PulseDot />
        <TerminalIcon size={16} />
        <span>CLI Assistant</span>
      </TriggerBtn>

      <AnimatePresence>
        {open && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <Window
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <WindowHeader>
                <WindowControls>
                  <DotBtn $color="#ef4444" onClick={() => setOpen(false)} title="Close" />
                  <DotBtn $color="#f59e0b" title="Minimize" />
                  <DotBtn $color="#10b981" title="Maximize" />
                </WindowControls>
                <WindowTitle>
                  <Sparkles size={14} color="#06b6d4" />
                  <span>webghost@lasu:~ (zsh)</span>
                </WindowTitle>
                <X size={16} color="#64748b" style={{ cursor: "pointer" }} onClick={() => setOpen(false)} />
              </WindowHeader>

              <TerminalBody ref={bodyRef}>
                {history.map((item, index) => (
                  <OutputGroup key={index}>
                    <CmdLine>
                      <span>webghost@lasu:~$</span>
                      <span>{item.cmd}</span>
                    </CmdLine>
                    <ResponseText>{item.resp}</ResponseText>
                  </OutputGroup>
                ))}
              </TerminalBody>

              <QuickChips>
                {["help", "whoami", "skills", "projects", "web3bridge", "contact", "clear"].map((c) => (
                  <Chip key={c} onClick={() => handleRun(c)}>
                    {c}
                  </Chip>
                ))}
              </QuickChips>

              <InputBar onSubmit={handleSubmit}>
                <PromptLabel>webghost@lasu:~$</PromptLabel>
                <Input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a command (e.g. 'skills')..."
                  autoFocus
                />
                <button type="submit" style={{ background: "none", border: "none", color: "#22c55e", cursor: "pointer" }}>
                  <Send size={15} />
                </button>
              </InputBar>
            </Window>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}
