//scroll_img
window.onscroll = () => {
  
  scroll_position = window.pageYOffset;
  output.innerHTML = scroll_position;

  var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
    //横幅640px以下のとき（つまりスマホ時）に行う処理を書く
  
  if (scroll_position < 919 ) {   
  $(".item1").css('opacity', '1')
    $('.item1').css('transition', '0.5s')
  
    $(".item1_1").css('opacity', '0')
    $('.item1_1').css('transition', '0.5s')
  }
  if (scroll_position > 920 ) {   
    $(".item1").css('opacity', '0')
    $('.item1').css('transition', '0.5s')
  
    $(".item1_1").css('opacity', '1')
    $('.item1-1').css('transition', '0.5s')
  }
  
 
  }  
 else {
  //横幅640px超のとき（タブレット、PC）に行う処理を書く
if (scroll_position < 1699 ) {   
$(".item1").css('opacity', '1')
  $('.item1').css('transition', '0.5s')

  $(".item1_1").css('opacity', '0')
  $('.item1_1').css('transition', '0.5s')
}
if (scroll_position > 1700 ) {   
  $(".item1").css('opacity', '0')
  $('.item1').css('transition', '0.5s')

  $(".item1_1").css('opacity', '1')
  $('.item1-1').css('transition', '0.5s')
}


}  
}
