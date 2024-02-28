let unko = "Hello World!"

const bigUnko = "He..Hell...Hello World!";

let inoki = ['いーち', `にーい`, 'さーん', 'だー'];


// let number = 0;
// while (number < inoki/length) {
//     console.log(inoki[number]);
//     number++
// }

//if / else

//関数
const test = (arg) => {
    if(inoki.length > arg) {
        console.log('ボンバイエ！');
    } else {
        console.log('ボンバ。。');
    }
};


//オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToToilet: () => {
        console.log("Hello world!");
    }
};

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    window.alert('test');
})
 
