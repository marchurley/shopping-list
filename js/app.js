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
		if (listItem != ""){
		$(".textOutput").append(
			"<li>" + 
			"<span class='item'>" +
			listItem + 
			"</span>" +
			"<button class='check'>" + 
			"y" + 
			"</button>" +
			"<button class='delete'>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
	$("input[name=textInput]").val('');
	}
	else {
		alert ("Please fill out the box to add items");
	}});

	
	//Add item when +-button is clicked	
	$("input[name=submit]").click(function(){
		var listItem = $("input[name=textInput]").val();
		if (listItem != ""){
		$(".textOutput").append(
			"<li>" + 
			"<span class='item'>" +
			listItem + 
			"</span>" +
			"<button class='check'>" + 
			"y" + 
			"</button>" +
			"<button class='delete'>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
	$("input[name=textInput]").val('');
	}
	else {
		alert ("Please fill out the box to add items");
	}});

	// Add item to my bag
	$("ul").on('click', '.check', (function(){
		item = $(this).parent();
		itemName = item.children(".item").html();
		$(".inmybag").append(
			"<li>" + 
			"<span class='item'>" +
			itemName + 
			"</span>" +
			"<button class='backup'>" + 
			"b" + 
			"</button>" +
			"<button class='delete'>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
		item.remove();
	}));


	// Move item back to buy
	$("ul").on('click', '.backup', (function(){
		bagItem = $(this).parent();
		bagItemName = bagItem.children(".item").html();
		$(".textOutput").append(
			"<li>" + 
			"<span class='item'>" +
			bagItemName + 
			"</span>" +
			"<button class='check'>" + 
			"y" + 
			"</button>" +
			"<button class='delete'>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
		bagItem.remove();
	}));

	//Remove item when x-button is clicked
	$('ul').on('click', '.delete', (function(e){ 
		$(this).parent().remove()
	}));



});

