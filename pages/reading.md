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

  <div class="reading-item" data-tags="Equity Design HCI">
    <p><strong>Title:</strong> <a href="https://mitpress.mit.edu/9780262043458/design-justice/" target="_blank">Design Justice</a></p>
    <p><strong>Author(s):</strong> Sasha Costanza-Chock</p>
    <p><strong>Year:</strong> 2020</p>
    <p><strong>Link Source:</strong> MIT Press</p>
    <p><strong>Tags:</strong> Equity, Design, HCI</p>
    <p><strong>Reflection:</strong> Defines my core framework: center the voices most marginalized by systems.</p>
  </div>

  <div class="reading-item" data-tags="AI Equity Personal">
    <p><strong>Title:</strong> <a href="https://books.google.com/books/about/Weapons_of_Math_Destruction.html?id=CxD-DAAAQBAJ" target="_blank">Weapons of Math Destruction</a></p>
    <p><strong>Author(s):</strong> Cathy O’Neil</p>
    <p><strong>Year:</strong> 2016</p>
    <p><strong>Link Source:</strong> Crown</p>
    <p><strong>Tags:</strong> AI, Equity, Personal</p>
    <p><strong>Reflection:</strong> “Toxic feedback loop” explains algorithmic harm with clarity and urgency.</p>
  </div>

  <div class="reading-item" data-tags="Equity Personal">
    <p><strong>Title:</strong> <a href="https://web.cs.ucdavis.edu/~rogaway/papers/moral-fn.pdf" target="_blank">The Moral Character of Cryptographic Work</a></p>
    <p><strong>Author(s):</strong> Phil Zimmermann</p>
    <p><strong>Year:</strong> 1991</p>
    <p><strong>Link Source:</strong> Essay Collection</p>
    <p><strong>Tags:</strong> Equity, Personal</p>
    <p><strong>Reflection:</strong> Technology = political speech. Code always carries values.</p>
  </div>

  <div class="reading-item" data-tags="Accessibility Design HCI">
    <p><strong>Title:</strong> <a href="https://mitpress.mit.edu/9780262038881/mismatch/" target="_blank">Mismatch: How Inclusion Shapes Design</a></p>
    <p><strong>Author(s):</strong> Kat Holmes</p>
    <p><strong>Year:</strong> 2018</p>
    <p><strong>Link Source:</strong> MIT Press</p>
    <p><strong>Tags:</strong> Accessibility, Design, HCI</p>
    <p><strong>Reflection:</strong> Reframes disability as a design limitation — inclusion drives innovation.</p>
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



  <div class="reading-item" data-tags="AI Equity">
    <p><strong>Title:</strong> <a href="https://www.ruhabenjamin.com/books" target="_blank">Race After Technology</a></p>
    <p><strong>Author(s):</strong> Ruha Benjamin</p>
    <p><strong>Year:</strong> 2019</p>
    <p><strong>Link Source:</strong> Polity Press</p>
    <p><strong>Tags:</strong> AI, Equity</p>
    <p><strong>Reflection:</strong> Bias is not a bug — often it's the product. New Jim Code is essential reading.</p>
  </div>

</div>

<h3>Tags Glossary</h3>
<ul>
  <li><strong>HCI:</strong> Human-Computer Interaction</li>
  <li><strong>AI:</strong> Artificial Intelligence / Machine Learning</li>
  <li><strong>Equity:</strong> Social Justice, Fairness, Bias, Ethics</li>
  <li><strong>Design:</strong> Design Thinking, Strategy, UX/UI</li>
  <li><strong>Accessibility:</strong> Digital Access, Disability, Inclusive Design</li>
  <li><strong>Personal:</strong> Foundational or personally influential work</li>
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
