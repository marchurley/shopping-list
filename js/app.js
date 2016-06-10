$(document).ready(function(){
	$("input[name=textInput]").keyup(function(e){
		if(e.keyCode==13)
		{
			$(this).trigger("enterKey");
		}
	});

	$("input[name=textInput]").bind("enterKey",function(e){
		var listItem = $("input[name=textInput]").val();
		$(".textOutput").append("<p>" + listItem +  "</p>");
	$("input[name=textInput]").val('');
	});
	
		
	$("input[name=add]").click(function(){
		var listItem = $("input[name=textInput]").val();
		$(".textOutput").append(
			"<p>" + listItem +  "</p>");
		$("input[name=textInput]").val('');
	});
	
});


