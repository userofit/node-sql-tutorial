"use strict";

module.exports.register = async server => {
   server.route( {
       method: "GET",
       path: "/api/customer",
       config: {
           handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate customer's ID
                   const custId = 10;

                   // execute the query
                   const res = await db.customers.getCustomer( custId );

                   // return the recordset object
                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   } );
};