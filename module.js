
const checkbox = document.getElementById("menuToggle").getElementsByTagName("input")[0];


// main.style.top = headerHeight + "px";

let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0) {
  
    checkbox.checked=false;
    header.classList.add("hidden-nav");
    header.classList.remove("visible-nav");
    
  } else {
    // scrolled up -- header show
    // header.style.top="-50px";
    checkbox.checked=true;
    header.classList.add("visible-nav");
    header.classList.remove("hidden-nav");
  }
  lastScroll = currentScroll;
})

