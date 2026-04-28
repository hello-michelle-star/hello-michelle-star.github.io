---
layout: page
title: 
permalink: /art/
---

<style>
:root{
  --bg:#fff8f8; --ink:#111; --accent:#0a58ca; --muted:#8c8c8c;
}
.art-hero{padding:48px 20px 8px}
.art-hero h1{margin:0 0 6px;font-size:2rem}
.art-hero p{margin:0;color:var(--ink)}

.gallery{padding:12px 20px}
.grid{
  display:grid; gap:16px;
  grid-template-columns:repeat(3,minmax(0,1fr));
}
@media (max-width:1000px){ .grid{grid-template-columns:repeat(2,1fr)} }
@media (max-width:640px){ .grid{grid-template-columns:1fr} }

.card{
  background:#fff; border:1px solid #e6e6e6; border-radius:14px;
  overflow:hidden; display:flex; flex-direction:column;
  box-shadow:0 2px 6px rgba(0,0,0,.06);
  transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.card:hover{ transform:translateY(-4px) rotate(-.25deg); box-shadow:0 10px 24px rgba(0,0,0,.14); border-color:#d9d9d9 }
.thumb{
  width:100%;
  height:auto;              /* grow to natural height */
  object-fit:contain;       /* show entire image */
  display:block;
  background: var(--bg);
}
.meta{padding:10px 12px; display:flex; gap:10px; align-items:center; justify-content:space-between}
.title{font-family:'Source Code Pro', monospace; text-transform:uppercase; letter-spacing:.06em; font-size:.95rem}

.details{padding:0 12px 12px; color:#333; font-size:.95rem}
.actions{margin-top:auto; padding:12px; display:flex; gap:10px}
.btn{
  border:1px solid var(--ink); color:var(--ink); background:#fff; text-decoration:none;
  padding:8px 12px; border-radius:8px; font-weight:600; line-height:1
}
.btn:hover{ background:var(--ink); color:#fff }
.hidden{display:none}

/* section spacing */
.art-hero{margin-bottom:12px}
.gallery + .gallery{margin-top:40px}

/* dialog lightbox */
dialog{display:none; border:0; padding:0; border-radius:12px; overflow:hidden;
  max-width:min(96vw,1200px); max-height:96vh;}
dialog[open]{display:flex; flex-direction:column;}   /* only show when open */
dialog::backdrop{background:rgba(0,0,0,.7)}

.viewer-img{
  display:block; width:auto; height:auto;
  max-width:96vw; max-height:calc(96vh - 44px);
  object-fit:contain; margin:0 auto;
}
.viewer-bar{display:flex; justify-content:space-between; align-items:center;
  gap:10px; padding:8px 12px; background:#fff}
.viewer-title{font-weight:600}
.close-btn{border:1px solid var(--ink); background:#fff; padding:6px 10px; border-radius:8px; cursor:pointer}



.card .thumb{ max-height: 60vh; }   /* big focus on desktop */
@media (max-width:1000px){ .card .thumb{ max-height: 50vh; } }
@media (max-width:640px){  .card .thumb{ max-height: 40vh; } }


/* headings */
.section-title{margin:8px 0 12px;font-family:'Source Code Pro',monospace;text-transform:uppercase;letter-spacing:.06em}

/* merch layout */
/* horizontal merch cards */
/* merch grid: two horizontal cards side-by-side */



/* keep buttons pinned to bottom */
.card{display:flex;flex-direction:column;}
.actions{margin-top:auto;}

/* lift on hover */
</style>

<header class="art-hero">
  <h1></h1>
  <p>I'm a self-taught artist who first started drawing during the pandemic as a way to pass the time. I've always had an eye for aesthetics and view art as an essential escape. Here are some of my portrait drawings and art studies.</p>
</header>


<section class="gallery">
<h2 class="section-title">Drawings</h2>
  <div class="grid" id="art-grid">
    <!-- Drawings (replace src with your files in /assets/art/) -->
<!-- Drawings -->
<article class="card" data-cat="drawing">
  <img class="thumb" src="/assets/img/art/girl.jpg" alt="Profile portrait" loading="lazy">
  <div class="meta"><span class="title">Profile Portrait</span></div>
  <p class="details">Graphite pencil. 2025.</p>
  <div class="actions">
    <button class="btn view-btn" data-full="/assets/img/art/girl.jpg" data-title="Profile Portrait">View</button>
  </div>
</article>

<article class="card" data-cat="drawing">
  <img class="thumb" src="/assets/img/art/boy.jpg" alt="Pencil portrait" loading="lazy">
  <div class="meta"><span class="title">Portrait</span></div>
  <p class="details">Graphite on paper. 2024.</p>
  <div class="actions">
    <button class="btn view-btn" data-full="/assets/img/art/boy.jpg" data-title="Portrait (Pencil)">View</button>
  </div>
</article>

<article class="card">
  <img class="thumb" src="/assets/img/art/pen.jpg" alt="Pen portrait" loading="lazy">
  <div class="meta"><span class="title">Portrait — Scribble Art</span></div>
  <p class="details">Ink Pen Sketch. 2025.</p>
  <div class="actions">
    <button class="btn view-btn" data-full="/assets/img/art/pen.jpg" data-title="Portrait — Pen">View</button>
  </div>
</article>

<article class="card">
  <img class="thumb" src="/assets/img/art/mouth.jpg" alt="Pencil drawing of a mouth" loading="lazy">
  <div class="meta"><span class="title">Study — Mouth</span></div>
  <p class="details">Form and shading study. 2025.</p>
  <div class="actions">
    <button class="btn view-btn" data-full="/assets/img/art/mouth.jpg" data-title="Mouth (Pencil)">View</button>
  </div>
</article>

<article class="card">
  <img class="thumb" src="/assets/img/art/body.jpg" alt="Pencil figure study" loading="lazy">
  <div class="meta"><span class="title">Figure Study</span></div>
  <p class="details">Human form. 2025.</p>
  <div class="actions">
    <button class="btn view-btn" data-full="/assets/img/art/body.jpg" data-title="Figure Study (Pencil)">View</button>
  </div>
</article>
 </div>
</section>



<!-- fullscreen viewer -->
<!-- keep your dialog -->
<dialog id="viewer">
  <img class="viewer-img" alt="">
  <div class="viewer-bar">
    <div class="viewer-title"></div>
    <button class="close-btn" onclick="document.getElementById('viewer').close()">Close</button>
  </div>
</dialog>

<script>
const dlg = document.getElementById('viewer');
const vimg = dlg.querySelector('.viewer-img');
const vtitle = dlg.querySelector('.viewer-title');

document.querySelectorAll('.view-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    vimg.src = btn.dataset.full;
    vimg.alt = btn.dataset.title || 'Artwork';
    vtitle.textContent = btn.dataset.title || '';
    dlg.showModal();
    dlg.scrollTop = 0;
  });
});
</script>

