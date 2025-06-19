console.log("hello from JS");

// Loop over all of the lis inside the ol tag and give them a background color of "green".

document.body.style.backgroundColor = "#4169E1"; //adding background color to the page



const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText =
  "Welcome to our Intros page :) Here you can learn a little bit about us.";
h1.style.fontFamily = "Georgia, serif";

root.appendChild(h1);

//NEW STUFF
//note for team: replace the hex code with your
// colors we chose for our backgrounds: #4169e1 <-blue #280137 <- purple #882d17 <- red  #da667b <- pink #342a21 <- brown (random placeholder)

//Aiyanna
const root2 = document.getElementById("root2");
const h2 = document.createElement("h2");
h2.innerText =
  //Bio text goes here
  " Name: Aiyanna A. \n About Me: I'm a CIS major, and I became interested in technology through media such as cartoons and video games.Outside of programming the hobbies that I spend the most time on are figure skating, art, and cosplay (I love going to anime conventions). I also enjoy learning new languages. \n Snack of choice: Boba \n Fun Fact: I never leave home without my headphones. I listen to a lot of music and if you see me in the server, you can hover over my icon to see what I'm currently listening to.\n";

h2.style.fontFamily = "Georgia, serif"; // font style for entire box
h2.style.backgroundColor = "#DA667B";// color for inside of bordered box
h2.style.border = "thick solid  #DA667B"; //color code for border

root.appendChild(h2);

//2nd person
const root3 = document.getElementById("root3");
const h3 = document.createElement("h2");
h3.innerText =
  "Hello! This is my HTML website created entirely from JavaScript";
h3.style.fontFamily = "Georgia, serif";
h3.style.backgroundColor = "DA667B";
h3.style.border = "thick solid  #DA667B"; //color code for border

root.appendChild(h3);


//3rd person
const root4 = document.getElementById("root3");
const h4 = document.createElement("h2");
h4.innerText =
  "Hello! This is my HTML website created entirely from JavaScript";
h4.style.fontFamily = "Georgia, serif";
h4.style.backgroundColor = "DA667B";
h4.style.border = "thick solid  #DA667B"; //color code for border

root.appendChild(h4);



//4th person
const root5 = document.getElementById("root3");
const h5 = document.createElement("h2");
h5.innerText =
  "Hello! This is my HTML website created entirely from JavaScript";
h5.style.fontFamily = "Georgia, serif";
h5.style.backgroundColor = "DA667B";
h5.style.border = "thick solid  #DA667B"; //color code for border

root.appendChild(h5);


console.log()

