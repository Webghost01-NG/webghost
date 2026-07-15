import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FORMSPREE_ENDPOINT, profile } from "../data/profile";

const initialForm = { name: "", email: "", message: "" };

const Panel = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 32px;
  }
`;

const PanelHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  font-size: 12px;
`;

const PanelLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const PanelTo = styled.span`
  color: ${({ theme }) => theme.colors.dim};
`;

const Notice = styled.p`
  margin-top: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.highlight};
  background: ${({ theme }) => `${theme.colors.highlight}1a`};
  border: 1px solid ${({ theme }) => theme.colors.highlightDim};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 12px;
`;

const Form = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 8px;
`;

const inputStyle = `
  width: 100%;
  background: transparent;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
`;

const Input = styled.input`
  ${inputStyle}
  background: ${({ theme }) => theme.colors.base};
  border: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.text};
  &:focus { border-color: ${({ theme }) => theme.colors.primary}; }
`;

const Textarea = styled.textarea`
  ${inputStyle}
  background: ${({ theme }) => theme.colors.base};
  border: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.text};
  resize: none;
  &:focus { border-color: ${({ theme }) => theme.colors.primary}; }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.base};
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};

  &:disabled { opacity: 0.6; }
`;

const StatusMsg = styled(motion.p)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme, $error }) => ($error ? theme.colors.danger : theme.colors.secondary)};
  margin: 0;
`;

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isPlaceholder = FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

  return (
    <Panel>
      <PanelHead>
        <PanelLabel>compose transaction</PanelLabel>
        <PanelTo>to: {profile.email}</PanelTo>
      </PanelHead>

      {isPlaceholder && (
        <Notice>
          Formspree endpoint not connected yet — swap FORMSPREE_ENDPOINT in src/data/profile.js with your real form URL.
        </Notice>
      )}

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">name</Label>
          <Input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
        </Field>

        <Field>
          <Label htmlFor="email">reply-to (email)</Label>
          <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </Field>

        <Field>
          <Label htmlFor="message">message</Label>
          <Textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="What are you reaching out about?" />
        </Field>

        <SubmitButton
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === "sending" ? "signing…" : (<><Send size={15} /> sign &amp; send</>)}
        </SubmitButton>

        <AnimatePresence mode="wait">
          {status === "sent" && (
            <StatusMsg key="sent" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <CheckCircle2 size={16} /> Message confirmed. I'll get back to you soon.
            </StatusMsg>
          )}
          {status === "error" && (
            <StatusMsg key="error" $error initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <AlertCircle size={16} /> Transaction failed — try again, or email {profile.email} directly.
            </StatusMsg>
          )}
        </AnimatePresence>
      </Form>
    </Panel>
  );
}
