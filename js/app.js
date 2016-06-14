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
	$("input[name=submit]").click(function(){
		var listItem = $("input[name=textInput]").val();
		$(".textOutput").append(
			"<li>" + 
			"<span class='item'>" +
			listItem + 
			"</span>" +
			"<button class='check'>" + 
			"&#10003" + 
			"</button>" +
			"<button class='delete'>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
		$("input[name=textInput]").val('');
	});

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
			"&#10003" + 
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
			"&#10003" + 
			"</button>" +
			"<button class='delete'>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
		bagItem.remove();
	}));



});


	/*
	//Remove item when x-button is clicked
	$('ul').on('click', 'button', (function(e){ 
		if($(e.target).hasClass('delete')){
			$(this).parent().remove()
		}
	//Change li class to complete when check is clicked
	//and move to In my Bag list
		else if($(e.target).hasClass('check')){
			$(this).parent().toggleClass('complete')
			.appendTo(".inmybag")
			$(this).removeClass('check')
			$(this).addClass('up')
			$(this).text("⇧")
		}
	}));
	



function back(){
	//Move item back to Buy list when Up Arrow is clicked
	$('ul').on('click', 'button', (function(e){
		if($(e.target).hasClass('up')){
			$(this).parent().appendTo('.textOutput')
			$(this).text('✓')
			$(this).removeClass('up')
			$(this).addClass('check2')
		}
	}));
}

/*
function again(){
	//Move item down to Bag list when check is clicked again
	$('ul').on('click', 'button', (function(e){
		if($(e.target).hasClass('check3')){
			$(this).parent().appendTo('.inmybag')
			$(this).text('✓')
			$(this).removeClass('check2')
			$(this).addClass('check3')
		}
	}));
}







/*
$("li:eq(1)").click(function(){
		alert ("text");
	});
$("ul").on("click", "button:eq(1)", (function(){
		$("li:eq(0)").remove()
	}));




	$("input[name=add]").click(function(){
		var listItem = $("input[name=textInput]").val();
		$(".textOutput").append(
			"<li>" + 
			listItem + 
			"<button class='delete'>" + 
			"&#10003" + 
			"</button>" +
			"<button>" + 
			"x" + 
			"</button>" +
			"</li>"
			);
		$("input[name=textInput]").val('');
	});
	$("ul").on("click", "button", (function(){
		$(this).parent().remove()
	}));

*/