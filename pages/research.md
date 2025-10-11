---
layout: page
title: 
permalink: /research/
---
<style>
/* research.scss */


.research-section {
  padding: 24px 20px;
  max-width: 1100px;
  margin: 0 auto;
}
.research-section > h2 { margin: 0 0 12px; font-size: 1.25rem; }

.card {
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 18px;
  background: #fff8f8;
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.card h3 { margin: 0 0 6px; font-size: 1.05rem; }
.meta { margin: 8px 0 10px; padding-left: 18px; }
.meta li { margin: 2px 0; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.list { padding-left: 18px; }
.list li { margin: 6px 0; }

.btn {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #111;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
  background: #fff8f8;
  color: #111;
}
.btn:hover { background: #111; color: #fff8f8; }
.btn.primary { background: #111; color: #fff8f8; }
.btn.primary:hover { background: #fff8f8; color: #111; }

/* Typography harmony with your header */
.research-section h2,
.card h3,
.btn { font-family: 'Source Code Pro', monospace;
text-transform: uppercase;
letter-spacing: .06em; }

/* Link cards */
.link-cards{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.link-card{
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  padding:12px 14px; border:1px solid #111; border-radius:10px; background:#fff8f8;
  text-decoration:none; color:#111;
}
.link-card .title{font-family:'Source Code Pro',monospace; text-transform:uppercase; letter-spacing:.06em}
.link-card .meta{font-size:.9rem; opacity:.75}
.link-card .icon{margin-left:auto; font-size:1rem}

.link-card:hover,
.link-card:focus-visible{
  background:#111; color:#fff8f8; outline:none;
}
.link-card:hover .meta,
.link-card:focus-visible .meta{opacity:.95}
.link-card:hover .icon,
.link-card:focus-visible .icon{transform:translateX(2px)}
.link-card .icon{transition:transform .15s ease}

.ext{
  text-decoration: none;
  border-bottom: 1px dashed currentColor; /* subtle underline */
  cursor: pointer;
  transition: color .15s ease, border-color .15s ease;
}
.ext:hover,
.ext:focus-visible{
  color: #0a58ca;              /* any accent you use */
  border-bottom-color: #0a58ca;
}
.ext::after{
  content:" ↗";
  font-size:.9em;
  opacity:.6;
  transition: transform .15s ease, opacity .15s ease;
}
.ext:hover::after,
.ext:focus-visible::after{
  transform: translateX(1px);
  opacity:.9;
}

/* section spacing */
.research-hero { margin-bottom: 16px; }

.research-section + .research-section {
  margin-top: 40px;          /* desktop gap between sections */
}

/* make all project cards equal height and push the button to the bottom */
            /* ensure cards stretch in the grid */
.card{
  display:flex; flex-direction:column;
  height:100%;
  transition: transform .18s ease, box-shadow .18s ease;  /* for hover lift */
}
.card .btn{ margin-top:auto; align-self:flex-start; }     /* button at bottom */

/* hover: lift + deeper shadow */
.card:hover,
.card:focus-within{
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,.12);
}

/* do the same for link cards */
.link-card{
  transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease, color .18s ease;
}
.link-card:hover,
.link-card:focus-visible{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,.12);
}
/* Responsive */
@media (max-width: 1000px){
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px){
  .research-hero { padding: 32px 16px 4px; }
  .research-hero h1 { font-size: 1.6rem; }
  .research-section { padding: 20px 16px; }
  .grid { grid-template-columns: 1fr; }
  .card { padding: 16px; }
  .research-section > h2 { font-size: 1.1rem; }
  .card h3 { font-size: 1rem; }
}
@media (prefers-reduced-motion: reduce){
  .card, .link-card{ transition: none; }
}
@media (max-width: 640px){
  .research-section + .research-section {
    margin-top: 28px;        /* tighter on phones */
  }
}

</style>


<section class="research-section">
  <h2>Research Statement</h2>
  <p>
    I study how AI systems reproduce or resist structural inequities in transportation, mental health, and digital accessibility.
    Current focus: auditing empathetic disparities in LLM responses and building accessibility tools that center disabled users.
  </p>
</section>

<section class="research-section">
  <h2>BPhil Thesis <span class="status">in progress</span></h2>
  <article class="card">
    <h3>Algorithmic Empathy: Evaluating Demographic Bias in LLM-Generated Emotional Support</h3>
    <ul class="meta">
      <li><strong>Mentor:</strong> <a class="ext" href="https://www.dins.pitt.edu/people/yu-ru-lin" target="_blank" rel="noopener">
    Dr. Yu-Ru Lin
  </a>
</li>
      <li><strong>Program:</strong>
  <a class="ext" href="https://www.frederickhonors.pitt.edu/academics/bachelor-philosophy-bphil-degree" target="_blank" rel="noopener">
    BPhil
  </a> in Data Science, David C. Frederick Honors College University of Pittsburgh</li>
      <li><strong>Methods:</strong> mixed-methods audit; prompt experiments across models; sentiment + linguistic markers; resource-link evaluation</li>
    </ul>
    <p>
      Audit empathetic variance in LLM replies to distress posts from demographically distinct Reddit communities
      (e.g., r/TwoXChromosomes, r/NonBinary, r/Veterans). Evaluate validation language, actionability, and safety resources.
    </p>
  </article>
</section>

<section class="research-section">
  <h2>Lab and Projects</h2>

  <div class="grid">
    <article class="card">
      <h3>PICSO Lab</h3>
      <p>Computational social dynamics and HCI.</p>
      <ul class="meta">
        <li>RA: NLP data extraction, classification, weekly reading group</li>
        <li>Advisor team exposure: fairness, bias, user modeling</li>
      </ul>
      <a class="btn" href="https://picsolab.github.io/" target="_blank" rel="noopener">Visit Lab</a>
    </article>

    <article class="card">
      <h3>CivicWatch</h3>
      <p>NLP for legislative transparency and policy communication.</p>
      <ul class="meta">
        <li>Extract and classify political discourse on social media</li>
        <li>Focus on language, power, and alignment</li>
      </ul>
      <a class="btn" href="https://civicwatch.io/?noredirect=true" target="_blank" rel="noopener">Project Site</a>
    </article>

    <article class="card">
      <h3>AccessiRide</h3>
      <p>Multimodal WAV discovery with LLM agents contacting providers.</p>
      <ul class="meta">
        <li>1st place, Wireless Innovation Hackathon for Accessibility</li>
        <li>Prototype informed by participatory work with a CP user</li>
        <li>Grant discussion with Pitt SHRS for clinical integration</li>
      </ul>
      <a class="btn" href="{{ '/projects/accessiride' | relative_url }}">Case Study</a>
    </article>
  </div>
</section>

<section class="research-section">
  <h2>Industry & Applied</h2>
  <div class="grid">
    <article class="card">
      <h3>Latitude AI (Ford)</h3>
      <p>Data pipeline for road-construction signals into navigation.</p>
      <ul class="meta">
        <li>Reliability for safety-critical systems</li>
      </ul>
    </article>

    <article class="card">
      <h3>Osher Lifelong Learning Institute</h3>
      <p>UX/UI redesign for screen-reader accessibility; WCAG-aligned.</p>
      <ul class="meta">
        <li>User research and semantic HTML improvements</li>
      </ul>
    </article>
  </div>
</section>

<section class="research-section">
  <h2>Talks &amp; Recognition</h2>

  <ul class="link-cards">
    <li>
      <a class="link-card" href="https://tgif.psu.edu/" target="_blank" rel="noopener">
        <span class="title">Higher Ed Student Spotlight 🎤 — The Global Impact Forum</span>
        <span class="meta">Event page</span>
        <span class="icon" aria-hidden="true">↗</span>
      </a>
    </li>
    <li>
      <a class="link-card" href="https://www.bigidea.pitt.edu/programs/signature-programs/kuzneski-innovation-cup/" target="_blank" rel="noopener">
        <span class="title">Kuzneski Innovation Cup 🏆 - Team Lead in Pitch Competition</span>
        <span class="meta">Description</span>
        <span class="icon" aria-hidden="true">↗</span>
      </a>
    </li>
    <li>
      <!-- replace href with your public post URL when ready -->
      <a class="link-card" href="https://www.linkedin.com/posts/accessible-smarttech_accessibletech-inclusivedesign-wirelessinnovation-activity-7382441032090710018-kX7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvI5XcBE6_LV_xUDxjRAVuX1iBPRHv4COo/" target="_blank" rel="noopener" aria-label="LinkedIn post: Wireless Innovation Hackathon for Accessibility—First Place">
        <span class="title">Wireless Innovation Hackathon for Accessibility — 🥇 1st Place </span>
        <span class="meta">View Winners Announcement</span>
        <span class="icon" aria-hidden="true">↗</span>
      </a>
    </li>
  </ul>
</section>


<section class="research-section">
  <h2>Downloads</h2>
  <a class="btn primary"
     href="{{ '/assets/pdf/CV Michelle Star (1).pdf' | uri_escape | relative_url }}"
     target="_blank" rel="noopener"
     aria-label="Open CV as PDF">CV (PDF)</a>
</section>

<section class="research-section">
  <h2>Advising Fit</h2>
  <p>
    Interests align with disability-centered interaction, algorithmic transparency,
    and AI-augmented accessibility.
  </p>
</section>