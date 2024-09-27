gsap.set("#moon, .star", {opacity: 0});
gsap.set("#sun, #cloud, #moon", {x: 15});
gsap.set(".star", {x: 35, y: -5});

theme = localStorage.getItem("theme");

if (theme == "day") {
  //
} else if ("night") {
    night();
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    night();
}
}


document.addEventListener("click", (e) => {
    if (e.target.id === "day") {
        night();
    } else if (e.target.id === "night") {
        day();
    }
});


function night(){
  document.getElementById("day").id = "night";
  $("#night").css({"pointer-events": "none"})
  localStorage.setItem('theme', 'night');

  gsap.to("#sun", 1, {x: -157, opacity: 0, ease: Power1.easeInOut});
  gsap.to("#cloud", .5, {opacity: 0, ease: Power1.easeInOut});
  gsap.to("#moon", 1, {x: -157, rotate: -360, transformOrigin: "center", opacity: 1, ease: Power1.easeInOut});
  gsap.to(".star", .5, {opacity: 1, ease: Power1.easeInOut});
  gsap.to("#night", 1, {background: "#224f6d", borderColor: "#cad4d8", ease: Power1.easeInOut});
  gsap.to("#background", 1, {background: "#0d1f2b", ease: Power1.easeInOut});
  $(this).css({"pointer-events": "none"});
  $(":root").css({"color-scheme": "light dark"}); 
  $("a").css({"color": "white"}); 

  $(".btn, p, h2, .icon, .details-container, .project-btn").addClass("dark");
  
  
  setTimeout(function(){
    $("#night").css({"pointer-events": "all"})
  }, 1000);
};

function day(){

  document.getElementById("night").id = "day";
  $("#day").css({"pointer-events": "none"})  
  localStorage.setItem('theme', 'day');

  
  gsap.to("#sun", 1, {x: 15, opacity: 1, ease: Power1.easeInOut});
  gsap.to("#cloud", 1, {opacity: 1, ease: Power1.easeInOut});
  gsap.to("#moon", 1, {opacity: 0, x: 35, rotate: 360, transformOrigin: "center", ease: Power1.easeInOut});
  gsap.to(".star", 1, {opacity: 0, ease: Power1.easeInOut});
  gsap.to("#day", 1, {background: "#9cd6ef", borderColor: "#65c0e7", ease: Power1.easeInOut});
  gsap.to("#background", 1, {background: "#d3edf8", ease: Power1.easeInOut});
  $(this).css({"pointer-events": "none"});
  $(":root").css({"color-scheme": "light"}); 
  $("a").css({"color": "black"}); 
  $(".btn, p, h2, .icon, .details-container, .project-btn").removeClass("dark");
  $("project-btn").addClass("btn-color-2"); 
  $("project-btn").removeClass("btn-color-1"); 

  setTimeout(function(){
    $("#day").css({"pointer-events": "all"})
  }, 1000);
};
