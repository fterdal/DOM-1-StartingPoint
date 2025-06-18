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
- [X] Append the li to the ul element.
- [X] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [X] Remove the div with a class of footer.
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


//Aiyanna - tasks done
// Append the li to the ul element.

const appendElement = document.querySelector("ul").append(newLi);
console.log()

// Loop over all of the lis inside the ol tag and give them a background color of "green".

const styleColor = document.querySelectorAll("ol li");
[...styleColor].forEach(element => {
    element.style.backgroundColor = "green";
    
});
console.log(styleColor)

// Remove the div with a class of footer.

const footerClass = document.getElementsByClassName("footer");
footerClass.parentNode.removeChild(footerClass);

console.log()
