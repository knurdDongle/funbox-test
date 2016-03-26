import $ from 'jquery';

$(() => {
	const $card = $( '.card' );
	const $buyLink = $( '.link' );
	const $disabled = 'product_state_disabled';
	const $hovered = 'product_state_hovered';
	const $selected = 'product_state_selected';

	// Card hovering
	$card.hover(
		function (e) {
			const $product = $( this ).parents( '.product' );
			if ($product.hasClass( $disabled ) === false) {
				$product.addClass( $hovered );
				e.preventDefault();
			}
		},
		function (e) {
			$( this ).parents( '.product' ).removeClass( $hovered );
			e.preventDefault();
		}
	);

	// Card selecting
	$.fn.selectCard = function () {
		this.on('click', function (e) {
			const $product = $( this ).parents( '.product' );
			if ($product.hasClass( $disabled ) === false) {
				$product.toggleClass( $selected );
				$product.removeClass( $hovered );
				e.preventDefault();
			}
		});
	};

	// Card selecting by card
	$card.selectCard();

	// Card selecting by link
	$buyLink.selectCard();

});
