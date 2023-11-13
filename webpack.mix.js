let mix = require('laravel-mix');

mix
	.js('src/js/antispam-for-elementor-forms.js', 'js')
	.setPublicPath('assets');
