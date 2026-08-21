import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import { profile, experience, education, certifications, skills } from "../data/profile";

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(11, 18, 32, 0.88);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalCard = styled(motion.div)`
  width: 100%;
  max-width: 840px;
  max-height: 88vh;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
  color: #f8fafc;
`;

const ModalHeader = styled.div`
  padding: 20px 28px;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #334155;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  color: #f8fafc;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PrintBtn = styled.button`
  background: #22c55e;
  color: #0b1220;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover { background: #4ade80; }
`;

const ModalBody = styled.div`
  padding: 32px 28px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ResumeHeaderSection = styled.div`
  border-bottom: 1px solid #334155;
  padding-bottom: 24px;
`;

const ResumeName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 28px;
  margin: 0 0 6px 0;
  color: #f8fafc;
`;

const ResumeSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: #22c55e;
  margin: 0 0 12px 0;
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: #94a3b8;
`;

const SectionTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #06b6d4;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 8px;
`;

const ItemBlock = styled.div`
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }
`;

const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
`;

const ItemRole = styled.span`
  font-weight: 600;
  color: #f8fafc;
  font-size: 15px;
`;

const ItemCompany = styled.span`
  color: #22c55e;
  font-size: 14px;
`;

const ItemPeriod = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: #64748b;
`;

const BulletList = styled.ul`
  margin: 8px 0 0 0;
  padding-left: 20px;
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.6;
`;

export default function ResumeModal({ open, onClose }) {
  if (!open) return null;

  function handlePrint() {
    window.print();
  }

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalCard
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <HeaderTitle>
              <Briefcase size={18} color="#22c55e" />
              <span>Abdurrahman Adesanya — Full Resume</span>
            </HeaderTitle>
            <HeaderActions>
              <PrintBtn onClick={handlePrint}>
                <Printer size={14} /> Print / Save PDF
              </PrintBtn>
              <X size={20} color="#94a3b8" style={{ cursor: "pointer" }} onClick={onClose} />
            </HeaderActions>
          </ModalHeader>

          <ModalBody>
            <ResumeHeaderSection>
              <ResumeName>{profile.name}</ResumeName>
              <ResumeSubtitle>{profile.role} · {profile.alias}</ResumeSubtitle>
              <ContactGrid>
                <span>📍 {profile.location}</span>
                <span>📧 {profile.email}</span>
                <span>📞 {profile.phone}</span>
                <span>🔗 {profile.github}</span>
              </ContactGrid>
              <p style={{ marginTop: 14, color: "#cbd5e1", lineHeight: 1.6, fontSize: 14 }}>
                {profile.summary}
              </p>
            </ResumeHeaderSection>

            <div>
              <SectionTitle>
                <Briefcase size={15} /> Experience & Internships
              </SectionTitle>
              {experience.map((e) => (
                <ItemBlock key={e.role + e.company}>
                  <ItemHead>
                    <div>
                      <ItemRole>{e.role}</ItemRole> · <ItemCompany>{e.company}</ItemCompany>
                    </div>
                    <ItemPeriod>{e.period}</ItemPeriod>
                  </ItemHead>
                  <BulletList>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </BulletList>
                </ItemBlock>
              ))}
            </div>

            <div>
              <SectionTitle>
                <GraduationCap size={15} /> Education & Training
              </SectionTitle>
              {education.map((ed) => (
                <ItemBlock key={ed.school}>
                  <ItemHead>
                    <div>
                      <ItemRole>{ed.degree}</ItemRole> · <ItemCompany>{ed.school}</ItemCompany>
                    </div>
                    <ItemPeriod>{ed.period}</ItemPeriod>
                  </ItemHead>
                  {ed.note && <p style={{ margin: "4px 0 0 0", color: "#94a3b8", fontSize: 13 }}>{ed.note}</p>}
                </ItemBlock>
              ))}
            </div>

            <div>
              <SectionTitle>
                <Award size={15} /> Certifications
              </SectionTitle>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                {certifications.map((c) => (
                  <div key={c.name} style={{ background: "#1e293b", padding: 12, borderRadius: 8, border: "1px solid #334155" }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#f8fafc" }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: "#06b6d4", marginTop: 2 }}>{c.issuer} · {c.date}</div>
                    {c.id && <div style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b", marginTop: 4 }}>ID: {c.id}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle>
                <Code size={15} /> Core Skills & Tools
              </SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {Object.values(skills).flat().map((s) => (
                  <span key={s} style={{ background: "#1e293b", color: "#22c55e", padding: "4px 10px", borderRadius: 4, fontSize: 12, border: "1px solid #334155" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ModalBody>
        </ModalCard>
      </Overlay>
    </AnimatePresence>
  );
}
