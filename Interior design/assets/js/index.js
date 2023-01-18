
// Responsive Navbar

let mobile_nav = document.querySelector(".mobile-navbar-btn");
let nav_header = document.querySelector(".navbar")
let toggleNavbar = () => {
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click", () => toggleNavbar());

// Number Counting Animation

// let counters = document.querySelectorAll(".counter-num");
// let interval = 5000;

// counters.forEach((Counter) => {
//     let startValue = 0;
//     let endValue = parseInt(Counter.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function () {
//         startValue += 1;
//         Counter.textContent = startValue;
//         if (startValue == endValue){
//             clearInterval(counter);
//         }
//     }, duration);
// });

//Scroll Animation

let section_counter = document.querySelector(".design-studio-sec")
let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        let counters = document.querySelectorAll(".counter-num");
let interval = 7000;

counters.forEach((Counter) => {
    let startValue = 0;
    let endValue = parseInt(Counter.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        Counter.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});
    },
    {
        root: null,
        threshold: 0.4,
    });

    CounterObserver.observe(section_counter);

// window.addEventListener("scroll", () => {
//     let content = document.querySelector(".design-studio-sec");
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;
//     if(contentPosition < screenPosition){
        
//     }
// });

