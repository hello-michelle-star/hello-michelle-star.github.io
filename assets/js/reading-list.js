document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      document.querySelectorAll(".reading-item").forEach(item => {
        if (filter === "all" || item.dataset.tags.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
