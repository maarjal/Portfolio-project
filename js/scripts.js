$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function(e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
  $('.text').typeIt({
    strings: 'Maarja Laineste Front-End Developer',
    speed: 130,
    autoStart: true
  });

  $(".see-work").click(function() {
    $(".container").show("slow");
    $(".splash-content").addClass("after");
  });


  $("#envelope").click(function() {
    $(".email").show("slow");

  });

});
