// 사용자로부터 연도와 월 입력
let yearInput = prompt("연도를 입력하세요 (예: 2025):");
let monthInput = prompt("월을 입력하세요 (1~12):");

let year = parseInt(yearInput);
let month = parseInt(monthInput);

// 입력 유효성 검사
if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
  console.log("잘못된 입력입니다. 연도는 숫자, 월은 1~12 사이여야 합니다.");
} else {
  // 윤년 계산 함수
  function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  }

  // 월별 일수 계산 (2월은 윤년 고려)
  let daysInMonth;
  switch (month) {
    case 2:
      daysInMonth = isLeapYear(year) ? 29 : 28;
      break;
    case 4: case 6: case 9: case 11:
      daysInMonth = 30;
      break;
    default:
      daysInMonth = 31;
      break;
  }

  // 시작 요일 계산 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  let firstDay = new Date(year, month - 1, 1).getDay();

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  console.log(`\n ${year}년 ${month}월 달력`);
  console.log(days.join("\t")); // 요일 헤더 출력

  // 빈칸 출력 (첫 주 시작 요일 전까지)
  let calendarLine = "";
  for (let i = 0; i < firstDay; i++) {
    calendarLine += "\t";
  }

  // 날짜 출력
  for (let day = 1; day <= daysInMonth; day++) {
    calendarLine += day + "\t";
    firstDay++;

    // 토요일(요일 인덱스 6)마다 줄 바꿈
    if (firstDay % 7 === 0) {
      console.log(calendarLine);
      calendarLine = "";
    }
  }

  // 마지막 줄 출력
  if (calendarLine !== "") {
    console.log(calendarLine);
  }
}
