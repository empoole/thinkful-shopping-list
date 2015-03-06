$(document).ready(function() {
	var totalPrice = 0;

	$('#add-item-reset').click(function(event) {
		event.preventDefault();
		resetAddItem();
	});

	$('#add-item-add').click(function(event) {
		event.preventDefault();
		var itemName = $('#item').val(),
			itemQuantity = parseInt($('#quantity').val(), 10),
			itemPrice = parseInt($('#price').val().replace(/\$|,/g,''), 10);
		var priceProduct = itemQuantity * itemPrice;
		//Make sure all values are appropriate
		if(isNaN(totalPrice)) {
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
		totalPrice += priceProduct;
		$('.total').text('Total: $' + totalPrice);
		resetAddItem();
	});

	$('.button-remove-item').click(function(event) {
		event.preventDefault();
		console.log("asdgasdg");
		$(this).parent().parent().remove();
	});
});


function resetAddItem() {
	$('#item').val("");
	$('#price').val("");
	$('#quantity').val("");
}