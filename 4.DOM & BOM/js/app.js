/*
var text = document.getElementById("first");
var p = document.getElementsByClassName('demo')[0];
var p_tag = document.getElementsByTagName("p")[3];
var name_tag = document.getElementsByName("username")[0];


console.log(p);
console.log(name_tag);

text.innerText = "<i>WELCOME</i>"


// attribute / getAttribute / setAttribute

function Change() {
    var img = document.getElementById('photo');
    //console.log(img.getAttribute('id'));
    //img.setAttribute('class','active')

    img.setAttribute('class','active')
    //img.id = "photos/logo.jpg"
}


document.writeln("1")
document.writeln("1")
document.writeln("1")
document.writeln("1")
document.writeln("1")
document.writeln("1")
document.writeln("1")


var user_name = "ALTAN IBRAHIMLI"
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
h1.setAttribute('class','text')
h1.innerHTML = user_name;
var div = document.getElementById('product');
div.appendChild(h1);

// btn.onclick = function() {

// }

// btn.onclick = () => {

// }

var x = document.getElementById('first');
x.innerHTML = new Date().getFullYear();

var btn = document.getElementById('btn1');
function Click(){
    var p = document.querySelectorAll('.demo');
    p.style.color = "red";
}

 //getelementsbyclassname[0]
var p_all = document.querySelectorAll('.demo')[2];

console.log(p_all);


function Over(){
    var div = document.getElementById('mouse');
    div.style.backgroundColor = 'black'
}

function Leave(){
    var div = document.getElementById('mouse');
    div.style.backgroundColor = 'red'
}
*/


// function Change() {
//     var select = document.getElementById('slc')
//     select.style.backgroundColor = 'red';
// }

// var inp = document.getElementById('inp');
// function Focus(){
//     inp.style.width = "200px";
// }

// function Blur() {
//     inp.style.width = "100px";
// }

// var x = document.querySelector('.X');
// var y = document.querySelector('.Y');
// var z = document.querySelector('.Z');

// // stopPropagation

// x.addEventListener('click',function(e){
//     console.log(e.target.className);
//     e.stopPropagation();
//     console.log("RED");
// })

// //x.removeEventListener('click');

// y.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("BLACK");
// })

// z.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("WHITE");
// })


// var d = document.getElementById('bom')
// console.log(d.nextSibling)

// function Click() {
//     var div = document.getElementById('first');

//     div.classList.add('active')
// }

// function Remove() {
//     var div = document.getElementById('first');

//     div.classList.remove('active')
// }


// function Click() {
//     var div = document.getElementById('first');
//     div.classList.toggle('active')
// }


// function Open() {
//     var icon = document.getElementById('icon');
//     if(icon.className==="fas fa-bars") {
//         icon.className = 'fa-solid fa-xmark'
//     }
//     else{
//         icon.className="fas fa-bars"
//     }
//     var side = document.getElementById('sidebar')
//     side.classList.toggle('side-active')
// }


function ShowTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var text = document.getElementById('time');
    text.innerHTML = `${h} : ${m} : ${s}`
}

setInterval(ShowTime,1000);


var x = "10"
var y = "2"
