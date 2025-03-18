const colorPal= ["#FFF05A", "#FFD25A", "#FFAA5A", "#FF785A", "#191919"];
const n = 53
let grid = []
function setup() {
let canvas = createCanvas(1000,1000);
canvas.parent('PolarNoiseGlitch.js');
	  angleMode(DEGREES)
    for (let x = 0; x < n; x++) {
        grid[x] = []
    }
    initialize()
}

function initialize(){
    for (let r = 0; r < n; r++) {
        for (let theta = 0; theta < 360; theta++) {
            grid[r][theta] = int(random(0,colorPal.length));
        }
    }
}


function draw() {
let next = []
//let's try spiral

    for (let r = 0; r < n; r++) {
        next[r] = []
        for (let theta = 0; theta < 360; theta++) {
					  x = width/2+r*cos(theta)
					  y = height/2+r*sin(theta)
            const R = noise(x / 47, y / 47, frameCount / 47)
            const sw = int(20 * R) % 5
            switch (sw) {
                case 0:
                    val = grid[(r - 1 + n) % n][theta] // radially out
                    break
                case 1:
                    val = grid[(r + 1) % n][theta] // radially in
                    break
                case 2:
                    val = grid[r][(theta - 1) % 360] // clockwise
                    break
                case 3:
                    val = grid[r][(theta + 1) % 360] // counter clockwise
                    break
                case 4:
                    val = grid[r][theta] // self
            }
						//val = grid[r+1][theta+1]
            next[r][theta] = val
        }
		}
    grid = next

    background(255)
    fill(0)
    noStroke()
    let xStep = ceil(1.2*width / n)
    let yStep = ceil(1.2*height / n)
		fill(colorPal[0])
		ellipse(width/2,height/2,width/2,height/2)
    for (let r = 4; r < n; r++) {
        for (let theta = 0; theta < 360; theta++) {
            switch (grid[r % n][theta]) {
            case 0:
                fill(colorPal[0])
                break
            case 1:
                fill(colorPal[1])
                break
             case 2:
                fill(colorPal[2])
                break
              case 3:
                fill(colorPal[3])
                break
                case 4:
                fill(colorPal[4])
        }
        rect(width/2+r*cos(theta) * xStep, height/2+r*sin(theta) * yStep, xStep, yStep)
        }
    }
}
