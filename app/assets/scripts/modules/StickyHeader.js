import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.siteHeader = $(".header-section");
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();
		this.pageSections = $('.page-section');
		this.createPageSectionWaypoints();
		this.headerLinks = $('.primary-nav a');
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.load(function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function() {
				that.siteHeader.addClass('header-section--dark');
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
				var matchingHeaderLink = currentPageSection.getAttribute("data-link");
				that.headerLinks.removeClass("is-current-link");
				$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "20%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
				var matchingHeaderLink = currentPageSection.getAttribute("data-link");
				that.headerLinks.removeClass("is-current-link");
				$(matchingHeaderLink).addClass("is-current-link");
					}
					
				},
				offset: "-40%"
			});

		});
	}

}

export default StickyHeader;