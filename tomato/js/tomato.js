$(function () {
  initCards();
  initQuiz();
  accControl("#growing li h3");
  initGallery();

  initHamburger();
});
// 카드 기능
function initCards() {

  $('.card').on('click', function (e) {
    const $card = $(this);

    // close 버튼 클릭이면 무시
    if ($(e.target).hasClass('close')) return;

    $card.addClass('active'); // ⭐ 무조건 열기
  });

  $('.close').on('click', function (e) {
    e.stopPropagation();
    $(this).closest('.card').removeClass('active');
  });
}

// 퀴즈 기능
function initQuiz() {
  $('#quiz ul li').on('click', function () {
    const $this = $(this);
    const isCorrect = $this.data('answer') === 'correct';

    // 클릭 막기
    $('#quiz ul li').off('click');

    if (isCorrect) {
      $this.addClass('correct');
      $('.result').text('정답입니다! 🎉');
    } else {
      $this.addClass('wrong');
      $('.result').text('틀렸어요 😢');
    }

    // 정답 항상 표시
    $('#quiz ul li[data-answer="correct"]').addClass('correct');

    // ✅ 여기 수정
    $('#quiz div:last-of-type').addClass('show');
  });
}

// 아코디언 기능
function accControl(target) {
  $(target).click(function () {
    $(this).toggleClass("active");
  });
}

// 갤러리 기능
function initGallery() {
  const $items = $('#galler li');

  $items.on('click', function () {
    const $item = $(this);

    // 이미 active면 유지 (원하면 토글도 가능)
    if ($item.hasClass('active')) return;

    // 전체 active 제거
    $items.removeClass('active');

    // 클릭한 것만 active
    $item.addClass('active');
  });
}

// 햄버거 메뉴
function initHamburger() { 

  $('.hamburger').on('click', function () {
    $('nav').toggleClass('active');
  });

  // 메뉴 클릭 시 닫기
  $('nav ul li a').on('click', function () {
    $('nav').removeClass('active');
  });

}