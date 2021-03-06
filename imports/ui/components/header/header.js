import { Template } from 'meteor/templating';

import './header.html';

// Components used in the template


/**
 * TEMPLATE HELPERS
 */
Template.header.helpers({});

/**
 * TEMPLATE EVENTS
 */
Template.header.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.header.onCreated(function () {
    this.autorun(() => {});
});

Template.header.onRendered(function () {
    const templateInstance = this;

    templateInstance.$('.button-collapse').sideNav();
});

Template.header.onDestroyed(function () {});
