/*
 *hide and show function
 *alternatively use jquery hide() and show()
 *last edited 10/10/2018 @WilliamCollicott
 */
// Get the modal
var modal = document.getElementById('id01');
$(document).ready(init);

// Runs when the HTML page is loaded. This method loads the open/close ability
// for each modal in the current projects tab and the past projects tab
function init()
{
	// Current Projects
	// $('#modal1').addClass('is-active');
	// $('#modal2').addClass('is-active');
	// $('#modal3').addClass('is-active');

	// Past Projects
	// $('#pp1').addClass('is-active');
	// $('#pp2').addClass('is-active');
	// $('#pp3').addClass('is-active');

	// Closes any active modal on either tab when the exit button is pressed
	$(".delete").on('click',function(){
    	$(".modal").removeClass("is-active");
	});

	// Current Projects buttons
	$("#button1").on('click',function(){
		$("#modal1").addClass("is-active");
	});

	$("#button2").on('click',function(){
		$("#modal2").addClass("is-active");
	});

	$("#button3").on('click',function(){
		$("#modal3").addClass("is-active");
	});

	// Past Projects buttons
	$("#buttonPP1").on('click',function(){
		$("#pp1").addClass("is-active");
	});

	$("#buttonPP2").on('click',function(){
		$("#pp2").addClass("is-active");
	});

	$("#buttonPP3").on('click',function(){
		$("#pp3").addClass("is-active");
	});

	
}
	
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function Open_Tab(tab_name)
{
	var i, x, tablinks;
	x = document.getElementsByClassName("tab_content");
	for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	document.getElementById(tab_name).style.display = "inline-block";  
}



