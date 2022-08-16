let D = new Date ();
document.getElementById('D').innerHTML = 'Bonjour Mr/Mme la date est : ' + D.toLocaleDateString();

function validateForm(){
    var x=document.getElementById("name").value;
    var y=document.getElementById("nn");
    var letters = /^[A-Za-z]+$/;
if(x.length<2 || x==letters) {
      y.innerHTML="ERROR" ;
    
    }
}