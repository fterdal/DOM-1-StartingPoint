console.log("Hello! If you see this, the script is working.");

/*
- [x] Select the section with an id of container without using querySelector.
- [x] Select the section with an id of container using querySelector.
- [x] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [x] Remove the class main on the div with a class of footer.
- [x] Create a new li element.
- [x] Give the li the text "four".
- [ ] Append the li to the ul element.
- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

// Select the section with an id of container without using querySelector.
const sectionNoQuery = document.getElementById("container");
console.log("Section (Without using Query Selector): ", sectionNoQuery);

// Select the section with an id of container using querySelector.
const sectionWithQuery = document.querySelector("#container");
console.log("Section (Using Query Selector): ", sectionWithQuery);

// Select all of the list items with a class of "second".
const secondItems = document.querySelectorAll("li.second");
console.log("List items with class 'second': ", secondItems);

<<<<<<< HEAD


// Append the li to the ul element.

const 
console.log()

// Loop over all of the lis inside the ol tag and give them a background color of "green".

const 
console.log()

// Remove the div with a class of footer.

const 
console.log()
=======
// Remove the class main on the div with a class of footer.
footerDiv.classList.remove('main');

// Create a new li element.
const newLi = document.createElement('li');

// Give the li the text "four".
pText.textcontent = "four";

>>>>>>> f131a27b87a7a86f51d5ea04133fed6085a3faca
