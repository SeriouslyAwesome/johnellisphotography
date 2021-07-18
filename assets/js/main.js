// UTILITIES

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// IMAGE ENLARGEMENT
window.Gallery = {
  list: document.querySelector(".grid"),

  initGallery: function() {
    var images = document.querySelectorAll(".grid img");
    var imagesLoaded = 0;
    var totalImages = images.length;

    forEach(images, function(index, image) {
      var newImg = document.createElement("img");

      newImg.addEventListener("load", imageLoaded());
      newImg.src = image.src;
    });

    function imageLoaded() {
      imagesLoaded++
      if (imagesLoaded == totalImages) {
        allImagesLoaded()
      }
    }

    function allImagesLoaded() {
      Gallery.initMasonry();
    }
  },

  initMasonry: function() {
    this.grid = new Masonry(this.list, {
      stamp: "header",
      containerStyle: { opacity: 1 },
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      itemSelector: ".grid-item",
      percentPosition: true,
    });

    document.querySelector(".lds-spinner").classList.add("hide");
  },

  // ENLARGEMENT AREA
  enlargedImageContainer: document.getElementById("enlarged-image"),

  // ENLARGEMENT BUTTONS
  buttons: document.querySelectorAll(".button-enlarge-photo"),

  enlargePhoto: function(button) {
    if (window.innerWidth < 768) {
      return; // Don't bother with enlarging on mobile devices.
    }

    var body = document.querySelector("body");
    var container = this.enlargedImageContainer;
    var existingImage = container.querySelector("img");

    if (existingImage) {
      container.removeChild(existingImage)
    }

    var url = button.dataset.src;
    var img = document.createElement('img');
    img.src = url;
    img.title = "Click to close";
    img.addEventListener("click", function(e) {
      container.classList.add("hide");
      body.classList.remove("no-scroll");
    }, false)

    container.appendChild(img);
    container.classList.remove("hide");
    body.classList.add("no-scroll");
  },

  initButtons: function() {
    forEach(this.buttons, function(index, button) {
      button.addEventListener("click", function(e) {
        Gallery.enlargePhoto(button);
      }, false);
    });
  },

  // PUT IT ALL TOGETHER
  init: function() {
    this.initGallery();
    this.initButtons();
  }
}

Gallery.init();
