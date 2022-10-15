
const sections = document.querySelectorAll("section");

const bubble = document.querySelector(".bubble");


const icons = document.querySelectorAll('.pe')

const palatte = [
    "#fff", "#0F9D58", "#4285F4", "#F4B400", "#DB4437", "#000"
]
const options = {
    threshold: 0.3,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach((entry) => {
        const className = entry.target.id;
        var activeAnchor = document.querySelector(`[data-page=${className}]`);

        const gradientIndex = entry.target.getAttribute("data-index");

        const coords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: coords.height,

            width: coords.width,

            top: coords.top,

            left: coords.left,
        };

        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);

            bubble.style.setProperty("top", `${directions.top}px`);

            bubble.style.setProperty("width", `${directions.width}px`);

            bubble.style.setProperty("height", `${directions.height}px`);

            bubble.style.background = palatte[gradientIndex];

            icons.forEach((icon, index) => {
                icon.setAttribute("fill", gradientIndex == 0 ? '#000' : palatte[gradientIndex])
            })

        }
    });
}

sections.forEach((section) => {
    observer.observe(section);
});


