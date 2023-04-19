// ウィンドウの監視による指定要素の透明度変更
window.addEventListener("scroll", function () {
  // クラスの指定
  const input_page = document.querySelector(".input_page");
  // ウィンドウの監視
  const scroll = window.pageYOffset;
  // ページのスクロール量が一定の時の条件分岐
  if (scroll > 1000 && scroll < 1800) {
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
      var triggerMargin = -100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});
