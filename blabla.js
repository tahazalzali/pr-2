window.console&&console.log("jlkjdf");
function counter(){
    this.x=0;
    console.log("counter started");
    this.add=function(){
       console.log("adding value...");
     this.x+=1;
     console.log("x= "+this.x);
    }
    this.sub=function(){
     
        console.log("subtracting value...")
    this.x-=1;
    console.log("x= "+this.x);
    }
}
var a=document.getElementById("third");
console.log(a.innerHTML);
var txt34="DKL ddl $ ajax $ dfj $ ajax dkp ajax ";
console.log(txt34.length);
txt34=txt34.toLowerCase();
console.log("search result for ajax : "+ txt34.search("ajax"))

console.log("index of  "+ txt34.indexOf("d"));
 console.log("statswith method: "+txt34.startsWith("d"));
console.log("endswith method : "+txt34.endsWith(" "))

console.log(" last index of"+ txt34.lastIndexOf("d"));
txt34=txt34.replace(/\$/gi,"tt");
console.log("replace method :"+txt34)+" (we just delete the $ sign ) ";
txt34=txt34.replace(/d/gi,function(x){
    return x.toUpperCase();
})
console.log("replace with function to upperCase for (d) "+ txt34);
var taxoti="Allow taha zalzali";
console.log(taxoti+"before substring "+"getting taha from substring method : "+ taxoti.substring(5,10))
var datasave1={name:"taha",arrayOfLanguages:["html","css","javascript"],age:12,toUpperCase3:function(x){
return  x.toUpperCase();   
}}
var xato=102;
if( xato  >=110){
    console.log("given x is > 110  ");
}
else if(xato>=100){
    console.log("given x is >100 (after checking if its>110 , its no so it will search HERE!)");
}

else{console.log("x<100")}


console.log(datasave1);
datasave1.nationasion="Lebanese";
console.log(datasave1);

var major ="CCE";
switch(major){
    case("CCE") :
    console.log("You choose computer engineering major (detected by switch case method)");
    break;
    case("EEE"):
    console.log("you choose electrical engineer (detected by switch case method)");
    break;
    default:
        console.log("you dont choose the correct available major");
    break;
    
} 
var counte=1;
while(counte<=10){ 
// var ees= document.getElementById("fourthat").innerHTML+="Allow taha num: "+counte;
// console.log(ees);
++counte;
}

var objectsForUsers={
user1:{email:"tatf#",pass:"jdkfj",ip:"43.55.454.1"},
user2:{email:"tDCatf#",pass:"jfbhtrfj",ip:"45.545.454.1"},
user3:{email:"tatfX#",pass:"kffj",ip:"43.5.454.1"},
user4:{email:"tatXf#",pass:"fjad",ip:"43.45.454.1"},
user5:{email:"tatXfsd#",pass:"jsddkfj",ip:"45545.454.1"},
};
for(var i in objectsForUsers){
    document.getElementById("jstbody").innerHTML+="<tr>"
    +"<td>"+ objectsForUsers[i].email+"</td>"
    +"<td>"+ objectsForUsers[i].pass+"</td>"
    +"<td>"+objectsForUsers[i].ip +"</td>"
    +"</tr>"
};
console.log(objectsForUsers.user1.ip+"  SEARCH HERE");

console.log(datasave1.toUpperCase3(txt34));
var sus="LLA";

Object.keys(objectsForUsers).forEach(element=>{
console.log(objectsForUsers[element].pass);
});
var valueFtry=document.querySelector("#allot").value;
console.log("Here search for value  :"+valueFtry);
// var tahaOwnCard= document.getElementById("taha own card");
// tahaOwnCard.style.backgroundColor="red";
// var tahaOwnCard2=document.querySelectorAll("#taha own card,body");
// for (var i=0;i<=tahaOwnCard2.length;i++){
//     tahaOwnCard2[i].style.color="white";
// }
console.log("here you can check all elements");

var whyimdothis=sus+txt34;
a.innerHTML=whyimdothis;
newwEmployee ={ "name":"any one have the requirments ","skills":{"years of experience ":18,"html":"8/10","css ":8/10},"arrayList":"['many objects are accepted ','']"}
console.log(newwEmployee);
class Taha{
        Constructor(){
            document.querySelector("#anItem").innerHTML+="jellow";
        }
}
onload=new Taha();
//on calling new taha the constructor will run ;
 taha=new counter();
taha.add();
taha.add();
taha.add();
taha.sub();
// $(document).ready(
// function(){
//     alert("allow jquery");
// window.console&&console.log("by taha");
// }

// );
var useratNew={user1:{},user2:{name:"taha ",natinality:"lebene ",age:4},user3:{name:"jaafar",age:3}}
var rich="taha";
var ismarried= true;
var cusage=19;
var cusNationality="Lebanese";
var id_1=[rich,ismarried,cusage,cusNationality];
for(var i=0;i<=id_1.length;i++){
console.log("all array list element using for loop: "+id_1[i-1]);
}
console.log("isMarried "+ id_1[1]);
console.log(id_1.indexOf(19));
console.log("Name "+id_1[0]+"\n Married "+id_1[1]+"\n Age "+id_1[2]+"\n Nationality"+ id_1[3]);

$(window).ready(resize=function(){
console.log("size : x=" +$(window).width()+"y= "+$(window).height());    

})

$("#ttf").click(function(){
$("#tax").css("color", "red");

})
$(document).ready(function(){
    $.getJSON("jsonTest.js",function(data){
        // $("#taha").append(data);
        window.console&&console.log(data);
    });
})

// $("#alsho").change(function(event){
// $("#spinner").show();
// var form=$("#alsho");
// var inuttxt=form.find('input[name="one"]').val();
// window.console&&console.log("sending post");
// $.post('demo2.html' ,function(data,status){
//     window.console&&console.log(status);
//     $("#result").empty().append(data);
//     $("#spinner").hide();})
//     .error(function(){
//         $("#alsho").css("color","red" );
//         alert("error");
//     });
// });

// $("#al").click(function(){
//   $.ajax({url:"demo2.html",success:function(result){
// $("#toshow").html(result)
// }
//   })  
// })   
// $("#blab").change(function(event){
//   $("#spinner").show();
//   var form=$("#blab");
//   var inuttxt=form.find('input[name="one"]').val();
//   window.console&&console.log("sending post");
//   $.post('demo2.html' ,function(data,status){
//       window.console&&console.log(status);
//       $("#res").empty().append(data);
//       $("#spinner").hide();})
//       .error(function(){
//           $("#blab").css("color","red" );
//           alert("error");
//       });
//   });
