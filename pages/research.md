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
.card h3 { margin: 0 0 4px; font-size: 1.05rem; line-height: 1.2; }
.card p { margin: 4px 0; line-height: 1.3; }
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
  <h2>Publications</h2>
  
  <div style="margin-bottom: 24px;">
    <a class="btn" href="https://scholar.google.com/citations?user=CPeH-nAAAAAJ" target="_blank" rel="noopener">
      <i class="fa fa-graduation-cap" aria-hidden="true"></i> Google Scholar Profile
    </a>
  </div>

  <div class="grid" style="grid-template-columns: 1fr; gap: 24px;">
    <article class="card">
      <h3>Evaluating Supportive LLM Behavior Over Multiple Turns across Demographics</h3>
      <p><u><strong>Michelle Star</strong></u></p>
      <p>Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26).</p>
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <a class="btn primary" href="https://dl.acm.org/doi/10.1145/3772363.3799175" target="_blank">ACM</a>
        <a class="btn" href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=CPeH-nAAAAAJ&citation_for_view=CPeH-nAAAAAJ:u5HHmVD_uO8C" target="_blank">Google Scholar</a>
      </div>
    </article>

    <article class="card">
      <h3>Auditing Support Strategies in LLMs through Grounded Multi-Turn Social Simulation</h3>
      <p><u><strong>Michelle Star</strong></u>, <a href="https://andaqu.github.io/" target="_blank" style="color: #0a58ca; text-decoration: none;">Andrew Aquilina</a>, <a href="https://yurulin.com/" target="_blank" style="color: #0a58ca; text-decoration: none;">Yu-Ru Lin</a></p>
      <p>Proceedings of the 2026 International AAAI Conference on Web and Social Media (ICWSM) Workshops.</p>
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <a class="btn primary" href="https://arxiv.org/abs/2604.17079" target="_blank">arXiv Preprint</a>
        <a class="btn" href="https://openreview.net/pdf?id=OX8jmYlFD4" target="_blank">PDF</a>
      </div>
    </article>
  </div>
</section>

<section class="research-section">
  <h2>BPhil Thesis</h2>
  <article class="card">
    <h3>Evaluating Supportive LLM Behavior Across User Contexts Using Simulated Multi-Turn Conversations</h3>
    <ul class="meta">
      <li><strong>Mentor:</strong> <a class="ext" href="https://www.dins.pitt.edu/people/yu-ru-lin" target="_blank" rel="noopener">
    Dr. Yu-Ru Lin
  </a>
</li>
      <li><strong>Program:</strong>
  <a class="ext" href="https://www.frederickhonors.pitt.edu/academics/bachelor-philosophy-bphil-degree" target="_blank" rel="noopener">
    BPhil
  </a> in Data Science, David C. Frederick Honors College University of Pittsburgh</li>
      <li><strong>Methods:</strong> Multi-turn simulation; NLP sentiment & linguistic tools; Data analysis</li>
    </ul>
    <p>
      I am auditing support variance and bias in LLM support with demographically distinct Reddit communities. Prior work has shown that LLM performance can degrade over multiple turns suggesting that biases not apparent in a single response may emerge over the course of a longer interaction. In this work I will be simulating multi-turn conversations using posts across subcommunities (e.g., r/TwoXChromosomes, r/NonBinary, r/Daddit) to reveal these discrepencies and hopefully add to the greater body of work towards equitable AI support.
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
        <li>RA: NLP keyword extraction and classification, weekly research paper reading</li>
        <li>Recieving mentorship for my independent research thesis</li>
      </ul>
      <a class="btn" href="https://picsolab.github.io/" target="_blank" rel="noopener">Visit Lab</a>
    </article>
    <article class="card">
      <h3>CivicWatch</h3>
      <p>Tasks from NLP for legislative transparency and policy communication, to front end interface design</p>
      <ul class="meta">
        <li>Extract and classify political discourse on social media</li>
        <li>Project focusses on relief in the misinformation epidemic</li>
      </ul>
      <a class="btn" href="https://gist.github.com/star-michelle/42138c78cd4c288779f967cac5c3b46c" target="_blank" rel="noopener">View NLP Script</a>
    </article>
    <article class="card">
      <h3>AccessiRide</h3>
      <p>System to easily discover Wheelchair Accessible Vehicles near you with LLM agents that will contact providers for you.</p>
      <ul class="meta">
        <li>1st place, Wireless Innovation Hackathon for Accessibility</li>
        <li>Created working prototype that was developed in consultation with a person from the disability community </li>
      </ul>
      <a class="btn" href="{{ '/projects/accessiride/' | relative_url }}">Case Study</a>
    </article>
  </div>
</section>

<section class="research-section">
  <h2>Industry & Applied</h2>
  <div class="grid">
    <article class="card">
      <h3>Latitude AI (Ford)</h3>
      <p>Data pipeline of road work zones for autonomous vehicles.</p>
      <ul class="meta">
        <li>Pulling information from open-source data from all over the US and analyzing the information to create safer self-driving cars.</li>
      </ul>
    </article>

    <article class="card">
      <h3>Osher Lifelong Learning Institute</h3>
      <p>UX/UI redesign for modernity and accessibility for an older audience.</p>
      <ul class="meta">
        <li>Researching insufficiencies in current website, making information screen reader friendly, creating an intuitive website flow. </li>
      </ul>
    </article>
  </div>
</section>

<section class="research-section">
  <h2>Talks &amp; Recognition</h2>

  <ul class="link-cards">
    <li>
      <a class="link-card" href="https://chi2026.acm.org/authors/student-research-competition/" target="_blank" rel="noopener">
        <span class="title">ACM CHI Student Research Competition 🌍 (Selected as 1 of 12 globally)</span>
        <span class="meta">Conference Website</span>
        <span class="icon" aria-hidden="true">↗</span>
      </a>
    </li>
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
      <a class="link-card" href="https://www.smarttech.pitt.edu/news/2025hackathon" target="_blank" rel="noopener" aria-label="LinkedIn post: Wireless Innovation Hackathon for Accessibility—First Place">
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
  <h2>PhD Advising Fit</h2>
  <p>
    Seeking research support in Human-AI Interaction, accessible and assistive technologies, and human connection systems with technology. I am excited to learn new things in the ever evolving field of technology and make a real impact on humanity.
  </p>
</section>