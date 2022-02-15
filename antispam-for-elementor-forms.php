<?php
/**
 * Plugin Name: Antispam for Elementor Forms
 * Plugin URI: https://github.com/
 * Description: Check contents of Elementor Forms for spam.
 * Version: 1.0
 * Requires at least: 5.2
 * Requires PHP: 7.4
 * Author: Tom Slominski
 * Author URI: https://slomin.ski/
 */

use AntispamForElementorForms\Plugin;

// Load main plugin file
require __DIR__ . '/includes/Plugin.php';

// Define root directory
const ASEF_PLUGIN_FILE = __FILE__;

/**
 * Utility function to retrieve main plugin class instance.
 *
 * @return Plugin
 */
function ASEF(): Plugin {
	return Plugin::get_instance();
}

// Instantiate plugin
add_action( 'plugins_loaded', 'ASEF' );

// Activation hooks
register_activation_hook( ASEF_PLUGIN_FILE, ['AntispamForElementorForms\Plugin', 'activation'] );
register_deactivation_hook( ASEF_PLUGIN_FILE, ['AntispamForElementorForms\Plugin', 'deactivation'] );
