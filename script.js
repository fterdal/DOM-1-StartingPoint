console.log("Hello! If you see this, the script is working.");

// - [ 1 ] Select the section with an id of container without using querySelector.
console.log("Feature 1");
let container = null;
const allSections = document.getElementsByTagName("section");
for (let i = 0; i < allSections.length; i++) {
    if (allSections[i].id === "container") {
        container = allSections[i];
        break;
    }
}
console.log("container (loop):", container);

// - [ 2 ] Select the section with an id of container using querySelector.
console.log("Feature 2");
const containerQS = document.querySelector("#container");
console.log("container (querySelector):", containerQS);

// - [ 3 ] Select all of the list items with a class of "second".
console.log("Feature 3");
const seconds = document.getElementsByClassName("second"); 
console.log("seconds:", seconds);

// - [ 4 ] Select a list item with a class of third, but only the list item inside of the ol tag.
console.log("Feature 4");
let thirdInsideOl = null;
const ol = container.querySelector("ol");
const olLis = ol.children;
for (let i = 0; i < olLis.length; i++) {
    if (olLis[i].classList.contains("third")) {
        thirdInsideOl = olLis[i];
        break;
    }
}
console.log("thirdInsideOl:", thirdInsideOl);

// - [ 5 ] Give the section with an id of container the text "Hello!".
console.log("Feature 5");
container.appendChild(document.createTextNode("Hello!"));
console.log(container.innerText);

// - [ 6 ] Add the class main to the div with a class of footer.
console.log("Feature 6");
const footerDiv = document.getElementsByClassName("footer")[0];
footerDiv.classList.add("main");
console.log("footer classes after add:", footerDiv.className);

// - [ 7 ] Remove the class main on the div with a class of footer.
console.log("Feature 7");
footerDiv.classList.remove("main");
console.log("footer classes after remove:", footerDiv.className);

// - [ 8 ] Create a new li element.
console.log("Feature 8");
const newLi = document.createElement("li");
console.log("newLi created:", newLi);

// - [ 9 ] Give the li the text "four".
console.log("Feature 9");
newLi.textContent = "four";

// - [ 10 ] Append the li to the ul element.
console.log("Feature 10");
const theUl = container.querySelector("ul");
theUl.appendChild(newLi);
console.log("ul children after append:", theUl.children);

// - [ 11 ] Loop over all of the lis inside the ol tag and give them a background color of "green".
console.log("Feature 11");
[...olLis].forEach(li => li.style.backgroundColor = "green");

// - [ 12 ] Remove the div with a class of footer.
console.log("Feature 12");
footerDiv.remove();

// Try rewriting this without using querySelector
/*
const header = document.querySelector("#container");
console.log("header", header); 
*/
console.log("Final Feature");
const header = [...document.body.children].find( e=> e.ed === "container");
console.log("header (final):", header)

