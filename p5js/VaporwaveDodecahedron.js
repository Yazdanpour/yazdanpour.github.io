new p5(function(p) {
    // Define phi outside of functions, scoped to the instance
    let phi = (1 + p.sqrt(5)) / 2;

    p.setup = function() {
        let canvas = p.createCanvas(1000, 1000, p.WEBGL);
        canvas.parent('VaporwaveDodecahedron.js'); // Replace with your actual <div> ID
        p.camera(0, 0, 1000, 0, 0, 0, 0, 1, 0);
    };

    p.draw = function() {
        let backgroundColor = p.color(233, 221, 255);
        p.background(backgroundColor);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.stroke(0);
        p.strokeWeight(2);
        p.scale(15);

        let vertices = [
            p.createVector(phi, phi, phi),
            p.createVector(phi, phi, -phi),
            p.createVector(phi, -phi, phi),
            p.createVector(phi, -phi, -phi),
            p.createVector(-phi, phi, phi),
            p.createVector(-phi, phi, -phi),
            p.createVector(-phi, -phi, phi),
            p.createVector(-phi, -phi, -phi),
            p.createVector(0, (phi * phi), 1),
            p.createVector(0, (phi * phi), -1),
            p.createVector(0, -(phi * phi), 1),
            p.createVector(0, -(phi * phi), -1),
            p.createVector((phi * phi), 1, 0),
            p.createVector((phi * phi), -1, 0),
            p.createVector(-(phi * phi), 1, 0),
            p.createVector(-(phi * phi), -1, 0),
            p.createVector(1, 0, (phi * phi)),
            p.createVector(1, 0, -(phi * phi)),
            p.createVector(-1, 0, (phi * phi)),
            p.createVector(-1, 0, -(phi * phi))
        ];

        let vaporwaveColors = [
            p.color(153, 51, 255), // purple
            p.color(255, 0, 255), // magenta
            p.color(0, 255, 255), // cyan
            p.color(255, 102, 102), // pink
            p.color(255, 0, 128), // hot pink
            p.color(255, 153, 0), // orange
            p.color(0, 255, 128), // mint green
            p.color(51, 255, 153), // green
            p.color(255, 255, 0), // yellow
            p.color(255, 51, 153), // pink-red
            p.color(255, 153, 255), // lavender
            p.color(0, 204, 204)   // teal
        ];

        let faces = [
            [7, 11, 10, 6, 15],
            [6, 10, 2, 16, 18],
            [15, 6, 18, 4, 14],
            [18, 16, 0, 8, 4],
            [13, 2, 16, 0, 12],
            [11, 3, 17, 19, 7],
            [19, 17, 1, 9, 5],
            [9, 1, 12, 0, 8],
            [15, 7, 19, 5, 14],
            [11, 10, 2, 13, 3],
            [14, 5, 9, 8, 4],
            [17, 3, 13, 12, 1]
        ];

        let j = 0;
        for (let k = 0; k < faces.length; k++) {
            p.fill(vaporwaveColors[j]);
            p.beginShape();
            for (let i = 0; i < 5; i++) {
                p.vertex(
                    10 * vertices[faces[k][i]].x,
                    10 * vertices[faces[k][i]].y,
                    10 * vertices[faces[k][i]].z
                );
            }
            p.endShape(p.CLOSE);
            j += 1;
        }
    };
}, 'VaporwaveDodecahedron.js'); // Optional: Tie to the container explicitly
