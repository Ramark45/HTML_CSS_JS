class Circle {
    constructor(radius){
        this.radius = radius;
        }
    getArea(){
        let area=this.radius*this.radius;
        return area;
    }
    getPerimeter(){
        let perimeter=2*3.14*this.radius;
        return perimeter;
    }
}
let circle = new Circle(3);
console.log(circle.getArea());
console.log(circle.getPerimeter());