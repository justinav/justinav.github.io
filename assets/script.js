d3.selectAll(".logo").on("click", function () {
  var activeClass = "logoMobile";
  var alreadyIsActive = d3.select(this).classed(activeClass);
  d3.selectAll(".logo")
  .classed(activeClass, false);
  d3.select(this).classed(activeClass, !alreadyIsActive);
});
