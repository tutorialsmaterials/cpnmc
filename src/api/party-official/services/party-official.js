'use strict';

/**
 * party-official service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::party-official.party-official');
