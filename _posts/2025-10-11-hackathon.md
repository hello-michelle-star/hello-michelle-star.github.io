---
layout: post
title: "AccessiRide Hackathon Win"
description: "Learn about the whirlwind weekend AccessiRide was born."
image: hack.jpg
---


## Project Brief

**AccessiRide** is a multimodal platform that aggregates wheelchair-accessible vehicle (WAV) options across fragmented transit providers and, using an AI agent, contacts providers by phone or email to retrieve **fare estimates, availability, and coverage zones** for users. We built it to reduce the time, effort, and communication burden placed on disabled riders.

- **Event:** Wireless Innovation Hackathon for Accessibility  
- **Role:** Team lead
- **Outcome:** **First Place**, **$1,500** prize  
- **Follow-on:** Entered in the Kuzneski Innovation Cup for mentorship and funding; invited by the University of Pittsburgh School of Health & Rehabilitation Sciences to apply for grant support to integrate AccessiRide into patient transportation workflows.

---

## The Problem

Wheelchair-accessible transportation information is scattered across agencies and vendors. Booking often requires **multiple calls** and **repeating access needs**, which is especially hard for riders with speech differences.  
Monica, a woman with cerebral palsy, told us she spends hours researching and calling providers and is often **misunderstood or ignored**.

---

## What We Built

- **Unified access points:** app, website, and phone line.  
- **AI agent:** automatically reaches out to transit providers via phone or email, asks standardized questions, and parses responses.  
- **Real-time aggregation:** normalizes provider data into one view so riders can compare options quickly without making repeated calls.

**Design principle:** keep Monica and riders like her **in the loop**, not **out of the way**. I stayed in close contact with her throughout development to ground decisions in lived experience.

<img src="/assets/img/hackathon/IMG_4380.JPG" alt="Judges session">
---

## How It Works

1. User specifies origin, destination, time window, and access needs.  
2. System queries known WAV providers and, when needed, the **AI agent** calls or emails to fill gaps.  
3. Results are returned in a single interface with **prices**, **availability**, and **coverage**.  
4. User books directly or requests that AccessiRide complete the outreach.

---

## Impact

- Eliminates repetitive, high-friction calls for riders with speech impediments.  
- Surfaces **verified** WAV options faster.  
- Supports clinics where missed appointments are tied to transportation barriers, a key **health-equity** issue highlighted by Pitt SHRS.

---

## Demo Video

<div style="position:relative;aspect-ratio:16/9;max-width:100%;">
  <video controls preload="metadata" playsinline style="width:100%;height:100%;" poster="/assets/img/hackathon/Screenshot 2025-10-12 at 2.08.47 AM.png">
    <source src="/assets/img/hackathon/AccessiRide Video.mp4" type="video/quicktime">
    Sorry—your browser can’t play this MOV.
  </video>
</div>




---

## Try the Prototype
<!-- 1) Big, obvious button -->
<style>
.link-card{display:flex;gap:16px;align-items:stretch;border:1px solid #e6e6e6;border-radius:14px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.06)}
.link-card__image{flex:0 0 50%;min-height:280px;background:#f4f4f4 center/cover no-repeat}
@media(max-width:640px){.link-card{flex-direction:column}.link-card__image{min-height:220px}}
.link-card__body{padding:14px;display:flex;flex-direction:column;justify-content:center}
.link-card__title{margin:0 0 8px;color:#111}
.link-card__host{color:#0a58ca;font-weight:700;margin-top:6px}
.btn{display:inline-block;margin-top:10px;border:1px solid #111;padding:10px 14px;border-radius:10px;text-decoration:none;color:#111}
.btn:hover{background:#111;color:#fff}
</style>

<div class="link-card">
  <!-- Clickable image -->
  <a class="link-card__image"
     href="https://accessiride.netlify.app/" target="_blank" rel="noopener"
     style="background-image:url('/assets/img/hackathon/Screenshot%202025-10-12%20at%202.15.52%E2%80%AFAM.png');">
  </a>

  <div class="link-card__body">
    <h3 class="link-card__title">AccessiRide</h3>
    <p style="margin:0 0 8px;color:#444;">Multimodal platform for wheelchair-accessible rides. Built at the Wireless Innovation Hackathon.</p>

    <!-- Obvious button -->
    <a class="btn" href="https://accessiride.netlify.app/" target="_blank" rel="noopener">Open Website ↗</a>
    <div class="link-card__host"></div>
  </div>
</div>



---

## Technical Notes

- Multimodal interface: web, app, and phone entry points.  
- Provider outreach: LLM-driven agent for **phone/email** communication, with structured prompts and parsing.  
- Data layer: normalized schema for provider metadata, availability, and fares.  
- Privacy: stores only what is necessary for outreach and booking.

---

## What’s Next

- Formalize provider integrations and SLAs.  
- Expand coverage beyond the initial region.  
- Clinical pilot with Pitt SHRS to reduce missed appointments.  
- Usability testing with riders across speech and mobility profiles.

---


<p>
  <img src="/assets/img/hackathon/IMG_4381.JPG" alt="Team photo">
  <img src="/assets/img/hackathon/IMG_4383 2.jpg" alt="AccessiRide UI mock">
</p>

---

## Acknowledgments

Thanks to Monica for trusting us with her story and guiding our design, to the hackathon organizers and judges, and to mentors who supported follow-on efforts through the Kuzneski Innovation Cup and Pitt SHRS.