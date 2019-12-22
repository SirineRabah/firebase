// var myTextArea=document.getElementById("text");
// var selectSize=document.getElementById("size");
// var selectPolice=document.getElementById("police");

// function makeBold(){
//     if(myTextArea.style.fontWeight=="bold"){
//         myTextArea.style.fontWeight="normal";
//     }
//     else{
//         myTextArea.style.fontWeight="bold";
//     }
// }

// function makeItalic(){
//     if(myTextArea.style.fontStyle=="italic"){
//         myTextArea.style.fontStyle="normal";
//     }
//     else{
//         myTextArea.style.fontStyle="italic";
//     }
// }

// function makeUnderline(){
//     if(myTextArea.style.textDecoration=="underline"){
//         myTextArea.style.textDecoration="";
//     }
//     else{
//         myTextArea.style.textDecoration="underline";
//     }
// }

// function changeSize(){
//     myTextArea.style.fontSize=selectSize.value;
// }

// function changePolice(){
//     myTextArea.style.fontFamily=selectPolice.value;
// }


// $(".cr1").mouseenter(function(){
    
//     $(".bt1").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr1").mouseleave(function()
// {
//     $(".bt1").hide();
//     $(this).css("opacity","1")
// });
// $(".cr2").mouseenter(function(){
    
//     $(".bt2").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr2").mouseleave(function()
// {
//     $(".bt2").hide();
//     $(this).css("opacity","1")
// });

// $(".cr3").mouseenter(function(){
    
//     $(".bt3").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr3").mouseleave(function()
// {
//     $(".bt3").hide();
//     $(this).css("opacity","1")
// });
// $(".cr4").mouseenter(function(){
    
//     $(".bt4").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr4").mouseleave(function()
// {
//     $(".bt4").hide();
//     $(this).css("opacity","1")
// });
// $(".cr5").mouseenter(function(){
    
//     $(".bt5").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr5").mouseleave(function()
// {
//     $(".bt5").hide();
//     $(this).css("opacity","1")
// });
// $(".cr6").mouseenter(function(){
    
//     $(".bt6").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr6").mouseleave(function()
// {
//     $(".bt6").hide();
//     $(this).css("opacity","1")
// });
// $(".cr7").mouseenter(function(){
    
//     $(".bt7").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr7").mouseleave(function()
// {
//     $(".bt7").hide();
//     $(this).css("opacity","1")
// });
// $(".cr8").mouseenter(function(){
    
//     $(".bt8").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr8").mouseleave(function()
// {
//     $(".bt8").hide();
//     $(this).css("opacity","1")
// });
// $(".cr9").mouseenter(function(){
    
//     $(".bt9").show();
//     $(this).css("opacity","0.5")
// })

// $(".cr9").mouseleave(function()
// {
//     $(".bt9").hide();
//     $(this).css("opacity","1")
// });

// Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAA-s9fsQ9iCa4y0cQ4B7x7Hl4HOUWQr08",
    authDomain: "projet-3c8b1.firebaseapp.com",
    databaseURL: "https://projet-3c8b1.firebaseio.com",
    projectId: "projet-3c8b1",
    storageBucket: "projet-3c8b1.appspot.com",
    messagingSenderId: "48536583217",
    appId: "1:48536583217:web:6573dfd3a265842e6b6910",
    measurementId: "G-MKZ1346CRL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef= firebase.database().ref('projet-3c8b1');

function submitForm(e){
    e.preventDefault();
    var name= document.getElementById('name').value;
    console.log(name);
    var track=document.getElementById('track').value;
    console.log(track);
    var email=document.getElementById('email').value;
    console.log(email);
    var number=document.getElementById('number').value;
    console.log(number);
    saveMessage (name,track,email,number);
}
document.getElementById('contactform').addEventListener('submit',submitForm);
function saveMessage(name,track,email,number)
{
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name:name,
        track:track,
        email:email,
        number:number,
        
        }
    );
}