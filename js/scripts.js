$(function(){
  $(".card").click(function(){
    $(this).toggleClass("flip");
    $(this).toggleClass("card-img");
    $("span", this).toggleClass("backside");
    $("p", this).toggleClass("backside");
  });


});
