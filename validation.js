//la date de jour:
let D = new Date ();
document.getElementById('D').innerHTML = 'Bonjour Mr/Mme la date est : ' + D.toLocaleDateString();

function validateForm(){ 
    //nom:
    var x=document.getElementById("name").value;
    var y=document.getElementById("nn");
    var letters = /^[A-Za-z-]+$/;
    if(x.length<2 || x==letters) {
        y.innerHTML="❌" ;
        
      }
      else{
          y.innerHTML="✔️" ;
      }
    //Prénom:
    var x=document.getElementById("name2").value;
    var y=document.getElementById("jj");
    var letters = /^[A-Za-z]+$/;
if(x.length<3 || x==letters) {
      y.innerHTML="❌" ;
      
    }
    else{
        y.innerHTML="✔️" ;
    }
    //code posstal:
    var x=document.getElementById("code").value;
    var y=document.getElementById("ii");
    var letters = /^[A-Za-z]+$/;
if(x.length < 5 || x==letters) {
      y.innerHTML="❌" ;
    
    }
    else{
        y.innerHTML="✔️" ;
    }

    //email:
    var x=document.getElementById("email").value;
    var y=document.getElementById("e");
    var eml = new RegExp (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (!eml.test(x)){
      y.innerHTML="❌" ;
      
    }
    else{
        y.innerHTML="✔️" ;
    }
    //mot de passe:
    var x=document.getElementById("pass").value;
    var y=document.getElementById("pp");
    
if(x.length < 6 || x=="") {
      y.innerHTML="❌" ;
      
    }
    else{
        y.innerHTML="✔️" ;
    }
      
    //confirmation de mot de pass
    var a=document.getElementById("pass").value;
    var b=document.getElementById("cpass").value;
    var y=document.getElementById("cc");
  if (a!=b || a=="") {
            y.innerHTML="❌" ;
    }
    else{
        y.innerHTML="✔️" ;
    }

    //date:
    var x=document.getElementById("date").value;
    var y=document.getElementById("d");
    var age=new Date().getFullYear()-new Date(x).getUTCFullYear();
  if (age < 18 || x == "") {
    y.innerHTML="❌" ;
    
    }
    else{
        y.innerHTML="✔️" ;
    }
   
    //pays:
    var x=document.getElementById("pays").value;
    var y=document.getElementById("py");
    
    if(x=="Please select...") {
        y.innerHTML="❌" ;
        
      }
      else{
          y.innerHTML="✔️" ;
      }
      //genre:
      var genre= document.querySelector('input[name ="genre"]:checked');
      var y=document.getElementById("g");
      if(genre != null){ 
         y.innerHTML="✔️" ; 
        return false;
       }
      else{
          y.innerHTML="❌" ;
      }
      
      //Préférences De Contact:
      var pdc= document.querySelector('input[name ="contact"]:checked');
      var y=document.getElementById("c");
      if(pdc != null){
          y.innerHTML="✔️" ;
          return false;
        }
        else{
            y.innerHTML="❌" ;
            }
      alert('Please completer votre formulaire');
      return false;
}
