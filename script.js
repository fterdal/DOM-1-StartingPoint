console.log("Hello! If you see this, the script is working.");

/*
<<<<<<< HEAD

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
//const header = document.querySelector("#container");
//console.log("header", header);

//Select the section with an id of container without using querySelector
console.log("Problem 1");

const container = document.getElementById("container");
console.log("container", container);

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
const thirdOlItem = document.querySelector("ol .third");
console.log("thirdOlItem", thirdOlItem)

//Frank Functions
//- [ ] Give the section with an id of container the text "Hello!"
newP = document.createElement('p');
newP.innerText = "hello";
containerByID = document.getElementById("container");
containerByID.appendChild(newP);
//- [ ] Add the class main to the div with a class of footer.
footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
//- [ ] Remove the class main on the div with a class of footer.
footerDiv.classList.remove("main");
//- [ ] Create a new li element.
newLi = document.createElement("li");

//- [ ] Give the li the text "four".
newLi.innerText = "four";
//- [ ] Append the li to the ul element.
ulElement = document.querySelector('ul');
ulElement.appendChild(newLi);
//- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
olLis = document.querySelectorAll("ol li");
olLis.forEach(li => {
    li.style.backgroundColor = "green";
});
//- [ ] Remove the div with a class of footer.
footerDiv.remove();
