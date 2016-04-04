d3.json("assets/projects.json", function(data) {

  var projectContainer = d3.select(".grid").selectAll(".grid-item")
  .data(data)
  .enter()
  .append("article")
  .classed("grid-item", true);

  var imgLink = projectContainer.append("a")
  .attr("href", function(d) {
    if (d.url.length > 1) {
      return d.url;
    }
  });

  imgLink.append("img")
  .classed("photoContainer", true)
  .attr("src", function(d) {
    return "assets/images/" + d.src
  })

  var caption = projectContainer.append("ul")
  .classed("caption", true);

  caption.append("li").append("a")
  .classed("captionHeadline", true)
  .attr("href", function(d) {
    if (d.url.length > 1) {return d.url;}
  })
  .text(function(d) {
    return d.title;
  });

  caption.append("li")
  .text(function(d) {
    return d.description;
  })

  caption.append("li").append("a")
  .attr("href", function(d) {
    if (d.downloadUrl.length > 1) {
      return d.downloadUrl;
    } else if (d.githubUrl.length > 1) {
      return d.githubUrl;
    } else if (d.url.length > 1 ) {
      return d.url;
    }else {
      this.remove();
    }
  })
  .classed("btn", true)
  .text(function(d) {
    if (d.downloadUrl.length > 1) {
      return "download"
    } else if (d.githubUrl.length > 1) {
      return "github"
    } else if (d.url.length > 1) {
      return "visit"
    }
  });

  projectContainer.selectAll("a")
    .attr("target", "_blank");
});