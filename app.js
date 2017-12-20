$(document).ready(function(){
	setBindings();
}); 

function setBindings(){
	$("nav a").click(function(e){
	 e.preventDefult();
	 var sectionID=	e.currentTarget.id + "section";
     $("html body").animate({
     	scrollTop:$("#"+sectionID).offset().top
     },1000)
	})
}