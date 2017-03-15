
import $ from 'jquery';

class mobileMenu {
	constructor() {
		this.siteHeader = $('.header-section');
		this.menuIcon = $('.header-section__menu-icon');
		this.menuContent = $('.header-section__menu-content');
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass('header-section__menu-content--is-visible');
		this.siteHeader.toggleClass('header-section--is-expanded');
		this.menuIcon.toggleClass('header-section__menu-icon--close-x');
	}

}

export default mobileMenu;