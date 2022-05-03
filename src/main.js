const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const allImages = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
for (let i = 0; i < allImages.length; i++){
  let newPath = "./images/" + allImages[i];
  const newImage = document.createElement('img');
  newImage.setAttribute('src', newPath);
  thumbBar.appendChild(newImage);
}

/* Add an event listener to the thumBar that changes the src of displayedImage */
thumbBar.addEventListener('click', e => {
  displayedImage.src = e.target.src;
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {
  if (btn.getAttribute("class") == "dark"){
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})
