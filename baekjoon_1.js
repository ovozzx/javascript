
// Node.js (콘솔 기반) : 자바스크립트를 브라우저 밖, 즉 **컴퓨터(서버, 콘솔 등)**에서도 실행할 수 있도록 만든 런타임 환경입니다.

// 입력 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("이름을 입력하세요: ", function(name) {
  console.log("안녕하세요, " + name + "님!");
  rl.close();
});

// 출력
console.log("출력 테스트");

// #1 Hello World
console.log("Hello World!");

// #2 A+B
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
/* ✅ 설명
readFileSync('/dev/stdin'): 백준에서는 표준 입력을 통해 값을 받습니다.

.toString().trim().split(' '): 입력을 문자열로 만든 후, 공백을 기준으로 나눕니다.

Number(): 문자열을 숫자로 변환합니다.

console.log(): 결과를 출력합니다.*/