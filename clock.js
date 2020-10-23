const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime () {
    const date = new Date(); // 전체 시간 불러오는 함수
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    // `` 백틱안에는 아무거나 다 써도 됨. 그대신 함수 쓸때는 ${함수} 형태로 써주기
    // 짧은 if문!!! a조건 ? b : c 는 a조건이 참이면 b, 아니면 c 
}

function init () {
    getTime();
    setInterval(getTime, 1000); // setInterval(함수, 밀리언세컨) 함수자리에 ()이거 쓰지 않고 1000밀리언세컨은 1초

};

init();