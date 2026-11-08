(function () {
  function theme() {
    const b = document.getElementById("theme"), root = document.documentElement;
    const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const label = () => (b.textContent = isDark() ? "◐ Light" : "◐ Dark");
    b.addEventListener("click", () => {
      root.dataset.theme = isDark() ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      label();
    });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", label);
    label();
  }

  function bib() {
    const b = document.getElementById("copy-bib");
    b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(document.getElementById("bibtex").innerText); b.textContent = "Copied"; }
      catch (e) { b.textContent = "Select and copy"; }
      setTimeout(() => (b.textContent = "Copy"), 1500);
    });
  }

  document.addEventListener("DOMContentLoaded", () => { theme(); bib(); });
})();
