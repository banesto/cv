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
   setDimensionsPieCharts
   ========================================================================== */

	function setDimensionsPieCharts() {

		$(".pie-chart").each(function() {

			var $t = $(this);
			var n = $t.parent().width();
			var r = $t.attr("data-barSize");

			if (n < r) {
				r = n;
			}

			$t.css("height", r);
			$t.css("width", r);
			$t.css("line-height", r + "px");

			$t.find("i").css({
				"line-height": r + "px",
				"font-size": r / 3
			});

		});

	}

/* ==========================================================================
   animatePieCharts
   ========================================================================== */

	function animatePieCharts() {

		if(typeof $.fn.easyPieChart != 'undefined'){

			$(".pie-chart:in-viewport").each(function() {

				var $t = $(this);
				var n = $t.parent().width();
				var r = $t.attr("data-barSize");

				if (n < r) {
					r = n;
				}

				$t.easyPieChart({
					animate: 1300,
					lineCap: "square",
					lineWidth: $t.attr("data-lineWidth"),
					size: r,
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
		ieViewportFix();
		setDimensionsPieCharts();
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
