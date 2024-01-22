=== Antispam for Elementor Forms ===
Contributors: madebygreyhound
Tags: elementor, forms, antispam, honeypot
Requires at least: 5.2
Tested up to: 6.4.1
Requires PHP: 8.0
Stable tag: 2.1.0
License: GPL v3
License URI: https://www.gnu.org/licenses/gpl-3.0.en.html

WordPress plugin for adding two methods of preventing spam submissions in Elementor Pro forms - automatic checks against the WordPress comment blocklist and a JavaScript-based honeypot field.

This plugin uses the WordPress comment blocklist from GitHub (https://github.com/splorp/wordpress-comment-blacklist). It is synced daily. Your server's IP address will be shared with GitHub when this happens.

== Installation ==
1) Install the plugin from the WordPress Plugin Directory.
2a) Checks against the comment blocklist are performed automatically, but further configuration can be done in Elementor -> Settings, in the Antispam for Elementor Forms tab.
2b) The JS Honeypot field must be manually added to forms which require it.

== Changelog ==
1.0.0
- First release

2.0.0
- JS Honeypot field added.

2.1.0
- Corrections in preparation for uploading the plugin to the WordPress Plugin Directory.
