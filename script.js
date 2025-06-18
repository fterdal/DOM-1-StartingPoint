console.log("Hello! If you see this, the script is working.");

/*
- [1] Select the section with an id of container without using querySelector.
- [2] Select the section with an id of container using querySelector.
- [3] Select all of the list items with a class of "second".
- [4] Select a list item with a class of third, but only the list item inside of the ol tag.
- [5] Give the section with an id of container the text "Hello!".
- [6] Add the class main to the div with a class of footer.
- [7] Remove the class main on the div with a class of footer.
- [8] Create a new li element.
- [9] Give the li the text "four".
- [10] Append the li to the ul element.
- [11] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [12] Remove the div with a class of footer.
*/

//******ANSWERS******

//- [1] Select the section with an id of container without using querySelector.
console.log("1:");

const container = document.getElementById("container");
console.log(container);

//- [2] Select the section with an id of container using querySelector.
console.log("2:");

const container2 = document.querySelector("#container");
console.log(container2);

//- [3] Select all of the list items with a class of "second".
console.log("3:");

const secondClass = document.getElementsByClassName("second")
console.log(secondClass);

//- [4] Select a list item with a class of third, but only the list item inside of the ol tag.
console.log("4:");

const thirdClass = document.querySelector("ol .third")
console.log(thirdClass);

//- [5] Give the section with an id of container the text "Hello!".
console.log("5:");

//container.textContent = "Hello!";
//console.log(container);

//- [6] Add the class main to the div with a class of footer.
console.log("6:");

const footer = document.querySelector(".footer");
footer.classList.add("main");

//- [7] Remove the class main on the div with a class of footer.
console.log("7:");

footer.classList.remove("main");

//- [8] Create a new li element.
console.log("8:");

const element = document.createElement('li');

//- [9] Give the li the text "four".
console.log("9:");

element.textContent = "four";

//- [10] Append the li to the ul element.
console.log("10:");

const ulElement = document.querySelector("ul");
ulElement.append(element);

//- [11] Loop over all of the lis inside the ol tag and give them a background color of "green".
console.log("11:");

const ilElements = document.querySelectorAll("ol li");

for (let element of ilElements)
{
    element.style.backgroundColor = "green";
}

//- [12] Remove the div with a class of footer.
console.log("12:");

footer.remove();