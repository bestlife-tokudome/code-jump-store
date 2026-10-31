/* ページ内スクロール */
document.querySelectorAll('a[href^="#"]').forEach( function (link) {
    link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        const target = href === "#" | href === ""
            ? document.documentElement
            : document.querySelector(href);

        if (!target) return;

        const position = target.getBoundingClientRect().top + window.scrollY;

        event.preventDefault();

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });
});