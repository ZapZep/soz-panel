function carousel(e) {
  const imgs = e.target.querySelectorAll("img");
  const len = imgs.length;
  const index = Array.from(imgs).findIndex((img) =>
    img.classList.contains("active")
  );
  imgs[index].classList.remove("active");
  if (e.offsetX * 2 < e.target.clientWidth) {
    index = (index - 1 + len) % len;
  } else {
    index = (index + 1) % len;
  }
  imgs[index].classList.add("active");
}
