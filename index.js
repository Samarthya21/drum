var n=document.querySelectorAll(".drum").length;
      
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    //Adding animation after clcik on that button .  Particular key innerHTML is passed on the function
    buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
  
function makeSound(key){
    
    switch(key){
        case "w":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("crash.mp3");
            crash.play();
            break; 
        case "l":
            var kick=new Audio("kick-bass.mp3");
            kick.play();
            break;    
        default:

        

    }
}    
function buttonAnimation(currentKey){
    //selects the button with class .w /.d / .k /.l etc.
    //query selector returns a tag with class eg. .w/.d/.l/.k/j/etc.
    //Here current key is not the class but the InnerHTML of that button
    var activeButton=document.querySelector("."+currentKey);
    //adding a class to the button which is prrssed.
    //class style alreadys set in CSS
    activeButton.classList.add("pressed");
    //after delay of 0.1 ms removing the style from the button thus creating the flash effect
    //steTimeout calls the anonymous function after a time alloted 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}   