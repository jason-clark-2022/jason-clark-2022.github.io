
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




// let title = document.querySelector('div.title');

// document.addEventListener('mousemove', function(event) {
//   let mouseX = event.clientX;
//   let mouseY = event.clientY;

//   let titleX = title.getBoundingClientRect().left + (title.offsetWidth / 3);
//   let titleY = title.getBoundingClientRect().top + (title.offsetHeight / 3);

//   let distanceX = mouseX - titleX;
//   let distanceY = mouseY - titleY;

//   let newTitleX = titleX - (distanceX / 80);
//   let newTitleY = titleY - (distanceY / 80);

//   title.style.transform = 'translate(' + (newTitleX - titleX) / 2 + 'px, ' + (newTitleY - titleY) / 2 + 'px)';
// });




window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const background = document.querySelector('.background');
  background.style.transform = 'translate3d(0, ' + -scrollPosition / 5 + 'px, 0)';
});