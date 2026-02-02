document.addEventListener("DOMContentLoaded",() => {
    const toggleBtn = document.querySelector(".theme-toggle");

    if(!toggleBtn) return;

    toggleBtn.addEventListener("click",() => {
        const isDark = document.body.classList.toggle("dark-theme");

        toggleBtn.textContent=isDark ? "☀️" : "🌙";
        toggleBtn.setAttribute("aria-pressed",isDark);
    });
});