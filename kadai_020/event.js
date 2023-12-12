// 定数に代入する
const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

Btn.addEventListener('click', () => {
    Text.textContent = 'ボタンをクリックしました';
});