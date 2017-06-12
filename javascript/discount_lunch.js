/**
 * "처음 만나는 자바스크립트" 책에 기재된 실습문제 활용  
 * : 논리연사자를  활용하여 시간에 따라 다른 메세지 표시하기
 * : 조건 1. pm 12시 ~ 2시 사이는 '도시락 30% 할인'
 *       2. pm 7시 ~ 9시 사이는  '도시락 2+1!'
 *       3. am 11시와 pm 3시에 정각에는 '선착순 10명 1+1' 
 *       4. 그 외는  '맛있는 도시락 사세요!'
 */

var hour = new Date().getHours();

if(hour >= 12 && hour <=14){
    window.alert('도시락 30% 할인');
}else if(hour === 11 || hour === 15){
    window.alert('선착순 10명 1+1')
}else if(hour >= 19 && hour <= 21){
    window.alert('도시락 2+1!');
}else{
    window.alert('맛있는 도시락 사세요!')
}
