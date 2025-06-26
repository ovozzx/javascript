let max = new Map();

// set으로 맵 객체에 삽입
max.set('id', 0);
max.set('이름', '마이클');
max.set('전공', '영문학');
max.set('나이', 25);

max.set('id', 1);
max.set('이름', '제임스');
max.set('전공', '국문학');
max.set('나이', 24);


console.log(max); 
// get으로 맵 객체 조회 -> key 중복되어 제임스 정보로 덮어씌워짐
console.log(max.get('이름')); // "마이클"

// (1) 맵안의 맵
max = new Map();

max.set(0, new Map([ // (key, value),  Map이나 Object의 value는 역시 단일 값이지만, 그 값 자체가 배열이나 객체라면 여러 값을 포함할 수 있습니다.
  ['이름', '마이클'], // (key, value)
  ['전공', '영문학'],
  ['나이', 25]
]));

max.set(1, new Map([
  ['이름', '제임스'],
  ['전공', '국문학'],
  ['나이', 24]
]));

console.log(max.get(0).이름); // undefined -> 맵은 . 표기법으로 접근 못 함
console.log(max.get(1).전공); // undefined -> 맵은 . 표기법으로 접근 못 함
console.log(max.get(0).get('이름')); // '마이클' 출력
console.log(max.get(1).get('전공')); // '국문학' 출력


// (2) 맵안의 객체
max = new Map();

max.set(0, {
  이름: '마이클',
  전공: '영문학',
  나이: 25
});

max.set(1, {
  이름: '제임스',
  전공: '국문학',
  나이: 24
});

console.log(max.get(0).이름); // 마이클
console.log(max.get(1).전공); // 국문학
