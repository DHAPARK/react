const dog = {
    name:'루시'
};

const cuteDog = {
    ...dog,
    age:9
}

const whiteCuteDog = {
    ...cuteDog,
    color:'white'
}

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);

console.log('-----------------');

const student = ['김사과','오렌지','반하나','이메론'];
const addStudent = [...student,'류정원'];
console.log(student);
console.log(addStudent);