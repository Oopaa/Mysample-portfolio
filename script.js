// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
// form validition

var namevalid=document.getElementById("namevalid")
var mailvalid=document.getElementById("emailvalid")
var Msgvalid=document.getElementById('msgvalid')



function namevalidation() {
    var Name=document.getElementById('name').value;
    if(Name.length==0){
     namevalid.innerHTML='name is required';
     return false;
    }else{
        namevalid.innerHTML='name is valid';
        return true;
    }

   }

function emailvalidation(){
    var Mail=document.getElementById('Email').value;
       if(Mail.length==0){
          mailvalid.innerHTML='mail is required';
          return false;
       }
       else if(!Mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          mailvalid.innerHTML='enter a valid email';
          return false;
       }
       mailvalid.innerHTML='Done'
       return true;
}


function msgvalid(){
        var  Msg=document.getElementById('Message').value;
        if(Msg.length==0){
           Msgvalid.innerHTML='please enter your message'
           return false
        }
        Msgvalid.innerHTML='Your msg will checked'
           return true;
        
}    


function validateform(){
    if(!namevalidation()||!emailvalidation()||! msgvalid()){
      
    Submitvalid.innerHTML='please fix the errors before submit';
       return false;
    }
    Submitvalid.innerHTML='<i class="fa-solid fa-circle-check">Click Submit</i>';
    return true;


 }