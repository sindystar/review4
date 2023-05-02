/*

setTimeout(() => {
  함수내용
}, 일정시간);
일정시간 뒤에 함수를 한번만 실행하고 끝남 

setInterval 우리가 정해준 시간동안 계속적으로 반복 진행 


*/

counter("h1", 365, 2000);

function counter(el, num, time) {//el 적용할요소, num 최종 도달할 값, time 기간 

  const item = document.querySelector(el); //매개 변수로 반드시 문자열 ""로 안에 대상을 적어준다

  let current_num = parseInt(item.innerText); //대상의 안에 있는 값을 정수로 변환 
  let count_num = num - current_num; //count_num은 남은 값이 된다 
  let interval = parseInt(time / count_num); //반복횟수

  let timer = setInterval(() => {
    current_num++;
    if(current_num == num) {
      clearInterval(timer); //setInterval 을 취소 무효화 하는 코드 
    }
    item.innerText = current_num;
  }, interval);
}