// UTILITIES

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// IMAGE ENLARGEMENT

window.Gallery = {
  // MASONRY PREP
  list: document.querySelector(".grid"),
  initMasonry: function() {
    this.grid = new Masonry(this.list, {
      stamp: "header",
      containerStyle: { opacity: 1 },
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      itemSelector: ".grid-item",
      percentPosition: true,
    });
  },

  // ENLARGEMENT AREA
  enlargedImageContainer: document.getElementById("enlarged-image"),

  // ENLARGEMENT BUTTONS
  buttons: document.querySelectorAll(".button-enlarge-photo"),
  enlargePhoto: function(button) {
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
    console.log(this.buttons);

    forEach(this.buttons, function(index, button) {
      button.addEventListener("click", function(e) {
        Gallery.enlargePhoto(button);
      }, false);
    });
  },

  // PUT IT ALL TOGETHER
  init: function() {
    this.initMasonry();
    this.initButtons();
  }
}

Gallery.init();
