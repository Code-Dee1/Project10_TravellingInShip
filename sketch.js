var marks=[30,45,60,75,90]

function scoreaverage(){
  var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
  var avg=sum/marks.length
  console.log(avg)
}
function setup() {
  createCanvas(400, 400);
  scoreaverage();
}

function draw() {
  background(220);
}