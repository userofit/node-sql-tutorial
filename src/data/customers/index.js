"use strict";

const utils = require( "../utils" );

const sql = require( "mssql" );

const register = async ( { sql, getConnection } ) => {
   // read in all the .sql files for this folder
   const sqlQueries = await utils.loadSqlQueries( "customers" );

   const getCustomer = async custId => {

       // get a connection to SQL Server
       const conn = await getConnection();

       // create a new request
       const request = await conn.request();

       // configure sql query parameters
       request.input( "custId", sql.VarChar( 50 ), custId );

       // return the executed query
       return request.query( sqlQueries.getCustomer );
   };

   return {
        getCustomer
   };
};

module.exports = { register };