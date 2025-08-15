// Desc:JS Sprint Final
// Author: Robot Group 3
// Dates: August 10th, 2025

var $ = function (id) {
  return document.getElementById(id);
};

// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

const per2Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

// Start function definitions here.
function updateHeader(){
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 5 && hour < 12){
    greeting = "Good Morning!"
  }else if (hour >= 12 && hour < 18){
    greeting = "Good Afternoon!"
  }else if (hour >= 18 && hour < 22){
    greeting = "Good Evening!"
  }else{
    greeting = "Good Night!"
  }

  const quotes = [
  " In like a lion out like a lamb",
  " Roads? Where we’re going, we don’t need roads.",
   "Be excellent to each other and party on.",
   "Wax on, wax off, don’t forget the balance.",
   "I feel the need, the need for some speed.",
   "Number Five is alive and ready to input more."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const formattedDate = now.toLocaleDateString('en-US',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const headerMessage = `${greeting} - ${randomQuote} - ${formattedDate}`;
  const msgElem = document.getElementById("message");
  if (msgElem){
    msgElem.textContent = headerMessage;
  }
}
// Update every minute (or as needed).
updateHeader(); // So that it runs immediately.
setInterval(updateHeader, 60000); // Updates every minute.

// Prompts and story section.  When the button is clicked, the user will input the variables and a story will be generated.

document.getElementById("storyBtn").addEventListener("click", function(){
  const name = prompt("Enter a name: ");
  const place = prompt("Enter a place: ");
  const object = prompt("Enter an object: ");
  const animal = prompt("Enter an animal: ");

  if (name && place && object && animal){
    const storyTime = `
    <p> Once upon a time, a kid named <strong>${name}</strong> went for a walk to a <strong>${place}</strong> near their Uncle's house.  While in the <strong>${place}</strong>, <strong>${name}</strong> noticed a shiny object.  This caught the interest of the kid and they needed to take a closer look.  When they got closer to the object, they realized that they were looking at none other than a <strong>${object}</strong>. They picked it up and heard a loud cry.  It was the cry of a <strong>${animal}</strong>.  To <strong>${name}</strong>'s amazement, the <strong>${object}</strong> was attached to the foot of the <strong>${animal}</strong>.  It was meant to be a lock on the <strong>${animal}</strong>.  This made <strong>${name}</strong> sad. So the young child did the only thing they knew how to do and set the <strong>${animal}</strong> free.  The <strong>${animal}</strong> was so greatful for the kids help that it went home with the kid to <strong>${place}</strong> and lived happily ever after.</p>`;
    
    document.getElementById("storyArea").innerHTML = storyTime;
  }else{
    alert("Please fill in all the values to tell the story!")
  }

});
// Prompts and story section.  When the button is clicked, the user will input the variables and a story will be generated.

document.getElementById("storyBtn").addEventListener("click", function(){


});

// Banner images.
let step = 0;
let Images = new Array();
Images[0] = "Images/BannerImage1.png";
Images[1] = "Images/BannerImage2.png";
Images[2] = "Images/BannerImage3.png";
Images[3] = "Images/BannerImage4.png";
Images[4] = "Images/BannerImage5.png";
Images[5] = "Images/BannerImage6.png";

window.onload = setInterval(gallery, 3000);

function gallery() {
//change image
document.getElementById("ImgSlide").src = Images[step];
//Or you can use - document.images.slide.src=Images[step];
if (step < Images.length - 1) {
// No - add 1 for next image.
step++;
} else {
// Yes - Start from the first image
step=0;
}
}
const soundBtn = document.getElementById("soundBtn");
const clickSound = document.getElementById("clickSound");

soundBtn.addEventListener("click",()=>{
  clickSound.currentTime = 0; //Rewind to start.
  clickSound.play();
})
  //=============
// new section added - moving robot hopefully 
  //==============
 //=================================
 //===--BUTTON FOR ROBOT HERE--======
  //=================================
   //=============
// Updated Click Section For Working ORder 
  //==============

// Targeting Elements Here 
const btn = document.getElementById("OptPrimeBtn")
const img = document.getElementById("OptPrime")


let robot = false; // this should set robot still if not clicked upon.
const GIFClose = 5200;
const GIFOpen = 5200;


//clicking during animation will cause issues so this was implemented.
btn.addEventListener('click',() => {
    btn.disabled = true;
 
  if (!robot) {
    img.src = img.dataset.open + "?" + Date.now(); // this creates a unique ID for the gif so upon restart it will not cut into the gif half way through.
    
    // freeze transformer here 

    setTimeout(() =>{
      img.src = img.dataset.stand;
      robot = true;
      btn.textContent = "Autobots, Roll out!";
      btn.classList.add('btn-highlight');
      btn.disabled = false;
      
   }, GIFOpen);

  } else {
    img.src = img.dataset.close + "?" + Date.now();
    setTimeout(() => {
        robot = false;
    btn.textContent = 'More Than Meets The Eyes';
    btn.disabled = false;
    
    });
  }
      
});
  // clickSound.play();


const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  confetti({
    particalCount: 200,
    spread: 90,
    origin:{y: 0.6}
  });
});