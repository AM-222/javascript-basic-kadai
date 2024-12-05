//変数宣言・代入（1以上の正の整数をランダム設定）
let numMax = 15;
let num = Math.floor(Math.random() * numMax) + 1;
console.log("変数num：" + num);

//条件分岐
if(num % 15 == 0){
  console.log("3と5の倍数です");
} else if(num % 3 == 0){
  console.log("3の倍数です");
} else if(num % 5 == 0){
  console.log("5の倍数です");
} else {
  console.log(num);
}