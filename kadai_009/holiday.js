// 変数宣言
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//配列の要素数を取得
let num = holidays.length;
//console.log(num);

// for文の場合
for (let i = 0; i < num; i++) {
  console.log(holidays[i]);
}

// while文の場合
let j = 0;
while (j < num) {
  console.log(holidays[j]);
  j = j + 1;
}
