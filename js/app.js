//Circle Area

var radius=5;
var S=Math.PI*Math.pow(radius,2);
console.log(S);

//Date

var date=new Date().getHours();
console.log(date);

if(date>=6 && date<12) {
    alert('Good Morning');
    document.body.style.backgroundColor='#FFEFD5';
}
else if(date>=12 && date<18){
    alert('Good Afternoon');
    document.body.style.backgroundColor='orange';
}
else{
    alert('Good Night');
    document.body.style.backgroundColor='black';
}


