$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
  $('.text').typeIt({
    strings: 'Maarja Laineste Front-End Developer',
    speed: 130,
    autoStart: true
  });

  $(".see-work").click(function(event) {
    $(".container").show("slow");
  });
  event.preventDefault();

});
