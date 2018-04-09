// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// Refactor the code to make it easy to add a new cat, just like we did with the quotes.

// step 1
// create the parent container and its class.
const app = function(){

let cat = document.createElement("ul");
cat.classList.add("cat");

// step 2
// create the first child - blockquote, and its text.

let name = document.createElement("li");
name.innerText = "Name: muffin";
let favouritefood = document.createElement("li");
favouritefood.innerText = "Favourite food: Whiskas";
let image = document.createElement("li");
let picture = document.createElement("picture");
picture.innerHTML = '<img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg">'

// 3. create the cite element and its text. append child
image.appendChild(picture);

// 4. append a cite to the blockquote.
cat.appendChild(name);
cat.appendChild(favouritefood);
cat.appendChild(image);


// 5. append the blockquote to the article.

// 6. Add the article to the list of quotes.
let cats = document.querySelector("#cats");
cats.appendChild(cat);

}

// var createCatSection = function(){
//   let cat = document.createElement("cat");
//   cat.classList.add("cat");
//   return cat;
// }

var createCat = function(){
  let cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;

}

var createCatSection = function(text){
  let name = document.createElement("li");
  let favouritefood = document.createElement("li");
  let image = document.createElement("li");
  let picture = document.createElement("picture");
  return name;
  return favouritefood;
  return image;
}

var appendElements = function(name, favouritefood, image, cats){
  name.appendChild(cite);
  favouritefood.appendChild(blockquote);
  image.appendChild(image);
    let cats = document.querySelector("#cats");
    cats.appendChild(cat);
}

window.onload = app;

// function(){
//   addCat("Muffin");
// }
