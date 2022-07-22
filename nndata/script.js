//let colors = [];
//let labels = [];

//const max = 10;
//let color = [];

//function _data() {
  //color = [];

  //for (let z=0;z<3;z++) {
    //color.push(Math.floor(Math.random()*255));
  //}

  //colors.push(color);
  //document.body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

  //labels.push(window.prompt("black or white"));

  //for (let o=0;o<labels.length;o++) {
    //if (labels[o]) {
      //labels[o] = 1;
    //}
    //else {
      //labels[o] = 0;
    //}
  //}
//}

//let _i = 0;
//let intervalTrue = true;

//function _start() {
  //if (!intervalTrue) {
    //console.log(colors);
    //console.log(labels);
  //}
  //setInterval(() => {
    //if (_i >= max) {intervalTrue=false;return;}
    //_data();
    //document.body.style.backgroundColor = `rgb(${colors[_i][0]},${colors[_i][1]},${colors[_i][2]})`;
    //_i++;
  //}, 5000);
//}

//document.body.addEventListener("click", _start());

//outputs
let colors = [];
let labels = [];

//random color picker
function randColor() {
  let col = [];
  for (let i=0;i<3;i++) {
    col.push(parseInt(Math.floor(Math.random()*255)));
  }
  console.log(col);
  return col;
}

//main data loop
function dataaa() {
  let m = randColor();
  //console.log(m.color);
}