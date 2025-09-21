document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const imgs = carousel.querySelectorAll("img");
    if (imgs.length === 0) return;

    imgs.forEach((img, i) => {
      if (i === 0) img.classList.add("active");
    });

    // Add buttons
    const prev = document.createElement("button");
    prev.className = "prev";
    prev.textContent = "❮";
    const next = document.createElement("button");
    next.className = "next";
    next.textContent = "❯";
    carousel.appendChild(prev);
    carousel.appendChild(next);

    let index = 0;

    function showImage(i) {
      imgs.forEach(img => img.classList.remove("active"));
      imgs[i].classList.add("active");
    }

    prev.addEventListener("click", () => {
      index = (index - 1 + imgs.length) % imgs.length;
      showImage(index);
    });
    next.addEventListener("click", () => {
      index = (index + 1) % imgs.length;
      showImage(index);
    });
  });
});
