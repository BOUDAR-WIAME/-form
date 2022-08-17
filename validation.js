let D = new Date ();
document.getElementById('D').innerHTML = 'Bonjour Mr/Mme la date est : ' + D.toLocaleDateString();

function validateForm(){ 
    var x=document.getElementById("name").value;
    var y=document.getElementById("nn");
    var letters = /^[A-Za-z]+$/;
if(x.length<2 || x==letters) {
      y.innerHTML="❌" ;
    
    }
    else{
        y.innerHTML="✔️" ;
    }
    var x=document.getElementById("name2").value;
    var y=document.getElementById("jj");
    var letters = /^[A-Za-z]+$/;
if(x.length<2 || x==letters) {
      y.innerHTML="❌" ;
    }
    else{
        y.innerHTML="✔️" ;
    }
    var x=document.getElementById("code").value;
    var y=document.getElementById("ii");
    var letters = /^[A-Za-z]+$/;
if(x.length < 5 || x==letters) {
      y.innerHTML="❌" ;
    }
    else{
        y.innerHTML="✔️" ;
    }
    var x=document.getElementById("pass").value;
    var y=document.getElementById("pp");
    var letters = /^[A-Za-z]+$/;
if(x.length < 6 || x==letters) {
      y.innerHTML="❌" ;
    }
    else{
        y.innerHTML="✔️" ;
    }
    var x=document.getElementById("cpass").value;
    var y=document.getElementById("cc");
    var letters = /^[A-Za-z]+$/;
    var pass = document.getElementById("pass").value;
if(x.length < 6 && x==letters && x==pass) {
      y.innerHTML="❌" ;
    }
    else{
        y.innerHTML="✔️" ;
    }
}
