const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navbar = $$(".navbar__link");
navbar.forEach((nav, index) => {
    nav.onclick = function () {
        $(".navbar__link.navbar__link--active").classList.remove(
            "navbar__link--active"
        );
        this.classList.add("navbar__link--active");
    };
});
