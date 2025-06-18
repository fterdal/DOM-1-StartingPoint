console.log("Hello! If you see this, the script is working.");

console.log("Problem 1");

/*

- [ ] Select the section with an id of container without using querySelector.
- [ ] Select the section with an id of container using querySelector.
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
/*
- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [ ] Create a new li element.

- [ ] Give the li the text "four".
- [ ] Append the li to the ul element.
- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

// Try rewriting this without using querySelector
const header = document.getElementById("header");
header.textContent = "Hello!";

const container = document.getElementById("container");
container.textContent = "Hello!";

//Selecting section with id of container using querySelector
console.log("Problem 2");

const containerQuery = document.querySelector("#container");
console.log("containerQuery", containerQuery);

// Selecting all list items with a class of "second"
console.log("Problem 3");

const secondItems = document.getElementsByClassName("second");
console.log("secondItems", secondItems);

// Selecting a list item with a class of third, but only the list item inside of the ol tag
console.log("Problem 4");

const thirdItem = document.querySelector("ol .third");
console.log("thirdItem", thirdItem);
