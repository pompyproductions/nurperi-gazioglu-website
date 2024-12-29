const container = document.querySelector("html");

function handleResize() {
  container.style.setProperty("--doc-height", `${window.innerHeight}px`);
  // container.style.setProperty("--doc-width", `${window.innerWidth}px`);
}

window.addEventListener("resize", handleResize);
handleResize(); // run it once when website loads