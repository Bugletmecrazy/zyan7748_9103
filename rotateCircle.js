class RotateCircle {
  constructor(x, y, r, s = 1) {
    this.x = x
    this.y = y
    this.r = r
    this.angle = 0
    this.s = s
    this.randomAngle = random(360)
    this.innerCircleLength = Math.round(random(3, 5))
    this.randomInners = Array.from({length: this.innerCircleLength}).map(() => random([0.1, 0.3, 0.5, 0.7, 0.9]))
    
    this.randomColors = Array.from({length: this.innerCircleLength + 1}).map((a, b) => color(generateColor()))
    this.angleSpeed = random([15, 18, 20, 24])
  }
  
  show() {
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    
  
    fill(this.randomColors[0])
    
    ellipseMode(CENTER)
    
    ellipse(0, 0, this.r * 2 * this.s, this.r * 2 * this.s)
    
    for (let i = 1; i < this.randomInners.length + 1; i++) {
      fill(this.randomColors[i])
      ellipse(0, 0, this.r * 2 * this.randomInners[i] * this.s, this.r * 2 * this.randomInners[i] * this.s)
    }
    
    if (this.s < 1) {
      var gapR = this.r * (1 - this.s) / 2
      ellipse(0, this.r - gapR, gapR * 2, gapR * 2)
    }
    
    this.angle += this.angleSpeed
   
    pop()
    
    push()
    translate(this.x, this.y)
    rotate(this.randomAngle)
    line(0, 0, 0, this.r * this.s)
    pop()
  }
}

function generateColor() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
  	arr.push(floor(random(128) + 128));
  }

  return `rgb(${arr[0]},${arr[1]},${arr[2]})`;
}