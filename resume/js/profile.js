// $(function () {
//     accordion();
// });

// function accordion(){

//     $(".accComponent li h2").click(function(){

//         $(this).toggleClass("active");

//         const li = $(this).parent();
//         const firstTable = li.children("table:first");
//         const moreBtn = li.children("button");
//         const secondTable = moreBtn.next("table");

//         if(firstTable.is(":visible")){
//             firstTable.hide();
//             secondTable.hide();
//             moreBtn.hide();
//             moreBtn.text("더보기 +");
//         }else{
//             firstTable.show();
//             if(moreBtn.length){
//                 moreBtn.show();
//             }
//         }

//     });

//     $(".accComponent li button").click(function(){

//         const secondTable = $(this).next("table");

//         if(secondTable.is(":visible")){
//             secondTable.hide();
//             $(this).text("더보기 +");
//         }else{
//             secondTable.show();
//             $(this).text("접기 -");
//         }

//     });

// }
// 아코디언 + 더보기 버튼 제어
function accControl() {

    // 아코디언 제목 클릭
    $(".accComponent li h2").click(function() {

        $(this).toggleClass("active"); // 화살표 상태 토글

        const table1 = $(this).next("table");    // 첫 번째 테이블
        const btn = table1.next("button");       // 더보기 버튼
        const table2 = btn.next("table");        // 두 번째 테이블 (더보기 내용)

        if (table1.is(":visible")) {
            // 이미 열려있으면 모두 닫기
            table1.hide();
            table2.hide();
            btn.hide();
        } else {
            // 열기
            table1.show();
            btn.show();
        }

    });

    // 더보기 버튼 클릭
    $(".accComponent li button").click(function() {

        const secondTable = $(this).next("table"); // 두 번째 테이블
        secondTable.show();                         // 열기
        $(this).hide();                             // 버튼 숨기기
    });

}

// 문서 로드 시 실행
$(function() {
    accControl();
});