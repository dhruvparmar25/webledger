//Array Method

/* var num = new Array()

for (g = 0; g < 3; g++) {
    num[g] = prompt("Enter value :")
}
document.write("<ul>")
for (var i = 0; i < 3; i++) {
    document.write("<li>" + num[i] + "</li>")
}
document.write("</ul>") */

// 35 Multidimentional Arrays
/*
var styden = [
    ["Dhruv", 21, "navsari"],
    ["jay", 29, "Surat"],
    ["Ram", 21, "Mumbai"]
];
document.write("<table border='1px' cellspacing='0'>");
for (i = 0; i < 3; i++) {
    document.write("<tr>")
    for (q = 0; q < 3; q++) {
        document.write("<td>" + styden[i][q] + "</td>");
    }
    document.write("</tr> ")
}
document.write("</table>");
*/
//37 Array Methods
/*
var a=[1,2,4,45,3,56,30]
document.write(a)
a.sort()
document.write("<br>"+a)
a.reverse()
document.write("<br>"+a)
*/

//38 continue... push pop

/*
var a=[1,2,4,45,3,56,30]
document.write(a)
a.push(100)
document.write("<br>"+a)
a.pop()
document.write("<br>"+a)
*/

//39    continue... shift  unshift
//40 con... concat,join

// concat &join
/*
var a=["frirst","secound","thrird"]
document.write("<br>"+a)
var b=["four","five"]
document.write("<br>"+b)

var d =a.concat(b);
document.write("<br>"+d)

var c =d.join("+")
document.write("<br>"+c)
*/

// 40 slice,splice

/*
var a=["frirst","secound","thrird","four","five"]
document.write("<br>"+a)
var b = a.slice(1,4)// 4 nahi aayegi
document.write("<br>"+b)

var a=["frirst","four","five"]
document.write("<br>"+a)

a.splice(0,0,"secound","third")
document.write("<br>"+a)
*/



/*
var student = {
    name: "Dhruv",
    age: 21,
    location: "Navsari"
};
for (var key in obj) {
    document.write(key+ " : " + student[key])
}
 */

//time date
/*
var time = new Date();
document.write(time.getMonth()); 
*/

/*
var a = document.getElementById("inner").lastElementChild.addEventListener("mouseenter",function(){
    this.style.backgroundColor="red"
})
console.log(a)

var newElement = document.c("h1");


console.log(newElement)
*/
/*

var target = document.getElementById("list");
var oldvalue=target.children[1];

var newElement=document.createElement("li");
var newtext=document.createTextNode("Dhruv")

newElement.append(newtext);
console.log(target)

target.replaceChild(newElement,oldvalue)
*/
/*
function focusfunction(abc){
   abc.style.background="lightblue";
}
function blurfunction(xyz){
    xyz.style.background="";
}
function inputfunction(abc){
   var x=  abc.value; 
   document.getElementById("test").innerHTML=x;
}

var a =0;
var id = setTimeout(animation,1000);
function animation(){


    a = a+10;
    var target = document.getElementById("box");
    target.style.width = "500px";}
*/

var n = "name"

var Student = {
    [n] :"Dhruv Parmar",
    course:"mca",
    detail:function(){
        return `${this.name} is student of ${this.course} `

    }
}

console.log(Student);
console.log(Student.detail());