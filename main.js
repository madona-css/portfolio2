//appear scroll button and scroll to top :

var scroll = document.querySelector('#scroll-to-top');
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) { scroll.classList.remove("opacity-0", "invisible"); }
    else { scroll.classList.add("opacity-0", "invisible"); }
    scroll.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
});

//Dark Mode :

var lightMode = document.querySelector('#theme-toggle-button');
lightMode.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
});

// section portfolio tabs:
var all = document.querySelector('#all');
var web = document.querySelector('#web');
var app = document.querySelector('#app');
var ecommerce = document.querySelector('#ecommerce');
var design = document.querySelector('#design');
var tabs = [all, web, app, ecommerce, design];
var items = document.querySelectorAll(".portfolio-item");
tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        tabs.forEach(function (tabo) {
            tabo.classList.remove("active");
        });
        this.classList.add("active");
        var filter = this.getAttribute("data-filter");

        items.forEach(function (item) {
            var category = item.getAttribute("data-category");
            if (filter === "all" || filter === category) {
                item.style.display = "block";
            }
            else { item.style.display = "none"; }

        });

    });


});

//nav tabs links :
var sections = document.querySelectorAll("section");
var links = document.querySelectorAll(".nav-link a");
window.addEventListener("scroll", function () {
    window.scrollY + 50;
    links.forEach(function (link) {
        var section = document.querySelector(link.getAttribute("href"));
        if (!section) return;
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
            link.classList.add("active");
        }
        else { link.classList.remove("active") }
    });


});

// carsoul cards:
document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.querySelector("#testimonials-carousel");
    const nextBtn = document.querySelector("#next-testimonial");
    const prevBtn = document.querySelector("#prev-testimonial");
    const cards = document.querySelectorAll(".testimonial-card");
    const indicators = document.querySelectorAll(".carousel-indicator");

    let cardIndex = 0;

    function getCardWidth() {
        return cards[0].getBoundingClientRect().width;
    }

    function updateCarousel() {
        const cardWidth = cards[0].getBoundingClientRect().width;

        carousel.style.transform =
            `translateX(-${cardIndex * cardWidth}px)`;

        updateIndicators();
    }



    function updateIndicators() {

        indicators.forEach(function (indicator) {
            indicator.classList.remove("bg-accent");
            indicator.classList.add("bg-slate-400");
        });

        if (indicators[cardIndex]) {
            indicators[cardIndex].classList.remove("bg-slate-400");
            indicators[cardIndex].classList.add("bg-accent");
        }
    }
    nextBtn.addEventListener("click", function () {

        const maxIndex = cards.length -1;

        cardIndex++;

        if (cardIndex < maxIndex) {
            cardIndex++;
        }

        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {

        const maxIndex = cards.length -1;

        cardIndex--;

        if (cardIndex > 0) {
            cardIndex--;
        }

        updateCarousel();
    });

    indicators.forEach(function (indicator) {

        indicator.addEventListener("click", function () {

            cardIndex = Number(indicator.dataset.index);

            updateCarousel();

        });

    });

    updateCarousel();


});
// side bar

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Elements
    // ==========================

    const sidebar = document.getElementById("settings-sidebar");
    const toggleBtn = document.getElementById("settings-toggle"); // زرار الـ Gear
    const closeBtn = document.getElementById("close-settings");
    const resetBtn = document.getElementById("reset-settings");

    // ==========================
    // Open & Close Sidebar
    // ==========================

    function openSidebar() {
        sidebar.classList.remove("translate-x-full");
        sidebar.setAttribute("aria-hidden", "false");
        toggleBtn.setAttribute("aria-expanded", "true");
    }

    function closeSidebar() {
        sidebar.classList.add("translate-x-full");
        sidebar.setAttribute("aria-hidden", "true");
        toggleBtn.setAttribute("aria-expanded", "false");
    }

    toggleBtn.addEventListener("click", function () {
        if (sidebar.classList.contains("translate-x-full")) {
            openSidebar();
        } else {
            closeSidebar();
        }
    });

    closeBtn.addEventListener("click", closeSidebar);

    // ==========================
    // Fonts
    // ==========================

    const fontButtons = document.querySelectorAll(".font-option");

    fontButtons.forEach(function (btn) {

        btn.addEventListener("click", function () {

            fontButtons.forEach(function (item) {
                item.classList.remove("active");
                item.setAttribute("aria-checked", "false");
            });

            btn.classList.add("active");
            btn.setAttribute("aria-checked", "true");

            const font = btn.dataset.font;

            if (font === "tajawal") {
                document.body.style.fontFamily = "'Tajawal', sans-serif";
            }

            if (font === "alexandria") {
                document.body.style.fontFamily = "'Alexandria', sans-serif";
            }

            if (font === "cairo") {
                document.body.style.fontFamily = "'Cairo', sans-serif";
            }

        });

    });

    // ==========================
    // Theme Colors
    // ==========================

    const colors = [
        "#d13bf6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#8B5CF6",
        "#06B6D4",
        "#EC4899",
        "#6366F1"
    ];

    const grid = document.getElementById("theme-colors-grid");

    colors.forEach(function (color) {

        const btn = document.createElement("button");

        btn.className = "w-12 h-12 rounded-full border-4 border-white shadow cursor-pointer";

        btn.style.backgroundColor = color;
        btn.type = "button";

        btn.addEventListener("click", function () {
          
            document.documentElement.style.setProperty("--color-primary", color);
        });

        grid.appendChild(btn);

    });

    // ==========================
    // Reset
    // ==========================

    resetBtn.addEventListener("click", function () {


        document.body.style.fontFamily = "'Tajawal', sans-serif";

        document.documentElement.style.setProperty("--color-primary", "#3B82F6");

        fontButtons.forEach(function (btn) {

            btn.classList.remove("active");
            btn.setAttribute("aria-checked", "false");

            if (btn.dataset.font === "tajawal") {
                btn.classList.add("active");
                btn.setAttribute("aria-checked", "true");
            }

        });

    });

});