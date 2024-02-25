// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color
// function randomRGB() {
//     return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
// }


// função que deixa uma variação de azul e verde
function randomRGB() {
    return `rgb(0, ${random(0, 255)}, ${random(0, 255)})`;
}


function Ball(x, y, vel_x, vel_y, color, size){
    this.x=x;
    this.y=y;
    this.vel_x=vel_x;
    this.vel_y=vel_y;
    this.color=color;
    this.size=size;

    Ball.prototype.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        // ctx.arc(this.x,this.y,this.size,0,2*Math.PI); // desenhando circulos
        ctx.rect(this.x,this.y,this.size,this.size); // desenhando quadrados
        ctx.fill();
    };

    Ball.prototype.update = function (){
        if ((this.x + this.size >= width) || (this.x - this.size <=0)){
            this.vel_x=-this.vel_x;
        }
        if ((this.y + this.size >= height)||(this.y-this.size <=0)) {
            this.vel_y=-this.vel_y;
        }
        this.x+=this.vel_x;
        this.y+=this.vel_y;
    }
    Ball.prototype.collisionDetect = function () {
        for (let j=0;j < balls.length;j++){
            if(!(this==balls[j])) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = randomRGB();
                }
            }
        }
    }
}

let balls = [];

while (balls.length<25){
    let size = random(10,20);
    let ball = new Ball(
        random(0+size, width-size),
        random(0+size,height-size),
        random(-7,7),
        random(-7,7),
        randomRGB(),
        size,
    );
    balls.push(ball);
}

function loop(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0,0,width,height);

    for (let i=0;i<balls.length;i++){
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}

loop();