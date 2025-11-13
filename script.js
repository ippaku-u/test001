const inputElement = document.getElementById('myInput');
const outputElement = document.getElementById('output');
const buttonElement = document.getElementById('myButton');

const OPTextList = [
  { keyword: "スケジュール", optext: "来週は隊員懇親会を行います。全員退勤のため、事前周知を行う事。" },
  { keyword: "懇親会", optext: "懇親会は例の場所で行います。" },
];

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
        outputElement.textContent = inputValue;
//ここまでがふつうにひょうじさせるとこ

//ここから条件分岐
    const keywordbox = { keyword: inputElement.value }

const keywordIndex = keywordbox => {
  const OPText = OPTextList.find(p => p.keyword === keywordbox.keyword).optext;

       outputElement.textContent = OPText;
}; 

    
    outputElement.textContent = pokemonNumber;
});
