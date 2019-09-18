//
// //IDを取得
// var i = document.getElementById('dropdown');
// var c = document.querySelectorAll('.dropdown-child');
//
// //「target」にマウスが乗った時にイベントを実行する
// c.mouseenter = function() {
//   console.log("OK!!!!!!!!!!!!!!!!!!!!!!!!!");
// };
//

//
// var c = document.querySelector('.dropdown-child');
// var m = document.querySelector('.dropdown_menu');
//
//   c.addEventListener('mouseenter', function() {
//     console.log('OK!!!!!!!!!!!!!!');
//     m.style.display = 'block';
//   });
//
//   c.addEventListener('mouseleave', function() {
//     console.log('NG!!!!!!!!!!!!!!!!!');
//     m.style.display = 'none';
//   });

// var c = document.querySelector('.dropdown-child');
// var m = document.querySelector('.dropdown_menu');
//
// // for (let i = 0; i < 2; i++) {
//
//   c.addEventListener('mouseenter', () => {
//     console.log('OK!!!!!!!!!!!!!!');
//     m.style.display = 'block';
//   });
//
//   c.addEventListener('mouseleave', () => {
//     console.log('NG!!!!!!!!!!!!!!!!!');
//     m.style.display = 'none';
//   });
// }

$(function(){
    $('.dropdown-child').mouseenter(function(){
      //親リストにマウスが重なった時に重なった親リストの子リストだけを表示させる
        $(this).children("ul").slideDown("slow");
    }),
    $('.dropdown-child').mouseleave(function(){
      //リストからマウスが外れたらスライドしながらリストを消す
        $(this).children("ul").slideUp("fast");
    });
});

// $(function(){
//     $('.dropdown-child').hover(function(){
//       //親リストにマウスが重なった時に重なった親リストの子リストだけを表示させる
//         $(this).children("ul").slideToggle();
//     });
// });
// 『Toggle』 ver

if (window.matchMedia( "(max-width: 768px)" ).matches) {

  $(function(){
  $(".title1").delay(4500)
              .css({
                opacity:"0.0"
            }).animate({
               "padding-left":"25px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title2").delay(5000)
              .css({
                 opacity:"0"
            }).animate({
               "padding-left":"25px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title3").delay(5500)
              .css({
                opacity:"0"
            }).animate({
               "padding-left":"25px",
                opacity:"1.0"},2000
              )
            });

} else {

  $(function(){
  $(".title1").delay(4500)
              .css({
                left:"-100px",
                opacity:"0.0"
            }).animate({
                left:"100px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title2").delay(5000)
              .css({
                left:"-100px",
                opacity:"0.0"
            }).animate({
                left:"100px",
                opacity:"1.0"},2000
              )
            });
  $(function(){
  $(".title3").delay(5500)
              .css({
                left:"-100px",
                opacity:"0.0"
            }).animate({
                left:"100px",
                opacity:"1.0"},2000
              )
            });

}
