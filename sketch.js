let playerData;
let randomNumber = Math.floor(Math.random() * 199);
let norrisJokes = [
'Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.',
'Chuck Norris doesnt read books. He stares them down until he gets the information he wants.',
'Chuck Norris doesnt read books. He stares them down until he gets the information he wants.',
'When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.',
'Time waits for no man. Unless that man is Chuck Norris.',
'Chuck Norris once shot down a German fighter plane with his finger. By yelling "Bang!"',
'If you spell Chuck Norris in Scrabble, you win. Forever.',
'Chuck Norris doesnt wash his clothes. He disembowels them.',
'Chuck Norris doesnt churn butter. He roundhouse kicks the cows and the butter comes straight out.',
'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.',
'There is no theory of evolution, just a list of creatures Chuck Norris allows to live.',
];


let randomItem = norrisJokes[Math.floor(Math.random()*norrisJokes.length)];

//document.body.innerHTML = randomItem;



function preload() {
    loadJSON("https://api.icndb.com/jokes/", dataReceived);
    chuckImg = loadImage('1.png');
    chuck2Img = loadImage('2.png');
    chuck3Img = loadImage('3.png');
    chuck4Img = loadImage('4.png');
    chuck5Img = loadImage('5.png');
    chuck6Img = loadImage('6.png');
    chuck7Img = loadImage('7.png');
    chuck8Img = loadImage('8.png');
    chuck9Img = loadImage('9.png');
    chuck10Img = loadImage('10.png');
}


function setup() {
    createCanvas(1580,790);
    background(0);
    
}

function draw() {
    background(0);
    fill(255);
    textSize(25);
    text(randomItem,20,20);
    image(chuckImg, 10, 55, 300, 400);
    image(chuck2Img, 400, 55, 300, 400);
    image(chuck3Img, 720, 55, 300, 400);
    image(chuck4Img, 200, 400, 300, 400);
    image(chuck5Img, 1050, 55, 300, 400);
    image(chuck6Img, 600, 400, 300, 400);
    image(chuck7Img, 900, 400, 300, 400);

}


function dataReceived(data) {
    playerData = data; 
}

