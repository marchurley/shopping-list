$(document).ready(function(){
	
	//Define enterKey function on textInput
	$("input[name=textInput]").keyup(function(e){
		if(e.keyCode==13)
		{
			$(this).trigger("enterKey");
		}
	});

	//Add item when Enter is pressed on textInput
	$("input[name=textInput]").bind("enterKey",function(e){
		var listItem = $("input[name=textInput]").val();
		$(".textOutput").append(
			"<li>" + 
			listItem + 
			"<button>" + 
			"&#10003" + 
			"</button>" +
			"<button>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
	$("input[name=textInput]").val('');
	});
	
	//Add item when +-button is clicked	
	$("input[name=add]").click(function(){
		var listItem = $("input[name=textInput]").val();
		$(".textOutput").append(
			"<li>" + 
			listItem + 
			"<button>" + 
			"&#10003" + 
			"</button>" +
			"<button>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
		$("input[name=textInput]").val('');
	});


	

	/*
	//Remove item when x-button is clicked
	$("li").click(function(){
	})
	*/

});


