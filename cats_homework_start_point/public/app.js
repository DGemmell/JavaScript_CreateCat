// // Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// // Refactor the code to make it easy to add a new cat, just like we did with the quotes.
//
// // step 1
// // create the parent container and its class.
// const app = function(){
//
// let cat = document.createElement("ul");
// cat.classList.add("cat");
//
// // step 2
// // create the first child - example blockquote, and its text.
//
// let name = document.createElement("li");
// name.innerText = "Name: Muffin";
// let favouritefood = document.createElement("li");
// favouritefood.innerText = "Favourite food: Whiskas";
// let image = document.createElement("li");
// let picture = document.createElement("picture");
// picture.innerHTML = '<img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg">'
//
// // 3. create the cite element and its text.
// image.appendChild(picture);
//
// // 4. append a cite to the blockquote.
// cat.appendChild(name);
// cat.appendChild(favouritefood);
// cat.appendChild(image);
//
//
// // 5. append the blockquote to the article.
//
// // 6. Add the article to the list of quotes.
// let cats = document.querySelector("#cats");
// cats.appendChild(cat);
//
// }

// var createCatSection = function(){
//   let cat = document.createElement("cat");
//   cat.classList.add("cat");
//   return cat;
// }

// Refactor the code to make it easy to add a new cat,
// just like we did with the quotes.
var createCat = function(){
  let cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;

}

var createCatName = function(text){
  let name = document.createElement("li");
  name.innerText = "name: " + text;
  return name;
}

var createCatFavouriteFood = function(text){
  let favouritefood = document.createElement("li");
  favouritefood.innerText = "favouritefood: " + text;
  return favouritefood;
}

var createCatPicture = function(){
  let picture = document.createElement("li");
  return picture;
}

var createCatImage = function(text){
  let image = document.createElement("image");
  image.innerHTML = '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">'

  return image;
}

var appendElements = function(name, favouritefood, image, cat, picture){
  picture.appendChild(image);
  cat.appendChild(name);
  cat.appendChild(favouritefood);
  cat.appendChild(picture);
    let cats = document.querySelector("#cats");
    cats.appendChild(cat);
}

var addCat = function(name, favouritefood, image){
  var catName = createCatName(name);
  var catFavouriteFood = createCatFavouriteFood(favouritefood);
  var catImage = createCatImage(image);
  var catPicture =  createCatPicture();
  var cat = createCat();
  appendElements(catName, catFavouriteFood, catImage, cat, catPicture);
}

window.onload = function(){
  addCat("barry", "chicken", "n/a");
};

// function(){
//   addCat("Muffin");
// }
