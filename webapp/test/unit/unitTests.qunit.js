/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sohail9744/demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
