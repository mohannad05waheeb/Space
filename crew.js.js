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
const links = {
    index1 : document.querySelector(".index-1"), 
    index2 : document.querySelector(".index-2"), 
    index3 : document.querySelector(".index-3"), 
    index4 : document.querySelector(".index-4"), 
}; 
let job = document.querySelector(".info .job-title"); 
let Name = document.querySelector(".info .crew-name"); 
let description = document.querySelector(".info .crew-description");
links.index2.onclick = function() {
    job.innerHTML = "Mission Specialist"; 
    this.style.backgroundColor = "white"; 
    links.index1.style.backgroundColor = "#777"; 
    Name.innerHTML = "Mark Shuttleworth"; 
    document.querySelector(".img").src = "images/mark.webp"; 
    description.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
}; 
links.index3.onclick = function() { 
    job.innerHTML = "Pilot"; 
    this.style.backgroundColor = "white"; 
    links.index1.style.backgroundColor = "#777"; 
    links.index2.style.backgroundColor = "#777";
    Name.innerHTML = "Victor Glover"; 
    document.querySelector(".img").src = "images/victor.webp"; 
    description.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
}; 

links.index4.onclick = function() { 
    job.innerHTML = "Former CEO of Microsoft"; 
    this.style.backgroundColor = "white"; 
    links.index1.style.backgroundColor = "#777"; 
    links.index2.style.backgroundColor = "#777";
    links.index3.style.backgroundColor = "#777"; 
    Name.innerHTML = "Bill Gates";  
    document.querySelector(".img").src = "images/beil.webp"; 
    description.innerHTML = "Bill Gates: A Leader in Innovative Technology Biography and Life Work of Bill Gates, Director of the Microsoft Company Bill Gates' Creative Capitalism Changing the Entrepreneurial Identity of Bill Gates Antitrust Case of Bill Gates and Microsoft.";
};  