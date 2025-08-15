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
    "Gotta learn stuff through denial and error.",
    "The only way to do great work is to love what you do.",
    "Don't worry, be happy.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Hakuna Matata.",
    "Strive not to be a success, but rather to be of value.",
    "Ohana means family, and family means no one gets left behind.",
    "Don't take life seriously. You will never get out of it alive.",
    "Hard work never killed anyone, but why take a chance.",
    "No man leaves before his time, unless the boss leaves early.",
    "If you don't know where you are going, any road will get you there.",
    "The only thing that matters is what you choose to be now.",
    "Immature is a word that boring people use to describe fun people.",
    "Gator never been about that never."
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
Images[0] = "Images/BannerImages1.jpg";
Images[1] = "Images/BannerImages2.jpg";
Images[2] = "Images/BannerImages3.jpg";
Images[3] = "Images/BannerImages4.jpg";
Images[4] = "Images/BannerImages5.jpg";
Images[5] = "Images/BannerImages6.jpg";

window.onload = setInterval(gallery, 3000);

function gallery() {
//change image
document.getElementById("ImgSlide").src = Images[step];
//Or you can use - document.images.slide.src=Images[step];
// is step more than the image array?
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
});

const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  confetti({
    particalCount: 200,
    spread: 90,
    origin:{y: 0.6}
  });
});