document.querySelectorAll( '.elementor-form' ).forEach( form => {
    const fields = form.querySelectorAll( 'input, select, textarea' );

    fields.forEach( field => {
        field.addEventListener( 'focus', () => {
            if( 'true' !== form.dataset.hpFieldSet ) {
				const honeypot = form.querySelector( '.asef-js-hp-container' );
				
                honeypot.innerHTML = '<label for="asef-js-hp">' + honeypot.dataset.label + '</label><input type="hidden" name="asef-js-hp" id="asef-js-hp">';
                form.dataset.hpFieldSet = 'true';
            }
        } );
    } );
} );
