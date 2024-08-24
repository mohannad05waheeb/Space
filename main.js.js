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
let head = document.querySelector(".section .container nav h2");
let para = document.querySelector(".section .container nav .content");
let three = document.querySelector(".section .container nav .info2 .three"); 
let time = document.querySelector(".section .container nav .info1 .time2");  
let links = [document.querySelector(".active"), document.querySelector(".mars") , document.querySelector(".europa") , document.querySelector(".titan")];    
links[1].onclick = function() {         
    head.innerHTML = "MARS";    
    para.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    three.innerHTML = "225 MIL."; 
    time.innerHTML = "9 MONTHS";        
    this.classList.toggle("active").links[0];  
    document.querySelector(".moon").src = "images/mars.webp";    
};   
links[2].onclick = function() {
    head.innerHTML = "EUROPA";
    para.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    three.innerHTML = "628 mil. km";
    time.innerHTML = "3 YEARSE";  
    this.classList.toggle("active");  
    links[1].classList.remove('active');  
    document.querySelector(".moon").src = "images/europa.webp";
};  
links[3].onclick = function() {
    head.innerHTML = "TIITAN"; 
    para.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    three.innerHTML = "1.6 bil.";
    time.innerHTML = "7 YEARSE"; 
    this.classList.toggle("active");  
    links[2].classList.remove('active');  
    document.querySelector(".moon").src = "images/titan.webp";
};    

 