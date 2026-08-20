(function () {
    const themes = [
        {
            id: "early-print",
            year: "1500–1800",
            label: "print"
        },
        {
            id: "modern-print",
            year: "1st half XX",
            label: "print"
        },
        {
            id: "editorial-print",
            year: "2nd half XX",
            label: "print"
        },
        {
            id: "early-web",
            year: "start XXI",
            label: "websites"
        },
        {
            id: "future",
            year: "2035",
            label: "print / screen"
        }
    ];

    const savedTheme = localStorage.getItem("lima-theme") || "early-web";

    function applyTheme(themeId) {
        document.body.dataset.era = themeId;
        localStorage.setItem("lima-theme", themeId);

        document.querySelectorAll(".era-button").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.theme === themeId
            );
        });
    }

    function createTimeline() {
        const wrapper = document.createElement("div");
        wrapper.className = "era-timeline-wrap";

        const timeline = document.createElement("div");
        timeline.className = "era-timeline";

        themes.forEach(theme => {
            const button = document.createElement("button");

            button.className = "era-button";
            button.dataset.theme = theme.id;
            button.type = "button";

            button.innerHTML = `
                <span class="era-dot"></span>
                <span class="era-year">${theme.year}</span>
                <span class="era-label">${theme.label}</span>
            `;

            button.addEventListener("click", () => {
                applyTheme(theme.id);
            });

            timeline.appendChild(button);
        });

        wrapper.appendChild(timeline);

        return wrapper;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector(".site-navbar");

        if (!navbar) return;

        const timeline = createTimeline();

        navbar.insertAdjacentElement("afterend", timeline);

        applyTheme(savedTheme);
    });
})();
