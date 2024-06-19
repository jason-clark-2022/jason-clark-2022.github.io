
const checkbox = document.getElementById("menuToggle").getElementsByTagName("input")[0];




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
  const background = document.querySelector('.bio-background');
  background.style.transform = 'translate3d(0, ' + -scrollPosition / 8 + 'px, 0)';
});



window.addEventListener('resize', setTimelineWidths);

window.addEventListener('onload', setTimelineWidths);
window.addEventListener('onload', setTimelineHeights);

window.onload = function() {
  setTimelineWidths();
  setTimelineHeights();
}
window.addEventListener("scroll", function(){
  setTimelineHeights();
});


function setTimelineHeights(){
  scrollPosition=window.pageYOffset;
  resume = document.getElementById("resume");
  resumeTop = resume.offsetTop;
  windowHeight = window.innerHeight;
  if(scrollPosition >= (resumeTop-windowHeight))
  {
    var wrapperHeight = document.getElementsByClassName('resume')[0].offsetHeight;
    var timelineWidth = document.getElementById('resume-timeline').offsetWidth;
    ratio = (timelineWidth/ wrapperHeight)* 1;

    document.getElementById('job-siue').style.borderBottomWidth = (siueSpan/ratio) + "px";
    document.getElementById('job-usb').style.borderBottomWidth = (usbSpan/ratio) + "px";
    document.getElementById('job-bing-shop').style.borderBottomWidth = (bingShopSpan/ratio) + "px";
    document.getElementById('job-bing-field').style.borderBottomWidth = (bingFieldSpan/ratio) + "px";
    document.getElementById('job-olivers').style.borderBottomWidth = (oliversSpan/ratio) + "px";
    document.getElementById('job-atcs').style.borderBottomWidth = (atcsSpan/ratio) + "px";
  }
}


function setTimelineWidths(){
  var siueYears = 5;
  var usbYears = 4/12; // Slightly exaggerated for visibility
  var bingShopYears = 2;
  var bingFieldYears = 3.4;
  var oliversYears = 1;
  var atcsYears = 1.3;
  var timelineSegments = 8; // Total Number of whole years on timeline
  var sizingCorrection = 1.0;

  var timelineWidth = document.getElementById('resume-timeline').offsetWidth;
  var oneYearOnTimeline = (timelineWidth / timelineSegments) * sizingCorrection;

  siueSpan = oneYearOnTimeline * (siueYears / 2); // div by 2 to split for left and right border
  siue = document.getElementById('job-siue');
  siue.style.borderLeft = siueSpan + "px solid transparent";
  siue.style.borderRight = siueSpan + "px solid transparent";
  siue.style.left = "10%";
  
  usbSpan = oneYearOnTimeline * (usbYears / 2); 
  usb = document.getElementById('job-usb');
  usb.style.borderLeft = usbSpan + "px solid transparent";
  usb.style.borderRight = usbSpan + "px solid transparent";
  usb.style.left = "30%";
  
  bingShopSpan = oneYearOnTimeline * (bingShopYears / 2);
  bingShop = document.getElementById('job-bing-shop');
  bingShop.style.borderLeft = bingShopSpan + "px solid transparent";
  bingShop.style.borderRight = bingShopSpan + "px solid transparent";
  bingShop.style.left = "20%";

  bingFieldSpan = oneYearOnTimeline * (bingFieldYears / 2);
  bingField = document.getElementById('job-bing-field');
  bingField.style.borderLeft = bingFieldSpan + "px solid transparent";
  bingField.style.borderRight = bingFieldSpan + "px solid transparent";
  bingField.style.left = "2%";

  oliversSpan = oneYearOnTimeline * (oliversYears / 2);
  olivers = document.getElementById('job-olivers');
  olivers.style.borderLeft = oliversSpan + "px solid transparent";
  olivers.style.borderRight = oliversSpan + "px solid transparent";
  olivers.style.left = "58%";

  atcsSpan = oneYearOnTimeline * (atcsYears / 2);
  atcs = document.getElementById('job-atcs');
  atcs.style.borderLeft = atcsSpan + "px solid transparent";
  atcs.style.borderRight = atcsSpan + "px solid transparent";
  atcs.style.left = "80%";
}





// const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0])
//   e.target.matches('.prev') && slider.prepend(items[items.length-1]);
// }

// document.addEventListener('click',activate,false);



const $carousel = $(".resume-carousel");
const $slides = $(".resume-carousel-slide");
const $prevButton = $(".resume-prev");
const $nextButton = $(".resume-next");

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = $slides.length - 1;
    } else if (index >= $slides.length) {
        currentIndex = 0;
    }

    $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
    // $slides.css("opacity", 0);
    // $slides[currentIndex].css("opacity","1");
    // console.log($slides[currentIndex]);
}



if ($nextButton.length && $prevButton.length) {
    $nextButton.click(function() {
        currentIndex++;
        showSlide(currentIndex);
    });

    $prevButton.click(function() {
        currentIndex--;
        showSlide(currentIndex);
    });
}

 const autoAdvanceInterval = 6000; // Change slide every 12 seconds

    setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, autoAdvanceInterval);

