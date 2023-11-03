let circles = []

function setup() {
  createCanvas(600, 600);
  background('#FF6C37')
  angleMode(DEGREES)
  
  var amount = 8
  var r = width / amount / 2 * 1.1
  
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      var isSecCircles = i % 2 === 1 ? r : 0
      circles.push(new RotateCircle((2 * (j + 1)) * r - isSecCircles, (2 * (i + 1) - 1) * r, r, 0.84))
    }
  }
  
   
}

function draw() {
  
  translate(width / 2, - height / 2)
  rotate(45)
  for (const circle of circles) {
    circle.show()
  }
  
}