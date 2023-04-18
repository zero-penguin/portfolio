// ウィンドウの監視による指定要素の透明度変更
window.addEventListener("scroll", function () {
  // クラスの指定
  const input_page = document.querySelector(".input_page");
  // ウィンドウの監視
  const scroll = window.pageYOffset;
  // ページのスクロール量が一定の時の条件分岐
  if (scroll > 500 && scroll < 1000) {
    // 透明度を１にする
    input_page.style.opacity = "1";
    // console.log(scroll);
    $(':not(".input_page")').addClass("any");
    $("any").css("{brightness}");
  } else {
    // 透明度を０にする
    input_page.style.opacity = "0";
    // console.log(scroll);
  }
});     