$(function () {
  initCards();
  initQuiz();
  accControl("#growing li h3");
  initGallery();
});

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

    // 결과 영역 표시 (이제 margin-top 100px로 아래에)
    $('#quiz > div').addClass('show');
  });
}


function accControl(target) {
  $(target).click(function () {
    $(this).toggleClass("active");
  });






}

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