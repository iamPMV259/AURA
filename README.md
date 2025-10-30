# AURA — AI-Powered Unified-Record Assistant

AURA is a learning-data and AI layer that gives every learner:

1. **A Unified Learning Record (ULR)** — a learner-owned “Skill Wallet” that stores education, training, micro-credentials, badges and project completions in a portable, verifiable format (built on W3C Verifiable Credentials 2.0). The learner controls who can read or write to this wallet. :contentReference[oaicite:1]{index=1}
2. **A Personal AI Learning Assistant** — an AI service that is allowed (by the learner) to read the verified record, detect skill gaps, recommend learning paths and connect the learner to relevant opportunities.

AURA breaks current LMS data silos by letting learning data follow the learner — not stay locked in each platform.

---

## Why AURA

- **Current problem**: learning histories are fragmented across university LMSs, MOOC platforms and internal L&D tools → AI only sees partial data → recommendations are generic.
- **AURA’s answer**: unify the record first (VCs, DIDs), then let AI reason on top of a complete, verified view of the learner.
- **Standards-first**: AURA uses the W3C Verifiable Credentials 2.0 data model so credentials are **cryptographically secure, privacy-respecting and machine-verifiable**. :contentReference[oaicite:2]{index=2}

---

## Core Components

### 1. Unified Learning Record (Skill Wallet)
- Learner-owned profile
- Holds: degrees, micro-credentials, badges (Open Badges-style), course completions, projects
- Credentials issued by schools, training partners, or enterprises as VCs
- Selective disclosure possible (the learner chooses what to share) :contentReference[oaicite:3]{index=3}

### 2. Personal AI Assistant
- Reads the wallet (with consent)
- Runs **skill-gap analysis** against target roles
- Generates **personalized learning paths** (course → project → assessment)
- Surfaces **opportunities** that match verified skills

### 3. Institutional & Employer Views
- Training organizations get anonymized insights to improve curriculum
- Employers can query for **verified skill combinations** and request contact (learner can stay pseudonymous)

---

## What AURA Enables

- **Deep personalization**: AI knows exactly what is already verified → no redundant courses
- **Skills-first matching**: learning record becomes an active tool to reach jobs/scholarships
- **Data mobility**: credentials are not trapped in one LMS, thanks to VC 2.0 and DID-style identifiers :contentReference[oaicite:4]{index=4}
- **Privacy-by-design**: learner grants and revokes access

---

## Market Context

- **Global EdTech** is projected to reach **~$348B by 2030** (macro benchmark).
- **AI in Education** is on track for **$30B+ by 2030** with ~30% CAGR, driven mainly by personalization and analytics. :contentReference[oaicite:5]{index=5}
- **Verifiable/Digital credentials** are now a formal W3C family of standards, making AURA’s approach interoperable and future-proof. :contentReference[oaicite:6]{index=6}

---

## Tech Highlights

- **API layer:** FastAPI (Python) — high-performance, OpenAPI-first, easy to integrate with Next.js frontends like `https://aura-ui.vercel.app/`. :contentReference[oaicite:7]{index=7}
- **Data model:** SQLAlchemy (async) for users, institutions, credentials, wallets, and opportunities
- **VC builder (stub):** JSON-LD-like payload compatible with W3C VC 2.0 — ready to be swapped with a real DID/VC issuer
- **AI service (pluggable):** current logic = skill-gap + recommendations; can be backed by LLM/vectors later

---

## People & Partners

- **Founder:** **Vu Phung**, B.Sc. in Computer Science, Hanoi University of Science and Technology (HUST)  

---

## Frontend

- Live UI: **https://aura-ui.vercel.app/**  
  (Next.js/Vercel front-end consuming the AURA API)

---

## Contact

- **Name:** Vu Phung  
- **Email:** `vump259.work@gmail.com`  
- **Product link:** https://aura-ui.vercel.app/

---
