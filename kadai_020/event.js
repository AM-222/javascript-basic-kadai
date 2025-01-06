const cBtn = document.getElementById('btn');

//ボタン押下後にテキスト内容を変更するidを取得
const cH2 = document.getElementById('text');

//ボタンがクリックされた時の処理
cBtn.addEventListener('click', () => {
  cH2.textContent = 'ボタンをクリックしました';
});