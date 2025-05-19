// 사용자에게 입력을 받는 함수 (prompt는 브라우저에서만 동작)
let input = prompt("1 이상 9 이하의 숫자를 입력하세요: ");
let num = parseInt(input);

// 조건문: 입력값 확인
if (isNaN(num) || num < 1 || num > 9) {
  console.log("잘못된 입력입니다. 1에서 9 사이의 숫자를 입력하세요.");
} else {
  console.log(`\n[${num}단 구구단 출력]`);

  // 반복문: 해당 숫자의 구구단 출력
  for (let i = 1; i <= 9; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);

    // 조건문: 결과값이 짝수인지 홀수인지 판별
    if (result % 2 === 0) {
      console.log(`→ ${result}는 짝수입니다.`);
    } else {
      console.log(`→ ${result}는 홀수입니다.`);
    }

    console.log("----------");
  }
}
