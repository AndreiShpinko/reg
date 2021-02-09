$(document).ready(function () {
  $(".menu__burger").click(function (event) {
    $(".menu__burger, .menu__list").toggleClass("active");
    $(".body").toggleClass("lock");
  });
  document.addEventListener("keydown", keyDownHandler, false);
  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      $(".input-wrap").removeClass("red");
      $(".input-wrap").addClass("green");
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      $(".input-wrap").removeClass("green");
      $(".input-wrap").addClass("red");
    }
  }
});
