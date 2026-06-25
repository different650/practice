// =============================
// 1. 슬라이드 숫자 버튼 가져오기
// =============================
const numbers = document.querySelectorAll('.slide_num li');

// =============================
// 2. Swiper 생성
// =============================
const swiper = new Swiper('.visual-swiper', {
  loop: true, // 무한 반복 슬라이드
  autoplay: {
    delay: 3000, // 3초마다 자동 전환
  },
  speed: 600, // 슬라이드 전환 속도 (ms)

  // =============================
  // 3. 슬라이드가 바뀔 때마다 실행
  // =============================
  // on: { slideChange }
  // 👉 슬라이드 바뀔 때마다 실행되는 이벤트
  on: {
    slideChange: function () {

      // loop 사용 시 실제 순서를 가져오기 위해 realIndex 사용
      // this.realIndex
      // 👉 loop일 때 “진짜 순서”
      const index = this.realIndex;

      // 모든 숫자에서 active 제거
      numbers.forEach((el) => {
        el.classList.remove('on');
      });

      // 현재 슬라이드에 해당하는 숫자만 active 추가
      numbers[index].classList.add('on');
    }
  }
});

// =============================
// 4. 숫자 클릭 시 해당 슬라이드 이동
// =============================
numbers.forEach((el, i) => {
  el.addEventListener('click', () => {

    // loop 기준으로 정확한 슬라이드 이동
    // swiper.slideToLoop(i);
    // 👉 loop 상태에서도 정확한 슬라이드 이동
    swiper.slideToLoop(i);
  });
});



$(function () {
  modalControl();
  menuControl();
});

function modalControl() {

  // 모달 전체 요소 선택
  const $modal = $('.detail .modal');

  // 모달 안에 있는 img 선택
  const $modalImg = $modal.find('img');

  // 썸네일 이미지 클릭 시
  $('.detail ul li img').on('click', function () {

    // 모달 열기 (.modal.on)
    $modal.addClass('on');

    // 클릭한 이미지의 data-modal 값을 가져와
    // 모달 이미지의 src에 넣기
    $modalImg.attr('src', $(this).data('modal'));
  });

  // 닫기 버튼 클릭 시
  $('.detail .close').on('click', function () {

    // on 클래스 제거 → 모달 닫기
    $modal.removeClass('on');
  });

}

function menuControl() {

  $('.menu-button').on('click', function () {

    $('header nav').toggleClass('active');

  });

}