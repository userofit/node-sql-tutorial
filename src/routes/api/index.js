"use strict";

const customer = require( "./customer" );

module.exports.register = async server => {
   await customer.register( server );
};