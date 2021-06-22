var message="wtf";
function a(){
    var message = "allow";


}
console.log(a)
function b(){
    
    console.log("which one?"+message)
}
b();
var y=5;
var x='5';
console.log(y)
if (y==x){
    console.log("y is ==x");
}
if (y=x){
    console.log("y is =x");
}

else{
    console.log("y is defined");
}
var x=0;
for(var i=0;i<10;i++){
    x+=1
    console.log("x="+x);


}
function zalzali(fname){
fname=fname||"wtf";
console.log(fname+" zalzali");
}
zalzali();
var fam =new Object();
fam.firstname= "taha";
console.log(fam);
fam.number=new Object();
fam.number.male=17;
fam.number.female=30;
console.log(fam);
console.log(fam["number"]);
var company={
    name:"taha company",
    ceo:{
        firstname:"tahab2",last:"zalOnly"
    },
    "name with spaces ":"tahab3"
};
console.log(company);
function multiPlyby2(x){
    return x*2;
}

console.log(multiPlyby2(15));
multiPlyby2.version="1.0.0";

function multiplyby10(y){
    return multiPlyby2(5)*y;
}
console.log(multiplyby10(5));
function doOp( op,x){
    return op(x);
}
function changeValue(value1){
    console.log("firsy");
    console.log(value1);
  
    value1=5;
    console.log("after ");console.log(value1)
}

    var value0=7;
    changeValue(value0);
console.log("after changingvalue");
console.log(value0);
function change2(num) {
    
    console.log("in first");
    console.log(num);
    num.x=5;
    
    console.log("in second");
    console.log(num);
}
num2={x:7};
change2(num2);
console.log("tut");
console.log(num2);
function circle(radius){
    this.radius=radius;
 
}
circle.prototype.getarea=function(){
    return (Math.PI*Math.pow(radius,2));
};
var circle1 =new circle(10);
console.log(circle1);
var circle2 =new circle(40);
console.log(circle2);
function famm(name){
    name='tahav',
    console.log(this.name);
   this.name=name;
    var firstName=function(){
     console.log("your first name "+this.name);
   }
return this.name+'alow';
}
console.log(famm('dd'));
function heartbeats(num){
return num*60;
 `var baby=function(num){
     return heartbeats*1.2;
     console.log(heartbeats(10));
 };`
}
jaafar =new heartbeats(10);
console.log(jaafar);


function tahamultiply(num){
    function b(){
        return console.log("multiplayer is"+num );
    }b();
    return(  function(x){
        return x*num;    }
  );
 
}

var doubleAll=tahamultiply(2);
console.log( num23=doubleAll(10));
var taha={};
taha.name="tahan";
taha.sayHi=function(){
    console.log("Hi"+taha.name);
}
taha.sayHi();
(function(window){
    var tahaObj={};
    tahaObj.name="TAhA";
    tahaObj.color="blue";
    tahaObj.sayallow=function(){
        console.log(tahaObj.name+tahaObj.color);
    }
    window.tahaObj=tahaObj;
})(window);

tahaObj.sayallow();
console.log(document.getElementById("inbox"));
function showMessage(){
    console.log(this.textContent);
    this.textContent+="ItsChanged";
    var message=document.getElementById("in").value;
   var setMessage= "<h2> Hello "+message+"!</h2>";
   var content=document.getElementById("inbox").textContent;
    document.getElementById("inbox").innerHTML=content+"c "+setMessage;
    
  if(message==="student"){
      var tts=document.querySelector("#sc").value;
      var newtxt=" FKyou Student";
      tts=document.querySelector("#sc").textContent=newtxt;
//   }  var inboxTxt=document.querySelector("#inbox").textContent;

//     var inboxTxt=document.querySelector("#inbox").textContent=newtxt;

}
 document.querySelector("body").addEventListener("mousemove",
function(event){
if(event.shiftKey==true){
console.log("x: "+event.clientX);
console.log("y: "+event.clientY);

}
}    


)}; 

window.console&&console.log("jlkjdf");

//make the request and assign the request to variable
var tahaRequest=new XMLHttpRequest();
//On ready state Change => Function called when ready state is changed
tahaRequest.onreadystatechange=function(){
    /*
    ready state :the status of the request 
    [0]Request not initialized
    [1]Server connection established 
    [2]request recieved 
    [3]Proccesing request 
    [4]Request is finished and responce is ready
     (thats of readyState==4)
     Status=> responce status code;
     status=200 all is okk (you can check in inspect==> networking =>XHR=>Header)

     o    */
     // if the request is ready and the  responce status is =200 output the respondse text
    if(this.readyState===4 && this.status===200){
     console.log(this.readyState);   
     console.log(this.status);
     console.log(this.statusText);
     console.log(this.responseText);
    }};

//(XML HTTP request .open("method",URL,ASync,USER ,PASS)
//async lamma ynaamal marra w khalas , sync ma be5allik taaml shi la t5ls l request
tahaRequest.open('GET','https://tahazalzali.github.io/newproject/f2.html',true);
tahaRequest.send();
//document.querySelector("#fornt").addEventListener("click",showMessage);
// document.querySelector("#fornt").addEventListener("front",reqfun);

// $(function(){
//     $("#asidetop").load('https://tahazalzali.github.io/newproject/f2.html' ,function(responcetxt,statusText,xhr){
//         console.log(responcetxt);
//         console.log(statusText);
//         console.log(xhr);
//     })get
// });

$(function(){
$('button').on('click',function(){
    $("#asidetop").load($(this).data('page')+('div'),function(responcetxt,statusText,xhr){
if(statusText=="succes"){
    console.log("data recived");
}
    });
})
}
);
var getResponce=function(){
    var myResquest =new XMLHttpRequest();
myResquest.onreadystatechange=function(){
    if (this.readyState===4&&this.status===200)
    console.log('request recieved');

}
myResquest.open('GET','php2.php?name=taha',true);
 myResquest.send();

}
document.querySelector("#sendn").addEventListener("click",getResponce);
$(function(){
$("nav").blur(function(){
var innerScreenwidth=innerWidth;
if(innerScreenwidth<786){
    $("#homeEdit").collapse('hide');
}
});
});
var insertHtml=function(selector,h){
var elem=document.querySelector(selector);
elem.innerHTML()=h;
}
(function(global){
var dc={};
var homeHtml
})();