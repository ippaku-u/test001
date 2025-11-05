// HTML要素を取得する
const inputElement = document.getElementById('myInput');
const outputElement = document.getElementById('output');

// inputイベントを監視する
inputElement.addEventListener('input', () => {
    // 入力フィールドの値を取得する
    const inputValue = inputElement.value;

    // 取得した値を表示用の要素にセットする
    outputElement.textContent = inputValue;
});
