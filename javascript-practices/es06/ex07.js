/**
 * Class Rect
 */

class Rect {
    constructor(w,h){
        this.w = w;
        this.h = h;
    }

    draw(){
        console.log(`Rect(w:${this.w},h:${this.h})`);
    }
}

// test
const r01 = new Rect(10,20);
const r02 = new Rect(100,200);

r01.draw();
r02.draw();

/*
    cf. constructor function Circle
*/

const Circle = function(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function(){
    console.log(`Circle(x:${this.x},y:${this.y},r:${this.r})`);
}

const c01 = new Circle(10,20,30);
const c02 = new Circle(100,200,300);

c01.draw();
c02.draw();

/*
    extends
*/
class Shape {
    constructor(bg,ln){
        this.bg = bg;
        this.ln = ln;
    }

    draw(){
        console.log('도형을 그릴 수 없음')
    }
    area(){
        console.log('넓이 못 구함')
    }
}

class Triangle extends Shape {
    constructor(bg,ln,w,h){
        super(bg,ln);
        this.w = w;
        this.h = h;
    }

    // override
    draw(){
        console.log(`Triangle: (bg:${this.bg},ln:${this.ln},w:${this.w},h:${this.h})`)
    }
}

const tr01 = new Triangle('red','yellow',10,20);
tr01.draw();
