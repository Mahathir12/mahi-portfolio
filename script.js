(() => {

  // Image extension fallback: keep the expected filename in HTML, but accept
  // JPG, JPEG, PNG or WEBP files with the same basename in the same folder.
  document.querySelectorAll("img[src]").forEach(img => {
    const original = img.getAttribute("src");
    const match = original.match(/^(.*)\.(jpg|jpeg|png|webp)$/i);
    if (!match) return;
    const base = match[1];
    const extensions = ["jpg", "jpeg", "png", "webp"];
    const firstExt = match[2].toLowerCase();
    const candidates = [firstExt, ...extensions.filter(ext => ext !== firstExt)];
    let attempt = 0;
    img.addEventListener("error", function retryImage() {
      attempt += 1;
      if (attempt >= candidates.length) {
        img.removeEventListener("error", retryImage);
        return;
      }
      img.src = `${base}.${candidates[attempt]}`;
    });
  });
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-icon");
  const label = document.querySelector(".theme-label");
  const savedTheme = localStorage.getItem("mahi-theme");
  if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;
  function updateThemeButton() {
    const light = root.dataset.theme === "light";
    icon.textContent = light ? "☾" : "☼";
    label.textContent = light ? "Dark" : "Light";
    toggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    document.querySelector('meta[name="theme-color"]').content = light ? "#f3f1e9" : "#101311";
  }
  updateThemeButton();
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("mahi-theme", root.dataset.theme);
    updateThemeButton();
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  const progress = document.querySelector(".progress-bar");
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-links a")];
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => activeObserver.observe(section));

  document.getElementById("year").textContent = new Date().getFullYear();
})();