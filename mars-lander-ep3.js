/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let [left, mid, right, flahY] = [0,0,0,0];
let outputAngle = 0;
let outputThurst = 0;
let tCase = -1;
let mark = false;
let high = 0;


const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
let surfaceData = [];
for (let i = 0; i < surfaceN; i++) {
    let inputs = readline().split(' ');
    surfaceData[i] = { 'X': inputs[0], 'Y': inputs[1]};
    high = Math.max(inputs[1], high)
    
    if( i>0 && surfaceData[i-1].Y === surfaceData[i].Y){
        left = parseInt(surfaceData[i-1].X);
        right = parseInt(surfaceData[i].X);
        flatY = parseInt(surfaceData[i].Y)
        mid = (left + right) / 2;
        
    }
}


// game loop
while (true) {
    let inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    const fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    const rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    const power = parseInt(inputs[6]); // the thrust power (0 to 4).

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    if (tCase == -1) {
        if (hSpeed == 0) tCase = 1;
        else tCase = 0;
    }

    if (tCase == 0) {
        if (Y - flahY < 800) {
            if (vSpeed <= -39) console.log("0 4");
            else console.log("0 3");
            continue;
        }
        else if (X <= right) {
            console.log("-45 4");
            continue;
            }
        else if (vSpeed <= -20) {
            console.log("0 4");
            continue;
        }
        else if (vSpeed <= -12) {
            console.log("0 2");
            continue;
        }
        else { 
            console.log("45 4");
            continue;
        }
    }

    if (tCase == 1) {
        if (vSpeed < -45 || Y <= 1135) {
            console.log("0 4");
            continue;
        }
        else if (X <= left) {
            console.log("-32 3");
            continue;
        }
        else if (vSpeed == 0 && Y > high) {
            console.log("0 3");
            continue;
        }
        else if (vSpeed < 0 || Y < high) {
            console.log("0 4");
            continue;
        }
        else if (vSpeed >= 12 || mark) {
            mark = true;
            console.log("45 4");
            continue;
        }
        else {
            console.log("0 4");
            continue;
        }
    }
}


