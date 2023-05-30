console.log("Starting")

//Factory function

function createCircle(radius){
    return {
        radius,
        area: function(){
            return Math.PI *(this.radius **2);
        }
    }
}

let circle1 = createCircle(5);
console.log(circle1.area());

//Constructor function

function Circle(radius){
    console.log("this", this);
    this.radius = radius;
    this.area = function(){
        return Math.PI *(this.radius **2);
    }
    this.draw = function(){
        console.log("Drawing Circle");
    }
}

let circle2 = new Circle(3);
console.log(circle2.area());
circle2.draw();