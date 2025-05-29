// 사용자에게 월을 입력받음 (1~12)
let input = prompt("몇 월의 달력을 출력할까요? (1 ~ 12 사이 숫자 입력)");
let month = parseInt(input);

let daysInMonth;

// switch 문을 사용해서 각 월의 날짜 수 설정
switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    daysInMonth = 31;
    break;
  case 4: case 6: case 9: case 11:
    daysInMonth = 30;
    break;
  case 2:
    daysInMonth = 28; // 윤년 처리는 여기선 생략
    break;
  default:
    console.log("유효하지 않은 월입니다. 1부터 12 사이 숫자를 입력하세요.");
    daysInMonth = 0;
}

// 유효한 월이면 달력 출력
if (daysInMonth > 0) {
  console.log(`\n[${month}월 달력]`);

  // for문으로 1일부터 마지막 날까지 출력
  for (let day = 1; day <= daysInMonth; day++) {
    console.log(`${month}월 ${day}일`);
  }
}
