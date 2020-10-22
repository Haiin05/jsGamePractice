// 1~9랜덤숫자를 먼저 뽑아보자
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomList = [];
for (var i = 0; i < 4; i += 1) {
    var randomNumber = numberList.splice(Math.floor(Math.random() * (9 - i)), 1);
    randomList.push(randomNumber[0]);  
}
// Math.random() 함수로 랜덤숫자를 찾고,
// 0~8 의 자리수 중 랜덤으로 하나를 뽑아 새로운 배열에 넣음.
//splice는 기본으로 배열을 반환하기 떄문에 숫자만 얻기위해 배열의 특징인 자리수로 반환.

var formTag = document.querySelector('form'); // js에서 form 과 input 태그를 선택해줌.
var inputTag = document.querySelector('input'); 
var resultDiv = document.querySelector('#result');
var wrong = 0;
formTag.addEventListener('submit', function(event) { // 중요! addEventListener에서 'submit' 을 사용하기 위해서는 form 에 적용!(input 아님!)
    event.preventDefault(); // event.preventDefault(); 는 'submit'의 기본 특성인 '새로고침'을 막는 기능.
    var answer = inputTag.value; // 전역변수로 설정하면 안먹힌다.
    var answerList = answer.split('')
    if (randomList.join('') === answer) {
        console.log(randomList, answer, answerList)
        resultDiv.innerHTML = 'Home Run!!! Congratulations!'; // html 태그를 선택하여 text넣어주기.
        inputTag.value = "";
        inputTag.focus();
        console.log(randomList, answer, answerList)
        numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        randomList = [];
        for (var i = 0; i < 4; i += 1) {
            var randomNumber = numberList.splice(Math.floor(Math.random() * (9 - i)), 1);
            randomList.push(randomNumber[0]);
        }
        wrong = 0;   
    } else {
        wrong += 1;
        if (wrong < 5) {
            var strike = 0;
            var ball = 0;
            for (var i = 0; i < 4; i += 1) {
                if (Number(answerList[i]) === randomList[i]) {
                    strike += 1;
                } else if (randomList.indexOf(Number(answerList[i])) > -1) {
                    ball += 1;
                } else {
                }
            }
            inputTag.value = "";
            inputTag.focus();
            resultDiv.innerHTML = strike + ' strike, ' + ball + ' ball.(' + (5 - wrong) + ' chances left)';
        } else {
            inputTag.value = "";
            inputTag.focus();
            numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            randomList = [];
            for (var i = 0; i < 4; i += 1) {
                var randomNumber = numberList.splice(Math.floor(Math.random() * (9 - i)), 1);
                randomList.push(randomNumber[0]);
            }
            resultDiv.innerHTML = 'It was (' + randomList + ')😛 Try again!';
        }           
    }   
});

