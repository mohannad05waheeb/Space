let logo = document.querySelector(".logo"); 
logo.onclick = function() {
    location.reload();
};   
function openFunction() {
    document.getElementById("menu").style.width = "250px"; 
}; 
function closeFunction() {
    document.getElementById("menu").style.width = "0px"
}; 
const btns = {
    index1 : document.querySelector(".index-1"),
    index2 : document.querySelector(".index-2"),
    index3 : document.querySelector(".index-3"),
}; 
let chaning = document.querySelector(".content .changing"); 
let descrirtion = document.querySelector(".description");
btns.index2.onclick = function() {
    chaning.innerHTML = "Spaceport";    
    descrirtion.innerHTML = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';
    this.style.backgroundColor = "white"; 
    btns.index1.style.backgroundColor = " rgb(11, 13, 23)";
    document.querySelector(".img").src = "images/portrait.jpg";
};  

btns.index3.onclick = function() {
    chaning.innerHTML = "Space capsule";    
    descrirtion.innerHTML = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained';
    this.style.backgroundColor = "white"; 
    btns.index1.style.backgroundColor = " rgb(11, 13, 23)";
    btns.index2.style.backgroundColor = " rgb(11, 13, 23)";
    document.querySelector(".img").src = "images/space.jpg"; 
};  
