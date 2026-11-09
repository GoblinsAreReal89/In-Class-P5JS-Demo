let snailRef;


async function setup() {
    snailRef = await loadImage('assets/ReferenceSnail.png');
    createCanvas(800, 600);
    textSize(55)
    textAlign(CENTER,CENTER)
    
}

timeVar = 0

function draw() {
    timeVar = timeVar + 1
    rectMode(CENTER);
    //image(snailRef,0,0,800,600); //im using this to guide my shapes, it shouldn't show up in the final
    background(70,120,220,225);
    stroke(0,100);
    fill(50,210,120,220);
    rect(400,400,800,400);


325, 100

//heart shape
stroke(0,0)
fill(227, 78, 113)
bezier(mouseX, mouseY, mouseX + 60,mouseY - 30 ,mouseX + 160,mouseY,mouseX,mouseY + 170)
bezier(mouseX, mouseY, mouseX - 60,mouseY - 30 ,mouseX - 160,mouseY,mouseX,mouseY + 170)
stroke(227,78,113)
line(mouseX,mouseY,mouseX,mouseY+170)
stroke(0,0)

//flying bird
if (timeVar > 420) 
{
timeVar = -100
}
fill(20,20,80,225)
arc(150 + timeVar * 2, 50, 50, 50, 3, 6, CENTER)
fill(70,120,220,255)
circle(150 + timeVar * 2,50,25)

fill(20,20,80,225)
arc(190 + timeVar * 2, 50, 50, 50, 3.5, 6, CENTER)
fill(70,120,220,255)
circle(190 + timeVar * 2,50,25)



//These variables are for the green stem of the carrot
//Im using them to quickly reference the position
let stemTopX = 40;
let stemtopY = 170;
let stemCrownX = 115;
let stemCrownY = 240;
let stemBaseX = 90;
let stembaseY = 350;

    //This for loop makes the carrot stem and copies it with a slight tweak a couple times
    for (let j=0; j<4; j++)
        {
        stroke(100,240 + j,120 + j * 2)
        strokeWeight(10 + j * 2)
        fill(70,230 + j * 3,70 + j * 3,0)
        bezier(stemTopX - j * 10,stemtopY + j * 25,stemBaseX + j * 3,stembaseY - j * 2,stemBaseX + 20,stembaseY - 10,stemCrownX - j * 12,stemCrownY - j * 14)
        }


    //these two for loops make the carrot body
    //This first bit is the left half of the carrot, before the elbow bend
    noStroke()
    for (let i=0; i<16; i++)
        {
        fill(235 + i * 4,165 + i,100,255);
        circle(110 + i*10, 320 + i * 5, 150 - i * 3)
        };
    
    //This is the part further on the right, it starts in the elbow bend
    for (let i=0; i<20; i++)
        {
        circle(270 + i*9.5, 400 + i * 2.75, 102 - i * 3.25)
        };

    
    //Blushing loops
    for (let q = 0; q<4; q++)
    {
        stroke(250,60,235)
        strokeWeight(2)
        line(40 + q * 6, 320 + q * 6 , 50 + q * 6 , 310 - q * 6)
    }

        for (let q = 0; q<4; q++)
    {
        stroke(250,60,235)
        strokeWeight(2)
        line(120 + q * 6, 290 + q * 6 , 130 + q * 6 , 280 - q * 6)
    }



//Variables used for snail body
let snailPointX = 450;
let snailPointY = 420;
let snailTailX = snailPointX + 300
let snailTailY = snailPointY - 45

//Snail body
fill(94, 119, 207)
stroke(247, 114, 187)
strokeWeight(2)
bezier(snailPointX - 1,snailPointY - 11,snailPointX + 70,snailPointY + 40,snailPointX + 95,snailPointY - 15,snailTailX,snailTailY)
bezier(snailTailX - 300,snailTailY + 35,snailPointX - 45,snailPointY - 100,snailTailX - 90,snailTailY - 75,snailTailX,snailTailY)


let snailstalkX = snailPointX + 45
let snailstalkY = snailPointY - 15
let snailEyeX = snailstalkX + 15
let snailEyeY = snailstalkY - 135
let snailPeeperX = snailPointX - 35
let snailPeeperY = snailPointY - 115

//these are the snail eye stalks
bezier(snailstalkX, snailstalkY, snailstalkX - 25, snailstalkY - 15,snailEyeX - 15,snailEyeY + 30, snailEyeX, snailEyeY)
bezier(snailstalkX - 15, snailstalkY - 8, snailstalkX - 25, snailstalkY - 35,snailPeeperX + 35,snailPeeperY + 10, snailPeeperX, snailPeeperY)


//These are the variables used for the snail shell
let shellStartPointX = 555
let shellStartPointY = 380
let shellEndPointX = 790
let shellEndPointY = 220

//This chunk of code is the snail shell
fill(255, 232, 144)
bezier(shellStartPointX, shellStartPointY -1, 600, 405, 780, 395, shellEndPointX, shellEndPointY)
bezier(shellStartPointX, shellStartPointY, 450, 225, 645, 136, shellEndPointX, shellEndPointY + 1)

fill(255);
stroke(0);
strokeWeight(4);
textStyle(BOLD)
text("Love Wins.", 400, 550)
strokeWeight(2)
}


