/* =========================================================
   LIMA — THEME SWITCHER
   ========================================================= */

(function () {

    const themes = [
        {
            id: "early-print",
            period: "1500–1800",
            type: "Print"
        },
        {
            id: "modern-print",
            period: "1st half XX century",
            type: "Print"
        },
        {
            id: "editorial-print",
            period: "2nd half XX century",
            type: "Print"
        },
        {
            id: "early-web",
            period: "Start XXI century",
            type: "Websites"
        },
        {
            id: "future",
            period: "2035",
            type: "Print / Screen"
        }
    ];


    /* =====================================================
       DEFAULT / SAVED THEME
       ===================================================== */

    const savedTheme =
        localStorage.getItem("lima-theme") || "early-web";


    /* =====================================================
       CREATE PANEL
       ===================================================== */

    function createPanel() {

        const panel = document.createElement("div");

        panel.className = "theme-panel";


        /* ---------- TAB ---------- */

        const tab = document.createElement("button");

        tab.className = "theme-tab";

        tab.type = "button";

        tab.textContent = "Change the theme";


        /* ---------- CONTENT ---------- */

        const content = document.createElement("div");

        content.className = "theme-content";


        /* ---------- HEADER ---------- */

        const header = document.createElement("div");

        header.className = "theme-header";

        header.innerHTML = `
            <h2 class="theme-title">
                Change the theme
            </h2>

            <button
                class="theme-close"
                type="button"
                aria-label="Close theme selector"
            >
                ×
            </button>
        `;


        /* ---------- OPTIONS ---------- */

        const options = document.createElement("div");

        options.className = "theme-options";


        themes.forEach(theme => {

            const button = document.createElement("button");

            button.className = "theme-option";

            button.type = "button";

            button.dataset.theme = theme.id;

            button.innerHTML = `
                <span class="theme-option-period">
                    ${theme.period}
                </span>

                <span class="theme-option-type">
                    ${theme.type}
                </span>
            `;

            button.addEventListener("click", () => {

                applyTheme(theme.id);

            });

            options.appendChild(button);

        });


        content.appendChild(header);

        content.appendChild(options);


        panel.appendChild(tab);

        panel.appendChild(content);


        document.body.appendChild(panel);


        /* =================================================
           OPEN / CLOSE
           ================================================= */

        tab.addEventListener("click", () => {

            panel.classList.toggle("open");

        });


        const closeButton =
            header.querySelector(".theme-close");

        closeButton.addEventListener("click", () => {

            panel.classList.remove("open");

        });


        /* =================================================
           DRAG
           ================================================= */

        makeDraggable(panel, header);


        return panel;
    }


    /* =====================================================
       APPLY THEME
       ===================================================== */

    function applyTheme(themeId) {

        document.body.dataset.era = themeId;

        localStorage.setItem(
            "lima-theme",
            themeId
        );


        document
            .querySelectorAll(".theme-option")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.theme === themeId
                );

            });
    }


    /* =====================================================
       DRAGGABLE PANEL
       ===================================================== */

    function makeDraggable(panel, handle) {

        let dragging = false;

        let offsetX = 0;

        let offsetY = 0;


        handle.addEventListener("mousedown", startDrag);


        function startDrag(event) {

            /*
             * Don't start dragging when clicking
             * the close button.
             */

            if (
                event.target.closest(".theme-close")
            ) {
                return;
            }


            dragging = true;


            const rect =
                panel.getBoundingClientRect();


            offsetX =
                event.clientX - rect.left;

            offsetY =
                event.clientY - rect.top;


            panel.style.transition = "none";


            document.addEventListener(
                "mousemove",
                drag
            );

            document.addEventListener(
                "mouseup",
                stopDrag
            );
        }


        function drag(event) {

            if (!dragging) return;


            let x =
                event.clientX - offsetX;

            let y =
                event.clientY - offsetY;


            const maxX =
                window.innerWidth -
                panel.offsetWidth;


            const maxY =
                window.innerHeight -
                panel.offsetHeight;


            x = Math.max(
                0,
                Math.min(x, maxX)
            );


            y = Math.max(
                0,
                Math.min(y, maxY)
            );


            panel.style.left = `${x}px`;

            panel.style.top = `${y}px`;

            panel.style.transform = "none";
        }


        function stopDrag() {

            dragging = false;


            panel.style.transition = "";


            document.removeEventListener(
                "mousemove",
                drag
            );

            document.removeEventListener(
                "mouseup",
                stopDrag
            );


            savePosition(panel);
        }
    }


    /* =====================================================
       SAVE POSITION
       ===================================================== */

    function savePosition(panel) {

        const position = {

            left: panel.style.left,

            top: panel.style.top

        };


        localStorage.setItem(
            "lima-theme-position",
            JSON.stringify(position)
        );
    }


    /* =====================================================
       RESTORE POSITION
       ===================================================== */

    function restorePosition(panel) {

        const saved =
            localStorage.getItem(
                "lima-theme-position"
            );


        if (!saved) return;


        try {

            const position =
                JSON.parse(saved);


            if (
                position.left &&
                position.top
            ) {

                panel.style.left =
                    position.left;

                panel.style.top =
                    position.top;

                panel.style.transform =
                    "none";
            }

        } catch (error) {

            console.warn(
                "Could not restore theme panel position.",
                error
            );
        }
    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        () => {

            const panel =
                createPanel();


            restorePosition(panel);


            applyTheme(savedTheme);

        }
    );

})();
