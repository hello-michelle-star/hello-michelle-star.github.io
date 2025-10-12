---
layout: page
title: 
permalink: /reading/
---

<style>
.reading-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 2rem 0;
}

.filter-btn {
  padding: 8px 16px;
  background-color: black;
  color: #fdf6f6;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Source Code Pro', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: #fdf6f6;
  color: black;
}

.reading-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  padding-bottom: 3rem;
}

.reading-item {
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  padding: 1.2rem 1.4rem;
  background-color: #fff8f8;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.reading-item:hover {
  transform: translateY(-4px);
  box-shadow: 3px 6px 12px rgba(0,0,0,0.1);
}

.reading-item p {
  margin: 0.4rem 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.reading-item a {
  color: #333;
  text-decoration: underline;
}

.reading-item a:hover {
  color: #d32f2f;
}

.reading-item p strong {
  display: inline-block;
  min-width: 110px;
  font-weight: 600;
  font-family: 'Source Code Pro', monospace;
  text-transform: uppercase;
  color: #222;
}
</style>

<h2></h2>
<p>
  
</p>

<!-- FILTER BUTTONS -->
<div class="reading-filter">
  <button data-filter="all" class="filter-btn active">All</button>
  <button data-filter="HCI" class="filter-btn">HCI</button>
  <button data-filter="AI" class="filter-btn">AI</button>
  <button data-filter="Equity" class="filter-btn">Equity</button>
  <button data-filter="Design" class="filter-btn">Design</button>
  <button data-filter="Accessibility" class="filter-btn">Accessibility</button>
  <button data-filter="Personal" class="filter-btn">Personal</button>
</div>

<!-- READING LIST -->
<div class="reading-list">

  

    <!-- NEW: arXiv selections -->
  <div class="reading-item" data-tags="AI Equity HCI">
    <p><strong>Title:</strong> <a href="https://arxiv.org/abs/2410.07991" target="_blank">Human and LLM Biases in Hate Speech Annotations: A Socio-Demographic Analysis of Annotators and Targets</a></p>
    <p><strong>Author(s):</strong> Multiple</p>
    <p><strong>Year:</strong> 2024</p>
    <p><strong>Link Source:</strong> arXiv</p>
    <p><strong>Tags:</strong> AI, Equity, HCI</p>
    <p><strong>Reflection:</strong> Useful evidence that labeling isn’t neutral; annotator identity shifts ground truth.</p>
  </div>

  <div class="reading-item" data-tags="AI HCI Equity">
    <p><strong>Title:</strong> <a href="https://arxiv.org/abs/2402.10453" target="_blank">Rigor Is Not Rigid: Provocations for Responsible AI Evaluation</a></p>
    <p><strong>Author(s):</strong> Multiple</p>
    <p><strong>Year:</strong> 2024</p>
    <p><strong>Link Source:</strong> arXiv</p>
    <p><strong>Tags:</strong> AI, HCI, Equity</p>
    <p><strong>Reflection:</strong> Argues for plural, context-aware evaluation over single-score benchmarking.</p>
  </div>

  <div class="reading-item" data-tags="AI">
    <p><strong>Title:</strong> <a href="https://arxiv.org/abs/2406.07882" target="_blank">Sycophancy to Bootstrapping: Investigating LLM Preference Biases</a></p>
    <p><strong>Author(s):</strong> Multiple</p>
    <p><strong>Year:</strong> 2024</p>
    <p><strong>Link Source:</strong> arXiv</p>
    <p><strong>Tags:</strong> AI</p>
    <p><strong>Reflection:</strong> Documents identity- and preference-tracking behavior that can distort assistance quality.</p>
  </div>

  <div class="reading-item" data-tags="AI Equity HCI">
    <p><strong>Title:</strong> <a href="https://arxiv.org/html/2403.18148v1" target="_blank">ASEC: The Annotators' Social and Epistemic Characteristics Dataset</a></p>
    <p><strong>Author(s):</strong> Multiple</p>
    <p><strong>Year:</strong> 2024</p>
    <p><strong>Link Source:</strong> arXiv</p>
    <p><strong>Tags:</strong> AI, Equity, HCI</p>
    <p><strong>Reflection:</strong> Infrastructure for studying who labels data and how identities shape annotation.</p>
  </div>

  

  <div class="reading-item" data-tags="HCI Accessibility Design">
  <p><strong>Title:</strong> 
    <a href="https://faculty.washington.edu/wobbrock/pubs/assets-16.pdf" target="_blank">
      How Designing for People With and Without Disabilities Shapes Student Design Thinking
    </a>
  </p>
  <p><strong>Author(s):</strong> David Bar-El, Marcelo Worsley, Jacob O. Wobbrock</p>
  <p><strong>Year:</strong> 2016</p>
  <p><strong>Link Source:</strong> ACM CHI Conference</p>
  <p><strong>Tags:</strong> HCI, Accessibility, Design</p>
  <p><strong>Reflection:</strong> The key insight here is that designing for both disabled and non-disabled users surfaces tensions—like between functional and social needs—forcing designers to move beyond ableist assumptions.</p>
</div>



  

</div>

<h3>Tags Glossary</h3>
<ul>
  <li><strong>HCI:</strong> Human-Computer Interaction</li>
  <li><strong>AI:</strong> Artificial Intelligence / Machine Learning</li>
  <li><strong>Equity:</strong> Social Justice, Fairness, Bias, Ethics</li>
  <li><strong>Design:</strong> Design Thinking, Strategy, UX/UI</li>
  <li><strong>Accessibility:</strong> Digital Access, Disability, Inclusive Design</li>
  <li><strong>Psychology:</strong> Psychology, therapy, mental health</li>
</ul>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".reading-item");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        items.forEach((item) => {
          const tags = item.getAttribute("data-tags").split(" ");
          item.style.display = (filter === "all" || tags.includes(filter)) ? "block" : "none";
        });
      });
    });
  });
</script>
