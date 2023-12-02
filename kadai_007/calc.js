
// 変数numに値の代入（0~5のランダムな整数）
let num = Math.floor(Math.random() * 20);

//変数numの出力（確認用）
console.log(num);

// 変数numの値が３の倍数であれば３の倍数ですと表示
if (num % 3 === 0) {
    console.log('3の倍数です');
}

// 変数numの値が５の倍数であれば５の倍数ですと表示
if (num % 5 === 0) {
    console.log('5の倍数です');
}

// 変数numの値が３と５の倍数であれば３と５の倍数ですと表示
if (num % 15 === 0) {
    console.log('3と5の倍数です');
}

// それ以外であれば変数numを表示
else {
    console.log(num);
}