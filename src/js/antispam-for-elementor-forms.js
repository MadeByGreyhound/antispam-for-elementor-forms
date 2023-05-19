document.querySelectorAll( '.elementor-form' ).forEach( form => {
    const fields = form.querySelectorAll( 'input, select, textarea' );

    fields.forEach( field => {
        field.addEventListener( 'focus', () => {
            if( 'true' !== form.dataset.hpFieldSet ) {
                form.querySelector( '.asef-js-hp-container' ).innerHTML = '<label for="asef-js-hp">Leave this field blank.</label><input type="hidden" name="asef-js-hp" id="asef-js-hp">';
                form.dataset.hpFieldSet = 'true';
            }
        } );
    } );
} );
