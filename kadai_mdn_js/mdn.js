//現在のタイムスタンプを取得
const aaa = new Date();

//タイムスタンプを加工して出力
console.log(aaa.getFullYear()
          + "年"
          + (aaa.getMonth()+1)
          + "月"
          + aaa.getDate()
          + "日"
          );