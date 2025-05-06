# The White Lotus Hotel
## Website's link
http://127.0.0.1:3004/The%20White%20Lotus/index.html
## Concept
This website is a concept of how a hotel website would look if it was inspired in The White Lotus tv show season 3 which is in Thailand. It is a fully working site that mimics what it's like to book a hotel online, but it uses the mood of the tv show to be more unique.

## Screenrecord
https://drive.google.com/file/d/1TB4EX7w-V_ZUmFT0ce9hxxeXwoWFkH2G/view?usp=sharing

## Inspiration
https://www.ahshotelassets.com/

https://www.oneandonlyresorts.com/cape-town

https://www.waldhaus-sils.ch/en

https://www.fourseasons.com/tamarindo/

Moodboard: https://pin.it/4kbBBVetH

## Code Snipet
```js
document.addEventListener("DOMContentLoaded", function() {
  initPlateRotation();
});

function initPlateRotation() {
  // Get all images for the plate rotation
  var images = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
    document.getElementById("image4"),
    document.getElementById("image5"),
  ];

  // Set initial state - first image visible, others hidden
  let current = 0;
  images[current].classList.add("active");
  images[current].classList.add("spin");

  // Add the toggleImages function to the global scope
  window.toggleImages = function () {
    // Hide and remove spin from current image
    images[current].classList.add("hidden");
    images[current].classList.remove("active");
    images[current].classList.remove("spin");

    // Move to next image in rotation
    current = (current + 1) % images.length;

    // Show and add spin to new current image
    images[current].classList.remove("hidden");
    images[current].classList.add("active");
    images[current].classList.add("spin");
  };
}
```
## Notes
### What you struggled with
What I struggled with the most was whe I was figuring out how to add the calendar to book the hotel to the booking button. To do it I had to download an external file many websites use to make calendars and then figure out how to give it the proper structure so it is dislayed in a popup window and it shows each month with the option of selecting specific dates.
### What you're proud of
I'm proud of how the overall website is able to mimic this season of the v show, but als how right now it is fully fuctional. I feel like a hotel could grab the site and with somme minor fixes it could be ready to launch. Lastly I am happy with all the creative interactions I added to it such as the spinning plates or the slideshow.
### What you would add next if you had more time
If I had more time I would work with the screen sizing of the site so it is compatible with different devices, up to now the demo is only for desktop.

## How I grew as a developer
This project made me realize of the importance of functionality on a website, the design was already defined, but I had to think of all the necessary things a user would need if they wanted to book a hotel through a website. This also motivated me to learn more about the implementation of javascript into my code as I learned about loops and how they can simplify many things in our code.
