(function($) {

	"use strict";

/* ==========================================================================
   ieViewportFix - fixes viewport problem in IE 10 SnapMode and IE Mobile 10
   ========================================================================== */

	function ieViewportFix() {

		var msViewportStyle = document.createElement("style");

		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport { width: device-width; }"
			)
		);

		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

			msViewportStyle.appendChild(
				document.createTextNode(
					"@-ms-viewport { width: auto !important; }"
				)
			);
		}

		document.getElementsByTagName("head")[0].
			appendChild(msViewportStyle);

	}

/* ==========================================================================
   animatePieCharts
   ========================================================================== */

	function animatePieCharts() {

		if(typeof $.fn.easyPieChart != 'undefined'){

			$(".pie-chart:in-viewport").each(function() {

				var $t = $(this);

				$t.easyPieChart({
					animate: 1300,
					lineCap: "square",
					lineWidth: $t.attr("data-lineWidth"),
					size: $t.attr("data-barSize"),
					barColor: $t.attr("data-barColor"),
					trackColor: $t.attr("data-trackColor"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find('.pie-chart-percent span').text(Math.round(percent));
					}

				});

			});

		}

	}

/* ==========================================================================
   When document is ready, do
   ========================================================================== */

	$(document).ready(function() {
		// ieViewportFix();
		animatePieCharts();
	});

/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */

	$(window).scroll(function() {
		animatePieCharts();
	});

})(window.jQuery);

// non jQuery scripts below
