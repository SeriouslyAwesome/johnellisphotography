var grid = document.querySelector(".grid");
var msnry = new Masonry(grid, {
  stamp: "header",
  containerStyle: { opacity: 1 },
  columnWidth: ".grid-sizer",
  gutter: ".gutter-sizer",
  itemSelector: ".grid-item",
  percentPosition: true,
});
