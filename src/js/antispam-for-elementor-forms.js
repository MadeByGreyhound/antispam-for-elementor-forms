/**
 * Register honeypot events on form fields.
 * 
 * @param {HTMLFormElement} form
 */
function registerHoneypot( form ) {
	const honeypot = form.querySelector( '.asef-js-hp-container' );
	
	if( honeypot ) {
		const fields = form.querySelectorAll( 'input, select, textarea' );

		fields.forEach( field => {
			field.addEventListener( 'focus', () => {
				if( 'true' !== form.dataset.hpFieldSet ) {
					honeypot.innerHTML = `<label for="asef-js-hp">${honeypot.dataset.label}</label><input type="hidden" name="asef-js-hp" id="asef-js-hp" value="${Math.floor(Date.now() / 1000)}">`;
					form.dataset.hpFieldSet = 'true';
				}
			} );
		} );
	}
}

/**
 * Register event on all forms on load
 */
document.querySelectorAll( '.elementor-form' ).forEach( registerHoneypot );

/**
 * Register event on forms open in pop-ups
 */
jQuery( document ).on( 'elementor/popup/show', (event, id, instance) => {
	instance.$element[0].querySelectorAll( '.elementor-form' ).forEach( registerHoneypot );
} );

/**
 * Reset honeypot on form submission.
 */
jQuery( document ).ready( $ => {
	$( document ).on('submit_success', event => {
		const form = event.target;
		const honeypot = form.querySelector( '.asef-js-hp-container' );
		
		if( honeypot ) {
			delete form.dataset.hpFieldSet;
			honeypot.innerHTML = '';
		}
	} );
} );
