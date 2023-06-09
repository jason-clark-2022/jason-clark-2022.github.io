
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
  }
}


function setTimelineWidths(){
  
  var timelineWidth = document.getElementById('resume-timeline').offsetWidth;
  
  siueSpan = timelineWidth / 2.7;
  siue = document.getElementById('job-siue');
  siue.style.borderLeft = siueSpan + "px solid transparent";
  siue.style.borderRight = siueSpan + "px solid transparent";

  usbSpan = timelineWidth / 40;
  usb = document.getElementById('job-usb');
  usb.style.borderLeft = usbSpan + "px solid transparent";
  usb.style.borderRight = usbSpan + "px solid transparent";

  bingShopSpan = timelineWidth / 6.3;
  bingshop = document.getElementById('job-bing-shop');
  bingshop.style.borderLeft = bingShopSpan + "px solid transparent";
  bingshop.style.borderRight = bingShopSpan + "px solid transparent";

  bingFieldSpan = timelineWidth / 3.6;
  bingField = document.getElementById('job-bing-field');
  bingField.style.borderLeft = bingFieldSpan + "px solid transparent";
  bingField.style.borderRight = bingFieldSpan + "px solid transparent";

  oliversSpan = timelineWidth / 13;
  olivers = document.getElementById('job-olivers');
  olivers.style.borderLeft = oliversSpan + "px solid transparent";
  olivers.style.borderRight = oliversSpan + "px solid transparent";
}




