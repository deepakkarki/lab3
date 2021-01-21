'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
  $("a.thumbnail").click(projectClick)
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
    $("#testjs").text("Please wait...");
    $(".jumbotron p").addClass("active");
	});
}


function projectClick(e) {
  e.preventDefault();
  var containingProject = $(this).closest(".project");
  console.log(containingProject)
  var desc = $(containingProject).find("div.project-description");
  if(desc.length != 0){
    $(desc[0]).fadeToggle()
  } else {
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
  }
}
