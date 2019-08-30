
$(".ggg").typed({

  strings: [ "Developer","Web Developer" ],
    startDelay: 1000,
  typeSpeed:100,
    typeSpeed: 110,
 
  // time before typing starts

  startDelay: 110,
 
  // backspacing speed
  backSpeed: 110,

  // shuffle the strings
  shuffle: false,

  // time before backspacing
  backDelay: 500
 
}); 

$(window).load(function() {
  $(".twentytwenty-container").twentytwenty();
});
