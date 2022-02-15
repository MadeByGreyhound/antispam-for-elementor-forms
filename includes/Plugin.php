<?php
namespace AntispamForElementorForms;

/**
 * Main plugin class.
 */
class Plugin {
	/**
	 * @var self|null Class instance.
	 */
	private static ?self $instance = null;

	/**
	 * @var Settings Settings object.
	 */
	public Settings $Settings;

	/**
	 * @var Block_List_Updater Updater object.
	 */
	public Block_List_Updater $Block_List_Updater;

	/**
	 * @var Elementor Elementor integration object.
	 */
	public Elementor $Elementor;

	/**
	 * Include other files and register hooks.
	 */
	public function __construct() {
		foreach( ['Settings', 'Block_List_Updater', 'Elementor'] as $class ) {
			require_once( plugin_dir_path( ASEF_PLUGIN_FILE ) . 'includes/' . $class . '.php' );
			$this->$class = ('AntispamForElementorForms\\' . $class)::get_instance();
		}
	}

	/**
	 * Run on plugin activation.
	 */
	public static function activation() {
		$now = new \DateTime();
		$time = (new \Datetime())->setTime( 3, 0, 0 );

		if( $time < $now ) {
			$time->add( new \DateInterval( 'P1D' ) );
		}

		wp_schedule_event( $time->format( 'U' ), 'daily', 'asef_cron' );
		wp_schedule_single_event( time(), 'asef_cron_init' );
	}

	/**
	 * Run on plugin deactivation.
	 */
	public static function deactivation() {
		wp_unschedule_event( wp_next_scheduled( 'asef_cron' ), 'asef_cron' );
	}

	/**
	 * Get class instance.
	 *
	 * @return self
	 */
	public static function get_instance(): self {
		if( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}
