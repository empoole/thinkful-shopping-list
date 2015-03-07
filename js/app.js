$(document).ready(function() {

	$('#add-item-reset').click(function(event) {
		event.preventDefault();
		resetAddItem();
	});

	$('#add-item-add').click(function(event) {
		event.preventDefault();
		var itemName = $('#item').val(),
			itemQuantity = parseInt($('#quantity').val(), 10),
			itemPrice = Math.floor(parseFloat($('#price').val().replace(/\$|,/g,''), 10) * 100) / 100;
		var priceProduct = itemQuantity * itemPrice;
		
		//Make sure all values are appropriate
		if(isNaN(priceProduct)) {
			alert("Please enter a valid number.");
			return;
		}

		//add the item to the list
		$('.list').append('<li>' +
					'<div class="shopping-list-item">' +
						'<p class="item-name">' + itemName + '</p>' +
						'<p class="item-quantity">x' + itemQuantity + '</p>' +
						'<button class="button-remove-item">X</button>' +
						'<p class="item-total-price">$' + priceProduct + '</p>' +
					'</div>' +
				'</li>');
		printTotal();
		resetAddItem();
	
		$('.button-remove-item').click(function(event) {
			event.preventDefault();
			$(this).parent().parent().remove();
			printTotal();
		});
	});
});


function resetAddItem() {
	$('#item').val("");
	$('#price').val("0");
	$('#quantity').val("0");
}

function printTotal() {
	var total = 0;
	$('.list').children().each(function() {
		console.log("Total pre-calculation: " + total);
		total += parseFloat($(this).find('.item-total-price').text().replace(/\$/g,''));
		console.log("Total post-calculation: " + total);
	});
	console.log("Total out: " + total);
	$('.total').text('Total: $' + total);
}