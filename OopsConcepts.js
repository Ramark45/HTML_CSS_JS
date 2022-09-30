class Student{
    constructor(name,age,grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
}
class StudyingStudent extends Student{
    constructor(name,age,grade,stream){
        super(name,age,grade);
        this.stream=stream;
    }
}
const ObjectOne=new StudyingStudent("Ramar",22,"S","B.Tech");
console.log(ObjectOne.name);
console.log(ObjectOne.age);
console.log(ObjectOne.grade);
console.log(ObjectOne.stream);
