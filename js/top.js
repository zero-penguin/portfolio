// ウィンドウの監視による指定要素の透明度変更
window.addEventListener("scroll", function () {
  // クラスの指定
  const input_page = document.querySelector(".input_page");
  // ウィンドウの監視
  const scroll = window.pageYOffset;
  // ページのスクロール量が一定の時の条件分岐
  if (scroll > 2000 && scroll < 2800) {
    // 透明度を１にする
    input_page.style.opacity = "1";
    // console.log(scroll);
    $(':not(".input_page")').addClass("any");
    $("any").css("{filter: contrast(50%)}");
  } else {
    // 透明度を０にする
    input_page.style.opacity = "0";
    // console.log(scroll);
  }
});     

//scroll_effect
window.addEventListener("scroll", function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_left');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 0;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

window.addEventListener('scroll', function() {
  var name = document.querySelector('.name');
  var namePosition = name.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (namePosition < screenPosition) {
    name.style.transition = 'opacity 3s';
    name.style.opacity = 1;
  }
});

$(document).ready(function() {
  const $slideshow = $('.slideshow');
  const $images = $slideshow.find('img');
  let currentImage = 0;

  function slide() {
    $images.eq(currentImage).addClass('previous').removeClass('active');
    currentImage = (currentImage + 1) % $images.length;
    $images.eq(currentImage).addClass('active');
    $images.eq((currentImage + 1) % $images.length).addClass('next');
  }

  setInterval(slide, 3000);
});