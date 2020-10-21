// 1~9랜덤숫자를 먼저 뽑아보자
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomList = [];
// Math.random() 함수로 랜덤숫자를 찾고,
// 0~8 의 자리수 중 랜덤으로 하나를 뽑아 새로운 배열에 넣음.
for (var i = 0; i < 4; i += 1) {
    var randomNumber = numberList.splice(Math.floor(Math.random() * (9 - i)), 1);
    randomList.push(randomNumber[0]);  
    //splice는 기본으로 배열을 반환하기 떄문에 숫자만 얻기위해 배열의 특징인 자리수로 반환.
}
console.log(randomList);

var formTag = document.querySelector('form');
var inputTag = document.querySelector('input');
// js에서 form 과 input 태그를 선택해줌.
// 중요! addEventListener에서 'submit' 을 사용하기 위해서는 form 에 적용!(input 아님!)
// event.preventDefault(); 는 'submit'의 기본 특성인 '새로고침'을 막는 기능.
formTag.addEventListener('submit', function(event) {
    event.preventDefault();
    var answer = inputTag.value;
    console.log(answer);
    if (randomList.join('') === answer) {
        var resultWord = document.querySelector('#result');
        resultWord.innerHTML = 'Home Run!!! Congratulations!'; // html 태그를 선택하여 text넣어주기.
       
    }
    console.log(answer, randomList.join('')===answer);


});




