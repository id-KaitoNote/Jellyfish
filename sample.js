
$(function(){
    $('.dropdown-child').hover(function(){
      //親リストにマウスが重なった時に重なった親リストの子リストだけを表示させる
        $(this).children("ul").slideToggle();
    });
});

//
// $(function(){
//     $('#dropdown li').mouseenter(function(){
//       //親リストにマウスが重なった時に重なった親リストの子リストだけを表示させる
//         $(this).children("ul").stop().slideDown("slow");
//     }),
//     $('#dropdown li').mouseleave(function(){
//       //リストからマウスが外れたらスライドしながらリストを消す
//         $(this).children("ul").stop().slideUp("fast");
//     });
// });

if (window.matchMedia( "(max-width: 768px)" ).matches) {

  $(function(){
  $(".title1").delay(14500)
              .css({
                opacity:"0.0"
            }).animate({
               "padding-left":"25px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title2").delay(15000)
              .css({
                 opacity:"0"
            }).animate({
               "padding-left":"25px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title3").delay(15500)
              .css({
                opacity:"0"
            }).animate({
               "padding-left":"25px",
                opacity:"1.0"},2000
              )
            });

} else {

  $(function(){
  $(".title1").delay(14500)
              .css({
                left:"-100px",
                opacity:"0.0"
            }).animate({
                left:"100px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title2").delay(15000)
              .css({
                left:"-100px",
                opacity:"0.0"
            }).animate({
                left:"100px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title3").delay(15500)
              .css({
                left:"-100px",
                opacity:"0.0"
            }).animate({
                left:"100px",
                opacity:"1.0"},2000
              )
            });

}

// $(function(){
//     $('.dropdown-child').hover(function(){
//       //親リストにマウスが重なった時に重なった親リストの子リストだけを表示させる
//         $(this).children("ul").slideToggle();
//     });
// });

// 『Toggle』 ver


// const nodeList = document.querySelectorAll('.node');
//
// nodeList.forEach((target) => {
//
//   target.addEventListener('mouseenter', function() {
//      console.log('やるじゃん');
//      target.firstElementChild.style.display = 'block';
//    });
//   target.addEventListener('mouseleave', function() {
//      console.log('砂糖より甘いですね');
//      target.firstElementChild.style.display = 'none';
//    });
//   });

// 『JS』 ver
