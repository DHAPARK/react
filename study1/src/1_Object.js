//객체 만들기
const dog = {
    name: '루시',
    age:9,
    weight:2.5
};



const act = {
	'movie name':'ironman2',
	'actor name': '토니 스타크',
	alias:'ironman' 
}
console.log(dog.name);
console.log(dog.age);
console.log(dog.weight);

//객체 구조 분해
function print({weight, name, age}){
    console.timeLog(rucy.name);
    console.log(`${namee}라는 강아지는 나이가 ${age}살 이고,몸무게는 ${weight}kg입니다.`);
}

print(dog);
console.log('------------------------------');

const student = {a:'김사과',b:'오렌지',c:'바나나'};
const {a,b,c} = student;
console.log(a);
console.log(b);
console.log(c);



console.log('------------------------------');

const users = ['김사과','반하나','오렌지'];
const [kim,ban,oh] = users;
console.log(kim);
console.log(ban);
console.log(oh);


function print({weight,name,age}){
    console.log(`${name}라는 강아지는 나이가 ${age}살 이고,몸무게는 ${weight}kg 입니다.}`);
}
print(dog);

