import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class onScroll {
	constructor() {
		this.itemsToReveal = $('.col-image, .generic-content-container');
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint ({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: "65%"
			});
		});
	}
}


export default onScroll;