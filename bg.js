const body = document.querySelector("body");


const imageNumber = Math.floor(Math.random() * 3); // 랜덤숫자 뽑아주기 0~2

const images = new Image(); // new Image() 는 이미지 객체 생성해주는 함수
body.prepend(images);
images.src = `image/image0${imageNumber + 1}.jpg`;
images.classList.add("bgimage");

