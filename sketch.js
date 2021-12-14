//이 프로그램은 콘텐츠프로그래밍 수업의 기말과제로 

//조원: 20210844 권주연
//조원: 20210862 김서윤

var a;
var opening;
var cam;

function preload() {
  opening = loadImage("Opening.png");
  cam = createCapture(VIDEO);
  cam.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 0;
  initialize();
  animate();
}
  
function draw() {
  background(0,0,0);
  a=a+1;
  console.log(a);
  
  if (a<600) {
    image(opening, 0, windowHeight/2-windowWidth*0.69/2, windowWidth, windowWidth*0.69);
  }
  if (a>600) {
    image(cam, 0, 0, windowWidth, windowHeight);
  }
}

function mousePressed(){
  a = 600;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}